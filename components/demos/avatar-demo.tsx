import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/19780885?v=4"
        alt="@Jacksonmills"
      />
      <AvatarFallback>JM</AvatarFallback>
    </Avatar>
  );
}
