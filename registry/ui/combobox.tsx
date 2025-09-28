"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui-components/react/combobox";
import { CheckIcon, XIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { ScrollArea } from "./scroll-area";

function Combobox({
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Root>) {
  return <ComboboxPrimitive.Root data-slot="combobox" {...props} />;
}

function ComboboxTrigger({
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Trigger>) {
  return <ComboboxPrimitive.Trigger data-slot="combobox-trigger" {...props} />;
}

function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Input>) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      render={<Input className={cn(className)} />}
      {...props}
    />
  );
}

function ComboboxClear({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Clear>) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded bg-transparent p-0",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxValue({
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Value>) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

function ComboboxPopup({
  className,
  sideOffset = 8,
  anchor,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Popup> & {
  sideOffset?: ComboboxPrimitive.Positioner.Props["sideOffset"];
  anchor?: ComboboxPrimitive.Positioner.Props["anchor"];
}) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner sideOffset={sideOffset} anchor={anchor}>
        <ScrollArea className="data-starting-style:fade-out-0 data-starting-style:fade-in-0 data-ending-style:zoom-out-95 data-ending-style:zoom-in-95 p-1 w-(--anchor-width) max-w-(--available-width) scroll-pt-2 scroll-pb-2 rounded-md bg-popover text-popover-foreground origin-(--transform-origin) border">
          <ComboboxPrimitive.Popup
            data-slot="combobox-popup"
            className={cn(
              "data-starting-style:fade-out-0 data-starting-style:fade-in-0 data-ending-style:zoom-out-95 data-ending-style:zoom-in-95 max-h-[min(var(--available-height),23rem)] max-w-(--available-width) origin-(--transform-origin) scroll-pt-2 scroll-pb-2",
              className,
            )}
            {...props}
          />
        </ScrollArea>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxList({
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.List>) {
  return <ComboboxPrimitive.List data-slot="combobox-list" {...props} />;
}

function ComboboxEmpty({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Empty>) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "px-4 py-2 text-[0.925rem] leading-4 text-muted-foreground empty:m-0 empty:p-0 text-center",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxCollection({
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Collection>) {
  return <ComboboxPrimitive.Collection {...props} />;
}

function ComboboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Group>) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn("overflow-hidden p-1 text-foreground", className)}
      {...props}
    />
  );
}

function ComboboxGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-group-label"
      className={cn(
        "px-2 py-1.5 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Item>) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "group relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-muted-foreground",
        className,
      )}
      {...props}
    >
      <ComboboxItemIndicator className="col-start-1">
        <CheckIcon className="size-3 group-data-[selected]:opacity-100 opacity-0" />
      </ComboboxItemIndicator>
      <div className="col-start-2">{children}</div>
    </ComboboxPrimitive.Item>
  );
}

function ComboboxItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.ItemIndicator>) {
  return (
    <ComboboxPrimitive.ItemIndicator
      data-slot="combobox-item-indicator"
      className={cn("col-start-1", className)}
      {...props}
    />
  );
}

function ComboboxSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Separator>) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Chips>) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        "min-h-9 flex flex-wrap items-center gap-1 rounded-md transition-[color,box-shadow] py-1 px-3 border-input border bg-input/30 shadow-xs",
        "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxChip({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Chip>) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "flex items-center gap-1 rounded-md bg-border px-1 ps-2 pe-0 text-xs outline-none cursor-default p-1 pl-2 h-full",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxChipRemove({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.ChipRemove>) {
  return (
    <ComboboxPrimitive.ChipRemove
      data-slot="combobox-chip-remove"
      className={cn(
        "rounded-md p-1 text-inherit hover:bg-accent-foreground/10",
        className,
      )}
      aria-label="Remove"
      {...props}
    >
      {children ?? <XIcon className="size-2" />}
    </ComboboxPrimitive.ChipRemove>
  );
}

export {
  Combobox,
  ComboboxTrigger,
  ComboboxInput,
  ComboboxPopup,
  ComboboxList,
  ComboboxEmpty,
  ComboboxCollection,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxItem,
  ComboboxSeparator,
  ComboboxClear,
  ComboboxItemIndicator,
  ComboboxValue,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipRemove,
};
