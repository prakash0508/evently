"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./lib/database/index.js":
/*!*******************************!*\
  !*** ./lib/database/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: function() { return /* binding */ connectToDatabase; }\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"(app-pages-browser)/./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\nlet cached = (mongoose__WEBPACK_IMPORTED_MODULE_0___default()) || {\n    conn: null,\n    promise: null\n};\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst connectToDatabase = async ()=>{\n    console.log();\n    if (cached.conn) return cached.conn;\n    if (!MONGODB_URI) throw new Error(\"MONGODB_URI is missing\");\n    cached.promise = cached.promise || mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n        bufferCommands: false\n    });\n    cached.conn = await cached.promise;\n    return cached.conn;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhYmFzZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBRWhDLElBQUlDLFNBQVNELGlEQUFRQSxJQUFJO0lBQUVFLE1BQU07SUFBTUMsU0FBUztBQUFLO0FBRXJELE1BQU1DLGNBQWNDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0YsV0FBVztBQUVwQyxNQUFNRyxvQkFBb0I7SUFFN0JDLFFBQVFDLEdBQUc7SUFFYixJQUFJUixPQUFPQyxJQUFJLEVBQUUsT0FBT0QsT0FBT0MsSUFBSTtJQUVuQyxJQUFJLENBQUNFLGFBQWEsTUFBTSxJQUFJTSxNQUFNO0lBRWxDVCxPQUFPRSxPQUFPLEdBQ1pGLE9BQU9FLE9BQU8sSUFDZEgsdURBQWdCLENBQUNJLGFBQWE7UUFDNUJRLGdCQUFnQjtJQUNsQjtJQUVGWCxPQUFPQyxJQUFJLEdBQUcsTUFBTUQsT0FBT0UsT0FBTztJQUlsQyxPQUFPRixPQUFPQyxJQUFJO0FBQ3BCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGFiYXNlL2luZGV4LmpzPzQxZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxubGV0IGNhY2hlZCA9IG1vbmdvb3NlIHx8IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygpXHJcblxyXG4gIGlmIChjYWNoZWQuY29ubikgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG5cclxuICBpZiAoIU1PTkdPREJfVVJJKSB0aHJvdyBuZXcgRXJyb3IoXCJNT05HT0RCX1VSSSBpcyBtaXNzaW5nXCIpO1xyXG5cclxuICBjYWNoZWQucHJvbWlzZSA9XHJcbiAgICBjYWNoZWQucHJvbWlzZSB8fFxyXG4gICAgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiBjYWNoZWQuY29ubjtcclxufTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY2FjaGVkIiwiY29ubiIsInByb21pc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsImNvbm5lY3QiLCJidWZmZXJDb21tYW5kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/database/index.js\n"));

/***/ })

});