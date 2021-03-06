function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_store_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./store/store.component */
    "./src/app/store/store.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'moving-sale';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-store");
        }
      },
      directives: [_store_store_component__WEBPACK_IMPORTED_MODULE_1__["StoreComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _store_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store/store.component */
    "./src/app/store/store.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _products_books_books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./products/books/books.component */
    "./src/app/products/books/books.component.ts");
    /* harmony import */


    var _products_camping_camping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./products/camping/camping.component */
    "./src/app/products/camping/camping.component.ts");
    /* harmony import */


    var _products_educational_educational_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./products/educational/educational.component */
    "./src/app/products/educational/educational.component.ts");
    /* harmony import */


    var _products_fitness_fitness_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./products/fitness/fitness.component */
    "./src/app/products/fitness/fitness.component.ts");
    /* harmony import */


    var _products_toys_toys_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./products/toys/toys.component */
    "./src/app/products/toys/toys.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/app/modal/modal.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _products_free_free_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./products/free/free.component */
    "./src/app/products/free/free.component.ts");
    /* harmony import */


    var _products_christmas_christmas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./products/christmas/christmas.component */
    "./src/app/products/christmas/christmas.component.ts");
    /* harmony import */


    var _products_furniture_furniture_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./products/furniture/furniture.component */
    "./src/app/products/furniture/furniture.component.ts");
    /* harmony import */


    var _products_foreign_languages_foreign_languages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./products/foreign-languages/foreign-languages.component */
    "./src/app/products/foreign-languages/foreign-languages.component.ts");
    /* harmony import */


    var _products_home_decor_home_decor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./products/home-decor/home-decor.component */
    "./src/app/products/home-decor/home-decor.component.ts");

    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
    }, {
      path: 'books',
      component: _products_books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"]
    }, {
      path: 'camping',
      component: _products_camping_camping_component__WEBPACK_IMPORTED_MODULE_9__["CampingComponent"]
    }, {
      path: 'christmas',
      component: _products_christmas_christmas_component__WEBPACK_IMPORTED_MODULE_17__["ChristmasComponent"]
    }, {
      path: 'educational',
      component: _products_educational_educational_component__WEBPACK_IMPORTED_MODULE_10__["EducationalComponent"]
    }, {
      path: 'fitness',
      component: _products_fitness_fitness_component__WEBPACK_IMPORTED_MODULE_11__["FitnessComponent"]
    }, {
      path: 'foreign-languages',
      component: _products_foreign_languages_foreign_languages_component__WEBPACK_IMPORTED_MODULE_19__["ForeignLanguagesComponent"]
    }, {
      path: 'free',
      component: _products_free_free_component__WEBPACK_IMPORTED_MODULE_16__["FreeComponent"]
    }, {
      path: 'furniture',
      component: _products_furniture_furniture_component__WEBPACK_IMPORTED_MODULE_18__["FurnitureComponent"]
    }, {
      path: 'home-decor',
      component: _products_home_decor_home_decor_component__WEBPACK_IMPORTED_MODULE_20__["HomeDecorComponent"]
    }, {
      path: 'toys',
      component: _products_toys_toys_component__WEBPACK_IMPORTED_MODULE_12__["ToysComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _products_books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"], _products_camping_camping_component__WEBPACK_IMPORTED_MODULE_9__["CampingComponent"], _products_educational_educational_component__WEBPACK_IMPORTED_MODULE_10__["EducationalComponent"], _products_fitness_fitness_component__WEBPACK_IMPORTED_MODULE_11__["FitnessComponent"], _products_toys_toys_component__WEBPACK_IMPORTED_MODULE_12__["ToysComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"], _products_free_free_component__WEBPACK_IMPORTED_MODULE_16__["FreeComponent"], _products_christmas_christmas_component__WEBPACK_IMPORTED_MODULE_17__["ChristmasComponent"], _products_furniture_furniture_component__WEBPACK_IMPORTED_MODULE_18__["FurnitureComponent"], _products_foreign_languages_foreign_languages_component__WEBPACK_IMPORTED_MODULE_19__["ForeignLanguagesComponent"], _products_home_decor_home_decor_component__WEBPACK_IMPORTED_MODULE_20__["HomeDecorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _products_books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"], _products_camping_camping_component__WEBPACK_IMPORTED_MODULE_9__["CampingComponent"], _products_educational_educational_component__WEBPACK_IMPORTED_MODULE_10__["EducationalComponent"], _products_fitness_fitness_component__WEBPACK_IMPORTED_MODULE_11__["FitnessComponent"], _products_toys_toys_component__WEBPACK_IMPORTED_MODULE_12__["ToysComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"], _products_free_free_component__WEBPACK_IMPORTED_MODULE_16__["FreeComponent"], _products_christmas_christmas_component__WEBPACK_IMPORTED_MODULE_17__["ChristmasComponent"], _products_furniture_furniture_component__WEBPACK_IMPORTED_MODULE_18__["FurnitureComponent"], _products_foreign_languages_foreign_languages_component__WEBPACK_IMPORTED_MODULE_19__["ForeignLanguagesComponent"], _products_home_decor_home_decor_component__WEBPACK_IMPORTED_MODULE_20__["HomeDecorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts": function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 5,
      vars: 0,
      consts: [["src", "../assets/moving.png", "alt", "", 1, "home-pic"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Welcome!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "I will be moving in Spetember and need to sell as much as possible. Please browse through the items available and feel free to reach out to me if you would like to purchase an item or simply have questions about it!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modal/modal.component.ts": function srcAppModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ModalComponent_p_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Language: ", ctx_r0.item.language, "");
      }
    }

    function ModalComponent_p_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Ages: ", ctx_r1.item.age, "");
      }
    }

    function ModalComponent_p_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Grades: ", ctx_r2.item.grade, "");
      }
    }

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(activeModal) {
        _classCallCheck(this, ModalComponent);

        this.activeModal = activeModal;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModalComponent;
    }();

    ModalComponent.??fac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    ModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal"]],
      inputs: {
        item: "item"
      },
      decls: 30,
      vars: 6,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "carouselExampleControlsNoTouching", "data-bs-touch", "false", "data-bs-interval", "false", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "...", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["type", "button", "data-bs-target", "#carouselExampleControlsNoTouching", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControlsNoTouching", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "card-text"], ["class", "card-text", 4, "ngIf"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ModalComponent_p_25_Template, 2, 1, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, ModalComponent_p_26_Template, 2, 1, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ModalComponent_p_27_Template, 2, 1, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.item.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.item.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.item.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.item.grade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Condition: ", ctx.item.condition, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal',
          templateUrl: './modal.component.html',
          styleUrls: ['./modal.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts": function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.??fac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 34,
      vars: 0,
      consts: [[1, "nav", "flex-column"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/books", 1, "nav-link"], ["routerLink", "/camping", 1, "nav-link"], ["routerLink", "/christmas", 1, "nav-link"], ["routerLink", "/educational", 1, "nav-link"], ["routerLink", "/fitness", 1, "nav-link"], ["routerLink", "/foreign-languages", 1, "nav-link"], ["routerLink", "/free", 1, "nav-link"], ["routerLink", "/furniture", 1, "nav-link"], ["routerLink", "/home-decor", 1, "nav-link"], ["routerLink", "/toys", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Camping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Christmas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Educational");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Fitness");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Foreign Languages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Free");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Furniture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Home Decor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Toys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product/product.component.ts": function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../modal/modal.component */
    "./src/app/modal/modal.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductComponent_div_0_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.item.price);
      }
    }

    function ProductComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h5", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ProductComponent_div_0_p_5_Template, 2, 1, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_div_0_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r2.openModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "../assets/", ctx_r0.item.image, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.item.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.item.price);
      }
    }

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(modalService) {
        _classCallCheck(this, ProductComponent);

        this.modalService = modalService;
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.category) {
            this.category = 'All';
          }
        }
      }, {
        key: "openModal",
        value: function openModal() {
          var modalRef = this.modalService.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], {
            windowClass: 'default-modal',
            size: 'lg',
            keyboard: true,
            backdrop: 'static'
          });
          modalRef.componentInstance.item = this.item;
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.??fac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]));
    };

    ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      inputs: {
        item: "item",
        category: "category"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "card", "style", "width: 18rem;", 4, "ngIf"], [1, "card", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], ["class", "card-text", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "card-text"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ProductComponent_div_0_Template, 8, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.item.category === ctx.category || ctx.category === "All");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        category: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/books/books.component.ts": function srcAppProductsBooksBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
      return BooksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function BooksComponent_app_product_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 2);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1);
      }
    }

    var BooksComponent = /*#__PURE__*/function () {
      function BooksComponent() {
        _classCallCheck(this, BooksComponent);

        this.items = [{
          title: '',
          image: '',
          description: '',
          condition: '',
          price: ''
        }];
      }

      _createClass(BooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BooksComponent;
    }();

    BooksComponent.??fac = function BooksComponent_Factory(t) {
      return new (t || BooksComponent)();
    };

    BooksComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BooksComponent,
      selectors: [["app-books"]],
      decls: 4,
      vars: 1,
      consts: [[1, "product-container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function BooksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, BooksComponent_app_product_3_Template, 1, 1, "app-product", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-books',
          templateUrl: './books.component.html',
          styleUrls: ['./books.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/camping/camping.component.ts": function srcAppProductsCampingCampingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampingComponent", function () {
      return CampingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function CampingComponent_app_product_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 2);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1);
      }
    }

    var CampingComponent = /*#__PURE__*/function () {
      function CampingComponent() {
        _classCallCheck(this, CampingComponent);

        this.items = [{
          title: '',
          image: '',
          description: '',
          condition: '',
          price: ''
        }];
      }

      _createClass(CampingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CampingComponent;
    }();

    CampingComponent.??fac = function CampingComponent_Factory(t) {
      return new (t || CampingComponent)();
    };

    CampingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CampingComponent,
      selectors: [["app-camping"]],
      decls: 4,
      vars: 1,
      consts: [[1, "product-container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function CampingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Camping Gear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CampingComponent_app_product_3_Template, 1, 1, "app-product", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NhbXBpbmcvY2FtcGluZy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CampingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-camping',
          templateUrl: './camping.component.html',
          styleUrls: ['./camping.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/christmas/christmas.component.ts": function srcAppProductsChristmasChristmasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChristmasComponent", function () {
      return ChristmasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function ChristmasComponent_app_product_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 2);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1);
      }
    }

    var ChristmasComponent = /*#__PURE__*/function () {
      function ChristmasComponent() {
        _classCallCheck(this, ChristmasComponent);

        this.items = [{
          title: '',
          image: '',
          description: '',
          condition: '',
          price: ''
        }];
      }

      _createClass(ChristmasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChristmasComponent;
    }();

    ChristmasComponent.??fac = function ChristmasComponent_Factory(t) {
      return new (t || ChristmasComponent)();
    };

    ChristmasComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ChristmasComponent,
      selectors: [["app-christmas"]],
      decls: 4,
      vars: 1,
      consts: [[1, "product-container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function ChristmasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Christmas Decor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ChristmasComponent_app_product_3_Template, 1, 1, "app-product", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NocmlzdG1hcy9jaHJpc3RtYXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChristmasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-christmas',
          templateUrl: './christmas.component.html',
          styleUrls: ['./christmas.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/educational/educational.component.ts": function srcAppProductsEducationalEducationalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationalComponent", function () {
      return EducationalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function EducationalComponent_app_product_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 4);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1)("category", ctx_r0.category);
      }
    }

    var EducationalComponent = /*#__PURE__*/function () {
      function EducationalComponent() {
        _classCallCheck(this, EducationalComponent);

        this.category = 'All';
        this.items = [{
          title: 'Capture the Flag: Reading Comprehension Game',
          image: 'capture-the-flag',
          description: 'In this fun-filled reading game, players read short passages and answer skill-building comprehension questions covering main idea, vocabulary and inference. Each correct answer lets players move through the maze toward the finish???with dead-ends and winding paths at every turn!',
          age: '9 yrs. - 10 yrs.',
          grade: '4th gr. - 5th gr.',
          category: 'Language Arts',
          condition: 'Line New',
          price: '$10'
        }, {
          title: 'Hazard Mountain: Inference Game',
          image: 'hazard-mountain',
          description: 'In this skill-building reading game, players read short paragraphs and answer follow-up questions by making inferences. Each correct answer moves them farther down the slope???but obstacles and ice patches may send them back to the top of the mountain!',
          age: '9 yrs. - 10 yrs.',
          grade: '4th gr. - 5th gr.',
          category: 'Language Arts',
          condition: 'Like New',
          price: '$10'
        }, {
          title: 'Main Street Shopping: Main Idea Game',
          image: 'main-street',
          description: 'In this skill-building reading game, players try to buy items at the Main Street Mall???by reading passages and identifying the main idea. Players earn money for each question they answer correctly???as they race from store to store in search of the items they need! ',
          age: '9 yrs. - 11 yrs.',
          grade: ' 4th gr. - 6th gr.',
          category: 'Language Arts',
          condition: 'Like New',
          price: '$10'
        }, {
          title: 'Outlast: Reading for Information Game',
          image: '',
          description: 'In this skill-building game, players read short passages and answer questions that challenge them to recall facts and details, analyze text and more. Each correct answer could earn them a survival medallion and get them closer to the finish line???if flash floods and forest fires don???t get in their way! ',
          age: '9 yrs. - 10 yrs.',
          grade: '4th gr. - 5th gr.',
          category: 'Language Arts',
          condition: 'Like New',
          price: '$10'
        }, {
          title: 'Quest for the Jewels: Cause & Effect Game',
          image: '',
          description: 'In this skill-building game, players read short passages and answer questions about cause and effect???collecting precious jewels along the way. Each correct answer could get them back to the palace???if they can make it past powerful genies and crocodile-infested waters! ',
          age: '9 yrs. - 10 yrs.',
          grade: '4th gr. - 5th gr.',
          category: 'Language Arts',
          condition: 'Like New',
          price: '$10'
        }, {
          title: 'Wipeout!: A Vocabulary Game',
          image: 'wipeout',
          description: 'In this skill-building reading game, players surf across the game board by completing sentences with the correct vocabulary words. Each correct answer gets them closer to the big finish???but broken boards and treacherous rocks may send them paddling back out! ',
          age: '9 yrs. - 10 yrs.',
          grade: '4th gr. - 5th gr.',
          category: 'Language Arts',
          condition: 'Like New',
          price: '$10'
        }, {
          title: '',
          image: '',
          description: '',
          age: '',
          grade: '',
          category: '',
          condition: '',
          price: ''
        }];
      }

      _createClass(EducationalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectCategory",
        value: function selectCategory(category) {
          this.category = category;
        }
      }]);

      return EducationalComponent;
    }();

    EducationalComponent.??fac = function EducationalComponent_Factory(t) {
      return new (t || EducationalComponent)();
    };

    EducationalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: EducationalComponent,
      selectors: [["app-educational"]],
      decls: 13,
      vars: 1,
      consts: [[1, "button-container"], ["type", "button", 1, "btn", "btn-primary", "filter", 3, "click"], [1, "product-container"], [3, "item", "category", 4, "ngFor", "ngForOf"], [3, "item", "category"]],
      template: function EducationalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Educational Games & Supplies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EducationalComponent_Template_button_click_3_listener() {
            return ctx.selectCategory("All");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EducationalComponent_Template_button_click_5_listener() {
            return ctx.selectCategory("Language Arts");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Language Arts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EducationalComponent_Template_button_click_7_listener() {
            return ctx.selectCategory("Math");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Math");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EducationalComponent_Template_button_click_9_listener() {
            return ctx.selectCategory("STEM");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "STEM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, EducationalComponent_app_product_12_Template, 1, 2, "app-product", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2VkdWNhdGlvbmFsL2VkdWNhdGlvbmFsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EducationalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-educational',
          templateUrl: './educational.component.html',
          styleUrls: ['./educational.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/fitness/fitness.component.ts": function srcAppProductsFitnessFitnessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FitnessComponent", function () {
      return FitnessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function FitnessComponent_app_product_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 2);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1);
      }
    }

    var FitnessComponent = /*#__PURE__*/function () {
      function FitnessComponent() {
        _classCallCheck(this, FitnessComponent);

        this.items = [{
          title: '',
          image: '',
          description: '',
          condition: '',
          price: ''
        }];
      }

      _createClass(FitnessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FitnessComponent;
    }();

    FitnessComponent.??fac = function FitnessComponent_Factory(t) {
      return new (t || FitnessComponent)();
    };

    FitnessComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FitnessComponent,
      selectors: [["app-fitness"]],
      decls: 4,
      vars: 1,
      consts: [[1, "product-container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function FitnessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Fitness");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, FitnessComponent_app_product_3_Template, 1, 1, "app-product", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2ZpdG5lc3MvZml0bmVzcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FitnessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fitness',
          templateUrl: './fitness.component.html',
          styleUrls: ['./fitness.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/foreign-languages/foreign-languages.component.ts": function srcAppProductsForeignLanguagesForeignLanguagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForeignLanguagesComponent", function () {
      return ForeignLanguagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function ForeignLanguagesComponent_app_product_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 4);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1)("category", ctx_r0.category);
      }
    }

    var ForeignLanguagesComponent = /*#__PURE__*/function () {
      function ForeignLanguagesComponent() {
        _classCallCheck(this, ForeignLanguagesComponent);

        this.category = '';
        this.items = [{
          title: '',
          image: '',
          description: '',
          language: 'Chinese',
          category: 'Chinese',
          condition: '',
          price: ''
        }, {
          title: '',
          image: '',
          description: '',
          language: 'Spanish',
          category: 'Spanish',
          condition: '',
          price: ''
        }, {
          title: '',
          image: '',
          description: '',
          language: 'Russian',
          category: 'Russian',
          condition: '',
          price: ''
        }];
      }

      _createClass(ForeignLanguagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectLanguage",
        value: function selectLanguage(category) {
          this.category = category;
        }
      }]);

      return ForeignLanguagesComponent;
    }();

    ForeignLanguagesComponent.??fac = function ForeignLanguagesComponent_Factory(t) {
      return new (t || ForeignLanguagesComponent)();
    };

    ForeignLanguagesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ForeignLanguagesComponent,
      selectors: [["app-foreign-languages"]],
      decls: 17,
      vars: 1,
      consts: [[1, "button-container"], ["type", "button", 1, "btn", "btn-primary", "filter", 3, "click"], [1, "product-container"], [3, "item", "category", 4, "ngFor", "ngForOf"], [3, "item", "category"]],
      template: function ForeignLanguagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Foreign Languages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForeignLanguagesComponent_Template_button_click_3_listener() {
            return ctx.selectLanguage("All");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForeignLanguagesComponent_Template_button_click_5_listener() {
            return ctx.selectLanguage("Chinese");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Chinese");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForeignLanguagesComponent_Template_button_click_7_listener() {
            return ctx.selectLanguage("German");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "German");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForeignLanguagesComponent_Template_button_click_9_listener() {
            return ctx.selectLanguage("Italian");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Italian");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForeignLanguagesComponent_Template_button_click_11_listener() {
            return ctx.selectLanguage("Russian");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Russian");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForeignLanguagesComponent_Template_button_click_13_listener() {
            return ctx.selectLanguage("Spanish");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Spanish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ForeignLanguagesComponent_app_product_16_Template, 1, 2, "app-product", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2ZvcmVpZ24tbGFuZ3VhZ2VzL2ZvcmVpZ24tbGFuZ3VhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ForeignLanguagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-foreign-languages',
          templateUrl: './foreign-languages.component.html',
          styleUrls: ['./foreign-languages.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/free/free.component.ts": function srcAppProductsFreeFreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FreeComponent", function () {
      return FreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function FreeComponent_app_product_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 2);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1);
      }
    }

    var FreeComponent = /*#__PURE__*/function () {
      function FreeComponent() {
        _classCallCheck(this, FreeComponent);

        this.items = [{
          title: '',
          image: '',
          description: '',
          condition: '',
          price: ''
        }];
      }

      _createClass(FreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FreeComponent;
    }();

    FreeComponent.??fac = function FreeComponent_Factory(t) {
      return new (t || FreeComponent)();
    };

    FreeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FreeComponent,
      selectors: [["app-free"]],
      decls: 4,
      vars: 1,
      consts: [[1, "product-container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function FreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Free Items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, FreeComponent_app_product_3_Template, 1, 1, "app-product", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2ZyZWUvZnJlZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-free',
          templateUrl: './free.component.html',
          styleUrls: ['./free.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/furniture/furniture.component.ts": function srcAppProductsFurnitureFurnitureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FurnitureComponent", function () {
      return FurnitureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function FurnitureComponent_app_product_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 2);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1);
      }
    }

    var FurnitureComponent = /*#__PURE__*/function () {
      function FurnitureComponent() {
        _classCallCheck(this, FurnitureComponent);

        this.items = [{
          title: '',
          image: '',
          description: '',
          condition: '',
          price: ''
        }];
      }

      _createClass(FurnitureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FurnitureComponent;
    }();

    FurnitureComponent.??fac = function FurnitureComponent_Factory(t) {
      return new (t || FurnitureComponent)();
    };

    FurnitureComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FurnitureComponent,
      selectors: [["app-furniture"]],
      decls: 4,
      vars: 1,
      consts: [[1, "product-container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function FurnitureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Furniture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, FurnitureComponent_app_product_3_Template, 1, 1, "app-product", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2Z1cm5pdHVyZS9mdXJuaXR1cmUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FurnitureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-furniture',
          templateUrl: './furniture.component.html',
          styleUrls: ['./furniture.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/home-decor/home-decor.component.ts": function srcAppProductsHomeDecorHomeDecorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeDecorComponent", function () {
      return HomeDecorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function HomeDecorComponent_app_product_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 2);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1);
      }
    }

    var HomeDecorComponent = /*#__PURE__*/function () {
      function HomeDecorComponent() {
        _classCallCheck(this, HomeDecorComponent);

        this.items = [{
          title: '',
          image: '',
          description: '',
          condition: '',
          price: ''
        }];
      }

      _createClass(HomeDecorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeDecorComponent;
    }();

    HomeDecorComponent.??fac = function HomeDecorComponent_Factory(t) {
      return new (t || HomeDecorComponent)();
    };

    HomeDecorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeDecorComponent,
      selectors: [["app-home-decor"]],
      decls: 4,
      vars: 1,
      consts: [[1, "product-container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function HomeDecorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Home Decor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, HomeDecorComponent_app_product_3_Template, 1, 1, "app-product", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2hvbWUtZGVjb3IvaG9tZS1kZWNvci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeDecorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-decor',
          templateUrl: './home-decor.component.html',
          styleUrls: ['./home-decor.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts": function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.??fac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)();
    };

    ProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 1,
      vars: 0,
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/toys/toys.component.ts": function srcAppProductsToysToysComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToysComponent", function () {
      return ToysComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../product/product.component */
    "./src/app/product/product.component.ts");

    function ToysComponent_app_product_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product", 2);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("item", item_r1);
      }
    }

    var ToysComponent = /*#__PURE__*/function () {
      function ToysComponent() {
        _classCallCheck(this, ToysComponent);

        this.items = [{
          title: 'Classic Play Money Set',
          image: 'money',
          description: 'With fifty of each denomination, this set includes familiar looking paper bills and plastic coins. This stash of cash conveniently stores in a handy wooden "cash drawer" box. Each compartment has the denomination printed inside for easy matching cleanup.',
          age: '3+ years',
          grade: '',
          condition: 'Like New',
          price: '$10'
        }, {
          title: 'Real-Working Cash Register',
          image: 'cash-register',
          description: 'Kids can ring up the fun with our real-working cash register! The built-in calculator and digital display let kids add, subtract, multiply and divide as they ring up pretend purchases. The cash drawer even pops open so children can figure out the correct change! The cash register has a large, solar-powered digital display; includes a ???credit card??? and play money.',
          age: '3 yrs. - 9 yrs.',
          grade: 'Preschool - 4th gr.',
          condition: 'Like New',
          price: '$15'
        }, {
          title: 'What Should You Do? A Game of Consequences',
          image: '',
          description: 'In this fun-filled game of consequences, players face everyday dilemmas that deal with topics like honesty, bullying, manners and more. As children race around the game board, they take turns deciding what they should do in each situation???moving closer to the finish line with each correct answer! ',
          age: '5 yrs. - 11 yrs.',
          grade: 'Kindergarten - 6th gr.',
          condition: 'Like New',
          price: '$10'
        }, {
          title: '',
          image: '',
          description: '',
          age: '',
          grade: '',
          condition: '',
          price: ''
        }];
      }

      _createClass(ToysComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToysComponent;
    }();

    ToysComponent.??fac = function ToysComponent_Factory(t) {
      return new (t || ToysComponent)();
    };

    ToysComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ToysComponent,
      selectors: [["app-toys"]],
      decls: 4,
      vars: 1,
      consts: [[1, "product-container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function ToysComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Toys & Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ToysComponent_app_product_3_Template, 1, 1, "app-product", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3RveXMvdG95cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toys',
          templateUrl: './toys.component.html',
          styleUrls: ['./toys.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/store.component.ts": function srcAppStoreStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreComponent", function () {
      return StoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products/products.component */
    "./src/app/products/products.component.ts");

    var StoreComponent = /*#__PURE__*/function () {
      function StoreComponent() {
        _classCallCheck(this, StoreComponent);
      }

      _createClass(StoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoreComponent;
    }();

    StoreComponent.??fac = function StoreComponent_Factory(t) {
      return new (t || StoreComponent)();
    };

    StoreComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: StoreComponent,
      selectors: [["app-store"]],
      decls: 8,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-2"], [1, "col-10"]],
      template: function StoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Moving Sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-store',
          templateUrl: './store.component.html',
          styleUrls: ['./store.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/danikaquinteros/Desktop/projects/moving-sale/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map