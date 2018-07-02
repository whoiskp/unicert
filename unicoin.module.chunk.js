webpackJsonp(["unicoin.module"],{

/***/ "./src/app/pages/unicoin/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Get Unicoin Address - Public Key</div>\n  <div class=\"card-body\">\n    <button class=\"btn btn-success\" (click)=\"getAddress()\">Get Unicoin PublicKey</button>\n    <strong class=\"ml-3\">{{data}}</strong>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/unicoin/address/address.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/unicoin/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
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

var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
        this.data = "";
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent.prototype.getAddress = function () {
        this.data = "f484a3b4239345329da836ad80248e71";
    };
    AddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-address',
            template: __webpack_require__("./src/app/pages/unicoin/address/address.component.html"),
            styles: [__webpack_require__("./src/app/pages/unicoin/address/address.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/pages/unicoin/chain/chain.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header font-weight-bold\">Unicoin Chain Information</div>\n  <div class=\"card-body\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Length:\n        <strong>{{ unicoin.length }}</strong>\n      </li>\n    </ul>\n    <div id=\"accordion\">\n      <div class=\"card\" *ngFor=\"let block of unicoin.chain\">\n        <div class=\"card-header\" id=\"{{ 'heading' + block.index }}\">\n          <h5 class=\"mb-0\">\n            <button class=\"btn btn-link\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + block.index\" aria-expanded=\"true\" [attr.aria-controls]=\"'collapse' + block.index\">\n              Block #{{ block.index }}\n            </button>\n          </h5>\n        </div>\n\n        <div id=\"{{'collapse' + block.index}}\" class=\"collapse show\" [attr.aria-labelledby]=\"'heading' + block.index\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">HASH:\n                <strong>{{ block.hash }}</strong>\n              </li>\n              <li class=\"list-group-item\">INDEX:\n                <strong>{{ block.index }}</strong>\n              </li>\n              <li class=\"list-group-item\">MRKL_ROOT:\n                <strong>{{ block.mrkl_root }}</strong>\n              </li>\n              <li class=\"list-group-item\">PREV_BLOCK:\n                <strong>{{ block.prev_block }}</strong>\n              </li>\n              <li class=\"list-group-item\">PROOF:\n                <strong>{{ block.proof }}</strong>\n              </li>\n              <li class=\"list-group-item\">TIME:\n                <strong>{{ block.time * 1000 | date:'medium'}}</strong>\n              </li>\n              <li class=\"list-group-item\">TX Information:\n                <div class=\"card\" *ngFor=\"let tx of block.tx; let i = index\">\n                  <div class=\"card-header\" id=\"{{ 'headingtx' + i }}\">\n                    <h5 class=\"mb-0\">\n                      <button class=\"btn btn-link\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapsetx' + i\" aria-expanded=\"true\" [attr.aria-controls]=\"'collapsetx' + i\">\n                        Transaction #{{ i }}\n                      </button>\n                    </h5>\n                  </div>\n\n                  <div id=\"{{'collapsetx' + i}}\" class=\"collapse show\" [attr.aria-labelledby]=\"'headingtx' + i\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                      <ul class=\"list-group\">\n                        <li class=\"list-group-item\"> AMOUNT:\n                          <strong>{{tx.amount}}</strong>\n                        </li>\n                        <li class=\"list-group-item\"> HASH:\n                          <strong>{{tx.hash}}</strong>\n                        </li>\n                        <li class=\"list-group-item\"> INPUTADDRESS:\n                          <strong>{{tx.inputAddress}}</strong>\n                        </li>\n                        <li class=\"list-group-item\"> META_DATA:\n                          <strong>{{tx.meta_data}}</strong>\n                        </li>\n                        <li class=\"list-group-item\"> OUTPUTADDRESS:\n                          <strong>{{tx.outputAddress}}</strong>\n                        </li>\n                        <li class=\"list-group-item\"> TIME:\n                          <strong>{{tx.time * 1000 | date:'medium'}}</strong>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/unicoin/chain/chain.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/unicoin/chain/chain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChainComponent; });
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

var ChainComponent = /** @class */ (function () {
    function ChainComponent() {
        this.unicoin = {
            "chain": [
                {
                    "hash": "60cd34538d56e4207ded21d51ed630284048edfdda500ec46ad419e7dd0553e0",
                    "index": 1,
                    "mrkl_root": 0,
                    "prev_block": 0,
                    "proof": 100,
                    "time": 1530367491.9959173,
                    "tx": []
                },
                {
                    "hash": "be461bd03dd3a4bf0ba5cf0a7c14eb160ef2dd6c9671a9d38848c262174b86e6",
                    "index": 2,
                    "mrkl_root": "1feeccd1af9b0aaabfba40bae25be741ce3e99a623262bddace55a94383ef058",
                    "prev_block": "60cd34538d56e4207ded21d51ed630284048edfdda500ec46ad419e7dd0553e0",
                    "proof": 35293,
                    "time": 1530367492.104419,
                    "tx": [
                        {
                            "amount": 1,
                            "hash": "1feeccd1af9b0aaabfba40bae25be741ce3e99a623262bddace55a94383ef058",
                            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
                            "meta_data": "",
                            "outputAddress": "Unicoin Network",
                            "time": 1530367492.1039174
                        }
                    ]
                },
                {
                    "hash": "bec9adbb9ec8b9e37872a0a66a76ec804b20fa7e5831542e06eef5644adf7b55",
                    "index": 3,
                    "mrkl_root": "8c2a6a5956e3876b65a4296083702a086263ed635d78e1be2d60ed0ffaf909bf",
                    "prev_block": "be461bd03dd3a4bf0ba5cf0a7c14eb160ef2dd6c9671a9d38848c262174b86e6",
                    "proof": 35089,
                    "time": 1530367492.221417,
                    "tx": [
                        {
                            "amount": 1,
                            "hash": "8c2a6a5956e3876b65a4296083702a086263ed635d78e1be2d60ed0ffaf909bf",
                            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
                            "meta_data": "",
                            "outputAddress": "Unicoin Network",
                            "time": 1530367492.221417
                        }
                    ]
                },
                {
                    "hash": "4dc67ad0daecb28334c139bfe4adf5b996f668222f968ebc95fb2ed25088e777",
                    "index": 4,
                    "mrkl_root": "60acc84cd405a68d0edb3928b617978ce91d4d281b8d40a01676b67ef739aba0",
                    "prev_block": "bec9adbb9ec8b9e37872a0a66a76ec804b20fa7e5831542e06eef5644adf7b55",
                    "proof": 119678,
                    "time": 1530367492.6194167,
                    "tx": [
                        {
                            "amount": 1,
                            "hash": "60acc84cd405a68d0edb3928b617978ce91d4d281b8d40a01676b67ef739aba0",
                            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
                            "meta_data": "",
                            "outputAddress": "Unicoin Network",
                            "time": 1530367492.6194167
                        }
                    ]
                },
                {
                    "hash": "87a7dbf65af640554cb96b99e80db1d000a877d38c9fff5ea7023a7ea4547ce8",
                    "index": 5,
                    "mrkl_root": "723c9f082d0d02e6e0824ee54f2a145217f9f2ec698e3b436ee05a9c20f0add4",
                    "prev_block": "4dc67ad0daecb28334c139bfe4adf5b996f668222f968ebc95fb2ed25088e777",
                    "proof": 146502,
                    "time": 1530367493.1289165,
                    "tx": [
                        {
                            "amount": 1,
                            "hash": "723c9f082d0d02e6e0824ee54f2a145217f9f2ec698e3b436ee05a9c20f0add4",
                            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
                            "meta_data": "",
                            "outputAddress": "Unicoin Network",
                            "time": 1530367493.1289165
                        }
                    ]
                },
                {
                    "hash": "fa7f5b4b03a49db615346e29ce6109c3e329f461a024171e1b1b7241fc5e9d9f",
                    "index": 6,
                    "mrkl_root": "6a86d09485aef33ef7c1f49c59ff3148c7b1220b780bab1e43ae4d855ba36634",
                    "prev_block": "87a7dbf65af640554cb96b99e80db1d000a877d38c9fff5ea7023a7ea4547ce8",
                    "proof": 43538,
                    "time": 1530367493.2574189,
                    "tx": [
                        {
                            "amount": 1,
                            "hash": "6a86d09485aef33ef7c1f49c59ff3148c7b1220b780bab1e43ae4d855ba36634",
                            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
                            "meta_data": "",
                            "outputAddress": "Unicoin Network",
                            "time": 1530367493.2574189
                        }
                    ]
                },
                {
                    "hash": "cfe7572781e92440e92d1619dbdf0213920ce11759d68bea3c84f668816e1ef5",
                    "index": 7,
                    "mrkl_root": "50bf41ae8f0b28ffff88a258bc5ccdef737ced27ef5f2fe5bb13f54c01b24801",
                    "prev_block": "fa7f5b4b03a49db615346e29ce6109c3e329f461a024171e1b1b7241fc5e9d9f",
                    "proof": 85724,
                    "time": 1530367493.633418,
                    "tx": [
                        {
                            "amount": 1,
                            "hash": "50bf41ae8f0b28ffff88a258bc5ccdef737ced27ef5f2fe5bb13f54c01b24801",
                            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
                            "meta_data": "",
                            "outputAddress": "Unicoin Network",
                            "time": 1530367493.633418
                        }
                    ]
                },
                {
                    "hash": "d0cbdd997395c45c7d89cebe4adafddf2ff6422c1d5aeb7019d3bc6a4baf05ef",
                    "index": 8,
                    "mrkl_root": "7adde1d6ce8eb7224a3b22aea9c0f87b47b51045d43c1d8f90341a64798b6038",
                    "prev_block": "cfe7572781e92440e92d1619dbdf0213920ce11759d68bea3c84f668816e1ef5",
                    "proof": 51178,
                    "time": 1530367493.8549192,
                    "tx": [
                        {
                            "amount": 1,
                            "hash": "7adde1d6ce8eb7224a3b22aea9c0f87b47b51045d43c1d8f90341a64798b6038",
                            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
                            "meta_data": "",
                            "outputAddress": "Unicoin Network",
                            "time": 1530367493.8549192
                        }
                    ]
                },
                {
                    "hash": "579495266cf90d2b3d332b634616a334a000fd695da550255c40eff6c2a1b179",
                    "index": 9,
                    "mrkl_root": "a13a469801650d2d26b81369c8d38574af3171db41e15be658d601d57aa96b9c",
                    "prev_block": "d0cbdd997395c45c7d89cebe4adafddf2ff6422c1d5aeb7019d3bc6a4baf05ef",
                    "proof": 71730,
                    "time": 1530367494.0879173,
                    "tx": [
                        {
                            "amount": 1,
                            "hash": "a13a469801650d2d26b81369c8d38574af3171db41e15be658d601d57aa96b9c",
                            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
                            "meta_data": "",
                            "outputAddress": "Unicoin Network",
                            "time": 1530367494.0879173
                        }
                    ]
                },
                {
                    "hash": "e2e0b65c1fa7e39e03b243078dfda84eee3555078b21ae5eaabc912d6bf88f3f",
                    "index": 10,
                    "mrkl_root": "2326052b7026b4e51cd866f7d4a38da3b191fea85d9c3b415b25511941b03b9e",
                    "prev_block": "579495266cf90d2b3d332b634616a334a000fd695da550255c40eff6c2a1b179",
                    "proof": 55589,
                    "time": 1530367494.2504206,
                    "tx": [
                        {
                            "amount": 1,
                            "hash": "2326052b7026b4e51cd866f7d4a38da3b191fea85d9c3b415b25511941b03b9e",
                            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
                            "meta_data": "",
                            "outputAddress": "Unicoin Network",
                            "time": 1530367494.2504206
                        }
                    ]
                }
            ],
            "length": 10
        };
    }
    ChainComponent.prototype.ngOnInit = function () {
    };
    ChainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chain',
            template: __webpack_require__("./src/app/pages/unicoin/chain/chain.component.html"),
            styles: [__webpack_require__("./src/app/pages/unicoin/chain/chain.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChainComponent);
    return ChainComponent;
}());



/***/ }),

/***/ "./src/app/pages/unicoin/node/node.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Nodes in Uni Blockchain\n  </div>\n  <div class=\"card-body\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let node of nodes\">\n        <strong class=\"ml-3\">{{ node }}</strong>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/unicoin/node/node.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/unicoin/node/node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeComponent; });
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

var NodeComponent = /** @class */ (function () {
    function NodeComponent() {
        this.nodes = [
            "129.12.212.212",
            "129.32.168.121",
            "129.12.29.244",
            "129.15.212.2",
            "129.12.212.22",
        ];
    }
    NodeComponent.prototype.ngOnInit = function () {
    };
    NodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-node',
            template: __webpack_require__("./src/app/pages/unicoin/node/node.component.html"),
            styles: [__webpack_require__("./src/app/pages/unicoin/node/node.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NodeComponent);
    return NodeComponent;
}());



/***/ }),

/***/ "./src/app/pages/unicoin/tx/tx.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Transaction Info -\n    <strong>{{ tx.hash}}</strong>\n  </div>\n  <div class=\"card-body\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">AMOUNT:\n        <strong class=\"ml-3\">{{ tx.amount }}</strong>\n      </li>\n      <li class=\"list-group-item\">INPUTADDRESS:\n        <strong class=\"ml-3\">{{ tx.inputAddress }}</strong>\n      </li>\n      <li class=\"list-group-item\">META_DATA:\n        <strong class=\"ml-3\">{{ tx.meta_data }}</strong>\n      </li>\n      <li class=\"list-group-item\">OUTPUTADDRESS:\n        <strong class=\"ml-3\">{{ tx.outputAddress }}</strong>\n      </li>\n      <li class=\"list-group-item\">TIME:\n        <strong class=\"ml-3\">{{ tx.time * 1000 | date:'medium'}}</strong>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/unicoin/tx/tx.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/unicoin/tx/tx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TxComponent; });
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

var TxComponent = /** @class */ (function () {
    function TxComponent() {
        this.tx = {
            "hash": "1feeccd1af9b0aaabfba40bae25be741ce3e99a623262bddace55a94383ef058",
            "amount": 1,
            "inputAddress": "899ca80c913b437a910479b60ccb60c8",
            "meta_data": "UniCert 51ffe30551922cd79c6b35c8c1a8f714",
            "outputAddress": "f484a3b4239345329da836ad80248e71",
            "time": 1530367492.1039174
        };
    }
    TxComponent.prototype.ngOnInit = function () {
    };
    TxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tx',
            template: __webpack_require__("./src/app/pages/unicoin/tx/tx.component.html"),
            styles: [__webpack_require__("./src/app/pages/unicoin/tx/tx.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TxComponent);
    return TxComponent;
}());



/***/ }),

/***/ "./src/app/pages/unicoin/unicoin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#/pages/unicoin\">UniCoin</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" *ngFor=\"let route of routes\">\n          <a class=\"nav-link\" href=\"{{route.link}}\">{{ route.name}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n"

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
        this.defaultLink = "#/pages/unicoin/";
        this.routes = [];
        this.routes = [
            { "name": "address", "link": this.defaultLink + "address" },
            { "name": "chain", "link": this.defaultLink + "chain" },
            { "name": "nodes", "link": this.defaultLink + "nodes" },
            { "name": "tx", "link": this.defaultLink + "tx" }
        ];
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chain_chain_component__ = __webpack_require__("./src/app/pages/unicoin/chain/chain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tx_tx_component__ = __webpack_require__("./src/app/pages/unicoin/tx/tx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_address_component__ = __webpack_require__("./src/app/pages/unicoin/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_node_component__ = __webpack_require__("./src/app/pages/unicoin/node/node.component.ts");
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
            declarations: [__WEBPACK_IMPORTED_MODULE_2__unicoin_component__["a" /* UnicoinComponent */], __WEBPACK_IMPORTED_MODULE_4__chain_chain_component__["a" /* ChainComponent */], __WEBPACK_IMPORTED_MODULE_5__tx_tx_component__["a" /* TxComponent */], __WEBPACK_IMPORTED_MODULE_6__address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_7__node_node_component__["a" /* NodeComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address_component__ = __webpack_require__("./src/app/pages/unicoin/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chain_chain_component__ = __webpack_require__("./src/app/pages/unicoin/chain/chain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_node_component__ = __webpack_require__("./src/app/pages/unicoin/node/node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tx_tx_component__ = __webpack_require__("./src/app/pages/unicoin/tx/tx.component.ts");






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__unicoin_component__["a" /* UnicoinComponent */],
        children: [
            { path: 'address', component: __WEBPACK_IMPORTED_MODULE_2__address_address_component__["a" /* AddressComponent */] },
            { path: 'chain', component: __WEBPACK_IMPORTED_MODULE_3__chain_chain_component__["a" /* ChainComponent */] },
            { path: 'nodes', component: __WEBPACK_IMPORTED_MODULE_4__node_node_component__["a" /* NodeComponent */] },
            { path: 'tx', component: __WEBPACK_IMPORTED_MODULE_5__tx_tx_component__["a" /* TxComponent */] },
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);


/***/ })

});
//# sourceMappingURL=unicoin.module.chunk.js.map