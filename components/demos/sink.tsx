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

export function Sink() {
  return (
    <div className="space-y-16">
      <Separator />
      <AccordionDemo />
      <CodeBlockCommand
        component="accordion"
      />
      <Separator />
      <AlertDialogDemo />
      <Separator />
      <BreadcrumbDemo />
      <Separator />
      <CollapsibleDemo />
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
