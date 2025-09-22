"use client";

import * as React from "react";

import {
  Autocomplete,
  AutocompleteInput,
  AutocompletePopup,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
} from "@/components/ui/autocomplete";

interface Framework {
  value: string;
  label: string;
  category: string;
}

const frameworks: Framework[] = [
  {
    value: "next.js",
    label: "Next.js",
    category: "React",
  },
  {
    value: "remix",
    label: "Remix",
    category: "React",
  },
  {
    value: "gatsby",
    label: "Gatsby",
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
    value: "vue.js",
    label: "Vue.js",
    category: "Vue",
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

// Group frameworks by category
const groupedFrameworks = frameworks.reduce((groups, framework) => {
  const category = framework.category;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(framework);
  return groups;
}, {} as Record<string, Framework[]>);

export function AutocompleteDemo() {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground">Framework</p>
      <Autocomplete
        items={frameworks}
        itemToStringValue={(item: Framework) => item.label}
        placeholder="Select framework..."
        className="w-[250px]"
      >
        <AutocompleteInput placeholder="Search frameworks..." />
        <AutocompletePopup className="w-[250px]">
          <AutocompleteList>
            <AutocompleteEmpty>No framework found.</AutocompleteEmpty>
            {Object.entries(groupedFrameworks).map(([category, items]) => (
              <AutocompleteGroup key={category}>
                <AutocompleteGroupLabel>{category}</AutocompleteGroupLabel>
                {items.map((framework) => (
                  <AutocompleteItem key={framework.value} value={framework}>
                    {framework.label}
                  </AutocompleteItem>
                ))}
              </AutocompleteGroup>
            ))}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}