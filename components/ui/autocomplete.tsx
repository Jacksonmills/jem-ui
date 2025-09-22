"use client";

import { Autocomplete as AutocompletePrimitive } from "@base-ui-components/react/autocomplete";
import { CheckIcon, SearchIcon } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Autocomplete<T>({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Root<T>>) {
  return <AutocompletePrimitive.Root data-slot="autocomplete" className={className} {...props} />;
}

function AutocompleteTrigger({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Trigger>) {
  return (
    <AutocompletePrimitive.Trigger
      data-slot="autocomplete-trigger"
      className={cn("w-full", className)}
      {...props}
    />
  );
}

function AutocompleteInput({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Input>) {
  return (
    <div className="flex items-center border-b px-3" data-slot="autocomplete-input-wrapper">
      <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <AutocompletePrimitive.Input
        data-slot="autocomplete-input"
        className={cn(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function AutocompletePortal({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Portal>) {
  return <AutocompletePrimitive.Portal {...props} />;
}

function AutocompletePositioner({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Positioner> & {
  sideOffset?: number;
}) {
  return (
    <AutocompletePrimitive.Positioner
      data-slot="autocomplete-positioner"
      sideOffset={sideOffset}
      className={className}
      {...props}
    />
  );
}

function AutocompletePopup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Popup>) {
  return (
    <AutocompletePortal>
      <AutocompletePositioner>
        <AutocompletePrimitive.Popup
          data-slot="autocomplete-popup"
          className={cn(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
          )}
          {...props}
        >
          {children}
        </AutocompletePrimitive.Popup>
      </AutocompletePositioner>
    </AutocompletePortal>
  );
}

function AutocompleteList({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.List>) {
  return (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
      {...props}
    />
  );
}

function AutocompleteEmpty({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Empty>) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn("py-6 text-center text-sm", className)}
      {...props}
    />
  );
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
      className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", className)}
      {...props}
    />
  );
}

function AutocompleteItem({
  className,
  children,
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
    >
      {children}
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <CheckIcon className="h-4 w-4 opacity-0 data-[highlighted]:opacity-100" />
      </span>
    </AutocompletePrimitive.Item>
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
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteItem,
  AutocompleteSeparator,
};