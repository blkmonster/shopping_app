(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesB/comment/comment"],{

/***/ 265:
/*!**************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/main.js?{"page":"pagesB%2Fcomment%2Fcomment"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _comment = _interopRequireDefault(__webpack_require__(/*! ./pagesB/comment/comment.vue */ 266));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_comment.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 266:
/*!*******************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/comment/comment.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_vue_vue_type_template_id_56aeebac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.vue?vue&type=template&id=56aeebac& */ 267);
/* harmony import */ var _comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.vue?vue&type=script&lang=js& */ 269);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.vue?vue&type=style&index=0&lang=css& */ 271);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _comment_vue_vue_type_template_id_56aeebac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _comment_vue_vue_type_template_id_56aeebac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _comment_vue_vue_type_template_id_56aeebac___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesB/comment/comment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 267:
/*!**************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/comment/comment.vue?vue&type=template&id=56aeebac& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_template_id_56aeebac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./comment.vue?vue&type=template&id=56aeebac& */ 268);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_template_id_56aeebac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_template_id_56aeebac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_template_id_56aeebac___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_template_id_56aeebac___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 268:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/comment/comment.vue?vue&type=template&id=56aeebac& ***!
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
    uRate: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-rate/u-rate */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-rate/u-rate")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-rate/u-rate.vue */ 527))
    },
    uUpload: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-upload/u-upload */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-upload/u-upload")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-upload/u-upload.vue */ 467))
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
  var l1 = _vm.__map(_vm.goods, function (good, index) {
    var $orig = _vm.__get_orig(good)
    var l0 = _vm.__map(_vm.words, function (word, idx) {
      var $orig = _vm.__get_orig(word)
      var m0 = _vm.hasWord(index, word)
      return {
        $orig: $orig,
        m0: m0,
      }
    })
    return {
      $orig: $orig,
      l0: l0,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 269:
/*!********************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/comment/comment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./comment.vue?vue&type=script&lang=js& */ 270);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 270:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/comment/comment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 55));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 57));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      orderId: 0,
      goods: [],
      goodsLen: 0,
      index: 0,
      // 固定的关键词选项
      words: [],
      // 每个商品的图片评价
      star: [],
      keywords: [[]],
      content: [],
      hasPicture: [],
      picUrls: [[]]
    };
  },
  onLoad: function onLoad(options) {
    this.orderId = options.id;
    this.getOrderDetail();
    this.getSearchKeyword();
  },
  onReachBottom: function onReachBottom() {},
  onShow: function onShow() {},
  methods: {
    getOrderDetail: function getOrderDetail() {
      uni.showLoading({
        title: '加载中'
      });
      setTimeout(function () {
        uni.hideLoading();
      }, 2000);
      var that = this;
      var params = {
        id: that.orderId
      };
      req.request(api.OrderDetail, params).then(function (res) {
        if (res.errno === 200) {
          console.log("订单详情返回成功结果", res.data);
          that.goods = res.data.orderGoodsList;
          that.goodsLen = res.data.orderGoodsList.length;
        } else {
          console.log("订单详情", res);
        }
        uni.hideLoading();
      }).catch(function (err) {
        console.log("订单详情", err);
      });
    },
    getSearchKeyword: function getSearchKeyword() {
      var that = this;
      req.request(api.KeywordList, {
        value: 2
      }).then(function (res) {
        // console.log("关键字",res)
        that.words = res.data.list;
      }).catch(function (err) {
        console.log("数据接收失败", err);
      });
    },
    // 上传图片
    afterRead: function afterRead(event) {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var lists, i;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
                lists = [].concat(event.file); // 循环上传图片到后端
                i = 0;
              case 2:
                if (!(i < lists.length)) {
                  _context.next = 8;
                  break;
                }
                _context.next = 5;
                return _this.uploadFilePromise(lists[i].url).then(function (res) {
                  res = JSON.parse(res);
                  if (res.errno === 200) {
                    if (_this.picUrls[_this.index] === undefined) {
                      _this.picUrls[_this.index] = [];
                    }
                    _this.picUrls[_this.index].push(res.data.url);
                    console.log(res.data.url);
                    _this.$forceUpdate();
                  } else {
                    console.log("上传失败", res);
                  }
                });
              case 5:
                i++;
                _context.next = 2;
                break;
              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    uploadFilePromise: function uploadFilePromise(url) {
      return new Promise(function (resolve, reject) {
        uni.uploadFile({
          url: api.StorageAdd,
          filePath: url,
          name: 'file',
          header: {
            'Content-Type': 'multipart/form-data',
            'ZX-Shopping-Token': uni.getStorageSync('token')
          },
          success: function success(res) {
            resolve(res.data);
          }
        });
      });
    },
    setIndex: function setIndex(index) {
      this.index = index;
      console.log("index:", index);
    },
    // 关键词，有则删除，无则添加
    toggleKeyword: function toggleKeyword(index, word) {
      if (this.keywords[index] === undefined) {
        this.keywords[index] = [];
      }
      var wordIndex = this.keywords[index].indexOf(word);
      if (wordIndex === -1) {
        // 当keywords中不包含该word时，添加word
        this.keywords[index].push(word);
      } else {
        // 当keywords中包含该word时，移除该word
        this.keywords[index].splice(wordIndex, 1);
      }
      this.$forceUpdate();
    },
    // 判断是否有该关键词
    hasWord: function hasWord(index, word) {
      if (this.keywords[index] === undefined) {
        this.keywords[index] = [];
      }
      var wordIndex = this.keywords[index].indexOf(word);
      if (wordIndex === -1) {
        return false;
      } else {
        return true;
      }
    },
    // 删除图片
    deletePic: function deletePic(event) {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var i, index, result;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('删除', event);
                i = 0;
              case 2:
                if (!(i < _this2.goodsLen)) {
                  _context2.next = 14;
                  break;
                }
                if (!(event.file == _this2.picUrls[i][event.index])) {
                  _context2.next = 11;
                  break;
                }
                _this2.picUrls[i].splice(event.index, 1);
                _this2.$forceUpdate();
                index = event.file.indexOf('fetch/');
                result = event.file.substring(index + 'fetch/'.length);
                console.log(result);
                req.request(api.StorageDelete, {
                  key: result
                }, 'POST');
                return _context2.abrupt("return");
              case 11:
                i++;
                _context2.next = 2;
                break;
              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // 提交评价
    submit: function submit() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var that;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = _this3;
                if (that.isAllEvaluateCompleted()) {
                  uni.showModal({
                    title: '提示',
                    content: '是否提交评价？',
                    success: function success(res) {
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
                        var i, comment;
                        return _regenerator.default.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!res.confirm) {
                                  _context3.next = 13;
                                  break;
                                }
                                i = 0;
                              case 2:
                                if (!(i < that.goodsLen)) {
                                  _context3.next = 11;
                                  break;
                                }
                                comment = {
                                  goodsSn: that.goods[i].goodsSn,
                                  userId: uni.getStorageSync("userId"),
                                  star: that.star[i],
                                  keywords: that.keywords[i].toString(),
                                  content: that.content[i],
                                  hasPicture: 0,
                                  picUrls: []
                                };
                                if (comment.content == undefined) {
                                  comment.content = '';
                                }
                                if (that.picUrls[i] !== undefined && that.picUrls[i].length > 0) {
                                  comment.hasPicture = 1;
                                  comment.picUrls = that.picUrls[i];
                                }
                                _context3.next = 8;
                                return that.addComment(comment);
                              case 8:
                                i++;
                                _context3.next = 2;
                                break;
                              case 11:
                                //修改订单状态，返回订单页面
                                req.request(api.OrderOver, {
                                  id: that.orderId
                                }, 'POST');
                                uni.navigateBack({
                                  delta: 1
                                });
                              case 13:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3);
                      }))();
                    }
                  });
                } else {
                  // 有未填写的评价
                  uni.showToast({
                    title: '部分商品未评分',
                    icon: 'none'
                  });
                }
              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    // 检查是否填写了所有评价
    isAllEvaluateCompleted: function isAllEvaluateCompleted() {
      console.log('star:', this.star);
      for (var i = 0, len = this.goods.length; i < len; i++) {
        if (this.star[i] <= 0 || this.star[i] === undefined) {
          // 如果有一个商品的评价没填写，则返回false
          return false;
        }
      }
      // 所有商品的评价都填写了，则返回true
      return true;
    },
    addComment: function addComment(comment) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var res;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return req.request(api.CommentAdd, comment, 'POST');
              case 3:
                res = _context5.sent;
                console.log('comment', comment);
                if (res.errno === 200) {
                  // 提交成功，返回订单页面
                } else {}
                _context5.next = 10;
                break;
              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 271:
/*!****************************************************************************************************!*\
  !*** D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/comment/comment.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../QQ接收文件/HBuilderX3.1.22.20210709/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./comment.vue?vue&type=style&index=0&lang=css& */ 272);
/* harmony import */ var _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QQ_HBuilderX3_1_22_20210709_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 272:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/毕业设计/在线买菜小程序/shopping/pagesB/comment/comment.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[265,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesB/comment/comment.js.map