import { cn } from "@/lib/utils";

function AspectRatio({
  ratio = 1 / 1,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  ratio?: number;
}) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative", className)}
      style={{ aspectRatio: ratio }}
      {...props}
    />
  );
}

export { AspectRatio };
