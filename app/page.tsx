import { Sink } from "@/components/demos/sink";

export const generateMetadata = () => {
  return {
    title: "Home - JEM/UI",
    description:
      "A Base UI based shadcn/ui component library. Open Source. Open Code.",
  };
};

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-8">
      <Sink />
    </main>
  );
}
