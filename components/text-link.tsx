import { Button } from "./ui/button";


export function TextLink({ children, href }: { children: React.ReactNode; href: string; }) {
  return (
    <Button className="text-primary p-0 pb-px dark:bg-muted bg-foreground rounded-none h-fit" variant="link" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    </Button>
  );
}