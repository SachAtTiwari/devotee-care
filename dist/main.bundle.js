webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin-login/admin-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminForm{\n    position: relative;\n    top:100px;\n    border: 2px solid brown;\n    padding: 35px;\n    border-radius: 20px;\n    height: auto;\n    z-index: 1;\n    background-color: azure;\n    overflow: hidden;\n}\n\n.card-header {\n    background-color: yellow;\n}\n\n\nmat-form-field {\n\tmargin: 15px;\n\twidth: 198px;\n}\n\n .content-wrapper{\n\tmargin-top: 80px;\n}\n\n.container-fluid{\n    padding-left: 255px;\n    padding-right: 300px;\n    opacity: 0.8;\n    position: relative;\n    top: 100px;\n}\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1200px) {\n\t/* Styles */\n\tmat-form-field {\n\t\tmargin: 10px;\n\t\twidth: 400px;\n    }\n    .adminForm{\n        width: 500px;\n        margin: auto;\n\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-login/admin-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <div class=\"container\" >  \n      <div class=\"adminForm mat-elevation-z12\">\n        <div class=\"card-header\">\n        <h3>Please Enter Admin Details</h3>\n        </div>\n\n        <form #adminForm=\"ngForm\" (ngSubmit)=\"adminLogin(adminForm)\" style=\"margin:auto;\">\n     \n            <mat-form-field>                                  \n                <input matInput name=\"username\" [(ngModel)]=\"name\"  placeholder=\"Name\" required>  \n             </mat-form-field>  \n    \n    \n             <mat-form-field>                                  \n                <input matInput name=\"password\" [(ngModel)]=\"pass\" type=\"password\" placeholder=\"Password\" required>  \n             </mat-form-field>  \n             <button mat-raised-button type=\"submit\" class=\"btn btn-primary\">Login</button>\n\n        </form>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin-login/admin-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devotee_service__ = __webpack_require__("../../../../../src/app/devotee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(route, dialog, _userService, router, appComp) {
        this.route = route;
        this.dialog = dialog;
        this._userService = _userService;
        this.router = router;
        this.appComp = appComp;
    }
    // isLoggedIn = false;
    AdminLoginComponent.prototype.ngOnInit = function () {
        if ($(window).width() < 600) {
            $('.left-pane')[0].style.display = 'none';
        }
    };
    AdminLoginComponent.prototype.getErrorMessage = function () {
    };
    AdminLoginComponent.prototype.adminLogin = function (form) {
        var _this = this;
        this._userService.adminLogin(form.value)
            .subscribe(function (data) {
            if (data.result === 'ok') {
                // this.isLoggedIn = true;
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                //   window.location.reload();
                _this.appComp.userName = form.value.username;
                _this.appComp.isLoggedIn = true;
                _this.router.navigate(['/attendance'], { queryParams: { course: '5' },
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    type: 'error',
                    title: 'Invalid Login Crdentials',
                    html: 'Hari Bol:(',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    AdminLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-login',
            template: __webpack_require__("../../../../../src/app/admin-login/admin-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-login/admin-login.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sidebar {\n\ttransition:0.5s;\n}\n\n.nav-link-text {\n\tpadding-left: 20px;\n}\n\n.main-wrapper{\n    background:rgba(255, 255, 255, 0.8) !important; \n}\n.mid-pane{\n    /* height: calc(100vh - 105px); */\n    float: left;\n    width: 100%;\n    transition: 0.5s ease-in-out;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.left-pane {\n    max-width: 250px;\n    padding: 0;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    float: left;\n    overflow: auto;\n    display: block;\n    background: #272634;\n    /*height: calc(100vh - 105px);*/\n    height: calc(100vh);\n\ttransition: 0.5s ease-in-out;\n\tz-index: 10;\n}\n.right-pane {\n    padding: 0px;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1; \n    /*height: calc(100vh - 105px);*/\n        height: calc(100vh);\n\toverflow:auto;\n\t background:url(" + escape(__webpack_require__("../../../../../src/assets/img/bg.jpg")) + ") repeat;\n\t background-size: cover;\n}\n.cmp-logo img {\n    width: 70%;\n    margin: 10px;\n}\n.header-logo {\n    float: left;\n    width: 100%;\n    padding: 15px 15px 10px 15px;\n}\n.cmp-heading{\n    float: left;\n}\n.header-logo h1 {\n    color: #858598;\n    margin: 0 !important;\n    font-size: 20px;\n    margin: 15px;\n}\n.header-logo span {\n    color: #858598;\n    font-size: 13px;\n}\n.left-pane ul{\n    list-style-type: none;\n    padding: 0px;\n    float: left;\n    width: 100%;\n    display: block;\n}\n.left-pane li {\n    width: 100%;\n    display: inline-block;\n}\n.left-pane ul li a {\n    width: 100%;\n    display: block;;\n    line-height: 20px;\n    font-size: 14px;\n    color: #858598;\n    padding: 8px 15px ;\n}\n.left-pane ul li li a{\n\tpadding-left: 40px;\n}\n.left-pane ul li li ul a{\n    padding-left: 75px;\n}\n.left-pane ul li [data-toggle=\"collapse\"]{\n\tposition: relative;\n}\n\n.left-pane ul li a i{\n\tmargin-right: 10px;\n    font-size: 16px;\n}\n.left-pane ul li a.collapsed i.fas.fa-angle-right{ \n    -webkit-transform:  rotate(0deg); \n            transform:  rotate(0deg);\n}\n.left-pane ul li a i.fas.fa-angle-right{   \n\t float: right;\n    font-size: 16px;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n\n.left-pane ul li a:hover,\n.left-pane ul li a:focus {\n\tcolor: #C9C7EF;\n\ttext-decoration: none;\n}\n@-webkit-keyframes swing {\n    0% { -webkit-transform: rotate(20deg); transform: rotate(20deg); }\n    100% { -webkit-transform: rotate(-20deg); transform: rotate(-20deg); }\n}\n@keyframes swing {\n    0% { -webkit-transform: rotate(20deg); transform: rotate(20deg); }\n    100% { -webkit-transform: rotate(-20deg); transform: rotate(-20deg); }\n}\n.left-pane ul li a:hover i:nth-child(1) {\n    -webkit-animation: swing ease-in-out .7s infinite alternate;\n            animation: swing ease-in-out .7s infinite alternate;\n}\n.hide{\n    display: none;\n}\n/*=======collapsible code==========*/\n.sidebar-icon{\n    float: right;\n}\n.sidebar-icon i {\n    float: right;\n    color: rgba(255,255,255,.7);\n    font-size: 20px;\n    cursor: pointer;\n}\n.left-pane.collapseSideBar{\n    max-width: 67px;\n    overflow-x: hidden;\n    padding: 0 10px;\n}\n.left-pane .fa-indent{\n    display: none\n}\n.left-pane .fa-outdent{\n    display: block\n}\n.left-pane.collapseSideBar .fa-outdent{\n    display: none\n}\n.left-pane.collapseSideBar .fa-indent{\n    display: block\n}\n.left-pane.collapseSideBar .cmp-heading,\n.left-pane.collapseSideBar li span,\n.left-pane.collapseSideBar li span,\n.left-pane.collapseSideBar li .fa-angle-right{\n    display: none;\n}\n.left-pane.collapseSideBar li i{\n    font-size: 18px;\n}\n.left-pane.collapseSideBar ul li li a{\n\tpadding-left: 15px;\n}\n\n.topBar {\n\tposition: absolute;\n    width: 100%;\n    background: #272734;\n    right: 0px;\n    z-index:9;\n    height: 70px;\n}\n.ach{\n    margin:15px;border-radius:50%;\n    visibility: hidden;\n}\n/* Responive */\n\n@media only screen and (max-width: 600px) {\n    .left-pane {\n        display:none;\n        -webkit-box-flex: initial;\n            -ms-flex: initial;\n                flex: initial;\n        max-width:320px !important;\n        width:100%;\n    }\n    .sidebar-icon {\n    \tdisplay:none;\n    }\n    .nav-link-text {\n    \tdisplay:block;\n    }\n    .CloseIcon{\n    \tdisplay:block !important;\n    \tcolor: #E91E63 !important;\n    \tfloat:right;\n    }\n}\n\n.logindropdown{\n    font-size: 30px;\n    margin-top: 16px;\n    margin-right: 13px;\n}\n\n@media only screen and (min-width: 601px) { \n\t.left-pane {\n\t\tdisplay:block !important;\n\t}\n}\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1200px) {\n\t/* Styles */\n\t.ach{\n        visibility: visible;\n    }\n}\n\n.mobileToggle {\n\tbackground: #272734;\n    border: none;\n    color: white;\n    padding: 20px;\n    font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--router-outlet></router-outlet-->\n<div class=\"mid-pane\">\n  <div class=\"left-pane\">\n <div class=\"header-logo\">\n <a class=\"cmp-heading\">\n  \n   <img src=\"./assets/img/logo.jpeg\" style=\"width:90%\">\n </a>\n <a id=\"sidebar-collaps\" class=\"sidebar-icon\">\n   <i class=\"fa fa-indent\"></i>\n   <i class=\"fa fa-outdent\"></i>\n </a>\n <a class=\"fa fa-close CloseIcon\" style=\"display:none;\"></a>\n </div>\n <ul>\n   \n   <li>\n     <a class=\"collpased\" data-toggle=\"collapse\" href=\"#collapse1\" class=\"collapsed\">\n       \n      <i class=\"fa fa-fw fa-dashboard\"></i>\n                <span   class=\"nav-link-text\">COURSES</span>\n       <i class=\"fas fa fa-angle-right\"></i>\n     </a>\n     <div class=\"collapse\" id=\"collapse1\">\n          <ul class=\"nav\" style=\"background: #f8f9fa\">\n            <li>\n              <a style=\"color:#000;\"  routerLink=\"/otpattendance\" [queryParams]=\"{ course: 1 }\"\n                  routerActive=\"/otpattendance\"><i class=\"fas fa fa-book\"></i><span>OTP</span> </a>\n            </li>\n            <li >\n              <a style=\"color:#000;\" routerLink=\"/tssvattendance\" [queryParams]=\"{ course: 2 }\" \n              routerActive=\"/tssvattendance\"><i class=\"fas fa fa-book\"></i>TSSV-B10</a>\n            </li>\n            <li >\n              <a style=\"color:#000;\" routerLink=\"/ashrayattendance\" [queryParams]=\"{ course: 3 }\" \n              routerActive=\"/ashrayattendance\"><i class=\"fas fa fa-book\"></i>ASHRAY</a>\n            </li>\n            <!--li >\n              <a style=\"color:#000;\" routerLink=\"/umangattendance\" [queryParams]=\"{ course: 4 }\" \n              routerActive=\"/umangattendance\"><i class=\"fas fa fa-book\"></i>UMANG</a>\n            </li-->\n            <li >\n              <a style=\"color:#000;\" routerLink=\"/bssattendance\" [queryParams]=\"{ course: 6 }\" \n              routerActive=\"/bssattendance\"><i class=\"fas fa fa-book\"></i>BSS</a>\n            </li>\n            <li >\n                <a style=\"color:#000;\" routerLink=\"/dysattendance\" [queryParams]=\"{ course: 7 }\" \n                routerActive=\"/dysattendance\"><i class=\"fas fa fa-book\"></i>DYS</a>\n              </li>\n\n            <li >\n                <a style=\"color:#000\" routerLink=\"/attendance\" [queryParams]=\"{ course: 5 }\" \n                routerActive=\"/attendance\"><i class=\"fas fa fa-book\"></i>ALL DEVOTEES</a>\n            </li>\n          </ul>\n     </div>\n   </li>\n   \n   <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n    <a class=\"nav-link\" routerLink=\"/downloads\" routerActive=\"/downloads\">\n      <i class=\"fa fa-fw fa-download\"></i>\n      <span class=\"nav-link-text\">Downloads</span>\n    </a>\n</li>\n\n<li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n<a  class=\"nav-link\" routerLink=\"/classSdl\" routerActive=\"/classSdl\">\n  <i class=\"fa fa-calendar\"></i>\n  <span class=\"nav-link-text\"> Scheduled Classes</span>\n</a>\n</li> \n </ul>\n  </div>\n  \n  <div class=\"right-pane\">\n   <div class=\"topBar\">\n     <button class=\"mobileToggle\" id=\"sidebar-collapsM\" ><i class=\"fa fa-bars\"></i></button>\n\n     <div *ngIf=\"!isLoggedIn\" class=\"dropdown pull-right logindropdown\" >\n        <i style=\"color:yellow;\" class=\"dropdown-toggle fa fa-user\" data-toggle=\"dropdown\">\n        </i>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" *ngIf=\"!isLoggedIn\"\n      routerLink=\"/adminLogin\" routerActive=\"/adminLogin\">\n      <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Admin Login</a>\n      <a class=\"dropdown-item\" *ngIf=\"!isLoggedIn\" \n      routerLink=\"/counLogin\" routerActive=\"/counLogin\">\n      <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Counsellor Login</a>\n        </div>\n      </div>\n      <!--a *ngIf=\"!isLoggedIn\" style=\"margin-top:25px;\" class=\"pull-right\"\n      routerLink=\"/adminLogin\" routerActive=\"/adminLogin\">\n      <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Admin Login</a-->\n\n      <a *ngIf=\"isLoggedIn\" style=\"margin:25px;color:yellow;\" class=\"pull-right\"\n      (click)=\"adminLogout();\" >\n          <i class=\"fa fa-sign-out\" style=\"cursor: pointer;\" aria-hidden=\"true\"></i></a>\n\n      <a *ngIf=\"isLoggedIn\" style=\"margin-top:25px;color:yellow\" class=\"pull-right\">\n      <i class=\"fa fa-user\" style=\"color:yellow;\" aria-hidden=\"true\"></i> Hare Krishna, {{userName}}</a>\n\n      \n\n  <a href=\"#\" class=\"pull-right \">\n      <img src=\"./assets/img/lokanathswami.jpg\" class=\"ach\"\n       width=\"44\" height=\"46\">\n    </a> \n    <a href=\"#\" class=\"pull-right \">\n        <img src=\"./assets/img/spp.jpg\" class=\"ach\"\n        width=\"44\" height=\"46\" >\n    </a> \n\n  </div>   \n    \n   <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devotee_service__ = __webpack_require__("../../../../../src/app/devotee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(route, dialog, _userService, router) {
        this.route = route;
        this.dialog = dialog;
        this._userService = _userService;
        this.router = router;
        this.isLoggedIn = false;
        this.userName = '';
    }
    AppComponent.prototype.adminLogout = function () {
        localStorage.clear();
        this.isLoggedIn = false;
        this.router.navigateByUrl('/classSdl');
        // window.location.reload();
    };
    AppComponent.prototype.toggleClicked = function () {
        console.log('toggle clicked');
        if (document.getElementById('sidebar').style.width === '250px' || document.getElementById('sidebar').style.width == "") {
            document.getElementById('sidebar').style.width = '52px';
            document.getElementsByClassName('content-wrapper')[0]['style'].marginLeft = '52px';
            document.getElementById('homefooter').style.width = 'calc(100% - 0px)';
            document.getElementById('sidenavToggler').childNodes[1]['className'] = 'fa fa-fw fa-angle-right';
        }
        else {
            document.getElementById('sidebar').style.width = '250px';
            document.getElementsByClassName('content-wrapper')[0]['style'].marginLeft = '250px';
            document.getElementById('homefooter').style.width = 'calc(100% - 250px)';
            document.getElementById('sidenavToggler').childNodes[1]['className'] = 'fa fa-fw fa-angle-left';
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check if counsellor logged in
        var cLogIn = localStorage.getItem('ctoken');
        if (cLogIn) {
            this._userService.iscTokenVerified(cLogIn)
                .subscribe(function (ctokenRes) {
                if (ctokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                    _this.userName = localStorage.getItem('cname');
                    // console.log('c log in  ', cLogIn, localStorage.getItem('cname'));
                }
            });
        }
        // check if admin is login
        var getLoggedIn = localStorage.getItem('token');
        if (getLoggedIn) {
            this._userService.isTokenVerified(getLoggedIn)
                .subscribe(function (tokenRes) {
                if (tokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                }
            });
        }
        $(document).ready(function () {
            $('#sidebar-collaps i').on('click', function () {
                if ($('.left-pane').hasClass('collapseSideBar')) {
                    $('.left-pane').removeClass('collapseSideBar');
                }
                else {
                    $('.left-pane').addClass('collapseSideBar');
                }
            });
            $('#sidebar-collapsM').on('click', function () {
                $('.left-pane')[0].style.display = 'block';
            });
            $('.CloseIcon').on('click', function () {
                $('.left-pane')[0].style.display = 'none';
            });
            //      if ($(window).width() < 600) {
            //          $('.left-pane').addClass('collapseSideBar');
            //      } else {
            //          $('.left-pane').removeClass('collapseSideBar');
            //      }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_cdk_observers__ = __webpack_require__("../../../cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__class_class_component__ = __webpack_require__("../../../../../src/app/class/class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__ = __webpack_require__("../../../../../src/app/attendance/attendance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__downloads_downloads_component__ = __webpack_require__("../../../../../src/app/downloads/downloads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__showdetails_showdetails_component__ = __webpack_require__("../../../../../src/app/showdetails/showdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_login_admin_login_component__ = __webpack_require__("../../../../../src/app/admin-login/admin-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__counsellor_login_counsellor_login_component__ = __webpack_require__("../../../../../src/app/counsellor-login/counsellor-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__calling_details_calling_details_component__ = __webpack_require__("../../../../../src/app/calling-details/calling-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dyshandler_dyshandler_component__ = __webpack_require__("../../../../../src/app/dyshandler/dyshandler.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: 'showDetails/:id', component: __WEBPACK_IMPORTED_MODULE_20__showdetails_showdetails_component__["a" /* ShowdetailsComponent */] },
    { path: 'classSdl', component: __WEBPACK_IMPORTED_MODULE_16__class_class_component__["a" /* ClassComponent */] },
    { path: 'attendance', component: __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["b" /* AttendanceComponent */] },
    { path: 'otpattendance', component: __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["e" /* MainAttendanceComponent */] },
    { path: 'tssvattendance', component: __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["e" /* MainAttendanceComponent */] },
    { path: 'bssattendance', component: __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["e" /* MainAttendanceComponent */] },
    { path: 'umangattendance', component: __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["e" /* MainAttendanceComponent */] },
    { path: 'dysattendance', component: __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["e" /* MainAttendanceComponent */] },
    { path: 'ashrayattendance', component: __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["e" /* MainAttendanceComponent */] },
    { path: 'downloads', component: __WEBPACK_IMPORTED_MODULE_18__downloads_downloads_component__["a" /* DownloadsComponent */] },
    { path: 'adminLogin', component: __WEBPACK_IMPORTED_MODULE_21__admin_login_admin_login_component__["a" /* AdminLoginComponent */] },
    { path: 'counLogin', component: __WEBPACK_IMPORTED_MODULE_22__counsellor_login_counsellor_login_component__["a" /* CounsellorLoginComponent */] },
    { path: 'callingdetails/:username', component: __WEBPACK_IMPORTED_MODULE_23__calling_details_calling_details_component__["a" /* CallingDetailsComponent */] },
    { path: '', redirectTo: 'classSdl', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__class_class_component__["a" /* ClassComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["b" /* AttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_18__downloads_downloads_component__["a" /* DownloadsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["f" /* MarkpresentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__showdetails_showdetails_component__["a" /* ShowdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["a" /* AddDevoteeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["c" /* EditDevoteeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["e" /* MainAttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["d" /* EditDevoteeConfirm */],
                __WEBPACK_IMPORTED_MODULE_21__admin_login_admin_login_component__["a" /* AdminLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__counsellor_login_counsellor_login_component__["a" /* CounsellorLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__calling_details_calling_details_component__["a" /* CallingDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dyshandler_dyshandler_component__["a" /* DyshandlerComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["f" /* MarkpresentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["a" /* AddDevoteeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["c" /* EditDevoteeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["d" /* EditDevoteeConfirm */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["e" /* MainAttendanceComponent */],
                __WEBPACK_IMPORTED_MODULE_20__showdetails_showdetails_component__["a" /* ShowdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dyshandler_dyshandler_component__["a" /* DyshandlerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["G" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["J" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["K" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["L" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["M" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["H" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false, useHash: true })
            ],
            exports: [
                // Material Modules
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["J" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["G" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["K" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["L" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["M" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["H" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_cdk_observers__["a" /* ObserversModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_cdk_overlay__["d" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_cdk_platform__["b" /* PlatformModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_cdk_portal__["g" /* PortalModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/attendance/add-devotee.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " \nmat-form-field{\n    margin: 15px;\n    width: 140px;\n}\n\n.form-container{\n    border-radius: 15px;\n    margin-bottom: 30px;\n\n}\n\n.mat-dialog-container {\n    height: 85vh;\n}\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1200px) {\n\t.mat-dialog-container {\n        height: 55vh;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/attendance/add-devotee.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n       \n      <!--mat-toolbar>Add Devotee</mat-toolbar-->\n          \n      \n      <div *ngIf=\"formError\" style=\"margin:5px;\" class=\"alert alert-danger alert-dismissable\">\n        <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n        <strong>{{formError}}</strong>\n      </div>\n      \n\n\n      <form #classForm=\"ngForm\" (ngSubmit)=\"_addDevotee(classForm)\" >\n     \n        <mat-form-field>                                  \n            <input matInput name=\"name\" [(ngModel)]=\"name\"  placeholder=\"Name\" required>  \n         </mat-form-field>  \n\n\n         <mat-form-field>                                  \n            <input matInput name=\"contact\" [(ngModel)]=\"contact\"  placeholder=\"Contact\" required>  \n         </mat-form-field>  \n\n\n         <mat-form-field>                                  \n            <input matInput name=\"contact2\" [(ngModel)]=\"contact2\"  placeholder=\"Alternative Contact\" required>  \n         </mat-form-field>  \n\n\n\n         <!--mat-form-field>                                  \n            <input matInput name=\"age\" [(ngModel)]=\"age\"  placeholder=\"Age\" required>  \n         </mat-form-field--> \n\n         <mat-form-field>                                  \n            <input matInput name=\"email\" [(ngModel)]=\"mail\"  placeholder=\"Email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>  \n         </mat-form-field>  \n      \n        <mat-form-field>                                                              \n          <input matInput name=\"dob\" [(ngModel)]=\"dob\" [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" required>       \n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n          <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>                                   \n        </mat-form-field>   \n\n             \n        <mat-form-field *ngIf=\"all\">                                                             \n            <mat-select [(ngModel)]=\"counsellor\" name=\"counsellor\" placeholder=\"Counsellor\" required>                                      \n               \n              <mat-option *ngFor=\"let c of counsellors\" [value]=\"c.value\">\n                  {{c.value}}  \n              </mat-option>                              \n                                          \n            </mat-select>                                                              \n          </mat-form-field> \n          \n          <mat-form-field *ngIf=\"all\">                                                             \n              <mat-select [(ngModel)]=\"course\" name=\"course\" placeholder=\"Course\" required>                                      \n                 \n                <mat-option *ngFor=\"let c of courses\" [value]=\"c.value\">\n                    {{c.value}}  \n                </mat-option>                              \n                                            \n              </mat-select>                                                              \n            </mat-form-field>\n        <button mat-raised-button type=\"submit\" class=\"btn btn-primary\">Add Devotee</button>\n      </form>    \n    </div>\n      \n      <!-- Add new devotee End-->"

/***/ }),

/***/ "../../../../../src/app/attendance/attendance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tpadding: 20px;\n\tborder: 2px solid wheat;\n}\n\n.form-container>* {\n\twidth: 100%;\n}\n.formClass{\n\tborder:2px solid brown;\n\tborder-radius: 15px;\n\tfont-weight: bold;\n}\n\nmat-form-field {\n\tmargin: 30px;\n\twidth: 900px;\n}\n\n.mat-row, .mat-header-row {\n\twidth: 200vw;\n}\n\n.mat-form-field-infix {\n\twidth: 900px;\n}\n\n.mat-cell:nth-child(3), .mat-header-cell:nth-child(3) {\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 22%;\n\t        flex: 0 0 22%;\n}\n\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 18%;\n\t        flex: 0 0 18%;\n}\n\n.mat-cell:nth-child(1), .mat-header-cell:nth-child(1) {\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 20%;\n\t        flex: 0 0 20%;\n}\n\n.mat-cell:nth-child(4), .mat-header-cell:nth-child(4) {\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 12%;\n\t        flex: 0 0 12%;\n}\n\n .content-wrapper{\n\tmargin-top: 80px;\n}\n\n.container-fluid{\n\tz-index: 1;\n\topacity: 0.8;\n\tposition: relative;\n  /*  top: 100px;*/\n}\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1200px) {\n\t/* Styles */\n\t.mat-row, .mat-header-row {\n\t\twidth: auto;\n\t}\n\n\tmat-form-field {\n\t\twidth: 800px;\n\t}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/attendance/attendance.component.html":
/***/ (function(module, exports) {

module.exports = " \n <div class=\"content-wrapper\">\n    <div class=\"container-fluid\">  \n             <!-- Breadcrumbs-->\n             <ol class=\"breadcrumb\" >\n                <li class=\"breadcrumb-item\">\n                  <a href=\"#\">COURSES</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Attendance</li>\n              </ol>  \n      <!-- Add New Devotee-->\n     \n        \n        <!-- Add new devotee End-->\n      <!-- Example DataTables Card-->\n    <div class=\"card mb-3 col-md-offset-2 mat-elevation-z12\" style=\"margin-top:42px;\">\n        <div class=\"card-header\" \n          style=\"background-color:yellow;\">\n          <i class=\"fa fa-table\"></i> Devotee List\n\n          <button *ngIf=\"showAddDevotee\" \n          mat-raised-button\n          (click)=\"handleDevoteeDialog()\" \n          class=\"btn btn-primary pull-right\" matTooltip=\"Add New Devotee\">\n          Add Devotee\n        </button>\n          \n        </div>\n\n        <div class=\"card-body\" >\n          <div class=\"table-responsive formClass mat-elevation-z12\" >\n\n\t\t\t\t\n\n\t\t\t\t\t<mat-form-field>\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n              <mat-table #table [dataSource]=\"dataSource\">\n\n                  <ng-container matColumnDef=\"name\">\n                    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n                  </ng-container>\n              \n                  <ng-container matColumnDef=\"contact\">\n                    <mat-header-cell *matHeaderCellDef> Contact </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.contact}} </mat-cell>\n                  </ng-container>\n              \n                  <ng-container matColumnDef=\"counsellor\">\n                    <mat-header-cell *matHeaderCellDef> Counsellor </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.counsellor}} </mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"course\">\n                      <mat-header-cell *matHeaderCellDef> Course </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.course}} </mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"facilitator\">\n                      <mat-header-cell *matHeaderCellDef> Facilitator </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.facilitator}} </mat-cell>\n                  </ng-container>\n              \n                  <ng-container matColumnDef=\"actions\">\n                    <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\">\n                      <button *ngIf=\"showAllSwitch\"\n                        mat-raised-button style=\"margin:2px;\" type=\"submit\" \n                        (click)=\"markPresent(element)\" \n                        class=\"btn btn-primary\" matTooltip=\"Click here to mark present\" >\n                       <i class=\"fa fa-fw fa-user\"></i>\n                     </button>  \n\n                     <button *ngIf=\"isLoggedIn\"\n                      mat-raised-button style=\"margin:2px;\" type=\"submit\" \n                      (click)=\"showDetails(element)\" \n                      class=\"btn btn-primary\" matTooltip=\"Show Details\">\n                      <i class=\"fa fa-address-card\"></i>\n                     </button>\n\n\n                     <!--button *ngIf=\"isLoggedIn\"\n                      mat-raised-button style=\"margin:2px;\" type=\"submit\" \n                      (click)=\"delRecord(element)\" \n                      class=\"btn btn-primary\" matTooltip=\"Delete Record\">\n                      <i class=\"fa fa-trash\"></i>\n\n                     </button-->\n\n                     <!--button\n                     mat-raised-button style=\"margin:2px;\" type=\"submit\" \n                     (click)=\"editDevoteeDialog(element)\" \n                     class=\"btn btn-primary\" \n                     matTooltip=\"Edit Details\">\n                     <i class=\"fa fa-edit\"></i>\n                     \n                  \n                    </button-->\n\n                    \n                    </mat-cell>\n                  </ng-container>\n              \n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n              \n                </mat-table>\n                <mat-paginator #paginator\n                 [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 20, 50]\" \n                 \n                 >\n             </mat-paginator> \n            \n          </div>\n        </div>\n        <div class=\"card-footer small text-muted\">\n        </div>\n\n      </div>\n    <!-- /.container-fluid-->\n    <!-- /.content-wrapper-->"

/***/ }),

/***/ "../../../../../src/app/attendance/attendance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AttendanceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MarkpresentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MainAttendanceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EditDevoteeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EditDevoteeConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDevoteeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devotee_service__ = __webpack_require__("../../../../../src/app/devotee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__showdetails_showdetails_component__ = __webpack_require__("../../../../../src/app/showdetails/showdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dyshandler_dyshandler_component__ = __webpack_require__("../../../../../src/app/dyshandler/dyshandler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(route, dialog, _userService, router, snackBar, appComp) {
        var _this = this;
        this.route = route;
        this.dialog = dialog;
        this._userService = _userService;
        this.router = router;
        this.snackBar = snackBar;
        this.appComp = appComp;
        this.displayedColumns = ['name', 'contact', 'counsellor', 'course', 'facilitator', 'actions'];
        this.ELEMENT_DATA = [];
        this.DETAILS_DATA = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatTableDataSource */](this.ELEMENT_DATA);
        this.dataSourceDetails = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatTableDataSource */](this.DETAILS_DATA);
        this.launchModal = false;
        this.showAddDevotee = false;
        this.formError = '';
        this.topic = '';
        this.devoteeData = { contact: '' };
        this.loading = false;
        this.con = '';
        this.values = '';
        this.showAllSwitch = true;
        this.dStatus = {};
        this.devotees = [];
        this.getOTPData = false;
        this.isLoggedIn = false;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
        this.counsellors = [
            { value: 'HG Shyam Gopal Prabhuji' },
            { value: 'HG Kalpvraksha Prabhuji' },
            { value: 'HG Vaidant Chaitnya Prabhuji' },
            { value: 'HG Pundrik Vidhyanidhi Prabhuji' },
            { value: 'HG Jagadanand Pandit Prabhuji' },
            { value: 'NA' },
        ];
        this.courses = [
            { value: 'OTP' },
            { value: 'TSSV' },
            { value: 'ASHRAY' },
            { value: 'BSS' },
            { value: 'UMANG' },
            { value: 'DYS' },
        ];
        this.facilitators = [
            { sgp: ['HG Madhav Caran Das'] },
            { kvp: ['HG Anant Nimai Das'] },
            { pvnp: [''] },
            { jnp: ['HG Vraj Jana Ranjan Das'] },
            { vcp: ['HG Shastra chaksu Das', 'HG Kishan Kanhyia Prabhuji'] },
        ];
        this.findKey = function (username) {
            //  console.log('element ', this.facilitators[0]);
            switch (username) {
                case 'sgp':
                    return _this.facilitators[0]['sgp'];
                case 'kvp':
                    return _this.facilitators[1]['kvp'];
                case 'vcp':
                    return _this.facilitators[4]['vcp'];
                case 'pvnp':
                    return _this.facilitators[2]['pvnp'];
                case 'jnp':
                    return _this.facilitators[3]['jnp'];
                case 'admin':
                    return [];
            }
        };
    }
    // (page)="pageEvent = getPageDetails($event)"
    /* getPageDetails(e) {
      console.log(e.pageSize);
      this._getDevotees({course:5});
    }*/
    AttendanceComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSourceDetails.paginator = this.paginatorDetails;
    };
    AttendanceComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("in attendance");
        this.route.queryParams.subscribe(function (params) {
            if (params['course'] === '5') {
                _this.showAddDevotee = true;
                _this._getDevotees(params);
            }
        });
        if ($(window).width() < 600) {
            $('.left-pane')[0].style.display = 'none';
        }
    };
    AttendanceComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('requirceed') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    AttendanceComponent.prototype._getDevotees = function (params) {
        var _this = this;
        // Check if counsellor logged in
        var cLogIn = localStorage.getItem('ctoken');
        if (cLogIn) {
            this._userService.iscTokenVerified(cLogIn)
                .subscribe(function (ctokenRes) {
                if (ctokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                    _this.appComp.isLoggedIn = true;
                    _this.appComp.userName = localStorage.getItem('cname');
                }
            });
        }
        // check if cousellor is login
        var getLoggedIn = localStorage.getItem('token');
        if (getLoggedIn) {
            this._userService.isTokenVerified(getLoggedIn)
                .subscribe(function (tokenRes) {
                if (tokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                    _this.appComp.isLoggedIn = true;
                    _this.appComp.userName = 'admin';
                }
            });
        }
        // get all devotees
        this._userService.getDevotees(params['course'])
            .subscribe(function (userData) {
            if (userData.result) {
                userData.result = userData.result.filter(function (el) {
                    return el.username !== 'admin';
                });
            }
            if (userData.sdlResult && userData.sdlResult.length > 0) {
                _this.dataSource.data = userData.result;
            }
            else if (!userData.sdlResult && userData.result.length >= 0 && params['course'] === '5') {
                _this.showAllSwitch = false;
                _this.dataSource.data = userData.result;
            }
            else {
                _this.router.navigateByUrl('/classSdl');
            }
        });
    };
    AttendanceComponent.prototype.showDetails = function (dv) {
        var _this = this;
        this._userService.getDetails(dv['_id'])
            .subscribe(function (userData) {
            if (userData.result[0].attendance) {
                _this.dataSourceDetails.data = userData.result[0].attendance;
                userData.result[0].dataSourceDetails = _this.dataSourceDetails;
                console.log('counsellor', _this.findKey(_this.appComp.userName));
                userData.result[0].facilitators = _this.findKey(_this.appComp.userName);
            }
            console.log('data is ', userData.result[0]);
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__showdetails_showdetails_component__["a" /* ShowdetailsComponent */], {
                width: '100vh',
                hasBackdrop: false,
                data: __assign({}, userData.result[0])
            });
            /*dialogRef.afterClosed().subscribe(result => {
              console.log('result is', result);
            });*/
        });
    };
    AttendanceComponent.prototype.handleDevoteeDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddDevoteeComponent, {
            width: '100vh',
            hasBackdrop: false,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result.name || !result.email
                || !result.contact || !result.dob
                || !result.counsellor || !result.course) {
                _this.formError = 'All fields are mandatory';
            }
            else {
                _this._userService.addDevoteeGeneric(result)
                    .subscribe(function (userData) {
                    if (userData['result'] === 'ok') {
                        window.location.reload();
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                            type: 'success',
                            title: 'Hare Krishna, We have new devotee in IYF',
                            html: 'Hari Bol!!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                            type: 'warning',
                            title: 'Hare Krishna, We already have this record',
                            html: 'Hari Bol!!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
            }
        });
    };
    AttendanceComponent.prototype.editDevoteeDialog = function (dv) {
        var _this = this;
        var dialogRef = this.dialog.open(EditDevoteeComponent, {
            width: '100vh',
            height: '60vh',
            hasBackdrop: false,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.dob) {
                result.dob = _this._userService.parseDate(result.dob);
            }
            result._id = dv._id;
            _this._userService.editDevotee(result)
                .subscribe(function (userData) {
                if (userData['result'] === 'ok') {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                        type: 'success',
                        title: 'Record updated successfully',
                        html: 'Hari Bol!!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        });
    };
    AttendanceComponent.prototype.delRecord = function (dv) {
        this._userService.delRecord(dv.contact)
            .subscribe(function (userData) {
            if (userData['result'] === 'ok') {
                console.log('in del record', userData);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */])
    ], AttendanceComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */])
    ], AttendanceComponent.prototype, "paginatorDetails", void 0);
    AttendanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-attendance',
            template: __webpack_require__("../../../../../src/app/attendance/attendance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/attendance/attendance.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__devotee_service__["a" /* UserService */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__devotee_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());

var MarkpresentComponent = /** @class */ (function () {
    function MarkpresentComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.status = [
            { value: 'YES' },
            { value: 'NO' }
        ];
    }
    MarkpresentComponent.prototype.updateAtt = function (form) {
        this.dialogRef.close(form.value);
    };
    MarkpresentComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MarkpresentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mark-present',
            template: __webpack_require__("../../../../../src/app/attendance/mark-present.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], MarkpresentComponent);
    return MarkpresentComponent;
}());

var MainAttendanceComponent = /** @class */ (function () {
    function MainAttendanceComponent(route, dialog, _userService, router, snackBar, appComp) {
        var _this = this;
        this.route = route;
        this.dialog = dialog;
        this._userService = _userService;
        this.router = router;
        this.snackBar = snackBar;
        this.appComp = appComp;
        this.startDate = new Date(1987, 0, 1);
        this.devoteeData = { contact: '', contact2: '', counsellor: '', course: '', email: '', dob: '', name: '' };
        this.loading = false;
        this.dStatus = {};
        this.attendanceArray = [];
        this.displayedColumns = ['Name', 'Contact', 'Attendance'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatTableDataSource */]([]);
        this.isLoggedIn = false;
        this.todayDate = new Date();
        this.handleDysAttendance = function (course, contact, name) {
            // console.log('in dys attendance', this.devoteeData, this.topic);
            var month = _this.todayDate.getMonth() + 1;
            var date = _this.todayDate.getDate() + '-' + month + '-' + _this.todayDate.getFullYear();
            _this._userService.checkIfClassSdlForCourse(course, date)
                .subscribe(function (dysClassData) {
                //    console.log('dys data is ', dysClassData);
                _this.dStatus['date'] = date;
                _this.dStatus['present'] = 'YES';
                _this.dStatus['topic'] = _this.topic;
                _this.dStatus['speaker'] = _this.getSpeakerOfThisTopic(dysClassData, _this.topic);
                _this.dStatus['contact'] = contact;
                _this._userService.markAttendance(_this.dStatus)
                    .subscribe(function (userDataNew) {
                    if (userDataNew['result'] === 'ok') {
                        _this.loading = false;
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                            type: 'success',
                            title: 'Attendance updated successfully',
                            html: 'Hari Bol!!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        _this.attendanceArray.push({
                            name: name,
                            contact: contact,
                            attendance: 'YES',
                            topic: _this.topic
                        });
                        _this.dataSource.data = _this.attendanceArray;
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                            type: 'warning',
                            title: 'Attendance already updated',
                            html: 'Hari Bol!!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        _this.dataSource.data = _this.attendanceArray;
                        _this.loading = false;
                    }
                });
            });
        };
    }
    MainAttendanceComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    MainAttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ($(window).width() < 600) {
            $('.left-pane')[0].style.display = 'none';
        }
        var course = '';
        var todayDateNew = this._userService.parseDate(this.todayDate);
        this.route.queryParams.subscribe(function (params) {
            // console.log('param is main', params['course']);
            if (params['course'] === '1') {
                course = 'OTP';
            }
            else if (params['course'] === '2') {
                course = 'TSSV-B10';
            }
            else if (params['course'] === '3') {
                course = 'ASHRAY';
            }
            else if (params['course'] === '4') {
                course = 'UMANG';
            }
            else if (params['course'] === '6') {
                course = 'BSS';
            }
            else if (params['course'] === '7') {
                course = 'DYS';
            }
        });
        // Check if counsellor logged in
        var cLogIn = localStorage.getItem('ctoken');
        if (cLogIn) {
            this._userService.iscTokenVerified(cLogIn)
                .subscribe(function (ctokenRes) {
                if (ctokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                    _this.appComp.isLoggedIn = true;
                    _this.appComp.userName = localStorage.getItem('cname');
                }
            });
        }
        // check if cousellor is login
        var getLoggedIn = localStorage.getItem('token');
        if (getLoggedIn) {
            this._userService.isTokenVerified(getLoggedIn)
                .subscribe(function (tokenRes) {
                if (tokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                    _this.appComp.isLoggedIn = true;
                    _this.appComp.userName = 'admin';
                }
            });
        }
        this._userService.checkIfClassSdlForCourse(course, todayDateNew)
            .subscribe(function (sdlresult) {
            if (sdlresult.result.length === 0) {
                _this.router.navigateByUrl('/classSdl');
            }
            else if (sdlresult.result.length !== 0 && course === 'DYS') {
                var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dyshandler_dyshandler_component__["a" /* DyshandlerComponent */], {
                    width: '280px',
                    disableClose: true,
                    hasBackdrop: false,
                    data: { res: sdlresult.result }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    if (result.dystopic === undefined) {
                        _this.topic = sdlresult.result[0].topic;
                        _this.devoteeData.counsellor = _this.getSpeakerOfThisTopic(sdlresult, sdlresult.result[0].topic);
                    }
                    else {
                        _this.topic = result.dystopic;
                        _this.devoteeData.counsellor = _this.getSpeakerOfThisTopic(sdlresult, result.dystopic);
                    }
                    _this.devoteeData.course = 'DYS';
                });
            }
            else if (sdlresult.result.length !== 0 && course === 'TSSV-B10') {
                var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dyshandler_dyshandler_component__["a" /* DyshandlerComponent */], {
                    width: '280px',
                    disableClose: true,
                    hasBackdrop: false,
                    data: { res: sdlresult.result }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    if (result.dystopic === undefined) {
                        _this.topic = sdlresult.result[0].topic;
                        _this.devoteeData.counsellor = _this.getSpeakerOfThisTopic(sdlresult, sdlresult.result[0].topic);
                    }
                    else {
                        _this.topic = result.dystopic;
                        _this.devoteeData.counsellor = _this.getSpeakerOfThisTopic(sdlresult, result.dystopic);
                    }
                    _this.devoteeData.course = 'TSSV-B10';
                });
            }
            else {
                _this.topic = sdlresult.result[0].topic;
                _this.devoteeData.counsellor = sdlresult.result[0].speaker;
                _this.devoteeData.course = sdlresult.result[0].course;
            }
        });
        this._userService.getTodayAttendance(course)
            .subscribe(function (userData) {
            if (userData.result.length !== 0) {
                var result_json = [];
                for (var i = 0; i < userData.result.length; i++) {
                    var objectToShow = {};
                    objectToShow['name'] = userData.result[i].name;
                    objectToShow['contact'] = userData.result[i].contact;
                    for (var j = 0; j < userData.result[i].attendance.length; j++) {
                        if (userData.result[i].attendance[j].date.localeCompare(todayDateNew) === 0) {
                            objectToShow['date'] = userData.result[i].attendance[j].date;
                            objectToShow['attendance'] = userData.result[i].attendance[j].present;
                            objectToShow['topic'] = userData.result[i].attendance[j].topic;
                            objectToShow['speaker'] = userData.result[i].attendance[j].speaker;
                            break;
                        }
                    }
                    result_json.push(objectToShow);
                }
                _this.attendanceArray = result_json;
                _this.dataSource.data = _this.attendanceArray;
            }
        });
    };
    MainAttendanceComponent.prototype.getSpeakerOfThisTopic = function (sdlresult, topic) {
        for (var i = 0; i < sdlresult.result.length; i++) {
            if (sdlresult.result[i].topic === topic) {
                return sdlresult.result[i].speaker;
                // return (sdlresult.result[i].speaker === 'NA' ? sdlresult.result[i].guest : sdlresult.result[i].speaker);
            }
        }
    };
    MainAttendanceComponent.prototype._searchedDevotee = function (contact, isContact, course) {
        var _this = this;
        this._userService.getSearchedDevotee(contact, course)
            .subscribe(function (userData) {
            if (userData.sdlResult) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    type: 'error',
                    title: 'No Data Found, Please add details',
                    html: 'Hari Bol!!',
                    showConfirmButton: false,
                    timer: 1500
                });
                _this.loading = false;
                if (isContact) {
                    _this.devoteeData = { contact: contact, contact2: '',
                        course: userData.sdlResult[0].course,
                        counsellor: userData.sdlResult[0].counsellor,
                        email: '', dob: '', name: '' };
                }
                else {
                    _this.devoteeData = { email: contact, contact2: '',
                        course: userData.sdlResult[0].course,
                        counsellor: userData.sdlResult[0].counsellor,
                        contact: '', dob: '', name: '' };
                }
            }
            else if (userData.result === 'notok') {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    type: 'error',
                    title: 'Class not scheduled for OTP',
                    html: 'Hari Bol!!',
                    showConfirmButton: false,
                    timer: 1500
                });
                _this.loading = false;
            }
            else {
                _this.devoteeData = userData.result[0];
                _this.loading = false;
            }
        });
    };
    MainAttendanceComponent.prototype.getSearchedDevotee = function (contact) {
        var course = this.devoteeData.course;
        this.loading = true;
        var isContact = false;
        if (!isNaN(parseInt(contact))) {
            if (contact.length !== 10 && contact !== undefined) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    type: 'error',
                    title: 'Invalid mobile no',
                    html: 'Hari Bol!!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.loading = false;
            }
            else if (contact.length === 10 && contact !== '') {
                isContact = true;
                this._searchedDevotee(contact, isContact, course);
            }
        }
        else {
            this._searchedDevotee(contact, isContact, course);
        }
    };
    MainAttendanceComponent.prototype.addDevotee = function (devoteeForm) {
        var _this = this;
        if (!devoteeForm.value.name || !devoteeForm.value.email
            || !devoteeForm.value.contact || !devoteeForm.value.dob
            || !devoteeForm.value.course) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                type: 'error',
                title: 'All fields are mandatory',
                html: '',
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            var course_1 = devoteeForm.value.course;
            var contact_1 = devoteeForm.value.contact;
            var name_1 = devoteeForm.value.name;
            this.loading = true;
            this._userService.getSearchedDevotee(this.devoteeData.contact, course_1)
                .subscribe(function (userData) {
                var valuesToUpdate = {};
                var misMatch = false;
                if (userData.result && userData.result.length !== 0) {
                    if (userData.result[0].contact !== _this.devoteeData.contact) {
                        valuesToUpdate['contact'] = _this.devoteeData.contact;
                        misMatch = true;
                    }
                    if (userData.result[0].name !== _this.devoteeData.name) {
                        valuesToUpdate['name'] = _this.devoteeData.name;
                        misMatch = true;
                    }
                    if (userData.result[0].contact2 !== _this.devoteeData.contact2) {
                        valuesToUpdate['contact2'] = _this.devoteeData.contact2;
                        misMatch = true;
                    }
                    if (userData.result[0].email !== _this.devoteeData.email) {
                        valuesToUpdate['email'] = _this.devoteeData.email;
                        misMatch = true;
                    }
                    if (userData.result[0].dob !== _this.devoteeData.dob) {
                        valuesToUpdate['dob'] = _this.devoteeData.dob;
                        misMatch = true;
                    }
                    /*if(userData.result[0].counsellor !== this.devoteeData.counsellor){
                      valuesToUpdate["counsellor"] = this.devoteeData.counsellor;
                      misMatch = true;
                    }*/
                    if (userData.result[0].course !== _this.devoteeData.course) {
                        valuesToUpdate['course'] = _this.devoteeData.course;
                        misMatch = true;
                    }
                    if (misMatch) {
                        var YES = 'YES';
                        var NO = 'NO';
                        var dialogRef = _this.dialog.open(EditDevoteeConfirm, {
                            width: '280px',
                            data: { YES: YES, NO: NO, update: valuesToUpdate }
                        });
                        dialogRef.afterClosed().subscribe(function (result) {
                            if (result === 'YES') {
                                valuesToUpdate['_id'] = userData.result[0]._id;
                                _this._userService.editDevotee(valuesToUpdate)
                                    .subscribe(function (editData) {
                                    if (editData['result'] === 'ok') {
                                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                                            type: 'success',
                                            title: 'Record updated successfully',
                                            html: '',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        _this.loading = false;
                                    }
                                    else {
                                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                                            type: 'error',
                                            title: 'Problem in updating record',
                                            html: 'Hari Bol!!',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        _this.loading = false;
                                    }
                                });
                                // devoteeForm.reset();
                                _this.markAttendance(course_1, contact_1, name_1);
                            }
                            else {
                                _this.loading = false;
                            }
                        });
                    }
                    else {
                        _this.markAttendance(course_1, contact_1, name_1);
                    }
                }
                else {
                    _this._userService.addDevotee(_this.devoteeData)
                        .subscribe(function (addData) {
                        if (addData['result'] === 'ok') {
                            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                                type: 'success',
                                title: 'Hare Krishna, We have new devotee in IYF',
                                html: 'Hari Bol!!',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            _this.loading = false;
                            _this.attendanceArray.push({
                                name: _this.devoteeData['name'],
                                contact: _this.devoteeData['contact'],
                                attendance: 'YES',
                            });
                            _this.dataSource.data = _this.attendanceArray;
                        }
                        else if (addData['result'] === 'updated') {
                            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                                type: 'success',
                                title: 'Devotee details updated successfully',
                                html: 'Hari Bol!!',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            _this.loading = false;
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                                type: 'success',
                                title: 'Hare Krishna, Something went wrong, Please try again',
                                html: 'Hari Bol!!',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            _this.loading = false;
                        }
                    });
                }
            });
        }
    };
    MainAttendanceComponent.prototype.markAttendance = function (course, contact, name) {
        var _this = this;
        // console.log('mark attendance', course, this.devoteeData);
        if (course === 'DYS' || course === 'TSSV-B10') {
            this.handleDysAttendance(course, contact, name);
        }
        else {
            var specialCourse_1 = false;
            this.route.queryParams.subscribe(function (params) {
                if (params['course'] === '4') {
                    specialCourse_1 = true;
                }
            });
            if (course !== '') {
                this.loading = true;
                var month = this.todayDate.getMonth() + 1;
                var date = this.todayDate.getDate() + '-' + month + '-' + this.todayDate.getFullYear();
                this._userService.checkIfClassSdlForCourse(specialCourse_1 ? 'UMANG' : course, date)
                    .subscribe(function (userData) {
                    if (userData.result.length > 0) {
                        _this.dStatus['date'] = userData.result[0].date;
                        _this.dStatus['present'] = 'YES';
                        _this.dStatus['topic'] = userData.result[0].topic;
                        _this.dStatus['speaker'] = userData.result[0].speaker;
                        // if(this.devoteeData.contact){
                        _this.dStatus['contact'] = contact;
                        _this._userService.markAttendance(_this.dStatus)
                            .subscribe(function (userDataNew) {
                            if (userDataNew['result'] === 'ok') {
                                _this.loading = false;
                                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                                    type: 'success',
                                    title: 'Attendance updated successfully',
                                    html: 'Hari Bol!!',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                _this.attendanceArray.push({
                                    name: name,
                                    contact: contact,
                                    attendance: 'YES'
                                });
                                _this.dataSource.data = _this.attendanceArray;
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                                    type: 'warning',
                                    title: 'Attendance already updated',
                                    html: 'Hari Bol!!',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                _this.dataSource.data = _this.attendanceArray;
                                _this.loading = false;
                            }
                        });
                        // }
                    }
                    else {
                        _this.loading = false;
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                            type: 'error',
                            title: 'No class sdl for selected date',
                            html: 'Hari Bol!!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */])
    ], MainAttendanceComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */])
    ], MainAttendanceComponent.prototype, "sort", void 0);
    MainAttendanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main-attendance',
            template: __webpack_require__("../../../../../src/app/attendance/main-attendance.html"),
            styles: [__webpack_require__("../../../../../src/app/attendance/main-attendance.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__devotee_service__["a" /* UserService */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__devotee_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]])
    ], MainAttendanceComponent);
    return MainAttendanceComponent;
}());

var EditDevoteeComponent = /** @class */ (function () {
    function EditDevoteeComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.startDate = new Date(1987, 0, 1);
        this.all = true;
        this.counsellors = [
            { value: 'HG Shyam Gopal Prabhuji' },
            { value: 'HG Kalpvraksha Prabhuji' },
            { value: 'HG Vaidant Chaitnya Prabhuji' },
            { value: 'HG Pundrik Vidhyanidhi Prabhuji' },
            { value: 'HG Jagadanand Pandit Prabhuji' },
            { value: 'NA' },
        ];
        this.courses = [
            { value: 'OTP' },
            { value: 'TSSV-B10' },
            { value: 'ASHRAY' },
            { value: 'BSS' },
            { value: 'UMANG' },
            { value: 'DYS' },
        ];
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
    }
    EditDevoteeComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    EditDevoteeComponent.prototype.updateDevotee = function (form) {
        this.dialogRef.close(form.value);
    };
    EditDevoteeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditDevoteeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'edit-devotee',
            template: __webpack_require__("../../../../../src/app/attendance/edit-devotee.html"),
            styles: [__webpack_require__("../../../../../src/app/attendance/edit.devotee.css")],
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], EditDevoteeComponent);
    return EditDevoteeComponent;
}());

