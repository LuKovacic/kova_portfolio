import { V as jsxRuntimeExports } from "./server-DlWQcjTQ.js";
import { R as Route, L as Link, t as titles } from "./router-DwB75Al6.js";
import { N as Navbar, F as Footer } from "./Footer-Di-VI2B7.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Page() {
  const {
    slug
  } = Route.useParams();
  const title = titles[slug] ?? "Projekt";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 container-x py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm text-primary hover:underline", children: "← Natrag" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-primary text-5xl md:text-7xl mt-6", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-4 h-0.5 w-20 bg-primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Page as component
};
