import { CollapsibleDemo } from "./collapsible-demo";
import { BreadcrumbDemo } from "./breadcrumb-demo";
import { CommandDialogDemo } from "./command-dialog-demo";
import { DialogDemo } from "./dialog-demo";
import { HoverCardDemo } from "./hover-card-demo";
import { MenubarDemo } from "./menubar-demo";
import { AccordionDemo } from "./accordion-demo";
import { AlertDialogDemo } from "./alert-dialog-demo";
import * as React from "react";
import { DemoCard } from "../demo-card";

interface Data {
  displayName: string;
  slug: string;
  children: React.ReactNode;
  links?: { href: string; label: string; }[];
  description?: string;
}

const data: Data[] = [
  {
    displayName: "Accordion",
    slug: "accordion",
    links: [
      { href: "https://base-ui.com/react/components/accordion", label: "Docs" },
      { href: "https://base-ui.com/react/components/accordion#api-reference", label: "API Reference" },
    ],
    children: <AccordionDemo />,
  },
  {
    displayName: "Alert Dialog",
    slug: "alert-dialog",
    links: [
      { href: "https://base-ui.com/react/components/alert-dialog", label: "Docs" },
      { href: "https://base-ui.com/react/components/alert-dialog#api-reference", label: "API Reference" },
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
      { href: "https://base-ui.com/react/components/collapsible", label: "Docs" },
      { href: "https://base-ui.com/react/components/collapsible#api-reference", label: "API Reference" },
    ],
    children: <CollapsibleDemo />,
  },
  {
    displayName: "Command Dialog",
    slug: "command-dialog",
    links: [
      { href: "https://cmdk.paco.me/", label: "Docs" },
      { href: "https://base-ui.com/react/components/scroll-area", label: "Scroll Area" },
    ],
    children: <CommandDialogDemo />,
  },
  {
    displayName: "Dialog",
    slug: "dialog",
    links: [
      { href: "https://base-ui.com/react/components/dialog", label: "Docs" },
      { href: "https://base-ui.com/react/components/dialog#api-reference", label: "API Reference" },
    ],
    children: <DialogDemo />,
  },
  {
    displayName: "Hover Card",
    slug: "hover-card",
    links: [
      { href: "https://base-ui.com/react/components/preview-card", label: "Docs" },
      { href: "https://base-ui.com/react/components/preview-card#api-reference", label: "API Reference" },
    ],
    children: <HoverCardDemo />,
  },
  {
    displayName: "Menubar",
    slug: "menubar",
    description: "The Menubar is built using a composition of the Base UI Menu and Toolbar components.",
    links: [
      { href: "https://base-ui.com/react/components/menu", label: "Menu Docs" },
      { href: "https://base-ui.com/react/components/toolbar", label: "Toolbar Docs" },
    ],
    children: <MenubarDemo />,
  }
];

export function Sink() {
  return (
    <div className="space-y-4 md:space-y-16">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <DemoCard key={index} {...item} />
          {index < data.length - 1 && <hr className="border-b-2 border-dotted border-t-0 w-2/3 mx-auto" />}
        </React.Fragment>
      ))}
    </div >
  );
}
