// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("fb7129c5af1c1486");
var ErrorOverlay = require("6a966d23e568a7a8");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"fb7129c5af1c1486":"786KC","6a966d23e568a7a8":"1dldy"}],"9PpaW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "80ea2bdc835ae7b2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hMap1":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d19d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d19d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _reasonsList = require("../../data/reasonsList");
var _reasonsListDefault = parcelHelpers.interopDefault(_reasonsList);
var _arrowPng = require("../../assets/images/arrow.png");
var _arrowPngDefault = parcelHelpers.interopDefault(_arrowPng);
var _s = $RefreshSig$();
const Imgtag = ()=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
        className: "w-2 h-2",
        src: (0, _arrowPngDefault.default)
    }, void 0, false, {
        fileName: "src/feature/appointment/Reasons.js",
        lineNumber: 5,
        columnNumber: 22
    }, undefined);
_c = Imgtag;
const Reasons = ()=>{
    _s();
    const navigate = (0, _reactRouterDom.useNavigate)();
    const [selectedReason, setSelectedReason] = (0, _react.useState)(null);
    function selectReason(selectedItem) {
        setSelectedReason(selectedItem);
        if (selectedItem?.children?.length > 0) console.log("multi item selected");
        navigate("/products");
    }
    function getHtml(reason) {
        console.log(Imgtag);
        if (reason?.children?.length > 0) return `${reason.facilityTestTypeValue} ${/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Imgtag, {}, void 0, false, {
            fileName: "src/feature/appointment/Reasons.js",
            lineNumber: 19,
            columnNumber: 49
        }, this)}`;
        return reason.facilityTestTypeValue;
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "grid grid-cols-1 gap-2 justify-between m-16 mt-8 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg sm:grid-cols-2",
        children: (0, _reasonsListDefault.default).filter((item)=>item.activeInd === true).map((reason, index)=>{
            return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: reason?.facilityServiceId === selectedReason?.facilityServiceId ? "p-4 rounded-lg shadow-lg bg-gray-700" : "p-4 rounded-lg shadow-lg bg-gray-500 hover:bg-gray-700",
                title: reason.testDesc,
                dangerouslySetInnerHTML: {
                    __html: getHtml(reason)
                },
                onClick: ()=>selectReason(reason)
            }, reason.facilityServiceId, false, {
                fileName: "src/feature/appointment/Reasons.js",
                lineNumber: 29,
                columnNumber: 14
            }, undefined);
        })
    }, void 0, false, {
        fileName: "src/feature/appointment/Reasons.js",
        lineNumber: 23,
        columnNumber: 10
    }, undefined);
};
_s(Reasons, "bv2t61lL9MWbYfPSDNba0tSARrw=", false, function() {
    return [
        (0, _reactRouterDom.useNavigate)
    ];
});
_c1 = Reasons;
exports.default = Reasons;
var _c, _c1;
$RefreshReg$(_c, "Imgtag");
$RefreshReg$(_c1, "Reasons");

  $parcel$ReactRefreshHelpers$d19d.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","../../data/reasonsList":"iBLpm","../../assets/images/arrow.png":"jyi33","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iBLpm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const reasonsList = [
    {
        "facilityServiceId": 26,
        "facilityTestType": "COVID INFECTION TEST",
        "facilityTestTypeValue": "COVID-19 or COVID-19/Flu Test",
        "testDesc": "COVID-19: This swab detects whether you currently have an active COVID-19 infection. A diagnosis can guide you and your doctor or healthcare provider to make an informed decision about self-isolating to protect your family and friends.<br>COVID-19/Flu Test: This swab detects whether you currently have an active COVID-19 infection and the influenza A and B viruses.",
        "precedence": 1,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "CV19",
        "children": []
    },
    {
        "facilityServiceId": 25,
        "facilityTestType": "COVID ANTIBODY TEST",
        "facilityTestTypeValue": "COVID-19 Antibody Test",
        "testDesc": "This blood test detects antibodies that are the result of past or recent exposure to COVID-19, also known as the novel coronavirus. Test results may help identify if you have developed an immune response to this virus and thus may be in the process of or have overcome a COVID-19 infection, whether or not you have had symptoms.",
        "precedence": 2,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "CVAB",
        "children": []
    },
    {
        "facilityServiceId": 2,
        "facilityTestType": "Employer Drug and Alcohol",
        "facilityTestTypeValue": "Employer Drug and Alcohol",
        "testDesc": "Select this option if your employer ordered a drug and alcohol test for you.",
        "precedence": 3,
        "serviceRequestor": "EMPLOYER",
        "activeInd": true,
        "skipInsurance": true,
        "deeplinkReason": "EDA",
        "children": [
            {
                "facilityServiceId": 12,
                "facilityTestType": "ELECTRONIC CFF",
                "facilityTestTypeValue": "Electronic Order",
                "testDesc": "Select this option if you were NOT provided a multi-part paper form for drug testing.",
                "precedence": 1,
                "serviceRequestor": null,
                "activeInd": false,
                "skipInsurance": true,
                "deeplinkReason": "EO"
            },
            {
                "facilityServiceId": 18,
                "facilityTestType": "SAP (NON-DOT) COLLECTIONS",
                "facilityTestTypeValue": "Urine",
                "testDesc": "Detects the presence of drugs using a urine sample. Typically used for pre-employment, random or post-accident testing. Donor provided paper order form.",
                "precedence": 2,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "Urine"
            },
            {
                "facilityServiceId": 20,
                "facilityTestType": "NIDA (DOT) COLLECTIONS",
                "facilityTestTypeValue": "Urine - Federally mandated",
                "testDesc": "For employees covered under U.S. Department of Transportation (DOT), Health & Human Services (HHS), and Nuclear Regulatory Commission (NRC) workforce drug testing programs.",
                "precedence": 3,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "UFM"
            },
            {
                "facilityServiceId": 7,
                "facilityTestType": "NETWORK BREATH",
                "facilityTestTypeValue": "Urine - Observed",
                "testDesc": "Not commonly selected by donors.\xa0Observed collections are typically required for Department of Transportation (DOT) testing, return to duty, follow-up testing or in instances where something atypical occurs during standard drug screen collection.",
                "precedence": 4,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "UO"
            },
            {
                "facilityServiceId": 8,
                "facilityTestType": "URINE POCT",
                "facilityTestTypeValue": "Urine - Express Results<sup>TM</sup>  Online",
                "testDesc": "Not commonly selected by donors, unless specifically directed by their employer. Donors likely should not choose this option.",
                "precedence": 5,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "UER"
            },
            {
                "facilityServiceId": 9,
                "facilityTestType": "ORAL FLUID COLLECTIONS",
                "facilityTestTypeValue": "Oral Fluid",
                "testDesc": "Detects the presence of drugs using an oral fluid sample.",
                "precedence": 6,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "OF"
            },
            {
                "facilityServiceId": 10,
                "facilityTestType": "HAIR COLLECTIONS",
                "facilityTestTypeValue": "Hair",
                "testDesc": "Detects the presence of drugs using a hair sample.",
                "precedence": 7,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "Hair"
            },
            {
                "facilityServiceId": 11,
                "facilityTestType": "ELECTRONIC BREATH ALCOHOL",
                "facilityTestTypeValue": "Breath Alcohol",
                "testDesc": "Detects the presence of alcohol using a breathalyzer.",
                "precedence": 8,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": true,
                "deeplinkReason": "BA"
            }
        ]
    },
    {
        "facilityServiceId": 3,
        "facilityTestType": "BLUEPRINT FOR WELLNESS",
        "facilityTestTypeValue": "Employer Health and Wellness",
        "testDesc": "Employer or health plan sponsored health screening.",
        "precedence": 4,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "EHW",
        "children": []
    },
    {
        "facilityServiceId": 4,
        "facilityTestType": "Glucose",
        "facilityTestTypeValue": "Glucose",
        "testDesc": "Select this option to let us know your specific glucose testing need.",
        "precedence": 5,
        "serviceRequestor": "GLUCOSE",
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "GLC",
        "children": [
            {
                "facilityServiceId": 16,
                "facilityTestType": "PHLEBOTOMY",
                "facilityTestTypeValue": "Glucose (most common)",
                "testDesc": "This is a typical 15-minute draw to determine your blood sugar (glucose) levels.",
                "precedence": 1,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": false,
                "deeplinkReason": "GMC"
            },
            {
                "facilityServiceId": 15,
                "facilityTestType": "GLUCOSE TOLERANCE",
                "facilityTestTypeValue": "Glucose Tolerance (1-3 hours) ",
                "testDesc": "Determines your blood sugar (glucose) levels taken at timed intervals over 1-3 hours to screen for diabetes, prediabetes, and gestational diabetes.",
                "precedence": 2,
                "serviceRequestor": null,
                "activeInd": true,
                "skipInsurance": false,
                "deeplinkReason": "GT"
            }
        ]
    },
    {
        "facilityServiceId": 6,
        "facilityTestType": "PHLEBOTOMY",
        "facilityTestTypeValue": "Purchased a test from Quest",
        "testDesc": "Select this option if you have purchased a test from Quest.",
        "precedence": 6,
        "serviceRequestor": "PURCHASETEST",
        "activeInd": true,
        "skipInsurance": true,
        "deeplinkReason": "PQD",
        "children": []
    },
    {
        "facilityServiceId": 5,
        "facilityTestType": "T-SPOT.TB TEST",
        "facilityTestTypeValue": "T-SPOT.<i>TB</i> test (tuberculosis)",
        "testDesc": "T-SPOT.TB test is a blood test for tuberculosis (TB) screening performed in one visit, using one blood collection tube.",
        "precedence": 7,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "TSPOT",
        "children": []
    },
    {
        "facilityServiceId": 36,
        "facilityTestType": "PFIZER COVID COUGH TEST",
        "facilityTestTypeValue": "Pfizer Covid Cough Test",
        "testDesc": "Pfizer Covid Cought Test",
        "precedence": 8,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "COUGH",
        "children": []
    },
    {
        "facilityServiceId": 37,
        "facilityTestType": "Q-NATAL",
        "facilityTestTypeValue": "CA Prenatal Screen / GDSP cfDNA Panel",
        "testDesc": "This prenatal cell-free DNA (cfDNA) screening test is for California pregnant individuals only who are participating in the California Prenatal Program. cfDNA is a screening test ordered by your physician for the common chromosomal conditions of trisomy 21, trisomy 18, and trisomy 13, with the option to learn the sex of the fetus starting at 10 weeks of gestation.",
        "precedence": 9,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "QNTL",
        "children": []
    },
    {
        "facilityServiceId": 28,
        "facilityTestType": "ASYMPTOMATIC COVID TEST",
        "facilityTestTypeValue": "Asymptomatic Covid Test",
        "testDesc": "Asymptomatic Covid Testing tool tip",
        "precedence": 9,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": false,
        "deeplinkReason": "CVASMP",
        "children": []
    },
    {
        "facilityServiceId": 29,
        "facilityTestType": "ASYMPTOMATIC PCR TEST",
        "facilityTestTypeValue": "Asymptomatic PCR Test",
        "testDesc": "Asymptomatic PCR Testing tool tip",
        "precedence": 10,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": false,
        "deeplinkReason": "APCR",
        "children": []
    },
    {
        "facilityServiceId": 32,
        "facilityTestType": "KIT COLLECTION",
        "facilityTestTypeValue": "Galleri Test",
        "testDesc": "Grails Screening tool tip",
        "precedence": 12,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "GALLERI",
        "children": []
    },
    {
        "facilityServiceId": 31,
        "facilityTestType": "OSTEO TEST",
        "facilityTestTypeValue": "Osteoporosis Screening",
        "testDesc": "Osteoporosis Screening tool tip",
        "precedence": 13,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "OSTEO",
        "children": []
    },
    {
        "facilityServiceId": 30,
        "facilityTestType": "DRS TEST",
        "facilityTestTypeValue": "Diabetic Retinopathy Screening",
        "testDesc": "Diabetic Retinopathy Screening tool tip",
        "precedence": 14,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": false,
        "deeplinkReason": "DRS",
        "children": []
    },
    {
        "facilityServiceId": 34,
        "facilityTestType": "KIT COLLECTION",
        "facilityTestTypeValue": "Shield by Guardant Health",
        "testDesc": "Guardant Testing tool tip",
        "precedence": 16,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "GUARDANT",
        "children": []
    },
    {
        "facilityServiceId": 33,
        "facilityTestType": "PHLEBOTOMY",
        "facilityTestTypeValue": "Specimen Pickup/Dropoff",
        "testDesc": "Use this selection if you need to pick up supplies to collect a sample at home (such as a urine or stool sample), or if you are dropping off a sample that you collected at home that was ordered by your doctor.",
        "precedence": 17,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "SPD",
        "children": []
    },
    {
        "facilityServiceId": 35,
        "facilityTestType": "SLEEP APNEA KIT",
        "facilityTestTypeValue": "Sleep Apnea Kit",
        "testDesc": "Sleep Apnea Kit Test",
        "precedence": 18,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "SLEEPAPNEA",
        "children": []
    },
    {
        "facilityServiceId": 38,
        "facilityTestType": "H-PYLORI",
        "facilityTestTypeValue": "Breath Test <i>(H. pylori)</i>",
        "testDesc": "Select this option if you have a sample collection order for Helicobacter pylori, Urea Breath Test, TC14839. Select this appointment option whether you have the breath collection alone or with additional sample collection requests.",
        "precedence": 19,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "HPYL",
        "children": []
    },
    {
        "facilityServiceId": 39,
        "facilityTestType": "PHLEBOTOMY",
        "facilityTestTypeValue": "Routine Labwork",
        "testDesc": "google fitbit - 'Routine Labwork'",
        "precedence": 20,
        "serviceRequestor": null,
        "activeInd": false,
        "skipInsurance": true,
        "deeplinkReason": "RTLW",
        "children": []
    },
    {
        "facilityServiceId": 1,
        "facilityTestType": "PHLEBOTOMY",
        "facilityTestTypeValue": "All Other Tests",
        "testDesc": "Select this option for the majority of your testing needs that are not listed below.",
        "precedence": 50,
        "serviceRequestor": null,
        "activeInd": true,
        "skipInsurance": false,
        "deeplinkReason": "OTHR",
        "children": []
    }
];
exports.default = reasonsList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jyi33":[function(require,module,exports) {
module.exports = require("ce56ef336204932e").getBundleURL("b4d1A") + "arrow.e39856bf.png" + "?" + Date.now();

},{"ce56ef336204932e":"lgJ39"}]},["1xC6H","9PpaW"], null, "parcelRequire70d3")

//# sourceMappingURL=Reasons.835ae7b2.js.map
