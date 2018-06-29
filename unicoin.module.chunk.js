webpackJsonp(["unicoin.module"],{

/***/ "./src/app/pages/unicoin/unicoin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  unicoin works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/unicoin/unicoin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/unicoin/unicoin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnicoinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnicoinComponent = /** @class */ (function () {
    function UnicoinComponent() {
    }
    UnicoinComponent.prototype.ngOnInit = function () {
    };
    UnicoinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-unicoin',
            template: __webpack_require__("./src/app/pages/unicoin/unicoin.component.html"),
            styles: [__webpack_require__("./src/app/pages/unicoin/unicoin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UnicoinComponent);
    return UnicoinComponent;
}());



/***/ }),

/***/ "./src/app/pages/unicoin/unicoin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnicoinModule", function() { return UnicoinModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unicoin_component__ = __webpack_require__("./src/app/pages/unicoin/unicoin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unicoin_routing__ = __webpack_require__("./src/app/pages/unicoin/unicoin.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UnicoinModule = /** @class */ (function () {
    function UnicoinModule() {
    }
    UnicoinModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__unicoin_routing__["a" /* routing */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__unicoin_component__["a" /* UnicoinComponent */]]
        })
    ], UnicoinModule);
    return UnicoinModule;
}());



/***/ }),

/***/ "./src/app/pages/unicoin/unicoin.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unicoin_component__ = __webpack_require__("./src/app/pages/unicoin/unicoin.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__unicoin_component__["a" /* UnicoinComponent */],
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);


/***/ })

});
//# sourceMappingURL=unicoin.module.chunk.js.map