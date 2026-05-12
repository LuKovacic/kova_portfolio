import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/o-meni")({
  head: () => ({
    meta: [
      { title: "O meni — Luka Kovačić" },
      { name: "description", content: "O meni — Luka Kovačić, student mehatronike i robotike." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-serif">O meni</h1>
      </main>
      <Footer />
    </div>
  );
}
