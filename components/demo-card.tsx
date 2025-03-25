import { CodeBlockCommand } from "./code-block-command";
import { Button } from "./ui/button";
import { ExternalLinkIcon } from "lucide-react";

export function DemoCard({ children, slug, displayName, description, links }: {
  children: React.ReactNode;
  slug: string;
  displayName: string;
  description?: string;
  links?: { href: string; label: string; }[];
}) {
  return (
    <div className="md:bg-muted md:dark:bg-muted/25 p-4 md:p-12 rounded-xl flex gap-4 flex-col">
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
            <Button key={index} className="h-5 text-xs font-semibold bg-muted-foreground hover:bg-muted-foreground/80 text-background" size="sm" asChild>
              <a href={link.href}>
                {link.label} <ExternalLinkIcon className="size-3" />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div className="md:bg-background p-2 md:p-8 rounded-lg md:border flex flex-col gap-8">
        <div>
          {children}
        </div>


      </div>
      <CodeBlockCommand
        component={slug}
      />
    </div>
  );
}