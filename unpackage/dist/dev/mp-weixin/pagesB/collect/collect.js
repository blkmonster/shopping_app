(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesB/collect/collect"],{

/***/ 281:
/*!**************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/main.js?{"page":"pagesB%2Fcollect%2Fcollect"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _collect = _interopRequireDefault(__webpack_require__(/*! ./pagesB/collect/collect.vue */ 282));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_collect.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 282:
/*!*******************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/collect/collect.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collect_vue_vue_type_template_id_61009b42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collect.vue?vue&type=template&id=61009b42& */ 283);
/* harmony import */ var _collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collect.vue?vue&type=script&lang=js& */ 285);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _collect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collect.vue?vue&type=style&index=0&lang=css& */ 287);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _collect_vue_vue_type_template_id_61009b42___WEBPACK_IMPORTED_MODULE_0__["render"],
  _collect_vue_vue_type_template_id_61009b42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _collect_vue_vue_type_template_id_61009b42___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesB/collect/collect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 283:
/*!**************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/collect/collect.vue?vue&type=template&id=61009b42& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_template_id_61009b42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./collect.vue?vue&type=template&id=61009b42& */ 284);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_template_id_61009b42___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_template_id_61009b42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_template_id_61009b42___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_template_id_61009b42___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 284:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/collect/collect.vue?vue&type=template&id=61009b42& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uSwipeAction: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-swipe-action/u-swipe-action */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-swipe-action/u-swipe-action")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-swipe-action/u-swipe-action.vue */ 477))
    },
    uSwipeActionItem: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-swipe-action-item/u-swipe-action-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-swipe-action-item/u-swipe-action-item")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-swipe-action-item/u-swipe-action-item.vue */ 483))
    },
    uRow: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-row/u-row */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-row/u-row")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-row/u-row.vue */ 323))
    },
    uCol: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-col/u-col */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-col/u-col")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-col/u-col.vue */ 331))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 339))
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 285:
/*!********************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/collect/collect.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./collect.vue?vue&type=script&lang=js& */ 286);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 286:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/collect/collect.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var api = __webpack_require__(/*! @/utils/api.js */ 164);
var req = __webpack_require__(/*! @/utils/request.js */ 165);
var utils = __webpack_require__(/*! @/utils/utils.js */ 166);
var _default = {
  data: function data() {
    return {
      shopList: [],
      goodsTotal: 0,
      options1: [{
        text: '删除',
        style: {
          backgroundColor: '#f56c6c'
        }
      }],
      page: 1,
      limit: 10,
      isAdd: false
    };
  },
  onLoad: function onLoad(options) {},
  onShow: function onShow(options) {
    this.getGoodsByCollect();
  },
  onUnload: function onUnload() {
    // 页面关闭
    // console.log("页面关闭")
  },
  onHide: function onHide() {
    // 页面隐藏
  },
  onReachBottom: function onReachBottom() {
    this.page = this.page + 1;
    this.isAdd = true;
    this.getGoodsByCollect();
  },
  methods: {
    //获取商品
    getGoodsByCollect: function getGoodsByCollect() {
      var that = this;
      var params = {
        page: that.page,
        limit: that.limit,
        userId: uni.getStorageSync("userId")
      };
      req.request(api.CollectList, params).then(function (res) {
        if (res.errno === 200) {
          console.log("收藏商品信息", res);
          if (res.data.list.length <= 0) {
            uni.showToast({
              title: '没有更多商品了',
              icon: 'none',
              duration: 2000
            });
          } else {
            if (that.isAdd) {
              that.shopList = that.shopList.concat(res.data.list);
              that.isAdd = false;
            } else {
              that.shopList = res.data.list;
              that.goodsTotal = res.data.total;
            }
          }
        }
      });
    },
    gowu: function gowu(goodsSn) {
      uni.navigateTo({
        url: '/pagesB/goodshop/goodshop?goodsSn=' + goodsSn
      });
    },
    //添加购物车
    addCart: function addCart(goods) {
      var that = this;
      var params = {
        userId: uni.getStorageSync("userId"),
        goodsSn: goods.goodsSn,
        goodsName: goods.name,
        price: goods.price,
        unit: goods.unit,
        picUrl: goods.picUrl
      };
      // console.log("加入购物车参数：", params);
      req.request(api.CartAdd, params, 'POST').then(function (res) {
        console.log("加入购物车返回的值：", res);
        if (res.errno == 200) {
          utils.showErrorToast('加入购物车成功', 'none');
        }
      }).catch(function (err) {
        console.log("加入购物车返回失败值：", err);
      });
    },
    deleteCollect: function deleteCollect(e) {
      var that = this;
      //确认删除
      uni.showModal({
        title: '提示',
        content: '是否删除该收藏商品？',
        success: function success(res) {
          if (res.confirm) {
            // console.log(e)
            req.request(api.CollectDelete, {
              goodsSn: e.name
            }, 'POST').then(function (res) {
              console.log("res:", res);
              if (res.errno == 200) {
                utils.showErrorToast("删除成功！");
                that.page = 1;
                that.getGoodsByCollect();
              } else {
                utils.showErrorToast(res.errmsg, 'none');
              }
            }).catch(function (err) {
              console.log("请求失败", err);
            });
          }
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 287:
/*!****************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/collect/collect.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./collect.vue?vue&type=style&index=0&lang=css& */ 288);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_collect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 288:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/collect/collect.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[281,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesB/collect/collect.js.map