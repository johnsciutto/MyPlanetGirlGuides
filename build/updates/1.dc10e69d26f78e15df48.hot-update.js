require("source-map-support").install();
exports.id = 1;
exports.modules = {

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Navigation/Navigation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n/* responsive menu */\n\n.Navigation-menu_res-L5_3W {\n   display: none; \n  position: relative;\n  margin-right: 10px;\n  float: right;\n  width: 30px;\n  height: 25px;\n  cursor: pointer;\n}\n\n.Navigation-menu_res-L5_3W span {\n    display: block;\n    position: absolute;\n    height: 4px;\n    width: 100%;\n    background: #fff;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n}\n\n.Navigation-menu_res-L5_3W span:nth-child(2) {\n  top: 10px;\n}\n\n.Navigation-menu_res-L5_3W span:nth-child(4) {\n  top: 20px;\n}\n\n@media (max-width: 600px) {\n  .Navigation-root-2gcJx {\n    float: right;\n    margin: 9px 0 0;\n  }\n  .Navigation-links-1ZF3O.Navigation-hide-63tUq{\n    display: none;\n  }\n   .Navigation-links-1ZF3O {\n    position: absolute;\n    top: 57px;\n    left: 0;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #00549e;\n  } \n  .Navigation-link-Ntl35 {\n    padding: 9px 8px;\n    width: 100%;\n    text-align: center;\n    -webkit-transition: ease all 0.3s;\n      -o-transition: ease all 0.3s;\n      transition: ease all 0.3s\n  } \n  .Navigation-link-Ntl35:hover {\n    background: #739DD2;\n  }\n  .Navigation-menu_res-L5_3W {\n     display: inline-block; \n  }\n}", "", {"version":3,"sources":["/Users/jxm/Downloads/MyPlanetGirlGuides/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED,qBAAqB;;AAErB;GACG,cAAc;EACf,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,gBAAgB;CACjB;;AAED;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,QAAQ;CACX;;AAED;EACE,UAAU;CACX;;AAED;EACE,UAAU;CACX;;AAED;EACE;IACE,aAAa;IACb,gBAAgB;GACjB;EACD;IACE,cAAc;GACf;GACA;IACC,mBAAmB;IACnB,UAAU;IACV,QAAQ;IACR,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,6BAA6B;IAC7B,8BAA8B;QAC1B,2BAA2B;YACvB,uBAAuB;IAC/B,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,oBAAoB;GACrB;EACD;IACE,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,kCAAkC;MAChC,6BAA6B;MAC7B,yBAAyB;GAC5B;EACD;IACE,oBAAoB;GACrB;EACD;KACG,sBAAsB;GACxB;CACF","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n/* responsive menu */\n\n.menu_res {\n   display: none; \n  position: relative;\n  margin-right: 10px;\n  float: right;\n  width: 30px;\n  height: 25px;\n  cursor: pointer;\n}\n\n.menu_res span {\n    display: block;\n    position: absolute;\n    height: 4px;\n    width: 100%;\n    background: #fff;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n}\n\n.menu_res span:nth-child(2) {\n  top: 10px;\n}\n\n.menu_res span:nth-child(4) {\n  top: 20px;\n}\n\n@media (max-width: 600px) {\n  .root {\n    float: right;\n    margin: 9px 0 0;\n  }\n  .links.hide{\n    display: none;\n  }\n   .links {\n    position: absolute;\n    top: 57px;\n    left: 0;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #00549e;\n  } \n  .link {\n    padding: 9px 8px;\n    width: 100%;\n    text-align: center;\n    -webkit-transition: ease all 0.3s;\n      -o-transition: ease all 0.3s;\n      transition: ease all 0.3s\n  } \n  .link:hover {\n    background: #739DD2;\n  }\n  .menu_res {\n     display: inline-block; \n  }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Navigation-root-2gcJx",
	"link": "Navigation-link-Ntl35",
	"menu_res": "Navigation-menu_res-L5_3W",
	"links": "Navigation-links-1ZF3O",
	"hide": "Navigation-hide-63tUq"
};

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLmRjMTBlNjlkMjZmNzhlMTVkZjQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzP2QxMzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLk5hdmlnYXRpb24tcm9vdC0yZ2NKeCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDZweCAwIDA7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVlbTsgLyogfjE4cHggKi9cXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OmFjdGl2ZSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OnZpc2l0ZWQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLyogcmVzcG9uc2l2ZSBtZW51ICovXFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cge1xcbiAgIGRpc3BsYXk6IG5vbmU7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5OYXZpZ2F0aW9uLW1lbnVfcmVzLUw1XzNXIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1tZW51X3Jlcy1MNV8zVyBzcGFuOm50aC1jaGlsZCg0KSB7XFxuICB0b3A6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLk5hdmlnYXRpb24tcm9vdC0yZ2NKeCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiA5cHggMCAwO1xcbiAgfVxcbiAgLk5hdmlnYXRpb24tbGlua3MtMVpGM08uTmF2aWdhdGlvbi1oaWRlLTYzdFVxe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgIC5OYXZpZ2F0aW9uLWxpbmtzLTFaRjNPIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDU3cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzAwNTQ5ZTtcXG4gIH0gXFxuICAuTmF2aWdhdGlvbi1saW5rLU50bDM1IHtcXG4gICAgcGFkZGluZzogOXB4IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xcbiAgICAgIC1vLXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XFxuICAgICAgdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zc1xcbiAgfSBcXG4gIC5OYXZpZ2F0aW9uLWxpbmstTnRsMzU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNzM5REQyO1xcbiAgfVxcbiAgLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cge1xcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcXG4gIH1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CLENBQUMsV0FBVztDQUNoQzs7QUFFRDs7O0VBR0UsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsOEJBQThCO0NBQy9COztBQUVELHFCQUFxQjs7QUFFckI7R0FDRyxjQUFjO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsUUFBUTtDQUNYOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7R0FDQTtJQUNDLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsOEJBQThCO1FBQzFCLDJCQUEyQjtZQUN2Qix1QkFBdUI7SUFDL0IsMEJBQTBCO1FBQ3RCLHVCQUF1QjtZQUNuQixvQkFBb0I7SUFDNUIsb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQ0FBa0M7TUFDaEMsNkJBQTZCO01BQzdCLHlCQUF5QjtHQUM1QjtFQUNEO0lBQ0Usb0JBQW9CO0dBQ3JCO0VBQ0Q7S0FDRyxzQkFBc0I7R0FDeEI7Q0FDRlwiLFwiZmlsZVwiOlwiTmF2aWdhdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4ucm9vdCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDZweCAwIDA7XFxufVxcblxcbi5saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMTI1ZW07IC8qIH4xOHB4ICovXFxufVxcblxcbi5saW5rLFxcbi5saW5rOmFjdGl2ZSxcXG4ubGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG4vKiByZXNwb25zaXZlIG1lbnUgKi9cXG5cXG4ubWVudV9yZXMge1xcbiAgIGRpc3BsYXk6IG5vbmU7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51X3JlcyBzcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5tZW51X3JlcyBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbi5tZW51X3JlcyBzcGFuOm50aC1jaGlsZCg0KSB7XFxuICB0b3A6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnJvb3Qge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogOXB4IDAgMDtcXG4gIH1cXG4gIC5saW5rcy5oaWRle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgIC5saW5rcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1N3B4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMwMDU0OWU7XFxuICB9IFxcbiAgLmxpbmsge1xcbiAgICBwYWRkaW5nOiA5cHggOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XFxuICAgICAgLW8tdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzXFxuICB9IFxcbiAgLmxpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNzM5REQyO1xcbiAgfVxcbiAgLm1lbnVfcmVzIHtcXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiTmF2aWdhdGlvbi1yb290LTJnY0p4XCIsXG5cdFwibGlua1wiOiBcIk5hdmlnYXRpb24tbGluay1OdGwzNVwiLFxuXHRcIm1lbnVfcmVzXCI6IFwiTmF2aWdhdGlvbi1tZW51X3Jlcy1MNV8zV1wiLFxuXHRcImxpbmtzXCI6IFwiTmF2aWdhdGlvbi1saW5rcy0xWkYzT1wiLFxuXHRcImhpZGVcIjogXCJOYXZpZ2F0aW9uLWhpZGUtNjN0VXFcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3Il0sIm1hcHBpbmdzIjoiOztBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9