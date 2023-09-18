(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesB/checkout/checkout"],{

/***/ 225:
/*!****************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/main.js?{"page":"pagesB%2Fcheckout%2Fcheckout"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _checkout = _interopRequireDefault(__webpack_require__(/*! ./pagesB/checkout/checkout.vue */ 226));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_checkout.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 226:
/*!*********************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/checkout/checkout.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkout_vue_vue_type_template_id_a627e8a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.vue?vue&type=template&id=a627e8a8& */ 227);
/* harmony import */ var _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.vue?vue&type=script&lang=js& */ 229);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.vue?vue&type=style&index=0&lang=css& */ 231);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkout_vue_vue_type_template_id_a627e8a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkout_vue_vue_type_template_id_a627e8a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _checkout_vue_vue_type_template_id_a627e8a8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesB/checkout/checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 227:
/*!****************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/checkout/checkout.vue?vue&type=template&id=a627e8a8& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_template_id_a627e8a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./checkout.vue?vue&type=template&id=a627e8a8& */ 228);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_template_id_a627e8a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_template_id_a627e8a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_template_id_a627e8a8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_template_id_a627e8a8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 228:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/checkout/checkout.vue?vue&type=template&id=a627e8a8& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uTag: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tag/u-tag */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tag/u-tag.vue */ 439))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 339))
    },
    uLine: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-line/u-line */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-line/u-line")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-line/u-line.vue */ 372))
    },
    uPopup: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 348))
    },
    "u-Input": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--input/u--input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--input/u--input")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--input/u--input.vue */ 447))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.showPopup = true
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 229:
/*!**********************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/checkout/checkout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./checkout.vue?vue&type=script&lang=js& */ 230);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 230:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/checkout/checkout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var api = __webpack_require__(/*! @/utils/api.js */ 164);
var req = __webpack_require__(/*! @/utils/request.js */ 165);
var utils = __webpack_require__(/*! @/utils/utils.js */ 166);
var _default = {
  data: function data() {
    return {
      checkedGoodsList: [],
      checked: false,
      openOrderFlg: false,
      //默认订单明细不显示
      spanStyle: "overflow:auto",
      //动态设置是否能滚动
      address: [],
      addressDetailId: 0,
      showPopup: false,
      payPopup: false,
      timeList: [],
      payList: ['微信支付', '支付宝支付', '花呗支付', '取消支付（支付失败）'],
      orderInfo: {
        userId: uni.getStorageSync("userId"),
        orderStatus: 0,
        userName: '',
        mobile: '',
        address: '',
        message: '',
        appointTime: '',
        num: 0,
        goodsPrice: 0,
        freightPrice: 0,
        couponPrice: 0,
        orderPrice: 0
      }
    };
  },
  onLoad: function onLoad(options) {},
  onReady: function onReady() {
    // 页面渲染完成
  },
  onShow: function onShow() {
    this.getCheckoutInfo();
    this.getAddress();
  },
  onHide: function onHide() {
    // 页面隐藏
  },
  onUnload: function onUnload() {
    // 页面关闭
  },
  methods: {
    //获取已选商品信息信息
    getCheckoutInfo: function getCheckoutInfo() {
      var that = this;
      var params = {
        userId: uni.getStorageSync("userId"),
        checked: 1
      };
      req.request(api.CartList, params).then(function (res) {
        // console.log("购买画面：", res);
        if (res.errno === 200) {
          that.checkedGoodsList = res.data.list, that.getCheckedGoodsCount();
        }
        // uni.hideLoading();
      });
    },
    //获取用户默认地址信息
    getAddress: function getAddress() {
      var _this = this;
      if (this.addressDetailId == 0) {
        var params = {
          userId: uni.getStorageSync("userId"),
          isDefault: 1
        };
      } else {
        var params = {
          id: this.addressDetailId,
          userId: uni.getStorageSync("userId")
        };
      }
      req.request(api.AddressDetail, params).then(function (res) {
        // console.log("默认地址:", res)
        if (res.errno == 200) {
          if (res.data.id == undefined) {
            utils.showErrorToast('请先填写地址！', 'none');
          } else {
            _this.address = res.data;
            _this.orderInfo.userName = _this.address.name;
            _this.orderInfo.mobile = _this.address.tel;
            _this.orderInfo.address = _this.address.addressDetail + _this.address.areaCode;
          }
        } else {
          _this.address = [];
        }
      }).catch(function (err) {
        console.log("请求失败", err);
      });
    },
    // 获取已选数量和金额
    getCheckedGoodsCount: function getCheckedGoodsCount() {
      var checkedGoodsCount = 0;
      var checkedGoodsAmount = 0;
      this.checkedGoodsList.forEach(function (v) {
        checkedGoodsCount += v.number;
        checkedGoodsAmount += v.price * v.number;
      });
      //商品数量
      this.orderInfo.num = checkedGoodsCount;
      //商品应付金额
      this.orderInfo.goodsPrice = checkedGoodsAmount;
      //实付金额（商品金额+配送费-优惠券），暂定为商品金额
      this.orderInfo.orderPrice = checkedGoodsAmount;
    },
    // 进行展开或者伸缩
    doOpenOrClose: function doOpenOrClose() {
      this.openOrderFlg = !this.openOrderFlg;
    },
    // 去下单
    doSubmitOrder: function doSubmitOrder() {
      var that = this;
      if (that.checkOrderInfo()) {
        that.payPopup = true;
      } else {
        utils.showErrorToast('请填写订单信息！', 'none');
      }
    },
    // 校验订单信息
    checkOrderInfo: function checkOrderInfo() {
      if (this.orderInfo.userId == undefined || this.orderInfo.userId == '') {
        return false;
      }
      if (this.orderInfo.userName == undefined || this.orderInfo.userName == '') {
        return false;
      }
      if (this.orderInfo.mobile == undefined || this.orderInfo.mobile == '') {
        return false;
      }
      if (this.orderInfo.address == undefined || this.orderInfo.address == '') {
        return false;
      }
      if (this.orderInfo.appointTime == undefined || this.orderInfo.appointTime == '') {
        return false;
      }
      if (this.orderInfo.num == 0) {
        return false;
      }
      if (this.orderInfo.goodsPrice == 0) {
        return false;
      }
      if (this.orderInfo.orderPrice == 0) {
        return false;
      }
      return true;
    },
    // 支付订单
    selectPay: function selectPay(index) {
      var that = this;
      if (index == 3) {
        that.orderInfo.orderStatus = 101;
      } else {
        that.orderInfo.orderStatus = 201;
      }
      utils.showErrorToast('支付方式为：' + that.payList[index], 'none');
      console.log("订单信息", that.orderInfo);
      req.request(api.OrderSubmit, that.orderInfo, 'POST').then(function (res) {
        if (res.errno === 200) {
          uni.redirectTo({
            url: '/pagesB/payResult/payResult?sucess=1'
          });
        } else if (res.errno === -1) {
          uni.redirectTo({
            url: '/pagesB/payResult/payResult?sucess=0'
          });
        }
      });
    },
    selectAddress: function selectAddress() {
      uni.navigateTo({
        url: '/pagesB/address/address?addressId=' + 1
      });
    },
    selectTime: function selectTime(index) {
      this.orderInfo.appointTime = index;
      // console.log(index) // 此处输出选中的时间索引值
      this.showPopup = false;
    },
    getTimeList: function getTimeList() {
      var now = new Date();
      // 获取当前时间加上半个小时的格式化时间
      var time1 = this.formatTime(new Date(now.getTime() + 30 * 60 * 1000));
      // 获取比当前时间大的整数时间的格式化时间
      var time2 = this.formatTime(new Date(now.getTime() + 90 * 60 * 1000));
      // 获取比 time2 大1小时的格式化时间
      var time3 = this.formatTime(new Date(now.getTime() + 150 * 60 * 1000));
      this.timeList = [time1, time2, time3];
    },
    formatTime: function formatTime(date) {
      var year = date.getFullYear();
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var day = String(date.getDate()).padStart(2, '0');
      var hour = String(date.getHours()).padStart(2, '0');
      var minute = String(date.getMinutes()).padStart(2, '0');
      return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":00");
    },
    change: function change(e) {
      this.orderInfo.message = e;
    },
    close: function close() {
      this.showPopup = false;
      this.payPopup = false;
    }
  },
  watch: {
    showPopup: function showPopup(newValue, oldValue) {
      if (newValue) {
        this.getTimeList();
      } else {
        this.timeList = [];
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 231:
/*!******************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/checkout/checkout.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./checkout.vue?vue&type=style&index=0&lang=css& */ 232);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 232:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/checkout/checkout.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[225,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesB/checkout/checkout.js.map