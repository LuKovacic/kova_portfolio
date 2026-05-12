import { O as useRouter, r as reactExports, V as jsxRuntimeExports } from "./server-DlWQcjTQ.js";
import { u as useT, L as Link } from "./router-DwB75Al6.js";
function useRouterState(opts) {
  const contextRouter = useRouter();
  const router = contextRouter;
  {
    const state = router.stores.__store.get();
    return state;
  }
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$1 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function Navbar() {
  const { location } = useRouterState();
  const { lang, setLang, t } = useT();
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/o-meni", label: t("nav.about") },
    { to: "/projekti", label: t("nav.projects") },
    { to: "/nagrade", label: t("nav.awards") },
    { to: "/kontakt", label: t("nav.contact") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `sticky top-0 z-50 w-full border-b transition-all ${scrolled || open ? "backdrop-blur-md bg-[var(--cream)]/95 border-border/60" : "bg-[var(--cream)]/70 backdrop-blur-sm border-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full px-6 flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xl font-semibold tracking-[0.2em] text-foreground", children: "KOVA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-10", children: links.map((l) => {
            const active = location.pathname === l.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: l.to,
                className: "relative text-xs tracking-[0.18em] text-foreground/80 hover:text-foreground transition-colors py-2",
                children: [
                  l.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `absolute left-0 right-0 -bottom-0.5 mx-auto h-px bg-primary transition-all duration-300 ${active ? "w-full opacity-100" : "w-0 opacity-0"}`
                    }
                  )
                ]
              },
              l.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs tracking-[0.18em] text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setLang("hr"),
                  className: lang === "hr" ? "font-medium text-primary" : "text-foreground/50 hover:text-foreground transition-colors",
                  children: "HR"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-border", children: "|" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setLang("en"),
                  className: lang === "en" ? "font-medium text-primary" : "text-foreground/50 hover:text-foreground transition-colors",
                  children: "EN"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": open ? "Zatvori izbornik" : "Otvori izbornik",
                "aria-expanded": open,
                onClick: () => setOpen((v) => !v),
                className: "md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-border/60 text-foreground hover:bg-foreground/5 transition-colors",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "px-6 pb-4 pt-1 flex flex-col", children: links.map((l) => {
              const active = location.pathname === l.to;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: `py-3 border-b border-border/40 text-sm tracking-[0.18em] transition-colors ${active ? "text-primary" : "text-foreground/80 hover:text-foreground"}`,
                  children: l.label
                },
                l.to
              );
            }) })
          }
        )
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60 py-4 bg-[var(--cream)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x text-center text-[11px] tracking-[0.22em] text-muted-foreground", children: "© LUKA KOVAČIĆ 2026" }) });
}
export {
  Footer as F,
  Navbar as N
};
