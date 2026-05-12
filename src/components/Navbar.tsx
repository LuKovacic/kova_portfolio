import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useT } from "@/lib/i18n";

export function Navbar() {
  const { location } = useRouterState();
  const { lang, setLang, t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/o-meni", label: t("nav.about") },
    { to: "/projekti", label: t("nav.projects") },
    { to: "/nagrade", label: t("nav.awards") },
    { to: "/kontakt", label: t("nav.contact") },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all ${
        scrolled || open
          ? "backdrop-blur-md bg-[var(--cream)]/95 border-border/60"
          : "bg-[var(--cream)]/70 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="w-full px-6 flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-[0.2em] text-foreground">
          KOVA
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-xs tracking-[0.18em] text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                {l.label}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 mx-auto h-px bg-primary transition-all duration-300 ${
                    active ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="text-xs tracking-[0.18em] text-primary">
            <button
              onClick={() => setLang("hr")}
              className={lang === "hr" ? "font-medium text-primary" : "text-foreground/50 hover:text-foreground transition-colors"}
            >
              HR
            </button>
            <span className="mx-2 text-border">|</span>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "font-medium text-primary" : "text-foreground/50 hover:text-foreground transition-colors"}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-border/60 text-foreground hover:bg-foreground/5 transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-4 pt-1 flex flex-col">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`py-3 border-b border-border/40 text-sm tracking-[0.18em] transition-colors ${
                  active ? "text-primary" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
