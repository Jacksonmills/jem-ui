"use client";

import { ChevronsUpDown, XIcon } from "lucide-react";
import * as React from "react";
import {
  Combobox,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
} from "@/components/ui/combobox";
import { ComboboxMultipleDemo } from "./combobox-multiple-demo";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function ComboboxDemo() {
  const id = React.useId();
  const items = frameworks.map((f) => f.label);
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col gap-8">
      <Combobox items={items}>
        <div className="relative flex flex-col gap-1 text-sm leading-5 font-medium ">
          <label htmlFor={id}>Choose a framework</label>
          <div className="relative w-fit">
            <ComboboxInput
              id={id}
              placeholder="Search framework..."
              className="h-9 w-[200px]"
            />
            <div className="absolute right-1 top-0 flex h-9 items-center gap-1">
              <ComboboxClear
                className="flex size-5 items-center justify-center rounded bg-transparent p-0"
                aria-label="Clear selection"
              >
                <XIcon className="opacity-50 size-4" />
              </ComboboxClear>
              <ComboboxTrigger
                className="flex size-5 items-center justify-center rounded bg-transparent p-0"
                aria-label="Toggle"
              >
                <ChevronsUpDown className="opacity-50 size-4" />
              </ComboboxTrigger>
            </div>
          </div>

          <ComboboxPopup>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem
                  key={item}
                  value={item}
                  onClick={() => setValue(item === value ? "" : item)}
                >
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </div>
      </Combobox>

      <ComboboxMultipleDemo />
    </div>
  );
}
