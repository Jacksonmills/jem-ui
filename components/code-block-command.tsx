"use client";

import * as React from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";

export function CodeBlockCommand({
  component
}: {
  component: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const [hasCopied, setHasCopied] = React.useState(false);
  const [packageManager, setPackageManager] = React.useState<"pnpm" | "npm" | "yarn" | "bun">("pnpm");

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const tabs = React.useMemo(() => {
    return {
      pnpm: `pnpm dlx shacn@latest add ${siteUrl}/ui/${component}`,
      npm: `npx shacn@latest add ${siteUrl}/ui/${component}`,
      yarn: `npx shacn@latest add ${siteUrl}/ui/${component}`,
      bun: `bunx --bun shacn@latest add ${siteUrl}/ui/${component}`,
    };
  }, [component]);

  const copyCommand = React.useCallback(() => {
    const command: string = tabs[packageManager];

    if (!command) {
      return;
    }

    navigator.clipboard.writeText(command);
    setHasCopied(true);
  }, [packageManager, tabs]);

  return (
    <div className="relative mt-6 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 dark:bg-zinc-900">
      <Tabs
        value={packageManager}
        onValueChange={(value) => setPackageManager(value as "pnpm" | "npm" | "yarn" | "bun")}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3 pt-2.5">
          <TabsList className="h-7 translate-y-[2px] gap-3 bg-transparent p-0 pl-1">
            {Object.entries(tabs).map(([key, value]) => {
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-none border-b border-transparent bg-transparent p-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50"
                >
                  {key}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        {Object.entries(tabs).map(([key, value]) => {
          return (
            <TabsContent key={key} value={key} className="mt-0">
              <pre className="px-4 py-5">
                <code
                  className="relative font-mono text-sm leading-none text-background"
                  data-language="bash"
                >
                  {value}
                </code>
              </pre>
            </TabsContent>
          );
        })}
      </Tabs>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2.5 top-2 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3"
        onClick={copyCommand}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
      </Button>
    </div>
  );
}