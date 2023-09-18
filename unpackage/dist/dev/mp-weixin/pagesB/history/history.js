(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesB/history/history"],{

/***/ 193:
/*!**************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/main.js?{"page":"pagesB%2Fhistory%2Fhistory"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _history = _interopRequireDefault(__webpack_require__(/*! ./pagesB/history/history.vue */ 194));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_history.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 194:
/*!*******************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/history/history.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _history_vue_vue_type_template_id_18c20e16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.vue?vue&type=template&id=18c20e16& */ 195);
/* harmony import */ var _history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.vue?vue&type=script&lang=js& */ 197);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _history_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.vue?vue&type=style&index=0&lang=css& */ 199);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _history_vue_vue_type_template_id_18c20e16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _history_vue_vue_type_template_id_18c20e16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _history_vue_vue_type_template_id_18c20e16___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesB/history/history.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 195:
/*!**************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/history/history.vue?vue&type=template&id=18c20e16& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_template_id_18c20e16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./history.vue?vue&type=template&id=18c20e16& */ 196);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_template_id_18c20e16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_template_id_18c20e16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_template_id_18c20e16___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_template_id_18c20e16___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 196:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/history/history.vue?vue&type=template&id=18c20e16& ***!
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
    uSticky: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-sticky/u-sticky */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-sticky/u-sticky")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-sticky/u-sticky.vue */ 289))
    },
    uSubsection: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-subsection/u-subsection */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-subsection/u-subsection")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-subsection/u-subsection.vue */ 396))
    },
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 404))
    },
    uPopup: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 348))
    },
    uLine: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-line/u-line */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-line/u-line")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-line/u-line.vue */ 372))
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
  var g0 = _vm.orderList.length
  var l0 = _vm.__map(_vm.orderList, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var m0 = _vm.getOrderStatus(item.orderStatus)
    return {
      $orig: $orig,
      m0: m0,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 197:
/*!********************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/history/history.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./history.vue?vue&type=script&lang=js& */ 198);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/history/history.vue?vue&type=script&lang=js& ***!
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
var util = __webpack_require__(/*! @/utils/utils.js */ 166);
var _default = {
  data: function data() {
    return {
      orderList: [],
      tablist: ["全部", "待支付", "待收货", "待评价"],
      spanStyle: "overflow:auto",
      //动态设置是否能滚动
      order: {
        userId: uni.getStorageSync("userId"),
        curNow: 0
      },
      payPopup: false,
      payOrderId: 0,
      payList: ['微信支付', '支付宝支付', '花呗支付', '取消支付（支付失败）']
    };
  },
  onLoad: function onLoad(options) {},
  onReachBottom: function onReachBottom() {
    uni.showToast({
      title: '没有更多订单了',
      icon: 'none',
      duration: 2000
    });
    return false;
  },
  onShow: function onShow() {
    // console.log("订单列表onShow");
    // 页面显示
    this.getHistory();
  },
  methods: {
    getHistory: function getHistory() {
      var that = this;
      uni.showLoading({
        title: '查询中....',
        mask: true
      });
      req.request(api.OrderList, that.order).then(function (res) {
        console.log("获取订单列表", res);
        uni.hideLoading();
        if (res.errno == 200) {
          that.orderList = res.data.list;
        } else {
          util.showErrorToast(res.errmsg, 'none');
        }
      }).catch(function (err) {
        console.log("获取订单列表失败", err);
        uni.hideLoading();
      });
    },
    // 确认收货
    confirm: function confirm(id) {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '是否确认收货？',
        success: function success(res) {
          if (res.confirm) {
            req.request(api.OrderConfirm, {
              id: id
            }, 'POST').then(function (res) {
              if (res.errno === 200) {
                util.showErrorToast('已确认收货', 'none');
                that.getHistory();
              } else {
                util.showErrorToast(res.errmsg, 'none');
              }
            });
          }
        }
      });
    },
    // 取消订单
    deleteOrder: function deleteOrder(id) {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '是否取消订单？',
        success: function success(res) {
          if (res.confirm) {
            req.request(api.OrderDelete, {
              id: id
            }, 'POST').then(function (res) {
              if (res.errno === 200) {
                util.showErrorToast('已取消', 'none');
                that.getHistory();
              } else {
                util.showErrorToast(res.errmsg, 'none');
              }
            });
          }
        }
      });
    },
    // 去评价，跳转评价页面
    evaluate: function evaluate(id) {
      uni.navigateTo({
        url: '/pagesB/comment/comment?id=' + id
      });
    },
    // 立即支付
    selectPay: function selectPay(index) {
      var that = this;
      that.payPopup = false;
      if (index == 3) {
        util.showErrorToast('支付失败！', 'none');
        return;
      }
      req.request(api.OrderPay, {
        id: that.payOrderId
      }, 'POST').then(function (res) {
        if (res.errno === 200) {
          util.showErrorToast('支付成功！', 'none');
          that.getHistory();
        } else {
          util.showErrorToast(res.errmsg, 'none');
        }
      });
    },
    showPayPopup: function showPayPopup(id) {
      this.payOrderId = id;
      this.payPopup = true;
    },
    godetail: function godetail(id) {
      uni.navigateTo({
        url: '/pagesB/orderDetail/orderDetail?id=' + id
      });
    },
    // 切换标题
    sectionChange: function sectionChange(index) {
      var that = this;
      // console.log("tab切换",index)
      that.order.curNow = index;
      that.getHistory();
    },
    getOrderStatus: function getOrderStatus(e) {
      switch (e) {
        case 101:
          return "待支付";
        case 102:
          return "已取消";
        case 103:
          return "商家取消";
        case 201:
          return "待发货";
        case 202:
          return "申请退款中";
        case 203:
          return "退款成功";
        case 301:
          return "已发货";
        case 401:
          return "已收货";
        case 402:
          return "系统收货";
        case 501:
          return "待评价";
        case 502:
          return "已完成";
        default:
          return "订单错误";
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 199:
/*!****************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/history/history.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./history.vue?vue&type=style&index=0&lang=css& */ 200);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_history_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 200:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/history/history.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[193,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesB/history/history.js.map