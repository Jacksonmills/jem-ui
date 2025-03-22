import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuPopup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuArrow,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSubPopup,
  DropdownMenuSub,
} from "@/components/ui/dropdown-menu";

export function Demo() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuPopup sideOffset={12}>
                <DropdownMenuArrow />
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Report an issue</DropdownMenuItem>
                <DropdownMenu>
                  <DropdownMenuSubTrigger>
                    <DropdownMenuItem>Submenu item 1</DropdownMenuItem>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubPopup sideOffset={8}>
                    <DropdownMenuItem>Submenu item 2</DropdownMenuItem>
                    <DropdownMenuItem>Submenu item 3</DropdownMenuItem>
                    <DropdownMenuItem>Submenu item 4</DropdownMenuItem>
                  </DropdownMenuSubPopup>
                </DropdownMenu>
              </DropdownMenuPopup>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