var EditDevoteeConfirm = /** @class */ (function () {
    function EditDevoteeConfirm(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
    }
    EditDevoteeConfirm.prototype.ngOnInit = function () {
    };
    EditDevoteeConfirm.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    EditDevoteeConfirm.prototype.onNoClick = function (no) {
        this.dialogRef.close(no);
    };
    EditDevoteeConfirm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'edit-devotee',
            template: __webpack_require__("../../../../../src/app/attendance/edit-confirm.html"),
            styles: [__webpack_require__("../../../../../src/app/attendance/edit-confirm.css")],
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], EditDevoteeConfirm);
    return EditDevoteeConfirm;
}());

var AddDevoteeComponent = /** @class */ (function () {
    function AddDevoteeComponent(route, dialog, router, dialogRef, data) {
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.all = false;
        this.startDate = new Date(1987, 0, 1);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
        this.counsellors = [
            { value: 'HG Shyam Gopal Prabhuji' },
            { value: 'HG Kalpvraksha Prabhuji' },
            { value: 'HG Vaidant Chaitnya Prabhuji' },
            { value: 'HG Pundrik Vidhyanidhi Prabhuji' },
            { value: 'HG Jagadanand Pandit Prabhuji' },
            { value: 'NA' },
        ];
        this.courses = [
            { value: 'OTP' },
            { value: 'TSSV-B10' },
            { value: 'ASHRAY' },
            { value: 'BSS' },
            { value: 'UMANG' },
            { value: 'DYS' },
        ];
    }
    AddDevoteeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['course'] === '5') {
                _this.all = true;
            }
        });
    };
    AddDevoteeComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    AddDevoteeComponent.prototype._addDevotee = function (form) {
        this.dialogRef.close(form.value);
    };
    AddDevoteeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddDevoteeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'add-devotee',
            template: __webpack_require__("../../../../../src/app/attendance/add-devotee.html"),
            styles: [__webpack_require__("../../../../../src/app/attendance/add-devotee.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], AddDevoteeComponent);
    return AddDevoteeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/attendance/edit-confirm.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/attendance/edit-confirm.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n<h6 style=\"color:green;\"> We found update in devotee data, Please confirm the same. </h6>\n<div mat-dialog-actions>\n        <button mat-button [mat-dialog-close]=\"data.NO\">NO</button>\n        <button mat-button [mat-dialog-close]=\"data.YES\" cdkFocusInitial>YES</button>\n </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/attendance/edit-devotee.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n       \n        <!--mat-toolbar>Update Devotee Details</mat-toolbar-->\n          \n      \n      <div *ngIf=\"formError\" style=\"margin:5px;\" class=\"alert alert-danger alert-dismissable\">\n        <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n        <strong>{{formError}}</strong>\n      </div>\n      \n\n\n      <form #classForm=\"ngForm\" (ngSubmit)=\"updateDevotee(classForm)\" >\n                 \n\n        <mat-form-field>                                  \n            <input matInput name=\"name\" [(ngModel)]=\"name\"  placeholder=\"Name\" required>  \n         </mat-form-field>  \n\n\n         <mat-form-field>                                  \n            <input matInput name=\"contact\" [(ngModel)]=\"contact\"  placeholder=\"Contact\" required>  \n         </mat-form-field>  \n\n         <mat-form-field>                                  \n            <input matInput name=\"contact2\" [(ngModel)]=\"contact2\"  placeholder=\"Alternative Contact\" required>  \n         </mat-form-field>  \n\n\n         <!--mat-form-field>                                  \n            <input matInput name=\"age\" [(ngModel)]=\"age\"  placeholder=\"Age\" required>  \n         </mat-form-field--> \n\n         <mat-form-field>                                  \n            <input matInput name=\"email\" [(ngModel)]=\"mail\"  placeholder=\"Email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>  \n         </mat-form-field>  \n      \n        <mat-form-field>                                                              \n          <input matInput name=\"dob\" [(ngModel)]=\"dob\" [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" required>       \n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n          <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>                                   \n        </mat-form-field>   \n\n             \n        <mat-form-field *ngIf=\"all\">                                                             \n            <mat-select [(ngModel)]=\"counsellor\" name=\"counsellor\" placeholder=\"Counsellor\" required>                                      \n               \n              <mat-option *ngFor=\"let c of counsellors\" [value]=\"c.value\">\n                  {{c.value}}  \n              </mat-option>                              \n                                          \n            </mat-select>                                                              \n          </mat-form-field> \n          \n          <mat-form-field *ngIf=\"all\">                                                             \n              <mat-select [(ngModel)]=\"course\" name=\"course\" placeholder=\"Course\" required>                                      \n                 \n                <mat-option *ngFor=\"let c of courses\" [value]=\"c.value\">\n                    {{c.value}}  \n                </mat-option>                              \n                                            \n              </mat-select>                                                              \n            </mat-form-field>\n        <button mat-raised-button type=\"submit\" class=\"btn btn-primary\">Update Devotee</button>\n      </form>    \n    </div>\n      \n      <!-- Add new devotee End-->"

/***/ }),

