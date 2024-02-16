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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/Images/tlou.jpg
var require_tlou = __commonJS({
  "app/Images/tlou.jpg"(exports, module) {
    module.exports = "/build/_assets/tlou-TMD3IYFY.jpg";
  }
});

// app/Images/pic2.jpg
var require_pic2 = __commonJS({
  "app/Images/pic2.jpg"(exports, module) {
    module.exports = "/build/_assets/pic2-GT7UCMLP.jpg";
  }
});

// app/Images/pic3.jpg
var require_pic3 = __commonJS({
  "app/Images/pic3.jpg"(exports, module) {
    module.exports = "/build/_assets/pic3-FCDX3WOX.jpg";
  }
});

// app/styles/app.css
var app_default = "/build/_assets/app-G7W57JUL.css";

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
  import.meta.hot.lastModified = "1708115876112.0264";
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

// app/root.jsx
var import_tlou = __toESM(require_tlou(), 1);

// app/components/TheFooter.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TheFooter.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TheFooter.jsx"
  );
  import.meta.hot.lastModified = "1708094529217.677";
}
function TheFooter() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "footer__menu", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", rel: "home", className: "header__logo", children: "Hossein" }, void 0, false, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 24,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "header__menu-link", href: "#x.com", children: "Portfolio" }, void 0, false, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 25,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "header__menu-link", href: "#linkedin", children: "About" }, void 0, false, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 26,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "header__menu-link", href: "#facebook", children: "Contact" }, void 0, false, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 27,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 27,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TheFooter.jsx",
    lineNumber: 23,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/TheFooter.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c2 = TheFooter;
var _c2;
$RefreshReg$(_c2, "TheFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Figure.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Figure.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Figure.jsx"
  );
  import.meta.hot.lastModified = "1708099434017.6516";
}
function Figure(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("figure", { class: "project-card__figure", children: [
    props.children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: props.image, alt: props.desc, className: `project-card__image ${props.className}` }, void 0, false, {
      fileName: "app/components/Figure.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("figcaption", { className: `project-card__caption ${props.CapclassName}`, children: props.caption }, void 0, false, {
      fileName: "app/components/Figure.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Figure.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c3 = Figure;
var _c3;
$RefreshReg$(_c3, "Figure");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Article.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Article.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Article.jsx"
  );
  import.meta.hot.lastModified = "1708099030374.071";
}
function Article1(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("article", { class: "project-card", children: [
    " ",
    props.children
  ] }, void 0, true, {
    fileName: "app/components/Article.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c4 = Article1;
var _c4;
$RefreshReg$(_c4, "Article1");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PicLoop.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PicLoop.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PicLoop.jsx"
  );
  import.meta.hot.lastModified = "1708099029146.623";
}
function PicLoop({
  pics
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container projects", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "projects__list", children: pics.map((item, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "project-list__item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Article1, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Figure, { image: item.url, desc: item.altt, caption: item.title }, void 0, false, {
      fileName: "app/components/PicLoop.jsx",
      lineNumber: 32,
      columnNumber: 41
    }, this) }, void 0, false, {
      fileName: "app/components/PicLoop.jsx",
      lineNumber: 31,
      columnNumber: 29
    }, this) }, index, false, {
      fileName: "app/components/PicLoop.jsx",
      lineNumber: 30,
      columnNumber: 18
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/PicLoop.jsx",
    lineNumber: 28,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/components/PicLoop.jsx",
    lineNumber: 27,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/PicLoop.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c5 = PicLoop;
var _c5;
$RefreshReg$(_c5, "PicLoop");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
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
  const pics = [{
    title: "Project 1",
    url: require_tlou(),
    altt: "pic1"
  }, {
    title: "Project 2",
    url: require_pic2(),
    altt: "pic2"
  }, {
    title: "Project 3",
    url: require_pic3(),
    altt: "pic3"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TheHeader, { title: "Hossein", menuItems }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "project-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: import_tlou.default, alt: "pic" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "project-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: import_tlou.default, alt: "pic" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "project-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: import_tlou.default, alt: "pic" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TheHeader, { title: "Featured", menuItems: ["see all"] }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container projects", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PicLoop, { pics }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 79,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 78,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 77,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TheFooter, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_c6 = App;
var _c6;
$RefreshReg$(_c6, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-RI5TT7PG.js.map
