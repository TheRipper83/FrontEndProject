import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts
} from "/build/_shared/chunk-MNP5KT47.js";
import {
  createHotContext
} from "/build/_shared/chunk-2SUH2MHH.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles/app.css
var app_default = "/build/_assets/app-7UMQHG53.css";

// app/components/TheHeader/TheHeader.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TheHeader\\\\TheHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TheHeader\\TheHeader.jsx"
  );
  import.meta.hot.lastModified = "1708081579959.2737";
}
function TheHeader({
  title,
  menuItems
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "header__nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "header__menu", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", rel: "home", className: "header__logo", children: title }, void 0, false, {
      fileName: "app/components/TheHeader/TheHeader.jsx",
      lineNumber: 29,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/TheHeader/TheHeader.jsx",
      lineNumber: 29,
      columnNumber: 21
    }, this),
    menuItems.map((name) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "header__menu-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "header__menu-link", href: name, children: name }, void 0, false, {
        fileName: "app/components/TheHeader/TheHeader.jsx",
        lineNumber: 31,
        columnNumber: 63
      }, this) }, name, false, {
        fileName: "app/components/TheHeader/TheHeader.jsx",
        lineNumber: 31,
        columnNumber: 18
      }, this);
    })
  ] }, void 0, true, {
    fileName: "app/components/TheHeader/TheHeader.jsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/TheHeader/TheHeader.jsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/TheHeader/TheHeader.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = TheHeader;
var _c;
$RefreshReg$(_c, "TheHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/TheHeader/TheHeader.css
var TheHeader_default = "/build/_assets/TheHeader-7MRZ5GIO.css";

// app/Images/tlou.jpg
var tlou_default = "/build/_assets/tlou-TMD3IYFY.jpg";

// app/root.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.jsx"
  );
}
var meta = () => [{
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}];
var links = () => [{
  rel: "stylesheet",
  href: app_default
}, {
  rel: "stylesheet",
  href: TheHeader_default
}];
function App() {
  const menuItems = ["Portfolio", "About", "Contact"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TheHeader, { title: "Hossein", menuItems }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Hello world!" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "project-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: tlou_default, alt: "pic" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c2 = App;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-GKAK5JA4.js.map