/***/ "../../../../../src/app/attendance/edit.devotee.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " \nmat-form-field{\n    margin: 15px;\n    width: 140px;\n}\n\n.form-container{\n    border-radius: 15px;\n    margin-bottom: 30px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/attendance/main-attendance.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.formClass {\n\toverflow: hidden;\n\tborder-radius: 20px;\n\tpadding: 10px; \n\tborder: 2px solid brown;\n}\n\nmat-form-field {\n\tmargin: 10px;\n\twidth: 198px;\n}\n\nmat-progress-spinner{\n  margin: auto;\n}\n\n .content-wrapper{\n\tmargin-top: 80px;\n}\n\n.container-fluid{\n\tz-index: 1;\n\topacity: 0.8;\n}\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1200px) {\n\t/* Styles */\n\tmat-form-field {\n\t\tmargin: 10px;\n\t\twidth: 400px;\n\t}\n}\n\t", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/attendance/main-attendance.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n        <div class=\"container-fluid\">  \n                 <!-- Breadcrumbs-->\n                 <ol class=\"breadcrumb\" style=\"margin-top:20px;\">\n                    <li class=\"breadcrumb-item\">\n                      <a href=\"#\">COURSES</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">Attendance</li>\n                  </ol>  \n          <!-- Add New Devotee-->\n         \n            \n            <!-- Add new devotee End-->\n          <!-- Example DataTables Card-->\n        <div class=\"card mb-2 col-md-offset-2\" style=\"margin-top:15px;\">\n            <div class=\"card-header\" style=\"background-color:yellow;\">\n              <i class=\"fa fa-table\"></i> Devotee Search\n            </div>\n    \n            <div class=\"card-body\" >\n              <div class=\"table-responsive col-md-offset-6 formClass mat-elevation-z12\" >\n    \n                        <form #devoteeForm=\"ngForm\">\n                          <mat-progress-spinner [diameter]=\"40\" [strokeWidth]=\"10\"\n                          mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-spinner>\n                        \n                            <mat-form-field> \n                              <input matInput required \n                              (blur)=\"getSearchedDevotee(devoteeData.contact)\"\n                              name=\"contact\" [(ngModel)]=\"devoteeData.contact\"\n                              placeholder=\"Contact\"\n                              maxlength=\"10\"\n                              minlength=\"10\">\n                              \n                             </mat-form-field>\n\n                             <mat-form-field> \n                                <input matInput\n                                name=\"contact2\" [(ngModel)]=\"devoteeData.contact2\"\n                                placeholder=\"Alternative Contact\"\n                                maxlength=\"10\"\n                                minlength=\"10\">\n                                \n                              </mat-form-field>\n\n                            <mat-form-field> \n                              \n                              <input matInput required\n                                 name=\"name\" [(ngModel)]=\"devoteeData.name\"\n                                (ngModel)=\"devoteeDataSubmit.name\"\n                                placeholder=\"Name\" > \n                              \n                              </mat-form-field>\t\n                            \n                            <mat-form-field> \n                              \n                              <input type=\"email\" matInput\n                              required\n                                 name=\"email\" [(ngModel)]=\"devoteeData.email\"\n                                placeholder=\"Email\" > \n                              \n                              </mat-form-field>\n\n                            \n                        <mat-form-field>       \n\n                        <input matInput name=\"dob\" [(ngModel)]=\"devoteeData.dob\" \n                         [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" required>       \n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n                        <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>                                   \n                        \n                      </mat-form-field>   \n\n\t\t\t\t\t\t<mat-form-field>\n              \n\t\t\t\t\t\t<mat-select name=\"course\" placeholder=\"Course\" required\n\t\t\t\t\t\t\t[(ngModel)]=\"devoteeData.course\"> <mat-option\n\t\t\t\t\t\t\tvalue=\"OTP\"> OTP </mat-option> <mat-option value=\"TSSV-B10\">\n\t\t\t\t\t\tTSSV-B10 </mat-option> <mat-option value=\"ASHRAY\"> ASHRAY </mat-option> <mat-option\n              value=\"BSS\"> BSS </mat-option> <mat-option\n              value=\"UMANG\"> UMANG </mat-option>\n              <mat-option\n              value=\"DYS\"> DYS </mat-option>\n            </mat-select> \n            </mat-form-field>\n\n\t\t\t\t\t\t<mat-form-field>\n              \n\t\t\t\t\t\t<mat-select name=\"counsellor\" placeholder=\"Counsellor\" required disabled\n\t\t\t\t\t\t\t[(ngModel)]=\"devoteeData.counsellor\"> <mat-option\n\t\t\t\t\t\t\tvalue=\"HG Shyam Gopal Prabhuji\"> HG Shyam Gopal Prabhuji </mat-option>\n\t\t\t\t\t\t<mat-option value=\"HG Kalpvraksha Prabhuji\">\n\t\t\t\t\t\tHG Kalpvraksha Prabhuji </mat-option> <mat-option value=\"HG Vaidant Chaitnya Prabhuji\"> HG Vaidant Chaitnya Prabhuji </mat-option> <mat-option\n\t\t\t\t\t\t\tvalue=\"HG Pundrik Vidhyanidhi Prabhuji\"> HG Pundrik Vidhyanidhi Prabhuji </mat-option>\n\t\t\t\t\t\t\t<mat-option\n              value=\"HG Jagadanand Pandit Prabhuji\"> HG Jagadanand Pandit Prabhuji\n             </mat-option>\n             <mat-option\n              value=\"NA\"> NA\n             </mat-option>\n               </mat-select>\n               </mat-form-field>\n\n\n               <mat-form-field> \n                              \n                <input type=\"text\" matInput\n                required disabled\n                   name=\"topic\" [(ngModel)]=\"topic\"\n                  placeholder=\"Topic\" > \n                \n                </mat-form-field>\n\t\t\t\t\t\t\t \n            <button mat-raised-button color=\"primary\" style=\"margin-left:8px;\"\n             (click)=\"addDevotee(devoteeForm)\">Add or Update Devotee</button>\n            <!--button mat-raised-button color=\"accent\"\n             (click)=\"markAttendance(devoteeForm)\">Mark Attendance</button-->\n\t\t\t\t\t</form>\n\n                    </div>\n                </div>\n\n\n      <div class=\"example-container mat-elevation-z12\" \n      style=\"margin:10px;\">\n            <div class=\"card-header\" style=\"background-color:yellow;\">\n                    <i class=\"fa fa-table\"></i> Today's Attendace\n            </div>\n\n  <mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"Name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"Contact\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Contact </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.contact}}</mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n   \n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"Attendance\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Attendance </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" > {{row.attendance}} </mat-cell>\n    </ng-container>\n    \n     \n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n\n  <mat-paginator [pageSize]=\"50\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n                <div class=\"card-footer small text-muted\">\n                </div>\n        \n              </div>\n <!-- /.container-fluid-->\n <!-- /.content-wrapper-->"

