import { CollapsibleDemo } from "./collapsible-demo";
import { BreadcrumbDemo } from "./breadcrumb-demo";
import { CommandDialogDemo } from "./command-dialog-demo";
import { DialogDemo } from "./dialog-demo";
import { HoverCardDemo } from "./hover-card-demo";
import { MenubarDemo } from "./menubar-demo";
import { AccordionDemo } from "./accordion-demo";
import { Separator } from "../ui/separator";
import { AlertDialogDemo } from "./alert-dialog-demo";
import { CodeBlockCommand } from "../code-block-command";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";

export function DemoCard({ children, slug, displayName, description, links }: {
  children: React.ReactNode;
  slug: string;
  displayName: string;
  description?: string;
  links?: { href: string; label: string; }[];
}) {
  return (
    <div className="bg-muted dark:bg-muted/25 p-12 rounded-xl flex gap-4 flex-col">
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-2xl font-semibold">
          {displayName}
        </h2>

        {description && (
          <p className="text-muted-foreground text-sm">
            {description}
          </p>
        )}

        <div className="flex gap-2">
          {links?.map((link, index) => (
            <Button key={index} className="h-5 text-xs font-semibold bg-muted-foreground text-background" size="sm" asChild>
              <a href={link.href}>
                {link.label} <ExternalLinkIcon className="size-3" />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div className="bg-background p-8 rounded-lg border flex flex-col gap-8">
        <div>
          {children}
        </div>

        <CodeBlockCommand
          component={slug}
        />
      </div>
    </div>
  );
}

export function Sink() {
  return (
    <div className="space-y-16">
      <Separator />
      <DemoCard displayName="Accordion" slug="accordion" links={
        [
          { href: "https://base-ui.com/react/components/accordion", label: "Docs" },
          { href: "https://base-ui.com/react/components/accordion#api-reference", label: "API Reference" },
        ]
      }>
        <AccordionDemo />
      </DemoCard>
      <Separator />
      <DemoCard displayName="Alert Dialog" slug="alert-dialog" links={
        [
          { href: "https://base-ui.com/react/components/alert-dialog", label: "Docs" },
          { href: "https://base-ui.com/react/components/alert-dialog#api-reference", label: "API Reference" },
        ]
      }>
        <AlertDialogDemo />
      </DemoCard>
      <Separator />
      <DemoCard displayName="Breadcrumb" slug="breadcrumb" links={
        [
          { href: "https://base-ui.com/react/utils/use-render", label: "Docs" },
        ]
      }>
        <BreadcrumbDemo />
      </DemoCard>
      <Separator />
      <DemoCard displayName="Collapsible" slug="collapsible" links={
        [
          { href: "https://base-ui.com/react/components/collapsible", label: "Docs" },
          { href: "https://base-ui.com/react/components/collapsible#api-reference", label: "API Reference" },
        ]
      }>
        <CollapsibleDemo />
      </DemoCard>
      <Separator />
      <DemoCard displayName="Command Dialog" slug="command-dialog" links={
        [
          { href: "https://cmdk.paco.me/", label: "Docs" },
          { href: "https://base-ui.com/react/components/scroll-area", label: "Scroll Area" },
        ]
      }>
        <CommandDialogDemo />
      </DemoCard>
      <Separator />
      <DemoCard displayName="Dialog" slug="dialog" links={[
        { href: "https://base-ui.com/react/components/dialog", label: "Docs" },
        { href: "https://base-ui.com/react/components/dialog#api-reference", label: "API Reference" },
      ]}>
        <DialogDemo />
      </DemoCard>
      <Separator />
      <DemoCard displayName="Hover Card" slug="hover-card" links={[
        { href: "https://base-ui.com/react/components/preview-card", label: "Docs" },
        { href: "https://base-ui.com/react/components/preview-card#api-reference", label: "API Reference" },
      ]}>
        <HoverCardDemo />
      </DemoCard>
      <Separator />
      <DemoCard displayName="Menubar" description="The Menubar is built using a composition of the Base UI Menu and Toolbar components." slug="menubar" links={[
        { href: "https://base-ui.com/react/components/menu", label: "Menu Docs" },
        { href: "https://base-ui.com/react/components/toolbar", label: "Toolbar Docs" },
      ]}>
        <MenubarDemo />
      </DemoCard>
      <Separator />
    </div>
  );
}
