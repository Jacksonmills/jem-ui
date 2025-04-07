import * as React from "react";
import { DemoCard } from "../demo-card";
import { AccordionDemo } from "./accordion-demo";
import { AlertDialogDemo } from "./alert-dialog-demo";
import { BreadcrumbDemo } from "./breadcrumb-demo";
import { CollapsibleDemo } from "./collapsible-demo";
import { ComboboxDemo } from "./combobox-demo";
import { CommandDialogDemo } from "./command-dialog-demo";
import { DatePickerDemo } from "./date-picker-demo";
import { DialogDemo } from "./dialog-demo";
import { DropdownMenuDemo } from "./dropdown-menu-demo";
import { HoverCardDemo } from "./hover-card-demo";
import { MenubarDemo } from "./menubar-demo";
import { ComboboxPopover } from "./popover-combobox-demo";
import { PopoverDemo } from "./popover-demo";
import { SheetDemo } from "./sheet-demo";
import { TabsDemo } from "./tabs-demo";

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
    displayName: "Breadcrumb",
    slug: "breadcrumb",
    links: [
      { href: "https://base-ui.com/react/utils/use-render", label: "Docs" },
    ],
    children: <BreadcrumbDemo />,
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
  // {
  //   displayName: "Combobox",
  //   slug: "combobox",
  //   links: [
  //     { href: "https://ui.shadcn.com/docs/components/combobox", label: "Docs" },
  //   ],
  //   children: <ComboboxDemo />,
  // },
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
  // {
  //   displayName: "Date Picker",
  //   slug: "date-picker",
  //   links: [
  //     {
  //       href: "https://base-ui.com/react/components/date-picker",
  //       label: "Docs",
  //     },
  //     {
  //       href: "https://base-ui.com/react/components/date-picker#api-reference",
  //       label: "API Reference",
  //     },
  //   ],
  //   children: <DatePickerDemo />,
  // },
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
