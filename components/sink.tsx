import { CollapsibleDemo } from "./demos/collapsible-demo";
import { CommandDemo } from "./demos/command-demo";
import { BreadcrumbDemo } from "./demos/breadcrumb-demo";
import { CommandDialogDemo } from "./demos/command-dialog-demo";
import { DialogDemo } from "./demos/dialog-demo";
import { HoverCardDemo } from "./demos/hover-card-demo";
import { MenubarDemo } from "./demos/menubar-demo";
import { AccordionDemo } from "./demos/accordion-demo";
import { Separator } from "./ui/separator";

export function Sink() {
  return (
    <div className="space-y-16">
      <Separator />
      <AccordionDemo />
      <Separator />
      <BreadcrumbDemo />
      <Separator />
      <CollapsibleDemo />
      <Separator />
      <CommandDemo />
      <Separator />
      <CommandDialogDemo />
      <Separator />
      <DialogDemo />
      <Separator />
      <HoverCardDemo />
      <Separator />
      <MenubarDemo />
      <Separator />
    </div>
  );
}
