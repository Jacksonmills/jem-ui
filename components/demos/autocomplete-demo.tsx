"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import {
  Autocomplete,
  AutocompleteTrigger,
  AutocompleteInput,
  AutocompleteContent,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
} from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
    category: "React",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
    category: "Svelte",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    category: "Vue",
  },
  {
    value: "remix",
    label: "Remix",
    category: "React",
  },
  {
    value: "astro",
    label: "Astro",
    category: "Multi-framework",
  },
  {
    value: "vite",
    label: "Vite",
    category: "Build Tool",
  },
  {
    value: "gatsby",
    label: "Gatsby",
    category: "React",
  },
  {
    value: "vue.js",
    label: "Vue.js",
    category: "Vue",
  },
  {
    value: "angular",
    label: "Angular",
    category: "Angular",
  },
  {
    value: "express",
    label: "Express.js",
    category: "Node.js",
  },
];

export function AutocompleteDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const filteredFrameworks = React.useMemo(() => {
    if (!inputValue) return frameworks;
    return frameworks.filter((framework) =>
      framework.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue]);

  const groupedFrameworks = React.useMemo(() => {
    const groups: Record<string, typeof frameworks> = {};
    filteredFrameworks.forEach((framework) => {
      if (!groups[framework.category]) {
        groups[framework.category] = [];
      }
      groups[framework.category].push(framework);
    });
    return groups;
  }, [filteredFrameworks]);

  const selectedFramework = frameworks.find((framework) => framework.value === value);

  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground">Framework</p>
      <Autocomplete open={open} onOpenChange={setOpen}>
        <AutocompleteTrigger
          render={
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[250px] justify-between"
              onClick={() => setOpen(!open)}
            >
              {selectedFramework ? selectedFramework.label : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          }
        />
        <AutocompleteContent className="w-[250px] p-0">
          <div className="border-b p-2">
            <AutocompleteInput
              placeholder="Search frameworks..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border-0 shadow-none focus-visible:ring-0"
            />
          </div>
          <AutocompleteList>
            {Object.keys(groupedFrameworks).length === 0 ? (
              <AutocompleteEmpty>No framework found.</AutocompleteEmpty>
            ) : (
              Object.entries(groupedFrameworks).map(([category, items]) => (
                <AutocompleteGroup key={category}>
                  <AutocompleteGroupLabel>{category}</AutocompleteGroupLabel>
                  {items.map((framework) => (
                    <AutocompleteItem
                      key={framework.value}
                      selected={value === framework.value}
                      onSelect={() => {
                        setValue(value === framework.value ? "" : framework.value);
                        setInputValue("");
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          value === framework.value ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {framework.label}
                    </AutocompleteItem>
                  ))}
                </AutocompleteGroup>
              ))
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  );
}