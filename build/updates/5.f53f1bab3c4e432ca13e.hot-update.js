require("source-map-support").install();
exports.id = 5;
exports.modules = {

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Navigation/Navigation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n/* responsive menu */\n\n.Navigation-menu_res-L5_3W {\n  display: none; \n  position: relative;\n  margin-right: 10px;\n  float: right;\n  width: 30px;\n  height: 25px;\n  cursor: pointer;\n}\n\n.Navigation-menu_res-L5_3W span {\n    display: block;\n    position: absolute;\n    height: 4px;\n    width: 100%;\n    background: #fff;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n}\n\n.Navigation-menu_res-L5_3W.Navigation-off-2SCHg span:nth-child(2) {\n  top: 10px;\n}\n\n.Navigation-menu_res-L5_3W.Navigation-off-2SCHg span:nth-child(4) {\n  top: 20px;\n}\n\n.Navigation-menu_res-L5_3W.Navigation-on-30J3T span:nth-child(1),.Navigation-menu_res-L5_3W.Navigation-on-30J3T span:nth-child(4){\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .Navigation-root-2gcJx {\n    float: right;\n    margin: 9px 0 0;\n  }\n  .Navigation-links-1ZF3O.Navigation-off-2SCHg{\n    display: none;\n  }\n   .Navigation-links-1ZF3O {\n    position: absolute;\n    top: 57px;\n    left: 0;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #00549e;\n  } \n  .Navigation-link-Ntl35 {\n    padding: 9px 8px;\n    width: 100%;\n    text-align: center;\n    -webkit-transition: ease all 0.3s;\n      -o-transition: ease all 0.3s;\n      transition: ease all 0.3s\n  } \n  .Navigation-link-Ntl35:hover {\n    background: #739DD2;\n  }\n  .Navigation-menu_res-L5_3W {\n     display: inline-block; \n  }\n}", "", {"version":3,"sources":["/Users/jxm/Downloads/MyPlanetGirlGuides/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED,qBAAqB;;AAErB;EACE,cAAc;EACd,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,gBAAgB;CACjB;;AAED;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,QAAQ;CACX;;AAED;EACE,UAAU;CACX;;AAED;EACE,UAAU;CACX;;AAED;EACE,cAAc;CACf;;AAED;EACE;IACE,aAAa;IACb,gBAAgB;GACjB;EACD;IACE,cAAc;GACf;GACA;IACC,mBAAmB;IACnB,UAAU;IACV,QAAQ;IACR,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,6BAA6B;IAC7B,8BAA8B;QAC1B,2BAA2B;YACvB,uBAAuB;IAC/B,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,oBAAoB;GACrB;EACD;IACE,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,kCAAkC;MAChC,6BAA6B;MAC7B,yBAAyB;GAC5B;EACD;IACE,oBAAoB;GACrB;EACD;KACG,sBAAsB;GACxB;CACF","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n/* responsive menu */\n\n.menu_res {\n  display: none; \n  position: relative;\n  margin-right: 10px;\n  float: right;\n  width: 30px;\n  height: 25px;\n  cursor: pointer;\n}\n\n.menu_res span {\n    display: block;\n    position: absolute;\n    height: 4px;\n    width: 100%;\n    background: #fff;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n}\n\n.menu_res.off span:nth-child(2) {\n  top: 10px;\n}\n\n.menu_res.off span:nth-child(4) {\n  top: 20px;\n}\n\n.menu_res.on span:nth-child(1),.menu_res.on span:nth-child(4){\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .root {\n    float: right;\n    margin: 9px 0 0;\n  }\n  .links.off{\n    display: none;\n  }\n   .links {\n    position: absolute;\n    top: 57px;\n    left: 0;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #00549e;\n  } \n  .link {\n    padding: 9px 8px;\n    width: 100%;\n    text-align: center;\n    -webkit-transition: ease all 0.3s;\n      -o-transition: ease all 0.3s;\n      transition: ease all 0.3s\n  } \n  .link:hover {\n    background: #739DD2;\n  }\n  .menu_res {\n     display: inline-block; \n  }\n}"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy81LmY1M2YxYmFiM2M0ZTQzMmNhMTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzP2QxMzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLk5hdmlnYXRpb24tcm9vdC0yZ2NKeCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDZweCAwIDA7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVlbTsgLyogfjE4cHggKi9cXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OmFjdGl2ZSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OnZpc2l0ZWQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLyogcmVzcG9uc2l2ZSBtZW51ICovXFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cge1xcbiAgZGlzcGxheTogbm9uZTsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1tZW51X3Jlcy1MNV8zVy5OYXZpZ2F0aW9uLW9mZi0yU0NIZyBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDEwcHg7XFxufVxcblxcbi5OYXZpZ2F0aW9uLW1lbnVfcmVzLUw1XzNXLk5hdmlnYXRpb24tb2ZmLTJTQ0hnIHNwYW46bnRoLWNoaWxkKDQpIHtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cuTmF2aWdhdGlvbi1vbi0zMEozVCBzcGFuOm50aC1jaGlsZCgxKSwuTmF2aWdhdGlvbi1tZW51X3Jlcy1MNV8zVy5OYXZpZ2F0aW9uLW9uLTMwSjNUIHNwYW46bnRoLWNoaWxkKDQpe1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuTmF2aWdhdGlvbi1yb290LTJnY0p4IHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDlweCAwIDA7XFxuICB9XFxuICAuTmF2aWdhdGlvbi1saW5rcy0xWkYzTy5OYXZpZ2F0aW9uLW9mZi0yU0NIZ3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICAuTmF2aWdhdGlvbi1saW5rcy0xWkYzTyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1N3B4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMwMDU0OWU7XFxuICB9IFxcbiAgLk5hdmlnYXRpb24tbGluay1OdGwzNSB7XFxuICAgIHBhZGRpbmc6IDlweCA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcXG4gICAgICAtby10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xcbiAgICAgIHRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3NcXG4gIH0gXFxuICAuTmF2aWdhdGlvbi1saW5rLU50bDM1OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzczOUREMjtcXG4gIH1cXG4gIC5OYXZpZ2F0aW9uLW1lbnVfcmVzLUw1XzNXIHtcXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxuICB9XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvanhtL0Rvd25sb2Fkcy9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQixDQUFDLFdBQVc7Q0FDaEM7O0FBRUQ7OztFQUdFLGdDQUFnQztDQUNqQzs7QUFFRDtFQUNFLDhCQUE4QjtDQUMvQjs7QUFFRCxxQkFBcUI7O0FBRXJCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFFBQVE7Q0FDWDs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsY0FBYztHQUNmO0dBQ0E7SUFDQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFFBQVE7SUFDUixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLDhCQUE4QjtRQUMxQiwyQkFBMkI7WUFDdkIsdUJBQXVCO0lBQy9CLDBCQUEwQjtRQUN0Qix1QkFBdUI7WUFDbkIsb0JBQW9CO0lBQzVCLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0NBQWtDO01BQ2hDLDZCQUE2QjtNQUM3Qix5QkFBeUI7R0FDNUI7RUFDRDtJQUNFLG9CQUFvQjtHQUNyQjtFQUNEO0tBQ0csc0JBQXNCO0dBQ3hCO0NBQ0ZcIixcImZpbGVcIjpcIk5hdmlnYXRpb24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLnJvb3Qge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luOiA2cHggMCAwO1xcbn1cXG5cXG4ubGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjEyNWVtOyAvKiB+MThweCAqL1xcbn1cXG5cXG4ubGluayxcXG4ubGluazphY3RpdmUsXFxuLmxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLyogcmVzcG9uc2l2ZSBtZW51ICovXFxuXFxuLm1lbnVfcmVzIHtcXG4gIGRpc3BsYXk6IG5vbmU7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51X3JlcyBzcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5tZW51X3Jlcy5vZmYgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudV9yZXMub2ZmIHNwYW46bnRoLWNoaWxkKDQpIHtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuLm1lbnVfcmVzLm9uIHNwYW46bnRoLWNoaWxkKDEpLC5tZW51X3Jlcy5vbiBzcGFuOm50aC1jaGlsZCg0KXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnJvb3Qge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogOXB4IDAgMDtcXG4gIH1cXG4gIC5saW5rcy5vZmZ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAgLmxpbmtzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDU3cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzAwNTQ5ZTtcXG4gIH0gXFxuICAubGluayB7XFxuICAgIHBhZGRpbmc6IDlweCA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcXG4gICAgICAtby10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xcbiAgICAgIHRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3NcXG4gIH0gXFxuICAubGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM3MzlERDI7XFxuICB9XFxuICAubWVudV9yZXMge1xcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJOYXZpZ2F0aW9uLXJvb3QtMmdjSnhcIixcblx0XCJsaW5rXCI6IFwiTmF2aWdhdGlvbi1saW5rLU50bDM1XCIsXG5cdFwibWVudV9yZXNcIjogXCJOYXZpZ2F0aW9uLW1lbnVfcmVzLUw1XzNXXCIsXG5cdFwib2ZmXCI6IFwiTmF2aWdhdGlvbi1vZmYtMlNDSGdcIixcblx0XCJvblwiOiBcIk5hdmlnYXRpb24tb24tMzBKM1RcIixcblx0XCJsaW5rc1wiOiBcIk5hdmlnYXRpb24tbGlua3MtMVpGM09cIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcImltcG9ydExvYWRlcnNcIjoxLFwic291cmNlTWFwXCI6dHJ1ZSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XVwiLFwibWluaW1pemVcIjpmYWxzZSxcImRpc2NhcmRDb21tZW50c1wiOntcInJlbW92ZUFsbFwiOnRydWV9fSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3Il0sIm1hcHBpbmdzIjoiOztBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=