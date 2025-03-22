import { CollapsibleDemo } from "./demos/collapsible-demo";
import { CommandDemo } from "./demos/command-demo";
import { BreadcrumbDemo } from "./demos/breadcrumb-demo";
import { CommandDialogDemo } from "./demos/command-dialog-demo";
import { DialogDemo } from "./demos/dialog-demo";
import { HoverCardDemo } from "./demos/hover-card-demo";
import { MenubarDemo } from "./demos/menubar-demo";

export function Sink() {
  return (
    <div>
      <BreadcrumbDemo />
      <CollapsibleDemo />
      <CommandDemo />
      <CommandDialogDemo />
      <DialogDemo />
      <HoverCardDemo />
      <MenubarDemo />
    </div>
  );
}
