require("source-map-support").install();
exports.id = 7;
exports.modules = {

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./node_modules/postcss-loader/lib/index.js?{\"config\":{\"path\":\"./tools/postcss.config.js\"}}!./src/components/Navigation/Navigation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n/* responsive menu */\n\n.Navigation-menu_res-L5_3W {\n   display: none; \n  position: relative;\n  margin-right: 10px;\n  float: right;\n  width: 30px;\n  height: 25px;\n  cursor: pointer;\n}\n\n.Navigation-menu_res-L5_3W span {\n    display: block;\n    position: absolute;\n    height: 4px;\n    width: 100%;\n    background: #fff;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n}\n\n.Navigation-menu_res-L5_3W span:nth-child(2) {\n  top: 10px;\n}\n\n.Navigation-menu_res-L5_3W span:nth-child(4) {\n  top: 20px;\n}\n\n@media (max-width: 600px) {\n  .Navigation-root-2gcJx {\n    float: right;\n    margin: 9px 0 0;\n  }\n  .Navigation-links-1ZF3O.Navigation-hide-63tUq{\n    display: none;\n  }\n   .Navigation-links-1ZF3O {\n    position: absolute;\n    top: 57px;\n    left: 0;\n    background: #00549e;\n  } \n  .Navigation-menu_res-L5_3W {\n     display: inline-block; \n  }\n}", "", {"version":3,"sources":["/Users/jxm/Downloads/MyPlanetGirlGuides/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED,qBAAqB;;AAErB;GACG,cAAc;EACf,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,gBAAgB;CACjB;;AAED;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,QAAQ;CACX;;AAED;EACE,UAAU;CACX;;AAED;EACE,UAAU;CACX;;AAED;EACE;IACE,aAAa;IACb,gBAAgB;GACjB;EACD;IACE,cAAc;GACf;GACA;IACC,mBAAmB;IACnB,UAAU;IACV,QAAQ;IACR,oBAAoB;GACrB;EACD;KACG,sBAAsB;GACxB;CACF","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n/* responsive menu */\n\n.menu_res {\n   display: none; \n  position: relative;\n  margin-right: 10px;\n  float: right;\n  width: 30px;\n  height: 25px;\n  cursor: pointer;\n}\n\n.menu_res span {\n    display: block;\n    position: absolute;\n    height: 4px;\n    width: 100%;\n    background: #fff;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n}\n\n.menu_res span:nth-child(2) {\n  top: 10px;\n}\n\n.menu_res span:nth-child(4) {\n  top: 20px;\n}\n\n@media (max-width: 600px) {\n  .root {\n    float: right;\n    margin: 9px 0 0;\n  }\n  .links.hide{\n    display: none;\n  }\n   .links {\n    position: absolute;\n    top: 57px;\n    left: 0;\n    background: #00549e;\n  } \n  .menu_res {\n     display: inline-block; \n  }\n}"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy83LjMyYTMyNjU5NmE5ZDk1ZmEwNWM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzP2QxMzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLk5hdmlnYXRpb24tcm9vdC0yZ2NKeCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDZweCAwIDA7XFxufVxcblxcbi5OYXZpZ2F0aW9uLWxpbmstTnRsMzUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVlbTsgLyogfjE4cHggKi9cXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OmFjdGl2ZSxcXG4uTmF2aWdhdGlvbi1saW5rLU50bDM1OnZpc2l0ZWQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLk5hdmlnYXRpb24tbGluay1OdGwzNTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLyogcmVzcG9uc2l2ZSBtZW51ICovXFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cge1xcbiAgIGRpc3BsYXk6IG5vbmU7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5OYXZpZ2F0aW9uLW1lbnVfcmVzLUw1XzNXIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cXG4uTmF2aWdhdGlvbi1tZW51X3Jlcy1MNV8zVyBzcGFuOm50aC1jaGlsZCg0KSB7XFxuICB0b3A6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLk5hdmlnYXRpb24tcm9vdC0yZ2NKeCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiA5cHggMCAwO1xcbiAgfVxcbiAgLk5hdmlnYXRpb24tbGlua3MtMVpGM08uTmF2aWdhdGlvbi1oaWRlLTYzdFVxe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgIC5OYXZpZ2F0aW9uLWxpbmtzLTFaRjNPIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDU3cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6ICMwMDU0OWU7XFxuICB9IFxcbiAgLk5hdmlnYXRpb24tbWVudV9yZXMtTDVfM1cge1xcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcXG4gIH1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CLENBQUMsV0FBVztDQUNoQzs7QUFFRDs7O0VBR0UsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsOEJBQThCO0NBQy9COztBQUVELHFCQUFxQjs7QUFFckI7R0FDRyxjQUFjO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsUUFBUTtDQUNYOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7R0FDQTtJQUNDLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsUUFBUTtJQUNSLG9CQUFvQjtHQUNyQjtFQUNEO0tBQ0csc0JBQXNCO0dBQ3hCO0NBQ0ZcIixcImZpbGVcIjpcIk5hdmlnYXRpb24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLnJvb3Qge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luOiA2cHggMCAwO1xcbn1cXG5cXG4ubGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjEyNWVtOyAvKiB+MThweCAqL1xcbn1cXG5cXG4ubGluayxcXG4ubGluazphY3RpdmUsXFxuLmxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuLyogcmVzcG9uc2l2ZSBtZW51ICovXFxuXFxuLm1lbnVfcmVzIHtcXG4gICBkaXNwbGF5OiBub25lOyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudV9yZXMgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4ubWVudV9yZXMgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudV9yZXMgc3BhbjpudGgtY2hpbGQoNCkge1xcbiAgdG9wOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yb290IHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDlweCAwIDA7XFxuICB9XFxuICAubGlua3MuaGlkZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICAubGlua3Mge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTdweDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogIzAwNTQ5ZTtcXG4gIH0gXFxuICAubWVudV9yZXMge1xcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJOYXZpZ2F0aW9uLXJvb3QtMmdjSnhcIixcblx0XCJsaW5rXCI6IFwiTmF2aWdhdGlvbi1saW5rLU50bDM1XCIsXG5cdFwibWVudV9yZXNcIjogXCJOYXZpZ2F0aW9uLW1lbnVfcmVzLUw1XzNXXCIsXG5cdFwibGlua3NcIjogXCJOYXZpZ2F0aW9uLWxpbmtzLTFaRjNPXCIsXG5cdFwiaGlkZVwiOiBcIk5hdmlnYXRpb24taGlkZS02M3RVcVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlLFwiZGlzY2FyZENvbW1lbnRzXCI6e1wicmVtb3ZlQWxsXCI6dHJ1ZX19IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJjb25maWdcIjp7XCJwYXRoXCI6XCIuL3Rvb2xzL3Bvc3Rjc3MuY29uZmlnLmpzXCJ9fSEuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciXSwibWFwcGluZ3MiOiI7O0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=