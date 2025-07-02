import * as React from "react";
import { DemoCard } from "../demo-card";
import { AccordionDemo } from "./accordion-demo";
import { AlertDialogDemo } from "./alert-dialog-demo";
import { AspectRatioDemo } from "./aspect-ratio-demo";
import { AvatarDemo } from "./avatar-demo";
import { BadgeDemo } from "./badge-demo";
import { BreadcrumbDemo } from "./breadcrumb-demo";
import { ButtonDemo } from "./button-demo";
import { CalendarDemo } from "./calendar-demo";
import { CheckboxDemo } from "./checkbox-demo";
import { CollapsibleDemo } from "./collapsible-demo";
import { CommandDialogDemo } from "./command-dialog-demo";
import { ContextMenuDemo } from "./context-menu-demo";
import { DialogDemo } from "./dialog-demo";
import { DropdownMenuDemo } from "./dropdown-menu-demo";
import { HoverCardDemo } from "./hover-card-demo";
import { InputDemo } from "./input-demo";
import { MenubarDemo } from "./menubar-demo";
import { NavigationMenuDemo } from "./navigation-menu-demo";
import { PopoverDemo } from "./popover-demo";
import { ProgressDemo } from "./progress-demo";
import { RadioGroupDemo } from "./radio-group-demo";
import { ScrollAreaDemo } from "./scroll-area-demo";
import { SelectDemo } from "./select-demo";
import { SheetDemo } from "./sheet-demo";
import { SliderDemo } from "./slider-demo";
import { SwitchDemo } from "./switch-demo";
import { TabsDemo } from "./tabs-demo";
import { ToggleDemo } from "./toggle-demo";
import { ToggleGroupDemo } from "./toggle-group-demo";
import { TooltipDemo } from "./tooltip-demo";

interface Data {
  displayName: string;
  slug: string;
  children: React.ReactNode;
  links?: { href: string; label: string }[];
  description?: string;
}