/***/ }),

/***/ "../../../../../src/app/attendance/mark-present.html":
/***/ (function(module, exports) {

module.exports = "<form #atForm=\"ngForm\" >\n\n        <mat-form-field>                                                              \n            <input matInput name=\"date\" [(ngModel)]=\"date\" [matDatepicker]=\"picker\" placeholder=\"Date Of Class\" required>       \n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n            <mat-datepicker #picker></mat-datepicker>                                   \n        </mat-form-field>   \n          \n        <!--mat-form-field>                                                             \n              <mat-select\n                 name=\"status\" placeholder=\"Status\" value=\"{{data.selected}}\" required>                                      \n                <mat-option *ngFor=\"let c of status\" [value]=\"c.value\">\n                        {{c.value}}  \n                </mat-option>  \n\n                                            \n              </mat-select>                                                              \n        </mat-form-field>  \n\n        <mat-form-field>\n          <input matInput name=\"topic\" placeholder=\"Topic\" value=\"{{data.topic}}\">\n        </mat-form-field-->\n    \n      <mat-dialog-actions>\n        <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n        <button mat-raised-button class=\"btn btn-primary\" mat-dialog-close (click)=\"updateAtt(atForm)\" type=\"submit\">Submit</button>\n    </mat-dialog-actions>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/calling-details/calling-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tpadding: 20px;\n\tborder: 2px solid wheat;\n}\n\n.form-container>* {\n\twidth: 100%;\n}\n.formClass{\n\tborder:2px solid brown;\n\tborder-radius: 15px;\n\tfont-weight: bold;\n}\n\nmat-form-field {\n\tmargin-left: 19px;\n    margin-top: 13px;\n}\n\n.filters{\n\tmargin: 17px;\n}\n\n.fhead{\n\tmargin-left: 18px;\n    margin-top: 17px;\n}\n\n.comment{\n\twidth: 127px;\n}\n\n.locked {\n\tpointer-events:none;\n\topacity: 0.5 !important; /* Fade effect */\n    cursor: not-allowed; /* Cursor change to disabled state*/\n}\n\n.mat-row, .mat-header-row {\n\twidth: 200vw;\n}\n\n.mat-form-field-infix {\n\twidth: 900px;\n}\n\n.mat-cell:nth-child(4), .mat-header-cell:nth-child(4) {\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 10%;\n\t        flex: 0 0 10%;\n}\n\n.mat-cell:nth-child(3), .mat-header-cell:nth-child(3) {\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 20%;\n\t        flex: 0 0 20%;\n}\n\n.mat-cell:nth-child(1), .mat-header-cell:nth-child(1) {\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 20%;\n\t        flex: 0 0 20%;\n}\n.mat-cell:nth-child(2), .mat-header-cell:nth-child(2) {\n\t-webkit-box-flex: 0;\n\t    -ms-flex: 0 0 15%;\n\t        flex: 0 0 15%;\n}\n\n\n .content-wrapper{\n\tmargin-top: 80px;\n}\n\n.container-fluid{\n\tz-index: 1;\n\topacity: 0.8;\n\tposition: relative;\n  /*  top: 100px;*/\n}\n\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1200px) {\n\t/* Styles */\n\t.mat-row, .mat-header-row {\n\t\twidth: auto;\n\t}\n\n\tmat-form-field {\n\t\twidth: 800px;\n\t}\n\n\t.comment {\n\t\twidth:127px;\n\t}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calling-details/calling-details.component.html":
/***/ (function(module, exports) {

module.exports = " \n <div class=\"content-wrapper\">\n    <div class=\"container-fluid\">  \n             <!-- Breadcrumbs-->\n             <ol class=\"breadcrumb\" >\n                <li class=\"breadcrumb-item\">\n                  <a href=\"#\">COURSES</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Attendance</li>\n              </ol>  \n      <!-- Add New Devotee-->\n     \n        \n        <!-- Add new devotee End-->\n      <!-- Example DataTables Card-->\n    <div class=\"card mb-3 col-md-offset-2 mat-elevation-z12\" style=\"margin-top:42px;\">\n        <div class=\"card-header\" \n          style=\"background-color:yellow;\">\n          <i class=\"fa fa-table\"></i> Devotee List\n\n          <button *ngIf=\"showAddDevotee\" \n          mat-raised-button\n          (click)=\"handleDevoteeDialog()\" \n          class=\"btn btn-primary pull-right\" matTooltip=\"Add New Devotee\">\n          Add Devotee\n        </button>\n          \n        </div>\n\n        <div class=\"card-body\" >\n          <div class=\"table-responsive formClass mat-elevation-z12\" >\n\n        <!--div class=\"filters\" >\n          <h5>Select checkbox to filter out devotees</h5>\n          <br/>\n          <mat-checkbox \n            (change)=\"changeBox($event, 'OTP')\" \n            value=\"OTP\" >\n            OTP\n          </mat-checkbox>\n          <mat-checkbox \n            (change)=\"changeBox($event, 'TSSV-B10')\"\n             value=\"TSSV-B10\">\n             TSSV-B10\n          </mat-checkbox>\n          <mat-checkbox \n            (change)=\"changeBox($event, 'ASHRAY')\"\n             value=\"ASHRAY\">\n             ASHRAY\n          </mat-checkbox>\n          <mat-checkbox \n            (change)=\"changeBox($event, 'BSS')\"\n             value=\"BSS\">\n             BSS\n          </mat-checkbox>\n          <mat-checkbox [ngClass]=\"isCourseSelected ? '':'locked'\"\n            (change)=\"changeBox($event, 'Active')\"\n             value=\"Active\">\n             Active\n          </mat-checkbox>\n        </div-->\n         <h5 class=\"fhead\">Select course to filter out devotees</h5>\n         \n         <div class=\"cfilters\">\n            <mat-form-field >\n               <mat-select [(ngModel)]=\"selectedCourse\"\n                (ngModelChange)=\"OnSelectCourse($event)\"\n                name=\"coursefilter\"  \n                placeholder=\"Course Filter\">                                      \n                  <mat-option value=\"OTP\"> OTP </mat-option>\n                  <mat-option value=\"TSSV-B10\">TSSV-B10 </mat-option>\n                  <mat-option value=\"ASHRAY\"> ASHRAY </mat-option> \n                  <mat-option value=\"BSS\"> BSS </mat-option>\n               </mat-select> \n             </mat-form-field> \n             <mat-checkbox [(ngModel)]=\"selectedBox\" [ngClass]=\"isCourseSelected ? '':'locked'\"\n             (change)=\"changeBox($event, 'Active')\"\n              value=\"Active\">\n              Active\n           </mat-checkbox>\n\n          \n          </div>\n        \n          \n\t\t\t\t\t<mat-form-field>\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n              <mat-table #table [dataSource]=\"dataSource\">\n\n                  <ng-container matColumnDef=\"name\">\n                    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n                  </ng-container>\n              \n                  <ng-container matColumnDef=\"contact\">\n                    <mat-header-cell *matHeaderCellDef> Contact </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.contact}} </mat-cell>\n                  </ng-container>\n              \n                  <ng-container matColumnDef=\"counsellor\">\n                    <mat-header-cell *matHeaderCellDef> Counsellor </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.counsellor}} </mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"course\">\n                      <mat-header-cell *matHeaderCellDef> Course </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.course}} </mat-cell>\n                    </ng-container>\n              \n                  <ng-container matColumnDef=\"actions\">\n                    <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\">\n                      \n                     <button *ngIf=\"isLoggedIn\"\n                      mat-raised-button style=\"margin:2px;\" type=\"submit\" \n                      (click)=\"showDetails(element)\" \n                      class=\"btn btn-primary\" matTooltip=\"Show Details\">\n                      <i class=\"fa fa-address-card\"></i>\n                     </button>\n                     <div [ngClass]=\"element.locked ? 'locked':''\" >\n                     <mat-form-field [ngClass]=\"element.lockedDate === getDate() ? 'locked':''\"\n                        class=\"comment\">                                                             \n                        <mat-select name=\"comment\" value={{element.selected}} \n                        [(ngModel)]=\"element.selected\"\n                         placeholder=\"Comment\" required>                                      \n                           <mat-option value=\"CA\"> CA </mat-option>\n                           <mat-option value=\"NC\"> NC </mat-option>\n                           <mat-option value=\"Coming\"> Coming </mat-option> \n                           <mat-option value=\"Not Reachable\"> Not Reachable </mat-option>\n                           <mat-option value=\"Switch Off\"> Switch Off </mat-option>          \n                        </mat-select>                                                              \n                      </mat-form-field> \n\n                      <i (click)=\"lockIt(element, $event)\" style=\"cursor:pointer;font-size:24px;color:purple\"\n                      matTooltip=\"Click to lock it for the day\" class=\"fa fa-lock\"></i>\n\n                     <i (click)=\"showDetails(element, $event)\" style=\"cursor:pointer;font-size:24px;color:purple\"\n                      matTooltip=\"Show Details\" class=\"fa fa fa-address-card\"></i>\n                     \n                     <i (click)=\"markAttendance(element, $event)\" style=\"cursor:pointer;font-size:24px;color:purple\"\n                      matTooltip=\"Mark Attendance\" class=\"fa fa-fw fa-user\"></i>\n                     </div>\n\n                      \n\n\n                     <!--button *ngIf=\"isLoggedIn\"\n                      mat-raised-button style=\"margin:2px;\" type=\"submit\" \n                      (click)=\"delRecord(element)\" \n                      class=\"btn btn-primary\" matTooltip=\"Delete Record\">\n                      <i class=\"fa fa-trash\"></i>\n\n                     </button-->\n\n                    </mat-cell>\n                  </ng-container>\n              \n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n              \n                </mat-table>\n                <mat-paginator #paginator\n                 [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 20, 50]\" \n                 >\n             </mat-paginator> \n            \n          </div>\n        </div>\n        <div class=\"card-footer small text-muted\">\n        </div>\n\n      </div>\n    <!-- /.container-fluid-->\n    <!-- /.content-wrapper-->"

/***/ }),

/***/ "../../../../../src/app/calling-details/calling-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallingDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devotee_service__ = __webpack_require__("../../../../../src/app/devotee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__showdetails_showdetails_component__ = __webpack_require__("../../../../../src/app/showdetails/showdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CallingDetailsComponent = /** @class */ (function () {
    function CallingDetailsComponent(route, dialog, _userService, _dataService, router, appComp, snackBar) {
        var _this = this;
        this.route = route;
        this.dialog = dialog;
        this._userService = _userService;
        this._dataService = _dataService;
        this.router = router;
        this.appComp = appComp;
        this.snackBar = snackBar;
        this.todayDate = new Date();
        this.checked = false;
        this.comment = '';
        this.selected = 'CA';
        this.isCourseSelected = false;
        this.selectedCourse = '';
        this.selectedBox = false;
        this.copyDataSource = [];
        this.originalCopy = [];
        this.dStatus = {};
        this.displayedColumns = ['name', 'contact', 'counsellor', 'course', 'actions'];
        this.ELEMENT_DATA = [];
        this.DETAILS_DATA = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTableDataSource */](this.ELEMENT_DATA);
        this.dataSourceDetails = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTableDataSource */](this.DETAILS_DATA);
        this.facilitators = [
            { sgp: ['HG Madhav Caran Das'] },
            { kvp: ['HG Anant Nimai Das'] },
            { pvnp: [''] },
            { jnp: ['HG Vraj Jana Ranjan Das'] },
            { vcp: ['HG Shastra chaksu Das', 'HG Kishan Kanhyia Prabhuji'] },
        ];
        // [ngClass]="isLocked(element) ? '':'locked'"
        /*isLocked(element) {
            console.log('element ', element.contact);
            if ( element.calling && element.calling.length > 0 ) {
              element.calling.forEach(data => {
                if (data.date === this.getDate()) {
                  console.log('data is ', data);
                  return true;
                }
              });
            }
        }*/
        this.findKey = function (username) {
            //  console.log('element ', this.facilitators[0]);
            switch (username) {
                case 'sgp':
                    return _this.facilitators[0]['sgp'];
                case 'kvp':
                    return _this.facilitators[1]['kvp'];
                case 'vcp':
                    return _this.facilitators[4]['vcp'];
                case 'pvnp':
                    return _this.facilitators[2]['pvnp'];
                case 'jnp':
                    return _this.facilitators[3]['jnp'];
                case 'admin':
                    return [];
            }
        };
        this.getTopic = function (data, counsellor) {
            var topic = '';
            data.forEach(function (element) {
                if (element.speaker === counsellor) {
                    topic = element.topic;
                }
            });
            return topic;
        };
        this.markAttendance = function (element, event) {
            var month = _this.todayDate.getMonth() + 1;
            var date = _this.todayDate.getDate() + '-' + month + '-' + _this.todayDate.getFullYear();
            _this._userService.checkIfClassSdlForCourse(element.course, date)
                .subscribe(function (userData) {
                if (userData.result.length > 0) {
                    /// console.log('userdata is', userData, this.getTopic(userData.result, element.counsellor));
                    _this.dStatus['date'] = date;
                    _this.dStatus['present'] = 'YES';
                    _this.dStatus['topic'] = _this.getTopic(userData.result, element.counsellor);
                    _this.dStatus['speaker'] = element.counsellor;
                    _this.dStatus['contact'] = element.contact;
                    _this._userService.markAttendance(_this.dStatus)
                        .subscribe(function (userDataNew) {
                        if (userDataNew['result'] === 'ok') {
                            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                                type: 'success',
                                title: 'Attendance updated successfully',
                                html: 'Hari Bol!!',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                                type: 'warning',
                                title: 'Attendance already updated',
                                html: 'Hari Bol!!',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                        type: 'warning',
                        title: 'No Class scheduled for ' + element.course + ' on the name of ' + element.counsellor,
                        html: 'Hari Bol!!',
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
            });
        };
    }
    CallingDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this._dataService.currentMessage.subscribe(message => {
           console.log('mesage ', message);
           this.dataSource.data = message;
         });*/
        var getLoggedIn = localStorage.getItem('ctoken');
        // console.log('getLogged in ', getLoggedIn);
        if (getLoggedIn) {
            this._userService.iscTokenVerified(getLoggedIn)
                .subscribe(function (tokenRes) {
                //  console.log('data is ', tokenRes);
                if (tokenRes.result === 'ok') {
                    _this.route.params.subscribe(function (params) {
                        _this._userService.getCounsellorData(params['username'])
                            .subscribe(function (data) {
                            _this.dataSource.data = data.resources;
                            _this.originalCopy = _this.dataSource.data;
                        });
                    });
                    _this.appComp.isLoggedIn = true;
                    _this.appComp.userName = localStorage.getItem('cname');
                }
                else {
                    _this.router.navigateByUrl('/counLogin');
                }
            });
        }
        else {
            this.router.navigateByUrl('/counLogin');
        }
    };
    CallingDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    CallingDetailsComponent.prototype.getDate = function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        var datenew = date.getDate() + '-' + month + '-' + date.getFullYear();
        return datenew;
    };
    CallingDetailsComponent.prototype.showDetails = function (dv) {
        var _this = this;
        this._userService.getDetails(dv['_id'])
            .subscribe(function (userData) {
            if (userData.result[0].attendance) {
                _this.dataSourceDetails.data = userData.result[0].attendance;
                userData.result[0].dataSourceDetails = _this.dataSourceDetails;
                console.log('counsellor', _this.findKey(_this.appComp.userName));
                userData.result[0].facilitators = _this.findKey(_this.appComp.userName);
            }
            console.log('data is ', userData.result[0]);
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__showdetails_showdetails_component__["a" /* ShowdetailsComponent */], {
                width: '100vh',
                hasBackdrop: false,
                data: __assign({}, userData.result[0])
            });
            /*dialogRef.afterClosed().subscribe(result => {
              console.log('result is', result);
            });*/
        });
    };
    CallingDetailsComponent.prototype.lockIt = function (element, event) {
        //  console.log('element ', element.calling);
        element['locked'] = true;
        this._userService.updateComment(element)
            .subscribe(function (result) {
            console.log('result is ', result);
            if (result.result === 'ok') {
                __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                    type: 'success',
                    title: 'Hare Krishna, Status locked for the day',
                    html: 'Hari Bol!!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                    type: 'success',
                    title: 'Hare Krishna, Status already locked for the day',
                    html: 'Hari Bol!!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    CallingDetailsComponent.prototype.checkIfDevoteePresntForGivenDate = function (date, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].date === date) {
                return myArray[i];
            }
        }
    };
    CallingDetailsComponent.prototype.findActive = function () {
        var _this = this;
        var classList = [];
        console.log('class list is ', this.selectedCourse);
        this.copyDataSource = this.dataSource.data;
        this._userService.getSdlClassesCourse(this.selectedCourse)
            .subscribe(function (sdlClass) {
            console.log('in active ', _this.dataSource.data, sdlClass);
            _this.dataSource.data.forEach(function (element) {
                if (element['attendance'] && element['attendance'].length > 0) {
                    for (var j = 0; j < 8; j++) {
                        var status_1 = {};
                        // console.log('class  is ', sdlClass.result[j].date);
                        if (sdlClass.result[j] === undefined) {
                            break;
                        }
                        status_1 = _this.checkIfDevoteePresntForGivenDate(sdlClass.result[j].date, element['attendance']);
                        // console.log('status is ', status);
                        if (status_1 !== undefined) {
                            //  console.log('status', element['contact'], element['name']);
                            classList.push(element);
                            break;
                        }
                    }
                }
            });
            _this.dataSource.data = classList;
        });
    };
    CallingDetailsComponent.prototype.OnSelectCourse = function (e) {
        ///console.log('event is ', e, this.selectedBox);
        if (this.selectedBox) {
            this.dataSource.data = this.originalCopy;
            this.dataSource.filter = e;
            this.findActive();
        }
        else {
            this.isCourseSelected = true;
            this.dataSource.filter = e;
        }
    };
    CallingDetailsComponent.prototype.changeBox = function (e, type) {
        console.log(e.checked, this.selectedCourse, type === 'Active', this.dataSource.data);
        if (e.checked === false) {
            if (this.selectedCourse) {
                // this.dataSource.filter = this.selectedCourse;
                this.dataSource.data = this.copyDataSource;
            }
            else {
                this.dataSource.filter = '';
                this.isCourseSelected = false;
            }
        }
        else {
            type = type.trim(); // Remove whitespace
            type = type.toLowerCase(); // MatTableDataSource defaults to lowercase matches
            if (type === 'active') {
                console.log(type);
                this.findActive();
            }
            else {
                this.isCourseSelected = true;
                this.dataSource.filter = type;
            }
        }
    };
    CallingDetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */])
    ], CallingDetailsComponent.prototype, "paginatorDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginator */])
    ], CallingDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatSort */])
    ], CallingDetailsComponent.prototype, "sort", void 0);
    CallingDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calling-details',
            template: __webpack_require__("../../../../../src/app/calling-details/calling-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calling-details/calling-details.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBar */]])
    ], CallingDetailsComponent);
    return CallingDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/class/class.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search{\n    width: 900px;\n}\n\n .content-wrapper{\n\tmargin-top: 80px;\n}\n\n.container-fluid{\n    z-index: 1;\n    opacity: 0.8;\n    position: relative;\n   /* top: 100px;*/\n    \n}\nmat-cell{\n    font-weight: bold;\n}\n\n@media only screen and (min-width: 1200px){\n  mat-form-field {\n    width: 387px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/class/class.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content-wrapper\" style=\"\">\n  <div class=\"container-fluid\" >  \n       <!-- Breadcrumbs-->\n       <ol class=\"breadcrumb\" style=\"margin-top:20px;\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"#\">COURSES</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Sdl Class</li>\n        </ol>  \n\n<!--div *ngIf=\"ifClassSdl;\">\n      <h3>{{ifNoClassScdlText}} </h3>\n    <button type=\"submit\" (click)=\"classSdl()\" class=\"btn btn-primary\">Schedule Now</button>\n</div-->\n\n<h3>{{ifNoClassScdlText}} </h3>\n\n<div class=\"card mb-3\">\n    <div class=\"card-header\" style=\"background-color:yellow;\">\n      <i class=\"fa fa-table\" ></i> Schedule Class</div>\n    <div class=\"card-body\">\n <div *ngIf=\"showForm;\">\n    <form #classForm=\"ngForm\" (ngSubmit)=\"sdlClass(classForm)\" class=\"classSc\" style=\"margin:10px;\">\n         <mat-form-field>                                                              \n           <input matInput name=\"date\" [(ngModel)]=\"date\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">       \n           <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n           <mat-datepicker #picker></mat-datepicker>                                   \n         </mat-form-field>                                                             \n                                                                                    \n          <mat-form-field>                                                             \n              <mat-select [(ngModel)]=\"course\" name=\"course\" placeholder=\"Course\">                                      \n                 \n                <mat-option *ngFor=\"let c of courses\" [value]=\"c.value\">\n                    {{c.value}}  \n                </mat-option>                              \n                                            \n              </mat-select>                                                              \n          </mat-form-field>  \n          <mat-form-field>                                                             \n            <mat-select [(ngModel)]=\"speaker\" name=\"speaker\" placeholder=\"Speaker\">                                         \n              <mat-option *ngFor=\"let sp of speakers\" [value]=\"sp.value\">\n                {{sp.value}}  \n              </mat-option>                              \n                                          \n            </mat-select>                                                              \n          </mat-form-field>  \n\n          <mat-form-field>                                  \n             <input matInput name=\"topic\" [(ngModel)]=\"topic\"  placeholder=\"Topic\" value=\"Art of Mind Control\">\n                    \n          </mat-form-field> \n          \n          <mat-form-field>                                  \n            <input matInput name=\"guest\" [(ngModel)]=\"guest\"  placeholder=\"Guest Speaker\" value=\"\">\n                   \n         </mat-form-field>  \n\n          <mat-form-field>                                  \n              <input matInput type=\"time\" name=\"time\" [(ngModel)]=\"time\"  placeholder=\"Time\">\n\n           </mat-form-field>                                                                \n         <button mat-raised-button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n       </form>                                                                          \n    </div>\n    </div>\n    </div>\n    <!-- Example DataTables Card-->\n    <div class=\"card mb-3\" *ngIf=\"ifClassSdl;\">\n      <div class=\"card-header\" style=\"background-color:yellow;\">\n        <i class=\"fa fa-table\"></i> Scheduled Classes</div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">          \n          <mat-form-field class=\"search\">\n              <input matInput  (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n          </mat-form-field>\n          <mat-table #table [dataSource]=\"dataSource\">\n\n              <!-- Position Column -->\n              <ng-container matColumnDef=\"Date\">\n                <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n              </ng-container>\n          \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"Speaker\">\n                <mat-header-cell *matHeaderCellDef> Speaker </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.speaker}} </mat-cell>\n              </ng-container>\n          \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"Course\">\n                <mat-header-cell *matHeaderCellDef> Course </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.course}} </mat-cell>\n              </ng-container>\n          \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"Topic\">\n                <mat-header-cell *matHeaderCellDef> Topic </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.topic}} </mat-cell>\n              </ng-container>\n\n              <ng-container matColumnDef=\"Actions\">\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> \n\n                  <i (click)=\"DeleteClass(element)\" style=\"cursor:pointer\"\n                  matTooltip=\"Delete Class\" class=\"fa fa-fw fa-trash\"></i>\n\n                  <!--i (click)=\"EditClass(element)\" style=\"cursor:pointer\"\n                  matTooltip=\"Delete Class\" class=\"fa fa-fw fa-edit\"></i-->\n                </mat-cell>\n\n\n              </ng-container>\n          \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          \n            </mat-table>\n            <mat-paginator #paginator\n             [pageSize]=\"10\"\n             [pageSizeOptions]=\"[5, 10, 20]\"\n             >\n         </mat-paginator>\n\n        </div>\n\n      </div>\n      <div class=\"card-footer small text-muted\"></div>\n    </div>\n  </div>\n  <!-- /.container-fluid-->\n  <!-- /.content-wrapper-->"

/***/ }),

