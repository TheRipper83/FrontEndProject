var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

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

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 63,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 113,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts
} from "@remix-run/react";

// app/styles/app.css
var app_default = "/build/_assets/app-G7W57JUL.css";

// app/components/TheHeader/TheHeader.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function TheHeader({ title, menuItems }) {
  return /* @__PURE__ */ jsxDEV2("header", { className: "header", children: /* @__PURE__ */ jsxDEV2("nav", { className: "header__nav", children: /* @__PURE__ */ jsxDEV2("ul", { className: "header__menu", children: [
    /* @__PURE__ */ jsxDEV2("h3", { children: /* @__PURE__ */ jsxDEV2("a", { href: "/", rel: "home", className: "header__logo", children: title }, void 0, !1, {
      fileName: "app/components/TheHeader/TheHeader.jsx",
      lineNumber: 7,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/TheHeader/TheHeader.jsx",
      lineNumber: 7,
      columnNumber: 21
    }, this),
    menuItems.map((name) => /* @__PURE__ */ jsxDEV2("li", { className: "header__menu-item", children: /* @__PURE__ */ jsxDEV2("a", { className: "header__menu-link", href: name, children: name }, void 0, !1, {
      fileName: "app/components/TheHeader/TheHeader.jsx",
      lineNumber: 9,
      columnNumber: 77
    }, this) }, name, !1, {
      fileName: "app/components/TheHeader/TheHeader.jsx",
      lineNumber: 9,
      columnNumber: 32
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/TheHeader/TheHeader.jsx",
    lineNumber: 6,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/TheHeader/TheHeader.jsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/TheHeader/TheHeader.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/TheHeader/TheHeader.css
var TheHeader_default = "/build/_assets/TheHeader-7MRZ5GIO.css";

// app/root.jsx
var import_tlou = __toESM(require_tlou(), 1);

// app/components/TheFooter.jsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function TheFooter() {
  return /* @__PURE__ */ jsxDEV3("footer", { children: /* @__PURE__ */ jsxDEV3("ul", { className: "footer__menu", children: [
    /* @__PURE__ */ jsxDEV3("h3", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/", rel: "home", className: "header__logo", children: "Hossein" }, void 0, !1, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 5,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 5,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { className: "header__menu-link", href: "#x.com", children: "Portfolio" }, void 0, !1, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 6,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 6,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { className: "header__menu-link", href: "#linkedin", children: "About" }, void 0, !1, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 7,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { className: "header__menu-link", href: "#facebook", children: "Contact" }, void 0, !1, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 8,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/TheFooter.jsx",
      lineNumber: 8,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TheFooter.jsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/TheFooter.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/Figure.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Figure(props) {
  return /* @__PURE__ */ jsxDEV4("figure", { class: "project-card__figure", children: [
    props.children,
    /* @__PURE__ */ jsxDEV4("img", { src: props.image, alt: props.desc, className: `project-card__image ${props.className}` }, void 0, !1, {
      fileName: "app/components/Figure.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("figcaption", { className: `project-card__caption ${props.CapclassName}`, children: props.caption }, void 0, !1, {
      fileName: "app/components/Figure.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Figure.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/Article.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Article1(props) {
  return /* @__PURE__ */ jsxDEV5("article", { class: "project-card", children: [
    " ",
    props.children
  ] }, void 0, !0, {
    fileName: "app/components/Article.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/components/PicLoop.jsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function PicLoop({ pics }) {
  return /* @__PURE__ */ jsxDEV6("section", { children: /* @__PURE__ */ jsxDEV6("div", { className: "container projects", children: /* @__PURE__ */ jsxDEV6("ul", { className: "projects__list", children: pics.map((item, index) => /* @__PURE__ */ jsxDEV6("li", { className: "project-list__item", children: /* @__PURE__ */ jsxDEV6(Article1, { children: /* @__PURE__ */ jsxDEV6(Figure, { image: item.url, desc: item.altt, caption: item.title }, void 0, !1, {
    fileName: "app/components/PicLoop.jsx",
    lineNumber: 15,
    columnNumber: 41
  }, this) }, void 0, !1, {
    fileName: "app/components/PicLoop.jsx",
    lineNumber: 14,
    columnNumber: 29
  }, this) }, index, !1, {
    fileName: "app/components/PicLoop.jsx",
    lineNumber: 13,
    columnNumber: 32
  }, this)) }, void 0, !1, {
    fileName: "app/components/PicLoop.jsx",
    lineNumber: 11,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/PicLoop.jsx",
    lineNumber: 10,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/PicLoop.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/root.jsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta = () => [
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }
], links = () => [
  {
    rel: "stylesheet",
    href: app_default
  },
  {
    rel: "stylesheet",
    href: TheHeader_default
  }
];
function App() {
  let menuItems = ["Portfolio", "About", "Contact"], pics = [
    { title: "Project 1", url: require_tlou(), altt: "pic1" },
    { title: "Project 2", url: require_pic2(), altt: "pic2" },
    { title: "Project 3", url: require_pic3(), altt: "pic3" }
  ];
  return /* @__PURE__ */ jsxDEV7("html", { children: [
    /* @__PURE__ */ jsxDEV7("head", { children: [
      /* @__PURE__ */ jsxDEV7(
        "link",
        {
          rel: "icon",
          href: "data:image/x-icon;base64,AA"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 47,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("body", { children: [
      /* @__PURE__ */ jsxDEV7(TheHeader, { title: "Hossein", menuItems }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV7(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("section", { className: "project-card", children: /* @__PURE__ */ jsxDEV7("img", { src: import_tlou.default, alt: "pic" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("section", { className: "project-card", children: /* @__PURE__ */ jsxDEV7("img", { src: import_tlou.default, alt: "pic" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("section", { className: "project-card", children: /* @__PURE__ */ jsxDEV7("img", { src: import_tlou.default, alt: "pic" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(TheHeader, { title: "Featured", menuItems: ["see all"] }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV7("section", { children: /* @__PURE__ */ jsxDEV7("div", { className: "container projects", children: /* @__PURE__ */ jsxDEV7(PicLoop, { pics }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 69,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 68,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV7(TheFooter, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV7(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/Portfolio.jsx
var Portfolio_exports = {};
__export(Portfolio_exports, {
  default: () => Portfolio
});
import { Fragment, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Portfolio() {
  return /* @__PURE__ */ jsxDEV8(Fragment, { children: /* @__PURE__ */ jsxDEV8("section", { children: /* @__PURE__ */ jsxDEV8("h1", { children: "This is Portfolio page" }, void 0, !1, {
    fileName: "app/routes/Portfolio.jsx",
    lineNumber: 5,
    columnNumber: 16
  }, this) }, void 0, !1, {
    fileName: "app/routes/Portfolio.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/Portfolio.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/Contact.jsx
var Contact_exports = {};
__export(Contact_exports, {
  default: () => Contact
});
import { Fragment as Fragment2, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Contact() {
  return /* @__PURE__ */ jsxDEV9(Fragment2, { children: /* @__PURE__ */ jsxDEV9("section", { children: /* @__PURE__ */ jsxDEV9("h1", { children: "This is contact Page" }, void 0, !1, {
    fileName: "app/routes/Contact.jsx",
    lineNumber: 5,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/Contact.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/Contact.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/About.jsx
var About_exports = {};
__export(About_exports, {
  default: () => About
});
import { Fragment as Fragment3, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV10(Fragment3, { children: /* @__PURE__ */ jsxDEV10("section", { children: /* @__PURE__ */ jsxDEV10("h1", { children: "This is About Page" }, void 0, !1, {
    fileName: "app/routes/About.jsx",
    lineNumber: 5,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/About.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/About.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UARJDEWC.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-MNP5KT47.js", "/build/_shared/chunk-2SUH2MHH.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RI5TT7PG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/About": { id: "routes/About", parentId: "root", path: "About", index: void 0, caseSensitive: void 0, module: "/build/routes/About-RKE3ELRF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Contact": { id: "routes/Contact", parentId: "root", path: "Contact", index: void 0, caseSensitive: void 0, module: "/build/routes/Contact-FXZAILN2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Portfolio": { id: "routes/Portfolio", parentId: "root", path: "Portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/Portfolio-H3733UC7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "7e24820e", hmr: { runtime: "/build/_shared\\chunk-2SUH2MHH.js", timestamp: 1708116011476 }, url: "/build/manifest-7E24820E.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/Portfolio": {
    id: "routes/Portfolio",
    parentId: "root",
    path: "Portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: Portfolio_exports
  },
  "routes/Contact": {
    id: "routes/Contact",
    parentId: "root",
    path: "Contact",
    index: void 0,
    caseSensitive: void 0,
    module: Contact_exports
  },
  "routes/About": {
    id: "routes/About",
    parentId: "root",
    path: "About",
    index: void 0,
    caseSensitive: void 0,
    module: About_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
