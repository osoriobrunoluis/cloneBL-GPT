"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/utils/openai.ts":
/*!*****************************!*\
  !*** ./src/utils/openai.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openai: function() { return /* binding */ openai; }\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(app-pages-browser)/./node_modules/openai/dist/index.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: \"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\"\n});\nconst api = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(config);\nconst openai = {\n    generate: async (messages)=>{\n        try {\n            var _response_data_choices__message;\n            const response = await api.createChatCompletion({\n                model: \"gpt-3.5-turbo\",\n                temperature: 0.6,\n                messages\n            });\n            return (_response_data_choices__message = response.data.choices[0].message) === null || _response_data_choices__message === void 0 ? void 0 : _response_data_choices__message.content;\n        } catch (error) {\n            return undefined;\n        }\n    },\n    translateMessages: (messages)=>{\n        let reqMessages = [];\n        for(let i in messages){\n            reqMessages.push({\n                role: messages[i].author === \"me\" ? \"user\" : \"assistant\",\n                content: messages[i].body\n            });\n        }\n        return reqMessages;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9vcGVuYWkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2dGO0FBRWhGLE1BQU1FLFNBQVMsSUFBSUYsaURBQWFBLENBQUM7SUFDL0JHLFFBQVFDLHFEQUFzQztBQUNoRDtBQUVBLE1BQU1HLE1BQU0sSUFBSU4sNkNBQVNBLENBQUNDO0FBRW5CLE1BQU1NLFNBQVU7SUFDckJDLFVBQVUsT0FBT0M7UUFDZixJQUFJO2dCQU9LQztZQU5QLE1BQU1BLFdBQVcsTUFBTUosSUFBSUssb0JBQW9CLENBQUM7Z0JBRTlDQyxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiSjtZQUNGO1lBQ0EsUUFBT0Msa0NBQUFBLFNBQVNJLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxjQUFoQ04sc0RBQUFBLGdDQUFrQ08sT0FBTztRQUNsRCxFQUFFLE9BQU9DLE9BQU87WUFDZCxPQUFPQztRQUNUO0lBQ0Y7SUFFQUMsbUJBQW1CLENBQUNYO1FBQ2xCLElBQUlZLGNBQThDLEVBQUU7UUFFcEQsSUFBSyxJQUFJQyxLQUFLYixTQUFVO1lBQ3RCWSxZQUFZRSxJQUFJLENBQUM7Z0JBQ2ZDLE1BQU1mLFFBQVEsQ0FBQ2EsRUFBRSxDQUFDRyxNQUFNLEtBQUssT0FBTyxTQUFTO2dCQUM3Q1IsU0FBU1IsUUFBUSxDQUFDYSxFQUFFLENBQUNJLElBQUk7WUFDM0I7UUFDRjtRQUNBLE9BQU9MO0lBQ1Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9vcGVuYWkudHM/YTNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGF0TWVzc2FnZSB9IGZyb20gXCJAL3R5cGVzL0NoYXRNZXNzYWdlXCI7XG5pbXBvcnQgeyBDaGF0Q29tcGxldGlvblJlcXVlc3RNZXNzYWdlLCBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOQUlfQVBJX0tFWSxcbn0pO1xuXG5jb25zdCBhcGkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCBvcGVuYWkgID0ge1xuICBnZW5lcmF0ZTogYXN5bmMgKG1lc3NhZ2VzOiBDaGF0Q29tcGxldGlvblJlcXVlc3RNZXNzYWdlW10pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuY3JlYXRlQ2hhdENvbXBsZXRpb24oe1xuICAgICAgICBcbiAgICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgICB0ZW1wZXJhdHVyZTogMC42LFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS5tZXNzYWdlPy5jb250ZW50O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcblxuICB0cmFuc2xhdGVNZXNzYWdlczogKG1lc3NhZ2VzOiBDaGF0TWVzc2FnZVtdKSA9PiB7XG4gICAgbGV0IHJlcU1lc3NhZ2VzOiBDaGF0Q29tcGxldGlvblJlcXVlc3RNZXNzYWdlW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgaW4gbWVzc2FnZXMpIHtcbiAgICAgIHJlcU1lc3NhZ2VzLnB1c2goe1xuICAgICAgICByb2xlOiBtZXNzYWdlc1tpXS5hdXRob3IgPT09IFwibWVcIiA/IFwidXNlclwiIDogXCJhc3Npc3RhbnRcIixcbiAgICAgICAgY29udGVudDogbWVzc2FnZXNbaV0uYm9keSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVxTWVzc2FnZXM7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfT1BFTkFJX0FQSV9LRVkiLCJhcGkiLCJvcGVuYWkiLCJnZW5lcmF0ZSIsIm1lc3NhZ2VzIiwicmVzcG9uc2UiLCJjcmVhdGVDaGF0Q29tcGxldGlvbiIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJkYXRhIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJjb250ZW50IiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJ0cmFuc2xhdGVNZXNzYWdlcyIsInJlcU1lc3NhZ2VzIiwiaSIsInB1c2giLCJyb2xlIiwiYXV0aG9yIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/openai.ts\n"));

/***/ })

});