const data: Data[] = [
  {
    displayName: "Accordion",
    slug: "accordion",
    links: [
      { href: "https://base-ui.com/react/components/accordion", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/accordion#api-reference",
        label: "API Reference",
      },
    ],
    children: <AccordionDemo />,
  },
  {
    displayName: "Alert Dialog",
    slug: "alert-dialog",
    links: [
      {
        href: "https://base-ui.com/react/components/alert-dialog",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/alert-dialog#api-reference",
        label: "API Reference",
      },
    ],
    children: <AlertDialogDemo />,
  },
  {
    displayName: "Aspect Ratio",
    slug: "aspect-ratio",
    links: [
      {
        href: "https://base-ui.com/react/components/aspect-ratio",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/aspect-ratio#api-reference",
        label: "API Reference",
      },
    ],
    children: <AspectRatioDemo />,
  },
  {
    displayName: "Avatar",
    slug: "avatar",
    links: [
      { href: "https://base-ui.com/react/components/avatar", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/avatar#api-reference",
        label: "API Reference",
      },
    ],
    children: <AvatarDemo />,
  },
  {
    displayName: "Badge",
    slug: "badge",
    links: [
      { href: "https://base-ui.com/react/components/badge", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/badge#api-reference",
        label: "API Reference",
      },
    ],
    children: <BadgeDemo />,
  },
  {
    displayName: "Breadcrumb",
    slug: "breadcrumb",
    links: [
      { href: "https://base-ui.com/react/utils/use-render", label: "Docs" },
    ],
    children: <BreadcrumbDemo />,
  },
  {
    displayName: "Button",
    slug: "button",
    links: [
      { href: "https://base-ui.com/react/components/button", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/button#api-reference",
        label: "API Reference",
      },
    ],
    children: <ButtonDemo />,
  },
  {
    displayName: "Calendar",
    slug: "calendar",
    links: [
      { href: "https://base-ui.com/react/components/calendar", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/calendar#api-reference",
        label: "API Reference",
      },
    ],
    children: <CalendarDemo />,
  },
  {
    displayName: "Checkbox",
    slug: "checkbox",
    links: [
      { href: "https://base-ui.com/react/components/checkbox", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/checkbox#api-reference",
        label: "API Reference",
      },
    ],
    children: <CheckboxDemo />,
  },
  {
    displayName: "Collapsible",
    slug: "collapsible",
    links: [
      {
        href: "https://base-ui.com/react/components/collapsible",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/collapsible#api-reference",
        label: "API Reference",
      },
    ],
    children: <CollapsibleDemo />,
  },
  {
    displayName: "Command Dialog",
    slug: "command-dialog",
    links: [
      { href: "https://cmdk.paco.me/", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/scroll-area",
        label: "Scroll Area",
      },
    ],
    children: <CommandDialogDemo />,
  },
  {
    displayName: "Context Menu",
    slug: "context-menu",
    links: [
      {
        href: "https://base-ui.com/react/components/context-menu",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/context-menu#api-reference",
        label: "API Reference",
      },
    ],
    children: <ContextMenuDemo />,
  },
  {
    displayName: "Dialog",
    slug: "dialog",
    links: [
      { href: "https://base-ui.com/react/components/dialog", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/dialog#api-reference",
        label: "API Reference",
      },
    ],
    children: <DialogDemo />,
  },
  {
    displayName: "Dropdown Menu",
    slug: "dropdown-menu",
    links: [
      {
        href: "https://base-ui.com/react/components/dropdown-menu",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/dropdown-menu#api-reference",
        label: "API Reference",
      },
    ],
    children: <DropdownMenuDemo />,
  },
  {
    displayName: "Hover Card",
    slug: "hover-card",
    links: [
      {
        href: "https://base-ui.com/react/components/preview-card",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/preview-card#api-reference",
        label: "API Reference",
      },
    ],
    children: <HoverCardDemo />,
  },
  {
    displayName: "Input",
    slug: "input",
    links: [
      { href: "https://base-ui.com/react/components/input", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/input#api-reference",
        label: "API Reference",
      },
    ],
    children: <InputDemo />,
  },
  {
    displayName: "Menubar",
    slug: "menubar",
    description:
      "The Menubar is built using a composition of the Base UI Menu and Toolbar components.",
    links: [
      { href: "https://base-ui.com/react/components/menu", label: "Menu Docs" },
      {
        href: "https://base-ui.com/react/components/toolbar",
        label: "Toolbar Docs",
      },
    ],
    children: <MenubarDemo />,
  },
  {
    displayName: "Navigation Menu",
    slug: "navigation-menu",
    links: [
      {
        href: "https://base-ui.com/react/components/navigation-menu",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/navigation-menu#api-reference",
        label: "API Reference",
      },
    ],
    children: <NavigationMenuDemo />,
  },
  {
    displayName: "Popover",
    slug: "popover",
    links: [
      { href: "https://base-ui.com/react/components/popover", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/popover#api-reference",
        label: "API Reference",
      },
    ],
    children: <PopoverDemo />,
  },
  {
    displayName: "Progress",
    slug: "progress",
    links: [
      { href: "https://base-ui.com/react/components/progress", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/progress#api-reference",
        label: "API Reference",
      },
    ],
    children: <ProgressDemo />,
  },
  {
    displayName: "Radio Group",
    slug: "radio-group",
    links: [
      {
        href: "https://base-ui.com/react/components/radio-group",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/radio-group#api-reference",
        label: "API Reference",
      },
    ],
    children: <RadioGroupDemo />,
  },
  {
    displayName: "Scroll Area",
    slug: "scroll-area",
    links: [
      {
        href: "https://base-ui.com/react/components/scroll-area",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/scroll-area#api-reference",
        label: "API Reference",
      },
    ],
    children: <ScrollAreaDemo />,
  },
  {
    displayName: "Select",
    slug: "select",
    links: [
      { href: "https://base-ui.com/react/components/select", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/select#api-reference",
        label: "API Reference",
      },
    ],
    children: <SelectDemo />,
  },
  {
    displayName: "Sheet",
    slug: "sheet",
    links: [
      { href: "https://base-ui.com/react/components/sheet", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/sheet#api-reference",
        label: "API Reference",
      },
    ],
    children: <SheetDemo />,
  },
  {
    displayName: "Slider",
    slug: "slider",
    links: [
      { href: "https://base-ui.com/react/components/slider", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/slider#api-reference",
        label: "API Reference",
      },
    ],
    children: <SliderDemo />,
  },
  {
    displayName: "Switch",
    slug: "switch",
    links: [
      { href: "https://base-ui.com/react/components/switch", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/switch#api-reference",
        label: "API Reference",
      },
    ],
    children: <SwitchDemo />,
  },
  {
    displayName: "Tabs",
    slug: "tabs",
    links: [
      { href: "https://base-ui.com/react/components/tabs", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/tabs#api-reference",
        label: "API Reference",
      },
    ],
    children: <TabsDemo />,
  },
  {
    displayName: "Toggle",
    slug: "toggle",
    links: [
      { href: "https://base-ui.com/react/components/toggle", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/toggle#api-reference",
        label: "API Reference",
      },
    ],
    children: <ToggleDemo />,
  },
  {
    displayName: "Toggle Group",
    slug: "toggle-group",
    links: [
      {
        href: "https://base-ui.com/react/components/toggle-group",
        label: "Docs",
      },
      {
        href: "https://base-ui.com/react/components/toggle-group#api-reference",
        label: "API Reference",
      },
    ],
    children: <ToggleGroupDemo />,
  },
  {
    displayName: "Tooltip",
    slug: "tooltip",
    links: [
      { href: "https://base-ui.com/react/components/tooltip", label: "Docs" },
      {
        href: "https://base-ui.com/react/components/tooltip#api-reference",
        label: "API Reference",
      },
    ],
    children: <TooltipDemo />,
  },
];

export function Sink() {
  return (
    <div className="space-y-4 md:space-y-16">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <DemoCard key={index} {...item} />
          {index < data.length - 1 && (
            <hr className="border-b-2 border-dotted border-t-0 w-2/3 mx-auto" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
