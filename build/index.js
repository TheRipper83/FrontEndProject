var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

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
var app_default = "/build/_assets/app-6SD7IUJB.css";

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

// app/Images/tlou.jpg
var tlou_default = "/build/_assets/tlou-TMD3IYFY.jpg";

// app/root.jsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV3("html", { children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3(
        "link",
        {
          rel: "icon",
          href: "data:image/x-icon;base64,AA"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(TheHeader, { title: "Hossein", menuItems: ["Portfolio", "About", "Contact"] }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("section", { className: "project-card", children: /* @__PURE__ */ jsxDEV3("img", { src: tlou_default, alt: "pic" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("section", { className: "project-card", children: /* @__PURE__ */ jsxDEV3("img", { src: tlou_default, alt: "pic" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("section", { className: "project-card", children: /* @__PURE__ */ jsxDEV3("img", { src: tlou_default, alt: "pic" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(TheHeader, { title: "Featured", menuItems: ["see all"] }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3("section", { children: /* @__PURE__ */ jsxDEV3("div", { className: "container projects", children: /* @__PURE__ */ jsxDEV3("ul", { className: "projects__list", children: [
        /* @__PURE__ */ jsxDEV3("li", { className: "project-list__item", children: /* @__PURE__ */ jsxDEV3("article", { class: "project-card", children: [
          /* @__PURE__ */ jsxDEV3("figure", { class: "project-card__figure", children: /* @__PURE__ */ jsxDEV3(
            "img",
            {
              src: "https://plus.unsplash.com/premium_photo-1682436568953-f0a0b0d5cdff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBhcHB8ZW58MHx8MHx8fDA%3D",
              alt: "A person holding an iPhone showcasing project 3",
              class: "project-card__image"
            },
            void 0,
            !1,
            {
              fileName: "app/root.jsx",
              lineNumber: 61,
              columnNumber: 45
            },
            this
          ) }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 60,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { class: "project-card__container", children: /* @__PURE__ */ jsxDEV3("h3", { class: "project-card__title", children: "Project 3 - Mobile Payment App" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 67,
            columnNumber: 45
          }, this) }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 66,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 59,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 58,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { className: "project-list__item", children: /* @__PURE__ */ jsxDEV3("article", { class: "project-card", children: [
          /* @__PURE__ */ jsxDEV3("figure", { class: "project-card__figure", children: /* @__PURE__ */ jsxDEV3(
            "img",
            {
              src: "https://plus.unsplash.com/premium_photo-1682436568953-f0a0b0d5cdff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBhcHB8ZW58MHx8MHx8fDA%3D",
              alt: "A person holding an iPhone showcasing project 3",
              class: "project-card__image"
            },
            void 0,
            !1,
            {
              fileName: "app/root.jsx",
              lineNumber: 76,
              columnNumber: 45
            },
            this
          ) }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 75,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { class: "project-card__container", children: /* @__PURE__ */ jsxDEV3("h3", { class: "project-card__title", children: "Project 3 - Mobile Payment App" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 82,
            columnNumber: 45
          }, this) }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 81,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 74,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 73,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { className: "project-list__item", children: /* @__PURE__ */ jsxDEV3("article", { class: "project-card", children: [
          /* @__PURE__ */ jsxDEV3("figure", { class: "project-card__figure", children: /* @__PURE__ */ jsxDEV3(
            "img",
            {
              src: "https://plus.unsplash.com/premium_photo-1682436568953-f0a0b0d5cdff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBhcHB8ZW58MHx8MHx8fDA%3D",
              alt: "A person holding an iPhone showcasing project 3",
              class: "project-card__image"
            },
            void 0,
            !1,
            {
              fileName: "app/root.jsx",
              lineNumber: 91,
              columnNumber: 45
            },
            this
          ) }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 90,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { class: "project-card__container", children: /* @__PURE__ */ jsxDEV3("h3", { class: "project-card__title", children: "Project 3 - Mobile Payment App" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 97,
            columnNumber: 45
          }, this) }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 96,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 89,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 88,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 57,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3("footer", { children: /* @__PURE__ */ jsxDEV3("ul", { className: "footer__menu", children: [
        /* @__PURE__ */ jsxDEV3("h3", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/", rel: "home", className: "header__logo", children: "Hossein" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 108,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 108,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { className: "header__menu-link", href: "#x.com", children: "Portfolio" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 109,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 109,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { className: "header__menu-link", href: "#linkedin", children: "About" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 110,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 110,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { className: "header__menu-link", href: "#facebook", children: "Contact" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 111,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 111,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 107,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 106,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/Portfolio.jsx
var Portfolio_exports = {};
__export(Portfolio_exports, {
  default: () => Portfolio
});
import { Fragment, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Portfolio() {
  return /* @__PURE__ */ jsxDEV4(Fragment, { children: /* @__PURE__ */ jsxDEV4("section", { children: /* @__PURE__ */ jsxDEV4("h1", { children: "This is Portfolio page" }, void 0, !1, {
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
import { Fragment as Fragment2, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Contact() {
  return /* @__PURE__ */ jsxDEV5(Fragment2, { children: /* @__PURE__ */ jsxDEV5("section", { children: /* @__PURE__ */ jsxDEV5("h1", { children: "This is contact Page" }, void 0, !1, {
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
import { Fragment as Fragment3, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV6(Fragment3, { children: /* @__PURE__ */ jsxDEV6("section", { children: /* @__PURE__ */ jsxDEV6("h1", { children: "This is About Page" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-UARJDEWC.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-MNP5KT47.js", "/build/_shared/chunk-2SUH2MHH.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KM4CG6EN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/About": { id: "routes/About", parentId: "root", path: "About", index: void 0, caseSensitive: void 0, module: "/build/routes/About-RKE3ELRF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Contact": { id: "routes/Contact", parentId: "root", path: "Contact", index: void 0, caseSensitive: void 0, module: "/build/routes/Contact-FXZAILN2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Portfolio": { id: "routes/Portfolio", parentId: "root", path: "Portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/Portfolio-H3733UC7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "947f1558", hmr: { runtime: "/build/_shared\\chunk-2SUH2MHH.js", timestamp: 1708094167203 }, url: "/build/manifest-947F1558.js" };

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
