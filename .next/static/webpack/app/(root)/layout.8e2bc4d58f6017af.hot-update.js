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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: function() { return /* binding */ connectToDatabase; }\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"(app-pages-browser)/./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\nlet cached = (mongoose__WEBPACK_IMPORTED_MODULE_0___default()) || {\n    conn: null,\n    promise: null\n};\nconst MONGODB_URI = \"mongodb+srv://pprakash050812:21072ppp@evently.tahy1bo.mongodb.net/\";\nconst connectToDatabase = async ()=>{\n    console.log(\"Uri \", process.env.MONGODB_URI);\n    if (cached.conn) return cached.conn;\n    if (!MONGODB_URI) throw new Error(\"MONGODB_URI is missing\");\n    cached.promise = cached.promise || mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n        bufferCommands: false\n    });\n    cached.conn = await cached.promise;\n    return cached.conn;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhYmFzZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBRWhDLElBQUlDLFNBQVNELGlEQUFRQSxJQUFJO0lBQUVFLE1BQU07SUFBTUMsU0FBUztBQUFLO0FBRXJELE1BQU1DLGNBQWNDLG9FQUFtQztBQUVoRCxNQUFNRyxvQkFBb0I7SUFFN0JDLFFBQVFDLEdBQUcsQ0FBQyxRQUFTTCxPQUFPQSxDQUFDQyxHQUFHLENBQUNGLFdBQVc7SUFFOUMsSUFBSUgsT0FBT0MsSUFBSSxFQUFFLE9BQU9ELE9BQU9DLElBQUk7SUFFbkMsSUFBSSxDQUFDRSxhQUFhLE1BQU0sSUFBSU8sTUFBTTtJQUVsQ1YsT0FBT0UsT0FBTyxHQUNaRixPQUFPRSxPQUFPLElBQ2RILHVEQUFnQixDQUFDSSxhQUFhO1FBQzVCUyxnQkFBZ0I7SUFDbEI7SUFFRlosT0FBT0MsSUFBSSxHQUFHLE1BQU1ELE9BQU9FLE9BQU87SUFJbEMsT0FBT0YsT0FBT0MsSUFBSTtBQUNwQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9kYXRhYmFzZS9pbmRleC5qcz80MWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmxldCBjYWNoZWQgPSBtb25nb29zZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkk7XHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdFRvRGF0YWJhc2UgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJVcmkgXCIgLCBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSlcclxuXHJcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm47XHJcblxyXG4gIGlmICghTU9OR09EQl9VUkkpIHRocm93IG5ldyBFcnJvcihcIk1PTkdPREJfVVJJIGlzIG1pc3NpbmdcIik7XHJcblxyXG4gIGNhY2hlZC5wcm9taXNlID1cclxuICAgIGNhY2hlZC5wcm9taXNlIHx8XHJcbiAgICBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCB7XHJcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjYWNoZWQiLCJjb25uIiwicHJvbWlzZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTkdPREJfVVJJIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJjb25uZWN0IiwiYnVmZmVyQ29tbWFuZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/database/index.js\n"));

/***/ })

});