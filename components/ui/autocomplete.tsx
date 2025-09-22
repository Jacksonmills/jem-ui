"use client";

import { Input } from "@base-ui-components/react/input";
import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover";
import { ScrollArea } from "@base-ui-components/react/scroll-area";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Autocomplete({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="autocomplete" {...props} />;
}

function AutocompleteTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return (
    <PopoverPrimitive.Trigger
      data-slot="autocomplete-trigger"
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </PopoverPrimitive.Trigger>
  );
}

function AutocompleteInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <div className="relative">
      <Input
        data-slot="autocomplete-input"
        className={cn(
          "pr-8", // Make room for chevron
          className,
        )}
        {...props}
      />
      <ChevronDownIcon className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50 pointer-events-none" />
    </div>
  );
}

function AutocompleteContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Popup> & {
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner align={align} sideOffset={sideOffset}>
        <PopoverPrimitive.Popup
          data-slot="autocomplete-content"
          className={cn(
            "bg-popover text-popover-foreground relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md [max-height:var(--available-height)] origin-[var(--transform-origin)] transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className,
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

function AutocompleteList({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ScrollArea.Root>
      <ScrollArea.Viewport>
        <div
          data-slot="autocomplete-list"
          className={cn("max-h-[200px] p-1", className)}
          {...props}
        >
          {children}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className="m-2 flex w-1 justify-center rounded bg-muted opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75">
        <ScrollArea.Thumb className="w-full rounded bg-muted-foreground" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

function AutocompleteItem({
  className,
  children,
  selected = false,
  onSelect,
  ...props
}: React.ComponentProps<"div"> & {
  selected?: boolean;
  onSelect?: () => void;
}) {
  return (
    <div
      data-slot="autocomplete-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      role="option"
      aria-selected={selected}
      onClick={onSelect}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        {selected && <CheckIcon className="size-4" />}
      </span>
      {children}
    </div>
  );
}

function AutocompleteEmpty({
  className,
  children = "No results found",
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode;
}) {
  return (
    <div
      data-slot="autocomplete-empty"
      className={cn("py-6 text-center text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function AutocompleteGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="autocomplete-group"
      className={cn("overflow-hidden", className)}
      {...props}
    />
  );
}

function AutocompleteGroupLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="autocomplete-group-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs font-medium", className)}
      {...props}
    />
  );
}

export {
  Autocomplete,
  AutocompleteTrigger,
  AutocompleteInput,
  AutocompleteContent,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
};