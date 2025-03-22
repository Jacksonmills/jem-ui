import * as React from "react";
import { Demo } from "@/components/demo";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">jem/ui</h1>
        <p className="text-muted-foreground">
          A shadcn based custom registry for using base-ui components.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              DEMO
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <Demo />
          </div>
        </div>
      </main>
    </div>
  );
}