/***/ "../../../../../src/app/class/class.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devotee_service__ = __webpack_require__("../../../../../src/app/devotee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClassComponent = /** @class */ (function () {
    function ClassComponent(_userService, router, appComp) {
        var _this = this;
        this._userService = _userService;
        this.router = router;
        this.appComp = appComp;
        this.displayedColumns = ['Date', 'Speaker', 'Course', 'Topic', 'Actions'];
        this.ELEMENT_DATA = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatTableDataSource */](this.ELEMENT_DATA);
        this.sdlClasses = [];
        this.title = 'ISKCON YOUTH FORUM';
        this.ifClassSdl = true;
        this.showForm = true;
        this.showSdlClass = false;
        this.speakers = [
            { value: 'HG Shyam Gopal Prabhuji' },
            { value: 'HG Kalpvraksha Prabhuji' },
            { value: 'HG Vaidant Chaitnya Prabhuji' },
            { value: 'HG Pundrik Vidhyanidhi Prabhuji' },
            { value: 'HG Jagadanand Pandit Prabhuji' },
            { value: 'NA' },
        ];
        this.courses = [
            { value: 'OTP' },
            { value: 'TSSV-B10' },
            { value: 'ASHRAY' },
            { value: 'UMANG' },
            { value: 'BSS' },
            { value: 'DYS' },
        ];
        this.topic = '';
        this.date = '';
        this.isLoggedIn = false;
        this.DeleteClass = function (element) {
            _this._userService.deleteClass(element._id)
                .subscribe(function (delClass) {
                if (delClass['result'] === 'ok') {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                        type: 'success',
                        title: 'Class Deleted ',
                        html: 'Hari Bol!!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        };
    }
    ClassComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    ClassComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check if counsellor logged in
        var cLogIn = localStorage.getItem('ctoken');
        if (cLogIn) {
            this._userService.iscTokenVerified(cLogIn)
                .subscribe(function (ctokenRes) {
                if (ctokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                    _this.appComp.isLoggedIn = true;
                    _this.appComp.userName = localStorage.getItem('cname');
                }
            });
        }
        // check if cousellor is login
        var getLoggedIn = localStorage.getItem('token');
        if (getLoggedIn) {
            this._userService.isTokenVerified(getLoggedIn)
                .subscribe(function (tokenRes) {
                if (tokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                    _this.appComp.isLoggedIn = true;
                    _this.appComp.userName = 'admin';
                }
            });
        }
        this._userService.getSdlClasses()
            .subscribe(function (classInfo) {
            _this.dataSource.data = classInfo.result;
        });
        if ($(window).width() < 600) {
            $('.left-pane')[0].style.display = 'none';
        }
    };
    ClassComponent.prototype.sdlClass = function (form) {
        var _this = this;
        form.value.date = this._userService.parseDate(form.value.date);
        if (!form.value.date || !form.value.speaker || !form.value.course
            || !form.value.time || !form.value.topic) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                type: 'warning',
                title: 'All fields are required to Schedule a class',
                html: 'Hari Bol!!',
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            if (form.value.course === 'DYS' || form.value.course === 'TSSV-B10') {
                this._userService.SdlClass(form.value);
                form.reset();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    type: 'success',
                    title: 'Class Scheduled ',
                    html: 'Hari Bol!!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                this._userService.checkIfClassSdlForCourse(form.value.course, form.value.date)
                    .subscribe(function (sdlresult) {
                    if (sdlresult.result.length === 0) {
                        _this._userService.SdlClass(form.value);
                        form.reset();
                        // this.router.navigate(['/downloads']).then(() => { this.router.navigate(['/classSdl']); });
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                            type: 'success',
                            title: 'Class Scheduled ',
                            html: 'Hari Bol!!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                            type: 'success',
                            title: 'Class already scheduled for given date and course. ',
                            html: 'Hari Bol!!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginator */])
    ], ClassComponent.prototype, "paginator", void 0);
    ClassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-class',
            template: __webpack_require__("../../../../../src/app/class/class.component.html"),
            styles: [__webpack_require__("../../../../../src/app/class/class.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]])
    ], ClassComponent);
    return ClassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/counsellor-login/counsellor-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminForm{\n    position: relative;\n    top:100px;\n    border: 2px solid brown;\n    padding: 35px;\n    border-radius: 20px;\n    height: auto;\n    z-index: 1;\n    background-color: azure;\n    overflow: hidden;\n}\n\n.card-header {\n    background-color: yellow;\n}\n\n\nmat-form-field {\n\tmargin: 15px;\n\twidth: 198px;\n}\n\n .content-wrapper{\n\tmargin-top: 80px;\n}\n\n.container-fluid{\n    padding-left: 255px;\n    padding-right: 300px;\n    opacity: 0.8;\n    position: relative;\n    top: 100px;\n}\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1200px) {\n\t/* Styles */\n\t.counLogin mat-form-field {\n\t\tmargin: 10px !important;\n\t\twidth: 400px !important;\n    }\n    .adminForm{\n        width: 500px;\n        margin: auto;\n\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/counsellor-login/counsellor-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <div class=\"container\" >  \n      <div class=\"adminForm mat-elevation-z12\">\n        <div class=\"card-header\" >\n        <h3>Counsellor Details</h3>\n        </div>\n\n        <form #cForm=\"ngForm\" (ngSubmit)=\"counLogin(cForm)\" class=\"counLogin\" style=\"margin:auto;\">\n     \n            <mat-form-field>                                  \n                <input matInput name=\"username\" [(ngModel)]=\"name\"  placeholder=\"Name\" required>  \n             </mat-form-field>  \n    \n    \n             <mat-form-field>                                  \n                <input matInput name=\"password\" [(ngModel)]=\"pass\" type=\"password\" placeholder=\"Password\" required>  \n             </mat-form-field>  \n\n             <!--mat-form-field>                                                             \n                <mat-select name=\"course\" [(ngModel)]=\"course\" placeholder=\"Course\" required>                                      \n                   <mat-option\tvalue=\"OTP\"> OTP</mat-option>\n                   <mat-option value=\"TSSV-B10\"> TSSV-B10 </mat-option>\n                   <mat-option value=\"ASHRAY\"> ASHRAY </mat-option> \n                   <mat-option value=\"BSS\"> BSS </mat-option>\n                   <mat-option value=\"UMANG\"> UMANG </mat-option>          \n                </mat-select>                                                              \n              </mat-form-field-->  \n              <button mat-raised-button type=\"submit\" class=\"btn btn-primary\">Login</button>\n            \n        </form>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/counsellor-login/counsellor-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounsellorLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devotee_service__ = __webpack_require__("../../../../../src/app/devotee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CounsellorLoginComponent = /** @class */ (function () {
    function CounsellorLoginComponent(route, _userService, _dataService, router, appComp) {
        this.route = route;
        this._userService = _userService;
        this._dataService = _dataService;
        this.router = router;
        this.appComp = appComp;
        this.course = '';
        this.isLoggedIn = false;
    }
    CounsellorLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ($(window).width() < 600) {
            $('.left-pane')[0].style.display = 'none';
        }
        if (this.appComp.isLoggedIn === true) {
            var getLoggedIn = localStorage.getItem('ctoken');
            console.log('getLogged in ', getLoggedIn);
            if (getLoggedIn) {
                this._userService.iscTokenVerified(getLoggedIn)
                    .subscribe(function (tokenRes) {
                    console.log('data is 1', tokenRes);
                    if (tokenRes.result === 'ok') {
                        _this.appComp.isLoggedIn = true;
                        _this.appComp.userName = localStorage.getItem('cname');
                    }
                    else {
                        _this.router.navigateByUrl('/counLogin');
                    }
                });
            }
        }
    };
    CounsellorLoginComponent.prototype.counLogin = function (form) {
        var _this = this;
        this._userService.counLogin(form.value)
            .subscribe(function (data) {
            if (data.result === 'ok') {
                console.log('data is 2', data);
                localStorage.setItem('ctoken', data.token);
                localStorage.setItem('cname', form.value.username);
                // this._dataService.changeMessage(data.resources);
                _this.router.navigateByUrl('/callingdetails/' + form.value.username);
                _this.appComp.isLoggedIn = true;
                _this.appComp.userName = form.value.username;
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                    type: 'error',
                    title: 'Invalid Login Crdentials',
                    html: 'Hari Bol:(',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    CounsellorLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-counsellor-login',
            template: __webpack_require__("../../../../../src/app/counsellor-login/counsellor-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/counsellor-login/counsellor-login.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]])
    ], CounsellorLoginComponent);
    return CounsellorLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */]([]);
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/devotee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http) {
        var _this = this;
        this._http = _http;
        // private _url: string = 'http://192.168.0.111:3000/';
        this._url = '/';
        this.addDevotee = function (body) {
            return _this._http.post(_this._url + 'addDevotee', {
                body: body
            }).map(function (res) {
                return res.json();
            }, function (err) {
                return err.json();
            });
        };
        this.addDevoteeGeneric = function (body) {
            return _this._http.post(_this._url + 'addDevoteeGeneric', {
                body: body
            }).map(function (res) {
                return res.json();
            }, function (err) {
                return err.json();
            });
        };
        this.editDevotee = function (body) {
            return _this._http.put(_this._url + 'updateDevotee', {
                body: body
            })
                .map(function (res) {
                return res.json();
            }, function (err) {
                return err.json();
            });
        };
        this.SdlClass = function (body) {
            _this._http.post(_this._url + 'sdlClass', {
                body: body
            }).subscribe(function (res) {
                // console.log('res is', res);
            }, function (err) {
                // console.log('err is', err);
            });
        };
        this.markAttendance = function (attendance) {
            //  console.log('atten is ', attendance);
            return _this._http.post(_this._url + 'markAttendance', {
                attendance: attendance
            })
                .map(function (res) {
                return res.json();
            }, function (err) {
                err.json();
            });
        };
        this.downloadCallReportCounsellor = function (dTe) {
            // console.log('downlods call report', dTe);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            searchParams.append('date', dTe.date);
            searchParams.append('counsellor', dTe.counsellor);
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
            return _this._http.get(_this._url + 'downloadCallReportCounsellor', options)
                .map(function (response) {
                return response.json();
            });
        };
        this.downloadToExcel = function (dTe) {
            // console.log('downlods', dTe);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            searchParams.append('date', dTe.date);
            searchParams.append('course', dTe.course);
            searchParams.append('counsellor', dTe.counsellor);
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
            return _this._http.get(_this._url + 'downloadToExcel', options)
                .map(function (response) {
                return response.json();
            });
        };
        this.downloadCourseExcel = function (dTe) {
            // console.log("atten is ", dTe);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            searchParams.append('course', dTe.course);
            searchParams.append('isAlumni', dTe.isAlumni);
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
            return _this._http.get(_this._url + 'downloadCourseExcel', options)
                .map(function (response) {
                return response.json();
            });
        };
        this.downloadToExCounsellor = function (dTe) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            searchParams.append('date', dTe.date);
            searchParams.append('course', dTe.course);
            searchParams.append('counsellor', dTe.counsellor);
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
            // console.log('options ', options);
            return _this._http.get(_this._url + 'downloadToExCounsellor', options)
                .map(function (response) {
                return response.json();
            });
        };
        this.getTodayAttendance = function (course) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            searchParams.append('course', course);
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
            return _this._http.get(_this._url + 'getTodayAttendance', options)
                .map(function (response) {
                return response.json();
            });
        };
    }
    UserService.prototype.adminLogin = function (form) {
        return this._http.post(this._url + 'adminLogin', {
            body: form
        }).map(function (res) {
            return res.json();
        }, function (err) {
            return err.json();
        });
    };
    UserService.prototype.counLogin = function (form) {
        console.log('coun login', form);
        return this._http.post(this._url + 'counLogin', {
            body: form
        }).map(function (res) {
            return res.json();
        }, function (err) {
            return err.json();
        });
    };
    UserService.prototype.getOTPDevotees = function () {
        return this._http.get(this._url + 'getOTPDevotees').map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateComment = function (element) {
        return this._http.post(this._url + 'updateComment', {
            body: element
        }).map(function (res) {
            return res.json();
        }, function (err) {
            return err.json();
        });
    };
    UserService.prototype.getSearchedDevotee = function (contact, course) {
        var isContact = false;
        if (!isNaN(parseInt(contact))) {
            isContact = true;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        if (isContact === true) {
            searchParams.append('contact', contact);
        }
        else {
            searchParams.append('email', contact);
        }
        searchParams.append('course', course);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
        return this._http.get(this._url + 'getSearchedDevotee', options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getCounsellorData = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        searchParams.append('username', name);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
        return this._http.get(this._url + 'getCounsellorData', options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getDevotees = function (course) {
        var courseName = '';
        switch (course) {
            case '1':
                courseName = 'OTP';
                break;
            case '2':
                courseName = 'TSSV';
                break;
            case '3':
                courseName = 'ASHRAY';
                break;
            case '4':
                courseName = 'UMANG';
                break;
            case '5':
                courseName = '';
                break;
            case '6':
                courseName = 'BSS';
                break;
            case '7':
                courseName = 'DYS';
                break;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        searchParams.append('course', courseName);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
        return this._http.get(this._url + 'getDevotees', options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getDetails = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        var token = localStorage.getItem('token');
        var ctoken = localStorage.getItem('ctoken');
        if (token) {
            //  searchParams.append('token', token);
            headers.append('token', token);
        }
        if (ctoken) {
            //  searchParams.append('ctoken', ctoken);
            headers.append('ctoken', ctoken);
        }
        searchParams.append('id', id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
        return this._http.get(this._url + 'getDetails', options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getSdlClasses = function () {
        return this._http.get(this._url + 'getSdlClasses')
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getSdlClassesCourse = function (course) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        searchParams.append('course', course);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
        return this._http.get(this._url + 'getSdlClassesCourse', options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.checkIfDevoteePresentForGivenDate = function (date, counsellor, course) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        searchParams.append('course', course);
        searchParams.append('date', date);
        searchParams.append('counsellor', counsellor);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
        return this._http.get(this._url + 'checkDevoteeStatusForGivenDate')
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.checkIfClassSdlForCourse = function (course, date) {
        // console.log('check sdl class', course, date);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        searchParams.append('course', course);
        searchParams.append('date', date);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
        return this._http.get(this._url + 'checkClassSdl', options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.isTokenVerified = function (token) {
        // console.log("token in devotee", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
        return this._http.get(this._url + 'isTokenVerified', options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.iscTokenVerified = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        //    headers.append('ctoken', token);
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: searchParams });
        return this._http.get(this._url + 'iscTokenVerified', options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteClass = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var delParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        delParams.append('id', id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: delParams });
        return this._http.delete(this._url + 'delClass', options)
            .map(function (res) {
            return res.json();
        }, function (err) {
            return err.json();
        });
    };
    UserService.prototype.delRecord = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var delParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        delParams.append('contact', contact);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: delParams });
        return this._http.delete(this._url + 'delRecord', options)
            .map(function (res) {
            return res.json();
        }, function (err) {
            return err.json();
        });
    };
    UserService.prototype.parseDate = function (date) {
        var temp_datetime_obj = new Date(date);
        var month = temp_datetime_obj.getMonth() + 1;
        date = temp_datetime_obj.getDate() + '-' + month + '-' + temp_datetime_obj.getFullYear();
        return date;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/downloads/downloads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n .content-wrapper{\n\tmargin-top: 80px;\n}\n\n\n.container-fluid{\n    z-index: 1;\n    opacity: 0.8;\n    position: relative;\n}\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1200px) {\n    /* Styles */\n    /*.content-wrapper{\n        height: 100vh;\n    }*/\n\n   .classSc mat-form-field {\n        width: 287px !important;\n    }\n\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/downloads/downloads.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" >\n    <div class=\"container-fluid\" >  \n            <!-- Breadcrumbs-->\n            <ol class=\"breadcrumb\" style=\"margin-top:20px;\">\n                <li class=\"breadcrumb-item\">\n                  <a href=\"#\">DOWNLOADS</a>\n                </li>\n              </ol>  \n    <div class=\"card mb-3\">\n     <div class=\"card-header\" style=\"background-color:yellow;\">\n        <i class=\"fa fa-table\" ></i> Download Attendance</div>\n      <div class=\"card-body\">\n        <h6>Download Attendance for Specfic Date and Course</h6>\n        <form #download1=\"ngForm\" (ngSubmit)=\"downloadToExcel(download1)\" \n            class=\"classSc\" style=\"margin:10px;\">\n            <mat-form-field >                                                              \n              <input matInput name=\"date\" [(ngModel)]=\"date\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" required>       \n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n              <mat-datepicker #picker></mat-datepicker>                                   \n            </mat-form-field>                                                             \n                                                                                       \n             <mat-form-field>                                                             \n               <mat-select [(ngModel)]=\"course\" name=\"course\" placeholder=\"Course\" required>                                         \n                 <mat-option *ngFor=\"let co of courses\" [value]=\"co.value\">\n                   {{co.value}}  \n                 </mat-option>                              \n                                             \n               </mat-select>                                                              \n             </mat-form-field>                                                            \n                                                                                       \n             <!--mat-form-field>                                                             \n               <mat-select [(ngModel)]=\"counsellor\" name=\"counsellor\" placeholder=\"Counsellor\" required>                                      \n                  \n                 <mat-option *ngFor=\"let c of counsellors\" [value]=\"c.value\">\n                     {{c.value}}  \n                 </mat-option>                              \n                                             \n               </mat-select>                                                              \n             </mat-form-field-->                                                             \n                                                                       \n            <button mat-raised-button type=\"submit\" class=\"btn btn-primary\" matTooltip=\"Download\">\n              <i class=\"fa fa-fw fa-download\"></i>Download</button>\n          </form>\n        <div *ngIf=\"isLoggedIn\">\n          \n          <h6>Download Attendance for Counsellor and Course</h6>\n          \n          <form #download2=\"ngForm\" (ngSubmit)=\"downloadExCounsellor(download2)\"\n               class=\"classSc\" style=\"margin:10px;\">\n            \n                                                                                         \n               <mat-form-field>                                                             \n                 <mat-select [(ngModel)]=\"course\" name=\"course\" placeholder=\"Course\" required>                                         \n                   \n                   <mat-option\tvalue=\"OTP\"> OTP </mat-option>\n                   <mat-option value=\"TSSV-B10\"> TSSV-B10 </mat-option>\n                   <mat-option value=\"ASHRAY\"> ASHRAY </mat-option> \n                   <mat-option value=\"BSS\"> BSS </mat-option>\n                   <mat-option value=\"BSS\"> UMANG </mat-option>\n                   <mat-option value=\"DYS\"> DYS </mat-option>          \n                   <mat-option value=\"ALL\"> ALL </mat-option>                    \n                                               \n                 </mat-select>                                                              \n               </mat-form-field>                                                            \n                                                                                         \n               <mat-form-field>                                                             \n                 <mat-select name=\"counsellor\" [(ngModel)]=\"counsellor\" placeholder=\"Counsellor\" required>                                      \n                    <mat-option\tvalue=\"HG Shyam Gopal Prabhuji\"> HG Shyam Gopal Prabhuji </mat-option>\n                    <mat-option value=\"HG Kalpvraksha Prabhuji\"> HG Kalpvraksha Prabhuji </mat-option>\n                    <mat-option value=\"HG Vaidant Chaitnya Prabhuji\"> HG Vaidant Chaitnya Prabhuji </mat-option> \n                    <mat-option value=\"HG Pundrik Vidhyanidhi Prabhuji\"> HG Pundrik Vidhyanidhi Prabhuji </mat-option>\n                    <mat-option value=\"HG Jagadanand Pandit Prabhuji\"> HG Jagadanand Pandit Prabhuji </mat-option>          \n                    <mat-option value=\"ALL\"> ALL </mat-option>          \n                 </mat-select>                                                              \n               </mat-form-field>                                                             \n                                                                         \n              <button mat-raised-button type=\"submit\" class=\"btn btn-primary\" matTooltip=\"Download\">\n                <i class=\"fa fa-fw fa-download\"></i>Download</button>\n            </form>\n        </div>\n\n\n        <div *ngIf=\"isLoggedIn\">\n          \n            <h6>Download Calling Report of specific Counsellor</h6>\n            \n            <form #download3=\"ngForm\" (ngSubmit)=\"downloadCallReportCounsellor(download3)\"\n                 class=\"classSc\" style=\"margin:10px;\">\n              \n                 <mat-form-field >                                                              \n                    <input matInput name=\"date\" [(ngModel)]=\"date\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" required>       \n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n                    <mat-datepicker #picker></mat-datepicker>                                   \n                  </mat-form-field>                                                                        \n                                                                          \n                                                                                           \n                 <mat-form-field>                                                             \n                   <mat-select name=\"counsellor\" [(ngModel)]=\"counsellor\" placeholder=\"Counsellor\" required>                                      \n                      <mat-option\tvalue=\"HG Shyam Gopal Prabhuji\"> HG Shyam Gopal Prabhuji </mat-option>\n                      <mat-option value=\"HG Kalpvraksha Prabhuji\"> HG Kalpvraksha Prabhuji </mat-option>\n                      <mat-option value=\"HG Vaidant Chaitnya Prabhuji\"> HG Vaidant Chaitnya Prabhuji </mat-option> \n                      <mat-option value=\"HG Pundrik Vidhyanidhi Prabhuji\"> HG Pundrik Vidhyanidhi Prabhuji </mat-option>\n                      <mat-option value=\"HG Jagadanand Pandit Prabhuji\"> HG Jagadanand Pandit Prabhuji </mat-option>          \n                      <mat-option value=\"NA\"> NA </mat-option>          \n                   </mat-select>                                                              \n                 </mat-form-field>                                                             \n                                                                           \n                <button mat-raised-button type=\"submit\" class=\"btn btn-primary\" matTooltip=\"Download\">\n                  <i class=\"fa fa-fw fa-download\"></i>Download</button>\n              </form>\n          </div>\n\n\n\n\n\n        <div>\n          \n          <h6>Download Devotees of particular course</h6>\n          \n          <form #download3=\"ngForm\" (ngSubmit)=\"downloadCourseExcel(download3)\"\n               class=\"classSc\" style=\"margin:10px;\">\n               <mat-form-field>                                                             \n                 <mat-select [(ngModel)]=\"course\" name=\"course\" placeholder=\"Course\" required>                                         \n                   <mat-option *ngFor=\"let co of courses\" [value]=\"co.value\">\n                     {{co.value}}  \n                   </mat-option>      \n                 </mat-select>\n                </mat-form-field>                                                          \n                    \n                 <mat-form-field>                                                             \n                  <mat-select name=\"isAlumni\" [(ngModel)]=\"isAlumni\" \n                     placeholder=\" Alumni\" required>                                      \n                     <mat-option value=\"YES\"> YES </mat-option>          \n                     <mat-option value=\"NO\"> NO </mat-option>          \n                  </mat-select>                                                              \n               </mat-form-field>       \n\n              <button mat-raised-button type=\"submit\" class=\"btn btn-primary\" matTooltip=\"Download\">\n                <i class=\"fa fa-fw fa-download\"></i>Download</button>\n            </form>\n        </div>\n\n\n      </div>                                      \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/downloads/downloads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devotee_service__ = __webpack_require__("../../../../../src/app/devotee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent(_userService, appComp) {
        var _this = this;
        this._userService = _userService;
        this.appComp = appComp;
        this.isLoggedIn = false;
        this.course = '';
        this.counsellor = '';
        this.courses = [
            { value: 'OTP' },
            { value: 'TSSV-B10' },
            { value: 'ASHRAY' },
            { value: 'BSS' },
            { value: 'UMANG' },
            { value: 'DYS' },
        ];
        this.counsellors = [
            { value: 'HG Shyam Gopal Prabhuji' },
            { value: 'HG Kalpvraksha Prabhuji' },
            { value: 'HG Vaidant Chaitnya Prabhuji' },
            { value: 'HG Pundrik Vidhyanidhi Prabhuji' },
            { value: 'HG Jagadanand Pandit Prabhuji' },
            { value: 'NA' },
        ];
        this.excelGenerator = function (d1, d2, result_json) {
            var ws_name = 'Attendance';
            var wb = { SheetNames: [], Sheets: {} };
            var ws = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].json_to_sheet(result_json);
            wb.SheetNames.push(ws_name);
            wb['!autofilter'] = { ref: 'C4' };
            wb.Sheets[ws_name] = ws;
            var wbout = Object(__WEBPACK_IMPORTED_MODULE_2_xlsx__["write"])(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
            function s2ab(s) {
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i !== s.length; ++i) {
                    view[i] = s.charCodeAt(i) & 0xFF;
                }
                return buf;
            }
            Object(__WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"])(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), d1 + '_' + d2 + '.xlsx');
        };
        this.checkIfDevoteePresntForGivenDate = function (date, myArray) {
            for (var i = 0; i < myArray.length; i++) {
                if (myArray[i].date === date) {
                    return myArray[i];
                }
            }
        };
        this.downloadCallReportCounsellor = function (form) {
            _this._userService.downloadCallReportCounsellor(form.value)
                .subscribe(function (userData) {
                console.log(userData);
                var result_json = [];
                for (var i = 0; i < userData.result.length; i++) {
                    var objectToInsert = {};
                    objectToInsert['name'] = userData.result[i].name;
                    objectToInsert['contact'] = userData.result[i].contact;
                    objectToInsert['course'] = userData.result[i].course;
                    objectToInsert['counsellor'] = userData.result[i].counsellor;
                    if (userData.result[i].calling !== undefined) {
                        for (var j = 0; j < userData.result[i].calling.length; j++) {
                            objectToInsert[userData.result[i].calling[j].date] =
                                userData.result[i].calling[j].comment;
                        }
                    }
                    result_json.push(objectToInsert);
                }
                _this.excelGenerator(form.value.date, form.value.counsellor, result_json);
            });
        };
        this.downloadExCounsellor = function (form) {
            var classList = [];
            _this._userService.getSdlClassesCourse(_this.course)
                .subscribe(function (sdlClass) {
                for (var j = 0; j < 8; j++) {
                    if (!sdlClass.result[j]) {
                        break;
                    }
                    else {
                        classList.push(sdlClass.result[j].date);
                    }
                }
                // console.log('in class list', classList, classList.length);
                if (classList.length > 0) {
                    _this._userService.downloadToExCounsellor(form.value)
                        .subscribe(function (userData) {
                        var result_json = [];
                        for (var i = 0; i < userData.result.length; i++) {
                            var objectToInsert = {};
                            objectToInsert['name'] = userData.result[i].name;
                            objectToInsert['contact'] = userData.result[i].contact;
                            objectToInsert['course'] = userData.result[i].course;
                            objectToInsert['counsellor'] = userData.result[i].counsellor;
                            if (userData.result[i].dob) {
                                objectToInsert['dob'] = _this._userService.parseDate(userData.result[i].dob);
                            }
                            if (userData.result[i].attendance !== undefined) {
                                objectToInsert['classcount'] = userData.result[i].attendance.length;
                            }
                            var iterLen = 0;
                            // get list of last 8 eight classes
                            // check if devotee present for that day
                            // search for date in attendance array for given counsellor/course
                            // if yes add present else absent
                            for (var j = 0; j < 8; j++) {
                                if (classList[j] && userData.result[i].attendance !== undefined) {
                                    var status_1 = {};
                                    status_1 = _this.checkIfDevoteePresntForGivenDate(classList[j], userData.result[i].attendance);
                                    if (status_1 !== undefined) {
                                        // console.log("status", status);
                                        if (objectToInsert['status'] !== 'active') {
                                            objectToInsert['status'] = 'active';
                                        }
                                        objectToInsert[classList[j]] = status_1['present'];
                                    }
                                }
                            }
                            result_json.push(objectToInsert);
                        }
                        _this.excelGenerator(form.value.course, form.value.counsellor, result_json);
                    });
                }
            });
        };
        this.downloadToExcel = function (form) {
            form.value.date = _this._userService.parseDate(form.value.date);
            _this._userService.downloadToExcel(form.value)
                .subscribe(function (userData) {
                var result_json = [];
                for (var i = 0; i < userData.result.length; i++) {
                    var objectToInsert = {};
                    objectToInsert['name'] = userData.result[i].name;
                    objectToInsert['contact'] = userData.result[i].contact;
                    objectToInsert['course'] = userData.result[i].course;
                    objectToInsert['counsellor'] = userData.result[i].counsellor;
                    objectToInsert['dob'] = _this._userService.parseDate(userData.result[i].dob);
                    if (userData.result[i].attendance !== undefined) {
                        objectToInsert['classcount'] = userData.result[i].attendance.length;
                        for (var j = 0; j < userData.result[i].attendance.length; j++) {
                            if (userData.result[i].attendance[j].date.localeCompare(form.value.date) === 0) {
                                objectToInsert['date'] = userData.result[i].attendance[j].date;
                                objectToInsert['present'] = userData.result[i].attendance[j].present;
                                objectToInsert['topic'] = userData.result[i].attendance[j].topic;
                                objectToInsert['speaker'] = userData.result[i].attendance[j].speaker;
                                break;
                            }
                        }
                    }
                    result_json.push(objectToInsert);
                }
                _this.excelGenerator(form.value.date, form.value.course, result_json);
            });
        };
        this.downloadCourseExcel = function (form) {
            _this._userService.downloadCourseExcel(form.value)
                .subscribe(function (userData) {
                var result_json = [];
                for (var i = 0; i < userData.result.length; i++) {
                    var objectToInsert = {};
                    objectToInsert['name'] = userData.result[i].name;
                    objectToInsert['contact'] = userData.result[i].contact;
                    objectToInsert['course'] = userData.result[i].course;
                    objectToInsert['counsellor'] = userData.result[i].counsellor;
                    objectToInsert['email'] = userData.result[i].email;
                    result_json.push(objectToInsert);
                }
                _this.excelGenerator(form.value.course, form.value.course, result_json);
            });
        };
    }
    DownloadsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check if counsellor logged in
        var cLogIn = localStorage.getItem('ctoken');
        if (cLogIn) {
            this._userService.iscTokenVerified(cLogIn)
                .subscribe(function (ctokenRes) {
                if (ctokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                    _this.appComp.isLoggedIn = true;
                    _this.appComp.userName = localStorage.getItem('cname');
                    // this.userName = localStorage.getItem('cname');
                    // console.log('c log in  ', cLogIn, localStorage.getItem('cname'));
                }
            });
        }
        // check if cousellor is login
        var getLoggedIn = localStorage.getItem('token');
        if (getLoggedIn) {
            this._userService.isTokenVerified(getLoggedIn)
                .subscribe(function (tokenRes) {
                if (tokenRes.result === 'ok') {
                    _this.isLoggedIn = true;
                    _this.appComp.isLoggedIn = true;
                    _this.appComp.userName = 'admin';
                }
            });
        }
        if ($(window).width() < 600) {
            $('.left-pane')[0].style.display = 'none';
        }
    };
    DownloadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-downloads',
            template: __webpack_require__("../../../../../src/app/downloads/downloads.component.html"),
            styles: [__webpack_require__("../../../../../src/app/downloads/downloads.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], DownloadsComponent);
    return DownloadsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dyshandler/dyshandler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dyshandler/dyshandler.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n          \n    <h6>Please select the topic for which attendance to be taken</h6>\n    <!--form #download3=\"ngForm\" (ngSubmit)=\"downloadCourseExcel(download3)\"-->\n    <form #dystopic=\"ngForm\" (ngSubmit)=\"handleDysTopic(dystopic)\" >\n         <mat-form-field>  \n\n           <mat-select [(ngModel)]=\"dysclass\" name=\"dystopic\" placeholder=\"Topic\" required>\n             <mat-option  *ngFor=\"let co of data.res\" [value]=\"co.topic\">{{co.topic}}</mat-option>      \n           </mat-select >\n        </mat-form-field>                                                          \n              \n\n        <button mat-raised-button type=\"submit\" class=\"btn btn-primary\" matTooltip=\"Submit the topic name\">\n          <i class=\"fa fa-fw fa-book\"></i>Submit</button>\n      </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dyshandler/dyshandler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DyshandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devotee_service__ = __webpack_require__("../../../../../src/app/devotee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DyshandlerComponent = /** @class */ (function () {
    function DyshandlerComponent(route, dialog, _userService, router, dialogRef, data) {
        this.route = route;
        this.dialog = dialog;
        this._userService = _userService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dystopic = '';
    }
    DyshandlerComponent.prototype.ngOnInit = function () {
    };
    DyshandlerComponent.prototype.handleDysTopic = function (form) {
        this.dialogRef.close(form.value);
    };
    DyshandlerComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DyshandlerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dyshandler',
            template: __webpack_require__("../../../../../src/app/dyshandler/dyshandler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dyshandler/dyshandler.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */]],
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object])
    ], DyshandlerComponent);
    return DyshandlerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/showdetails/showdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formClass {\n\toverflow: hidden;\n}\n\nmat-form-field {\n\twidth: 198px;\n}\n\nmat-progress-spinner{\n  \n  margin: auto;\n}\n\n\n .content-wrapper{\n\tmargin-top: 80px;\n} \n\n.container-fluid{\n\tz-index: 1;\n\topacity: 0.8;\n\tposition: relative;\n\t\n}\nmat-cell{\n\tfont-weight: bold;\n}\n\n/* Desktops and laptops ----------- */\n@media only screen  and (min-width : 1200px) {\n\t/* Styles */\n\tmat-form-field {\n\t\tmargin: 10px;\n\t\twidth: 250px;\n\t}\n\t.mat-dialog-container {\n        height: 55vh;\n    }\n\t\n}\n\n.mat-dialog-container {\n    height: 85vh;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/showdetails/showdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"\">  \n             <!-- Breadcrumbs-->\n             <!--ol class=\"breadcrumb\" style=\"margin-top:20px;\">\n                <li class=\"breadcrumb-item\">\n                  <a href=\"#\">COURSES</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Attendance</li>\n              </ol-->  \n\n              <div class=\"\" style=\"margin-top:15px;\">\n                  <div class=\"card-header\" style=\"background-color:yellow;\">\n                    <i class=\"fa fa-table\"></i> Devotee Details\n                  </div>\n                  <div class=\"formClass\">\n                      <form #devoteeForm=\"ngForm\">\n                          \n                          <mat-progress-spinner [diameter]=\"40\" [strokeWidth]=\"10\"\n                          mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-spinner>\n                        \n                            <mat-form-field> <input matInput\n                                 name=\"contact\" [(ngModel)]=\"data.contact\"\n                                placeholder=\"Contact\" maxlength=\"10\" minlength=\"10\" required> </mat-form-field>\n                            <mat-form-field> <input matInput required\n                                 name=\"name\" [(ngModel)]=\"data.name\"\n                                placeholder=\"Name\" > </mat-form-field>\t\n                            \n                                \n                            <mat-form-field> <input type=\"email\" matInput\n                              required\n                                 name=\"email\" [(ngModel)]=\"data.email\"\n                                placeholder=\"Email\" > </mat-form-field>\n\n                                <mat-form-field> <input type=\"text\" matInput\n                                  required\n                                     name=\"area\" [(ngModel)]=\"data.area\"\n                                  placeholder=\"Location\" > </mat-form-field>\n\n                            \n                        <mat-form-field>                                                              \n                        <input matInput name=\"dob\" [(ngModel)]=\"data.dob\" \n                         [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" required>       \n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n                        <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>                                   \n                      </mat-form-field>   \n\n                      <mat-form-field>\n                      <mat-select name=\"course\" placeholder=\"Course\" required\n                        [(ngModel)]=\"data.course\"> <mat-option\n                        value=\"OTP\"> OTP </mat-option> <mat-option value=\"TSSV-B10\">\n                      TSSV-B10 </mat-option> <mat-option value=\"ASHRAY\"> ASHRAY </mat-option> <mat-option\n                        value=\"BSS\"> BSS </mat-option> <mat-option value=\"UMANG\">\n                          UMANG </mat-option></mat-select> </mat-form-field>\n\n                      <mat-form-field>\n                      <mat-select name=\"counsellor\" placeholder=\"Counsellor\" required\n                        [(ngModel)]=\"data.counsellor\"> <mat-option\n                        value=\"HG Shyam Gopal Prabhuji\"> HG Shyam Gopal Prabhuji </mat-option>\n                      <mat-option value=\"HG Kalpvraksha Prabhuji\">\n                      HG Kalpvraksha Prabhuji </mat-option> <mat-option value=\"HG Vaidant Chaitnya Prabhuji\"> HG Vaidant Chaitnya Prabhuji </mat-option> <mat-option\n                        value=\"HG Pundrik Vidhyanidhi Prabhuji\"> HG Pundrik Vidhyanidhi Prabhuji </mat-option>\n                        <mat-option\n                        value=\"HG Jagadanand Pandit Prabhuji\"> HG Jagadanand Pandit Prabhuji \n                      </mat-option>\n                      <mat-option\n                      value=\"NA\"> NA \n                    </mat-option>\n                        </mat-select> </mat-form-field>\n\n                        <!--mat-form-field>                                                              \n                            <input matInput name=\"fp\" [(ngModel)]=\"devoteeData.fp\" \n                             [matDatepicker]=\"picker\" placeholder=\"First Program\" required>       \n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>    \n                            <mat-datepicker #picker></mat-datepicker>                                   \n                        </mat-form-field-->  \n                        \n                      <mat-form-field>\n                        <mat-select name=\"bace\" placeholder=\"Is BACE Devotee?\" required\n                          [(ngModel)]=\"data.bace\"> \n                          <mat-option value=\"YES\"> YES </mat-option> \n                          <mat-option value=\"NO\"> NO </mat-option> \n                        </mat-select>\n                       </mat-form-field>\n                       <mat-form-field>                                                             \n                        <mat-select name=\"isAlumni\" [(ngModel)]=\"data.isAlumni\" \n                           placeholder=\"Update if devotee is alumni now\" required>                                      \n                           <mat-option value=\"YES\"> YES </mat-option>          \n                           <mat-option value=\"NO\"> NO </mat-option>          \n                        </mat-select>                                                              \n                     </mat-form-field>  \n                  <mat-form-field>                                                             \n                    <mat-select name=\"facilitator\" [(ngModel)]=\"data.facilitator\" \n                     placeholder=\"Assign facilitator\" required>                                      \n                        <mat-option *ngFor=\"let co of data.facilitators\" [value]=\"co\"> {{co}} </mat-option>          \n                      </mat-select>                                                              \n                   </mat-form-field>  \n\n                      <button mat-raised-button color=\"primary\" style=\"margin-left:8px;\"\n                      (click)=\"updateDevotee(devoteeForm)\">Update Devotee</button>\n                </form>\n          <div class=\"card mb-3 col-md-offset-2\" style=\"margin-top:25px;\">\n              <div class=\"card-header\" style=\"background-color:yellow;\">\n                  <i class=\"fa fa-table\"></i> Programs attended till date\n                </div>\n\n                        <mat-table #table *ngIf=\"data.attendance\" [dataSource]=\"data.dataSourceDetails\">\n                            <!-- Position Column -->\n                            <ng-container matColumnDef=\"Date\">\n                              <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n                              <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n                            </ng-container>\n                        \n                            <!-- Name Column -->\n                            <ng-container matColumnDef=\"Speaker\">\n                              <mat-header-cell *matHeaderCellDef> Speaker </mat-header-cell>\n                              <mat-cell *matCellDef=\"let element\"> {{element.speaker}} </mat-cell>\n                            </ng-container>\n                        \n                            <!-- Weight Column -->\n                            <ng-container matColumnDef=\"Topic\">\n                              <mat-header-cell *matHeaderCellDef> Topic </mat-header-cell>\n                              <mat-cell *matCellDef=\"let element\"> {{element.topic}} </mat-cell>\n                            </ng-container>\n                        \n                            <!-- Symbol Column -->\n                            <ng-container matColumnDef=\"Attendance\">\n                              <mat-header-cell *matHeaderCellDef> Attendance </mat-header-cell>\n                              <mat-cell *matCellDef=\"let element\"> {{element.present}} </mat-cell>\n                            </ng-container>\n                        \n                            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                        \n                          </mat-table>\n                          <mat-paginator #data.dataSourceDetails.paginatorDetails\n                           [pageSize]=\"10\"\n                           [pageSizeOptions]=\"[5, 10, 20]\"\n                           >\n                       </mat-paginator>\n                    </div>\n                  </div>\n                  <div class=\"card-footer small text-muted\">\n                  </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showdetails/showdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devotee_service__ = __webpack_require__("../../../../../src/app/devotee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ShowdetailsComponent = /** @class */ (function () {
    function ShowdetailsComponent(route, dialog, _userService, data, router) {
        this.route = route;
        this.dialog = dialog;
        this._userService = _userService;
        this.data = data;
        this.router = router;
        this.displayedColumns = ['Date', 'Speaker', 'Topic', 'Attendance'];
        //  dataSource = new MatTableDataSource([]);
        //  data = {contact: '', counsellor: '', course: '', email: '', dob: '', name: '', bace: '', isAlumni: ''};
        //  @ViewChild(MatPaginator) paginator: MatPaginator;
        this.isLoggedIn = false;
    }
    ShowdetailsComponent.prototype.ngOnInit = function () {
        //  this.dataSource.paginator = this.paginator;
        // const getLoggedIn = localStorage.getItem('token');
        // console.log("token is in atte init",getLoggedIn);
        /* if (getLoggedIn) {
             this._userService.isTokenVerified(getLoggedIn)
             .subscribe(tokenRes => {
                 if (tokenRes.result === 'ok') {
                   this.isLoggedIn = true;
                 }
             });
     
         this.route.params.subscribe(params => {
           this.id =  params['id'];
           this._userService.getDetails(this.id)
           .subscribe(userData => {
                console.log(' user data is ', userData.result);
                if (userData.result[0].attendance) {
                 this.dataSource.data = userData.result[0].attendance;
                }
                this.devoteeData = userData.result[0];
              });
            });
          }*/
    };
    ShowdetailsComponent.prototype.updateDevotee = function (form) {
        form.value._id = this.data['_id'];
        // console.log('update devotee ', form.value);
        this._userService.editDevotee(form.value)
            .subscribe(function (userData) {
            if (userData['result'] === 'ok') {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    type: 'success',
                    title: 'Record updated successfully',
                    html: 'Hari Bol!!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
    ShowdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-showdetails',
            template: __webpack_require__("../../../../../src/app/showdetails/showdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/showdetails/showdetails.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__devotee_service__["a" /* UserService */], Object, __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ShowdetailsComponent);
    return ShowdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.0656ac15eb6f9f2817f9.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map