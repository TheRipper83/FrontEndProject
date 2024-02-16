import {
  createHotContext
} from "/build/_shared/chunk-2SUH2MHH.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/Contact.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\Contact.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\Contact.jsx"
  );
  import.meta.hot.lastModified = "1708082016861.233";
}
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "This is contact Page" }, void 0, false, {
    fileName: "app/routes/Contact.jsx",
    lineNumber: 24,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/Contact.jsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/Contact.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/Contact-FXZAILN2.js.map
