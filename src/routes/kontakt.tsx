import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: [{ title: "Kontakt — Luka Kovačić" }] }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-serif">Kontakt</h1>
      </main>
      <Footer />
    </div>
  );
}
