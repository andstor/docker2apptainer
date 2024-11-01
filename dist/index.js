/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 332:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = __nccwpck_require__(332);
const child_process = __nccwpck_require__(317);

try {
  // `who-to-greet` input defined in action metadata file
  const dockerImage = core.getInput('docker-image');
  const imagePath = core.getInput('save-path');

  //run cmd to build docker image
  const cmd = `apptainer build ${imagePath} ${dockerImage}`;
  child_process.execSync(cmd);

  // set the output to the path of the file
  core.setOutput("image-path", imagePath);

} catch (error) {
  core.setFailed(error.message);
}
module.exports = __webpack_exports__;
/******/ })()
;