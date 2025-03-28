import { Collapsible as CollapsiblePrimitive } from "@base-ui-components/react/collapsible";

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return (
    <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
  );
}

function CollapsibleContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Panel> & {
  className?: string;
}) {
  return (
    <CollapsiblePrimitive.Panel
      className="flex h-[calc(var(--collapsible-panel-height))] flex-col justify-end overflow-hidden text-sm transition-all ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 p-1 -m-1"
      {...props}
    >
      <div className={className}>{children}</div>
    </CollapsiblePrimitive.Panel>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
