"use client";

import { AspectRatio as AspectRatioPrimitive } from "@base-ui-components/react/aspect-ratio";

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive>) {
  return <AspectRatioPrimitive data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
