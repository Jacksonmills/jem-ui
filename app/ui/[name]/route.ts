import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { registryItemSchema } from "shadcn/registry";

// This route shows an example for serving a component using a route handler.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  try {
    const { name } = await params;
    // Cache the registry import
    const registryData = await import("@/registry.json");
    const registry = registryData.default;

    // Find the component from the registry.
    const component = registry.items.find((c) => c.name === name);
    const resolvedRegistryDependencies = component?.registryDependencies?.map(
      (dep) => {
        return `${siteUrl}/ui/${dep}`;
      },
    );

    // If the component is not found, return a 404 error.
    if (!component) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 },
      );
    }

    // Validate before file operations.
    const registryItem = registryItemSchema.parse({
      ...component,
      registryDependencies: resolvedRegistryDependencies || [],
    });

    // If the component has no files, return a 400 error.
    if (!registryItem.files?.length) {
      return NextResponse.json(
        { error: "Component has no files" },
        { status: 400 },
      );
    }

    // Read all files in parallel.
    const filesWithContent = await Promise.all(
      registryItem.files.map(async (file) => {
        const filePath = path.join(process.cwd(), file.path);
        const content = await fs.readFile(filePath, "utf8");
        return { ...file, content };
      }),
    );

    // Return the component with the files.
    return NextResponse.json({ ...registryItem, files: filesWithContent });
  } catch (error) {
    console.error("Error processing component request:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
