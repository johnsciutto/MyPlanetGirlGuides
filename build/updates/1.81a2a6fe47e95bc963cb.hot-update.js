require("source-map-support").install();
exports.id = 1;
exports.modules = {

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Navigation/Navigation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n/* responsive menu */\n\n.Navigation-menu_res-L5_3W {\n  display: none; \n  position: relative;\n  margin-right: 10px;\n  float: right;\n  width: 30px;\n  height: 25px;\n  cursor: pointer;\n}\n\n.Navigation-menu_res-L5_3W span {\n    display: block;\n    position: absolute;\n    height: 4px;\n    width: 100%;\n    background: #fff;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n}\n\n.Navigation-menu_res-L5_3W.Navigation-off-2SCHg span:nth-child(2) {\n  top: 10px;\n}\n\n.Navigation-menu_res-L5_3W.Navigation-off-2SCHg span:nth-child(4) {\n  top: 20px;\n}\n\n.Navigation-menu_res-L5_3W.Navigation-on-30J3T span:nth-child(1),.Navigation-menu_res-L5_3W.Navigation-on-30J3T span:nth-child(4){\n  display: none;\n}\n\n.Navigation-menu_res-L5_3W.Navigation-on-30J3T span:nth-child(2){\n      -webkit-transform: rotate(-45deg);\n          -ms-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n}\n\n@media (max-width: 600px) {\n  .Navigation-root-2gcJx {\n    float: right;\n    margin: 9px 0 0;\n  }\n  .Navigation-links-1ZF3O.Navigation-off-2SCHg{\n    display: none;\n  }\n   .Navigation-links-1ZF3O {\n    position: absolute;\n    top: 57px;\n    left: 0;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #00549e;\n  } \n  .Navigation-link-Ntl35 {\n    padding: 9px 8px;\n    width: 100%;\n    text-align: center;\n    -webkit-transition: ease all 0.3s;\n      -o-transition: ease all 0.3s;\n      transition: ease all 0.3s\n  } \n  .Navigation-link-Ntl35:hover {\n    background: #739DD2;\n  }\n  .Navigation-menu_res-L5_3W {\n     display: inline-block; \n  }\n}", "", {"version":3,"sources":["/Users/jxm/Downloads/MyPlanetGirlGuides/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED,qBAAqB;;AAErB;EACE,cAAc;EACd,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,gBAAgB;CACjB;;AAED;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,QAAQ;CACX;;AAED;EACE,UAAU;CACX;;AAED;EACE,UAAU;CACX;;AAED;EACE,cAAc;CACf;;AAED;MACM,kCAAkC;UAC9B,8BAA8B;cAC1B,0BAA0B;CACvC;;AAED;EACE;IACE,aAAa;IACb,gBAAgB;GACjB;EACD;IACE,cAAc;GACf;GACA;IACC,mBAAmB;IACnB,UAAU;IACV,QAAQ;IACR,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,6BAA6B;IAC7B,8BAA8B;QAC1B,2BAA2B;YACvB,uBAAuB;IAC/B,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,oBAAoB;GACrB;EACD;IACE,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,kCAAkC;MAChC,6BAA6B;MAC7B,yBAAyB;GAC5B;EACD;IACE,oBAAoB;GACrB;EACD;KACG,sBAAsB;GACxB;CACF","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n/* responsive menu */\n\n.menu_res {\n  display: none; \n  position: relative;\n  margin-right: 10px;\n  float: right;\n  width: 30px;\n  height: 25px;\n  cursor: pointer;\n}\n\n.menu_res span {\n    display: block;\n    position: absolute;\n    height: 4px;\n    width: 100%;\n    background: #fff;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n}\n\n.menu_res.off span:nth-child(2) {\n  top: 10px;\n}\n\n.menu_res.off span:nth-child(4) {\n  top: 20px;\n}\n\n.menu_res.on span:nth-child(1),.menu_res.on span:nth-child(4){\n  display: none;\n}\n\n.menu_res.on span:nth-child(2){\n      -webkit-transform: rotate(-45deg);\n          -ms-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n}\n\n@media (max-width: 600px) {\n  .root {\n    float: right;\n    margin: 9px 0 0;\n  }\n  .links.off{\n    display: none;\n  }\n   .links {\n    position: absolute;\n    top: 57px;\n    left: 0;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #00549e;\n  } \n  .link {\n    padding: 9px 8px;\n    width: 100%;\n    text-align: center;\n    -webkit-transition: ease all 0.3s;\n      -o-transition: ease all 0.3s;\n      transition: ease all 0.3s\n  } \n  .link:hover {\n    background: #739DD2;\n  }\n  .menu_res {\n     display: inline-block; \n  }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Navigation-root-2gcJx",
	"link": "Navigation-link-Ntl35",
	"menu_res": "Navigation-menu_res-L5_3W",
	"off": "Navigation-off-2SCHg",
	"on": "Navigation-on-30J3T",
	"links": "Navigation-links-1ZF3O"
};

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjgxYTJhNmZlNDdlOTViYzk2M2NiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzP2QxMzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLk5hdmlnYXRpb24tcm9vdC0yZ2NKeCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDZweCAwIDA7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVlbTsgLyogfjE4cHggKi9cXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OmFjdGl2ZSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OnZpc2l0ZWQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLyogcmVzcG9uc2l2ZSBtZW51ICovXFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cge1xcbiAgZGlzcGxheTogbm9uZTsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1tZW51X3Jlcy1MNV8zVy5OYXZpZ2F0aW9uLW9mZi0yU0NIZyBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbi5OYXZpZ2F0aW9uLW1lbnVfcmVzLUw1XzNXLk5hdmlnYXRpb24tb2ZmLTJTQ0hnIHNwYW46bnRoLWNoaWxkKDQpIHtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cuTmF2aWdhdGlvbi1vbi0zMEozVCBzcGFuOm50aC1jaGlsZCgxKSwuTmF2aWdhdGlvbi1tZW51X3Jlcy1MNV8zVy5OYXZpZ2F0aW9uLW9uLTMwSjNUIHNwYW46bnRoLWNoaWxkKDQpe1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cuTmF2aWdhdGlvbi1vbi0zMEozVCBzcGFuOm50aC1jaGlsZCgyKXtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuTmF2aWdhdGlvbi1yb290LTJnY0p4IHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDlweCAwIDA7XFxuICB9XFxuICAuTmF2aWdhdGlvbi1saW5rcy0xWkYzTy5OYXZpZ2F0aW9uLW9mZi0yU0NIZ3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICAuTmF2aWdhdGlvbi1saW5rcy0xWkYzTyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1N3B4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMwMDU0OWU7XFxuICB9IFxcbiAgLk5hdmlnYXRpb24tbGluay1OdGwzNSB7XFxuICAgIHBhZGRpbmc6IDlweCA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcXG4gICAgICAtby10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xcbiAgICAgIHRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3NcXG4gIH0gXFxuICAuTmF2aWdhdGlvbi1saW5rLU50bDM1OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzczOUREMjtcXG4gIH1cXG4gIC5OYXZpZ2F0aW9uLW1lbnVfcmVzLUw1XzNXIHtcXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxuICB9XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvanhtL0Rvd25sb2Fkcy9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQixDQUFDLFdBQVc7Q0FDaEM7O0FBRUQ7OztFQUdFLGdDQUFnQztDQUNqQzs7QUFFRDtFQUNFLDhCQUE4QjtDQUMvQjs7QUFFRCxxQkFBcUI7O0FBRXJCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFFBQVE7Q0FDWDs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtNQUNNLGtDQUFrQztVQUM5Qiw4QkFBOEI7Y0FDMUIsMEJBQTBCO0NBQ3ZDOztBQUVEO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7R0FDQTtJQUNDLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsOEJBQThCO1FBQzFCLDJCQUEyQjtZQUN2Qix1QkFBdUI7SUFDL0IsMEJBQTBCO1FBQ3RCLHVCQUF1QjtZQUNuQixvQkFBb0I7SUFDNUIsb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQ0FBa0M7TUFDaEMsNkJBQTZCO01BQzdCLHlCQUF5QjtHQUM1QjtFQUNEO0lBQ0Usb0JBQW9CO0dBQ3JCO0VBQ0Q7S0FDRyxzQkFBc0I7R0FDeEI7Q0FDRlwiLFwiZmlsZVwiOlwiTmF2aWdhdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4ucm9vdCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDZweCAwIDA7XFxufVxcblxcbi5saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMTI1ZW07IC8qIH4xOHB4ICovXFxufVxcblxcbi5saW5rLFxcbi5saW5rOmFjdGl2ZSxcXG4ubGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4vKiByZXNwb25zaXZlIG1lbnUgKi9cXG5cXG4ubWVudV9yZXMge1xcbiAgZGlzcGxheTogbm9uZTsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVfcmVzIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLm1lbnVfcmVzLm9mZiBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbi5tZW51X3Jlcy5vZmYgc3BhbjpudGgtY2hpbGQoNCkge1xcbiAgdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWVudV9yZXMub24gc3BhbjpudGgtY2hpbGQoMSksLm1lbnVfcmVzLm9uIHNwYW46bnRoLWNoaWxkKDQpe1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lbnVfcmVzLm9uIHNwYW46bnRoLWNoaWxkKDIpe1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yb290IHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDlweCAwIDA7XFxuICB9XFxuICAubGlua3Mub2Zme1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgIC5saW5rcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1N3B4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMwMDU0OWU7XFxuICB9IFxcbiAgLmxpbmsge1xcbiAgICBwYWRkaW5nOiA5cHggOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XFxuICAgICAgLW8tdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzXFxuICB9IFxcbiAgLmxpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNzM5REQyO1xcbiAgfVxcbiAgLm1lbnVfcmVzIHtcXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiTmF2aWdhdGlvbi1yb290LTJnY0p4XCIsXG5cdFwibGlua1wiOiBcIk5hdmlnYXRpb24tbGluay1OdGwzNVwiLFxuXHRcIm1lbnVfcmVzXCI6IFwiTmF2aWdhdGlvbi1tZW51X3Jlcy1MNV8zV1wiLFxuXHRcIm9mZlwiOiBcIk5hdmlnYXRpb24tb2ZmLTJTQ0hnXCIsXG5cdFwib25cIjogXCJOYXZpZ2F0aW9uLW9uLTMwSjNUXCIsXG5cdFwibGlua3NcIjogXCJOYXZpZ2F0aW9uLWxpbmtzLTFaRjNPXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJpbXBvcnRMb2FkZXJzXCI6MSxcInNvdXJjZU1hcFwiOnRydWUsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV1cIixcIm1pbmltaXplXCI6ZmFsc2UsXCJkaXNjYXJkQ29tbWVudHNcIjp7XCJyZW1vdmVBbGxcIjp0cnVlfX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcImNvbmZpZ1wiOntcInBhdGhcIjpcIi4vdG9vbHMvcG9zdGNzcy5jb25maWcuanNcIn19IS4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9