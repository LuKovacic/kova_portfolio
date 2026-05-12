import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const titles: Record<string, string> = {
  "stroj-za-pakiranje-borovnica": "Stroj za automatsko pakiranje borovnica",
  "robotska-hvataljka": "Robotska hvataljka za manipulaciju kućištima protupožarnih zaklopki",
  "rc-automobil": "Izrada modela RC automobila pomoću 3D printera",
};

export const Route = createFileRoute("/projekti/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${titles[params.slug] ?? "Projekt"} — Luka Kovačić` }],
  }),
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const title = titles[slug] ?? "Projekt";
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container-x py-24 md:py-32">
        <Link to="/" className="text-sm text-primary hover:underline">← Natrag</Link>
        <h1 className="font-serif text-primary text-5xl md:text-7xl mt-6">{title}</h1>
        <span className="block mt-4 h-0.5 w-20 bg-primary" />
      </main>
      <Footer />
    </div>
  );
}
