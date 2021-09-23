(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutors-tutors-module"],{

/***/ "BbV+":
/*!*************************************************!*\
  !*** ./src/app/tutors/tutors-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TutorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorsRoutingModule", function() { return TutorsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tutors_tutors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutors/tutors.component */ "m6VV");





const routes = [
    { path: '', component: _tutors_tutors_component__WEBPACK_IMPORTED_MODULE_2__["TutorsComponent"] }
];
class TutorsRoutingModule {
}
TutorsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TutorsRoutingModule });
TutorsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TutorsRoutingModule_Factory(t) { return new (t || TutorsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TutorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Siju":
/*!*****************************************!*\
  !*** ./src/app/tutors/tutors.module.ts ***!
  \*****************************************/
/*! exports provided: TutorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorsModule", function() { return TutorsModule; });
/* harmony import */ var _tutors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutors-routing.module */ "BbV+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tutors_tutors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutors/tutors.component */ "m6VV");





class TutorsModule {
}
TutorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TutorsModule });
TutorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TutorsModule_Factory(t) { return new (t || TutorsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tutors_routing_module__WEBPACK_IMPORTED_MODULE_0__["TutorsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TutorsModule, { declarations: [_tutors_tutors_component__WEBPACK_IMPORTED_MODULE_3__["TutorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _tutors_routing_module__WEBPACK_IMPORTED_MODULE_0__["TutorsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TutorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_tutors_tutors_component__WEBPACK_IMPORTED_MODULE_3__["TutorsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _tutors_routing_module__WEBPACK_IMPORTED_MODULE_0__["TutorsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "m6VV":
/*!***************************************************!*\
  !*** ./src/app/tutors/tutors/tutors.component.ts ***!
  \***************************************************/
/*! exports provided: TutorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorsComponent", function() { return TutorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TutorsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", t_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", t_r1.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1.desc);
} }
class TutorsComponent {
    constructor() {
        this.tutors = [
            { avatar: "assets/female.svg", country: "Morocco", flag: "https://www.countryflags.io/ma/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat." },
            { avatar: "assets/male.svg", country: "Japan", flag: "https://www.countryflags.io/jp/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat." },
            { avatar: "assets/female.svg", country: "France", flag: "https://www.countryflags.io/fr/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat." },
            { avatar: "assets/male.svg", country: "Turkey", flag: "https://www.countryflags.io/tr/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat." },
            { avatar: "assets/female.svg", country: "Argentina", flag: "https://www.countryflags.io/ar/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat." },
            { avatar: "assets/female.svg", country: "Brazil", flag: "https://www.countryflags.io/br/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat." },
            { avatar: "assets/male.svg", country: "Switzerland", flag: "https://www.countryflags.io/ch/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat." },
            { avatar: "assets/male.svg", country: "Ivory Coast", flag: "https://www.countryflags.io/ci/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat." },
            { avatar: "assets/male.svg", country: "Chile", flag: "https://www.countryflags.io/cl/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat." },
        ];
    }
    ngOnInit() {
    }
}
TutorsComponent.ɵfac = function TutorsComponent_Factory(t) { return new (t || TutorsComponent)(); };
TutorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TutorsComponent, selectors: [["app-tutors"]], decls: 21, vars: 1, consts: [[1, "container"], [1, "content"], [1, "right"], [1, "group"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "text", "placeholder", "Select", 1, "form-control"], [1, "left"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "country"], ["alt", "flag", 1, "flag", 3, "src"], [1, "desc"]], template: function TutorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Online Tutors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non rutrum tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nulla leo mi, facilisis sed justo eget, hendrerit efficitur neque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search a Tutor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select a Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TutorsComponent_div_20_Template, 7, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tutors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Oswald&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap\");\nbody[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  margin: 0;\n  padding: 0;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));\n  border-radius: 10px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n  color: #30475E;\n  text-align: center;\n  font-size: 70px;\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  margin-top: 50px;\n}\n.group[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.right[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px;\n}\n.right[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n}\n.right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));\n  padding: 5px 10px;\n  width: 80%;\n}\n.left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.left[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 10px;\n  text-align: left;\n  width: 25%;\n}\n.left[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n  display: block;\n}\n.left[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  width: 18px;\n  margin-right: 2px;\n}\n.left[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n  font-family: \"Oswald\", sans-serif;\n  padding: 0;\n  margin: 0;\n}\n.left[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n}\n@media screen and (max-width: 800px) {\n  .content[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 20px !important;\n  }\n\n  .left[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .left[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 40%;\n    padding: 10px;\n    margin: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0dXRvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUFDQSx1RkFBQTtBQUtSO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hKO0FES0E7RUFBUSxZQUFBO0FDRFI7QURFQTtFQUNJLHNCQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0VKO0FBcEJBO0VBQ0ksaUJBQUE7QUF1Qko7QUFyQkE7RUFDSSxpQ0RGUztFQ0dULGNERlM7RUNHVCxrQkFBQTtFQUNBLGVBQUE7QUF3Qko7QUF0QkE7RUFDSSxvQ0RUUTtFQ1VSLGtCQUFBO0FBeUJKO0FBdkJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUEwQko7QUF4QkE7RUFBUyxnQkFBQTtBQTRCVDtBQTNCQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FBOEJKO0FBN0JJO0VBQ0ksb0NEdEJJO0VDdUJKLGVBQUE7QUErQlI7QUE3Qkk7RUFDSSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0RBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUErQlI7QUE1QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBK0JKO0FBOUJJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFnQ1I7QUEvQlE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFpQ1o7QUEvQlE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFpQ1o7QUEvQlE7RUFDSSxpQ0RuREM7RUNvREQsVUFBQTtFQUNBLFNBQUE7QUFpQ1o7QUEvQlE7RUFDSSxvQ0R6REE7QUMwRlo7QUE3QkE7RUFDSTtJQUNJLGNBQUE7SUFDQSwyQkFBQTtFQWdDTjs7RUE5QkU7SUFDSSxnQkFBQTtFQWlDTjtFQWhDTTtJQUNJLFVBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQWtDVjtBQUNGIiwiZmlsZSI6InR1dG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kbWFpbi1mb250OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHRpdGxlLWZvbnQ6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4kbWFpbi1jb2xvcjogIzMwNDc1RTtcclxuJHNlY29uZGFyeS1jb2xvcjogI0YwNTQ1NDtcclxuYm9keSB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5idXR0b24ge2JvcmRlcjogbm9uZX1cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggcmdiYSgwLDAsMCwgMjUlKSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jb250YWluZXIgeyBcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46YXV0b1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzA0NzVFO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZ3JvdXAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucmlnaHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5yaWdodCBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucmlnaHQgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubGVmdCAuY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDI1JTtcbn1cbi5sZWZ0IC5jYXJkIC5hdmF0YXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxlZnQgLmNhcmQgLmZsYWcge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4ubGVmdCAuY2FyZCAuY291bnRyeSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ubGVmdCAuY2FyZCAuZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxlZnQge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbiAgLmxlZnQgLmNhcmQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tutors',
                templateUrl: './tutors.component.html',
                styleUrls: ['./tutors.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=tutors-tutors-module.js.map