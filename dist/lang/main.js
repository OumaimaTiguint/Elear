(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asus\OneDrive\Bureau\elear\lang\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'lang';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 0, consts: [[1, "navbar"], [1, "container-fluid"], [1, "nav"], ["href", "#", 1, "navbar-brand"], [1, "nav-item"], ["href", "", 1, "nav-link"], ["href", "/tutors", 1, "nav-link"], [1, "nav-link"], [1, "btn"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Elear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tutors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Oswald&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap\");\nbody[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  margin: 0;\n  padding: 0;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));\n  border-radius: 10px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: inline;\n}\n.nav[_ngcontent-%COMP%]:last-of-type {\n  text-align: end;\n}\n.navbar-brand[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%]:hover {\n  font-family: \"Oswald\", sans-serif;\n  color: #30475E;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: left;\n}\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: black;\n  text-decoration: none;\n  margin: 10px;\n}\n.nav-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n  color: #fff;\n  background-color: #F05454;\n  border-radius: 10px;\n  padding: 5px 10px;\n  margin-left: 3px;\n}\n@media screen and (max-width: 800px) {\n  .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 3px;\n  }\n\n  .nav[_ngcontent-%COMP%]:last-of-type {\n    text-align: left;\n  }\n\n  .nav-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUFDQSx1RkFBQTtBQUtSO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hKO0FES0E7RUFBUSxZQUFBO0FDRFI7QURFQTtFQUNJLHNCQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0VKO0FBbkJBO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQXNCSjtBQXBCQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQXVCSjtBQXJCQTtFQUFZLGVBQUE7QUF5Qlo7QUF4QkE7RUFDSSxlQUFBO0FBMkJKO0FBekJBO0VBQ0ksaUNEZlM7RUNnQlQsY0RmUztFQ2dCVCxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUE0Qko7QUExQkE7RUFDSSxvQ0R2QlE7RUN3QlIsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQTZCSjtBQTNCQTtFQUNJLGlDRDVCUztFQzZCVCxXQUFBO0VBQ0EseUJENUJjO0VDNkJkLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQThCSjtBQTNCQTtFQUNJO0lBQWMsV0FBQTtFQStCaEI7O0VBOUJFO0lBQW1CLGdCQUFBO0VBa0NyQjs7RUFqQ0U7SUFBbUIsY0FBQTtFQXFDckI7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMCZkaXNwbGF5PXN3YXAnKTtcclxuJG1haW4tZm9udDogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR0aXRsZS1mb250OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuJG1haW4tY29sb3I6ICMzMDQ3NUU7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNGMDU0NTQ7XHJcbmJvZHkgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwXHJcbn1cclxuYnV0dG9uIHtib3JkZXI6IG5vbmV9XHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggNXB4IHJnYmEoMCwwLDAsIDI1JSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY29udGFpbmVyIHsgXHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOmF1dG9cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5uYXY6bGFzdC1vZi10eXBlIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ubmF2YmFyLWJyYW5kLCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzA0NzVFO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubmF2LWl0ZW0gYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubmF2LWl0ZW0gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA1NDU0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm5hdi1pdGVtIGEge1xuICAgIG1hcmdpbjogM3B4O1xuICB9XG5cbiAgLm5hdjpsYXN0LW9mLXR5cGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAubmF2LWl0ZW0gYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule)
    },
    {
        path: 'tutors',
        loadChildren: () => __webpack_require__.e(/*! import() | tutors-tutors-module */ "tutors-tutors-module").then(__webpack_require__.bind(null, /*! ./tutors/tutors.module */ "Siju")).then(m => m.TutorsModule)
    },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map