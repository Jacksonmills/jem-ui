"use client";

import { Autocomplete as AutocompletePrimitive } from "@base-ui-components/react/autocomplete";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { ScrollArea } from "./scroll-area";

function Autocomplete({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Root>) {
  return <AutocompletePrimitive.Root data-slot="autocomplete" {...props} />;
}

function AutocompleteTrigger({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Trigger>) {
  return (
    <AutocompletePrimitive.Trigger
      data-slot="autocomplete-trigger"
      {...props}
    />
  );
}

function AutocompleteInput({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Input>) {
  return (
    <AutocompletePrimitive.Input
      data-slot="autocomplete-input"
      render={<Input />}
      {...props}
    />
  );
}

function AutocompletePortal({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Portal>) {
  return <AutocompletePrimitive.Portal {...props} />;
}

function AutocompletePositioner({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Positioner>) {
  return (
    <AutocompletePrimitive.Positioner
      data-slot="autocomplete-positioner"
      className={className}
      {...props}
    />
  );
}

function AutocompletePopup({
  className,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Popup> & {
  sideOffset?: AutocompletePrimitive.Positioner.Props["sideOffset"];
}) {
  return (
    <AutocompletePortal>
      <AutocompletePositioner sideOffset={sideOffset}>
        <AutocompletePrimitive.Popup
          data-slot="autocomplete-popup"
          className={cn(
            "data-starting-style:fade-out-0 data-starting-style:fade-in-0 data-ending-style:zoom-out-95 data-ending-style:zoom-in-95 p-1 w-(--anchor-width) max-h-[min(var(--available-height),23rem)] max-w-(--available-width) overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-popover text-popover-foreground",
            className,
          )}
          {...props}
        />
      </AutocompletePositioner>
    </AutocompletePortal>
  );
}

function AutocompleteList({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.List>) {
  return (
    <ScrollArea>
      <AutocompletePrimitive.List
        data-slot="autocomplete-list"
        className={cn("max-h-[300px]", className)}
        {...props}
      />
    </ScrollArea>
  );
}

function AutocompleteEmpty({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Empty>) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn(
        "px-4 py-6 empty:m-0 empty:p-0 text-center text-sm",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteCollection({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Collection>) {
  return <AutocompletePrimitive.Collection {...props} />;
}

function AutocompleteGroup({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Group>) {
  return (
    <AutocompletePrimitive.Group
      data-slot="autocomplete-group"
      className={cn("overflow-hidden p-1 text-foreground", className)}
      {...props}
    />
  );
}

function AutocompleteGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.GroupLabel>) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot="autocomplete-group-label"
      className={cn(
        "px-2 py-1.5 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteItem({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Item>) {
  return (
    <AutocompletePrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteSeparator({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Separator>) {
  return (
    <AutocompletePrimitive.Separator
      data-slot="autocomplete-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

export {
  Autocomplete,
  AutocompleteTrigger,
  AutocompleteInput,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteList,
  AutocompleteEmpty,
  AutocompleteCollection,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteItem,
  AutocompleteSeparator,
};
