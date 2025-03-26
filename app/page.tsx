import { Sink } from "@/components/demos/sink";
import { TextLink } from "@/components/text-link";
import * as React from "react";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">JEM/UI</h1>
        <p className="text-muted-foreground">
          A custom component registry built with{" "}
          <TextLink href="https://base-ui.com/">Base UI</TextLink> primitives
          and powered by{" "}
          <TextLink href="https://ui.shadcn.com/">shadcn</TextLink>.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <Sink />
      </main>
    </div>
  );
}
