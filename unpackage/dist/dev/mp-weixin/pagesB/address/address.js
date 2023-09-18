(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesB/address/address"],{

/***/ 249:
/*!**************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/main.js?{"page":"pagesB%2Faddress%2Faddress"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _address = _interopRequireDefault(__webpack_require__(/*! ./pagesB/address/address.vue */ 250));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_address.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 250:
/*!*******************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/address/address.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _address_vue_vue_type_template_id_f3628654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.vue?vue&type=template&id=f3628654& */ 251);
/* harmony import */ var _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.vue?vue&type=script&lang=js& */ 253);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.vue?vue&type=style&index=0&lang=css& */ 255);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _address_vue_vue_type_template_id_f3628654___WEBPACK_IMPORTED_MODULE_0__["render"],
  _address_vue_vue_type_template_id_f3628654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _address_vue_vue_type_template_id_f3628654___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesB/address/address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 251:
/*!**************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/address/address.vue?vue&type=template&id=f3628654& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_f3628654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./address.vue?vue&type=template&id=f3628654& */ 252);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_f3628654___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_f3628654___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_f3628654___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_template_id_f3628654___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 252:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/address/address.vue?vue&type=template&id=f3628654& ***!
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
    uTag: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tag/u-tag */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tag/u-tag.vue */ 439))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 339))
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
  var l0 = _vm.__map(_vm.addressList, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var m0 = _vm.sexName(item.sex)
    return {
      $orig: $orig,
      m0: m0,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 253:
/*!********************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/address/address.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./address.vue?vue&type=script&lang=js& */ 254);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 254:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/address/address.vue?vue&type=script&lang=js& ***!
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

var api = __webpack_require__(/*! @/utils/api.js */ 164);
var req = __webpack_require__(/*! @/utils/request.js */ 165);
var utils = __webpack_require__(/*! @/utils/utils.js */ 166);
var app = getApp();
var _default = {
  data: function data() {
    return {
      addressList: [],
      options1: [{
        text: '删除',
        style: {
          backgroundColor: '#f56c6c'
        }
      }],
      addressId: 0
    };
  },
  onLoad: function onLoad(option) {
    console.log("传递addressId值", option.addressId);
    this.addressId = option.addressId;
    // this.getAddressList();
  },
  onShow: function onShow() {
    this.getAddressList();
  },
  methods: {
    //获取用户地址列表
    getAddressList: function getAddressList() {
      var _this = this;
      req.request(api.AddressList, {
        userId: uni.getStorageSync("userId")
      }).then(function (res) {
        // console.log("res:", res)
        if (res.errno == 200) {
          _this.addressList = res.data.list;
          // console.log("addressList",this.addressList)
        } else {
          utils.showErrorToast(res.errmsg, 'none');
        }
      }).catch(function (err) {
        console.log("请求失败", err);
      });
    },
    //修改地址
    setAddress: function setAddress(id) {
      uni.navigateTo({
        url: '/pagesB/addressAdd/addressAdd?id=' + id
      });
    },
    //添加地址
    addAddress: function addAddress() {
      uni.navigateTo({
        url: '/pagesB/addressAdd/addressAdd'
      });
    },
    //删除地址
    deleteAddress: function deleteAddress(e) {
      var that = this;
      //确认删除
      uni.showModal({
        title: '提示',
        content: '是否删除该收藏商品？',
        success: function success(res) {
          if (res.confirm) {
            req.request(api.AddressDelete, {
              id: e.name
            }, 'POST').then(function (res) {
              console.log("res:", res);
              if (res.errno == 200) {
                utils.showErrorToast("删除成功！");
                that.getAddressList();
              } else {
                utils.showErrorToast(res.errmsg, 'none');
              }
            }).catch(function (err) {
              console.log("请求失败", err);
            });
          }
        }
      });
    },
    sexName: function sexName(index) {
      if (index == 1) {
        return "先生";
      } else {
        return "女士";
      }
    },
    returnCheckout: function returnCheckout(id) {
      if (this.addressId == 1) {
        // 返回上一层页面，并关闭当前页面
        uni.navigateBack({
          delta: 1,
          success: function () {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 1]; // 获取上一个页面实例对象
            prevPage.$vm._data.addressDetailId = id;
            prevPage.$vm.getAddress();
          }.bind(this)
        });
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 255:
/*!****************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/address/address.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./address.vue?vue&type=style&index=0&lang=css& */ 256);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 256:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/address/address.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[249,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesB/address/address.js.map