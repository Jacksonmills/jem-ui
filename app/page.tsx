import { ComboboxDemo } from "@/components/demos/combobox-demo";
import { ComboboxPopover } from "@/components/demos/popover-combobox-demo";
import { Sink } from "@/components/demos/sink";
import { TextLink } from "@/components/text-link";
import * as React from "react";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-8">
      <Sink />
    </main>
  );
}
