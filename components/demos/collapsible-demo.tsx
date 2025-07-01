import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  return (
    <Collapsible className="space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @michaldudak starred 3 repositories
        </h4>
        <Button
          variant="ghost"
          size="sm"
          render={
            <CollapsibleTrigger>
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </CollapsibleTrigger>
          }
        />
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @base-ui-components/react
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @shadcn-ui/ui
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @tailwindlabs/tailwindcss
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
