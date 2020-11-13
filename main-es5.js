(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Kwz":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/cards/card-line-chart/card-line-chart.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CardLineChartComponent */

    /***/
    function Kwz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLineChartComponent", function () {
        return CardLineChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-line-chart.component.html */
      "lLla");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);

      var CardLineChartComponent = /*#__PURE__*/function () {
        function CardLineChartComponent() {
          _classCallCheck(this, CardLineChartComponent);
        }

        _createClass(CardLineChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var config = {
              type: 'line',
              data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: new Date().getFullYear(),
                  backgroundColor: '#4c51bf',
                  borderColor: '#4c51bf',
                  data: [65, 78, 66, 44, 56, 67, 75],
                  fill: false
                }, {
                  label: new Date().getFullYear() - 1,
                  fill: false,
                  backgroundColor: '#fff',
                  borderColor: '#fff',
                  data: [40, 68, 86, 74, 56, 60, 87]
                }]
              },
              options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                  display: false,
                  text: 'Sales Charts',
                  fontColor: 'white'
                },
                legend: {
                  labels: {
                    fontColor: 'white'
                  },
                  align: 'end',
                  position: 'bottom'
                },
                tooltips: {
                  mode: 'index',
                  intersect: false
                },
                hover: {
                  mode: 'nearest',
                  intersect: true
                },
                scales: {
                  xAxes: [{
                    ticks: {
                      fontColor: 'rgba(255,255,255,.7)'
                    },
                    display: true,
                    scaleLabel: {
                      display: false,
                      labelString: 'Month',
                      fontColor: 'white'
                    },
                    gridLines: {
                      display: false,
                      borderDash: [2],
                      borderDashOffset: [2],
                      color: 'rgba(33, 37, 41, 0.3)',
                      zeroLineColor: 'rgba(0, 0, 0, 0)',
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2]
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      fontColor: 'rgba(255,255,255,.7)'
                    },
                    display: true,
                    scaleLabel: {
                      display: false,
                      labelString: 'Value',
                      fontColor: 'white'
                    },
                    gridLines: {
                      borderDash: [3],
                      borderDashOffset: [3],
                      drawBorder: false,
                      color: 'rgba(255, 255, 255, 0.15)',
                      zeroLineColor: 'rgba(33, 37, 41, 0)',
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2]
                    }
                  }]
                }
              }
            };
            var ctx = document.getElementById('line-chart');
            ctx = ctx.getContext('2d');
            new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
          }
        }]);

        return CardLineChartComponent;
      }();

      CardLineChartComponent.ctorParameters = function () {
        return [];
      };

      CardLineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-line-chart',
        template: _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardLineChartComponent);
      /***/
    },

    /***/
    "/GnJ":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-bar-chart/card-bar-chart.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GnJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-gray-500 mb-1 text-xs font-semibold\">\n          Performance\n        </h6>\n        <h2 class=\"text-gray-800 text-xl font-semibold\">\n          Total orders\n        </h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height: 350px;\">\n      <canvas id=\"bar-chart\"></canvas>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\TOSIN\Downloads\notus-angular-master\bling-codes\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0slC":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/dropdowns/user-dropdown/user-dropdown.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: UserDropdownComponent */

    /***/
    function slC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function () {
        return UserDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-dropdown.component.html */
      "H3xT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import Popper from "popper.js";


      var UserDropdownComponent = /*#__PURE__*/function () {
        function UserDropdownComponent() {
          _classCallCheck(this, UserDropdownComponent);

          this.dropdownPopoverShow = false;
          this.popper = document.createElement('div'); // toggleDropdown(event) {
          //   event.preventDefault();
          //   if (this.dropdownPopoverShow) {
          //     this.dropdownPopoverShow = false;
          //     this.destroyPopper();
          //   } else {
          //     this.dropdownPopoverShow = true;
          //     this.createPoppper();
          //   }
          // }
          // destroyPopper() {
          //   this.popper.parentNode.removeChild(this.popper);
          // }
          // createPoppper() {
          //   new Popper(this.btnDropdownRef.nativeElement, this.popper, {
          //     placement: "bottom-end",
          //   });
          //   this.btnDropdownRef.nativeElement.parentNode.insertBefore(
          //     this.popper,
          //     this.btnDropdownRef.nativeElement.nextSibling
          //   );
          // }
        }

        _createClass(UserDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.popper.innerHTML = "<div class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1\" style=\"min-width:12rem\" #popoverDropdownRef>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Action\n  </a>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Another action\n  </a>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Something else here\n  </a>\n  <div class=\"h-0 my-2 border border-solid border-gray-200\"></div>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Seprated link\n  </a>\n</div>";
          }
        }]);

        return UserDropdownComponent;
      }();

      UserDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['btnDropdownRef', {
            "static": false
          }]
        }]
      };
      UserDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-dropdown',
        template: _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], UserDropdownComponent);
      /***/
    },

    /***/
    "1DoU":
    /*!***************************************************************!*\
      !*** ./src/app/components/footers/footer/footer.component.ts ***!
      \***************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function DoU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "CzbP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.date = new Date().getFullYear();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "2QWS":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/payment-callback/payment-callback.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\n<main>\n  <div\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"\n  >\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-75 bg-black\"\n      ></span>\n    </div>\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n            <h1 class=\"text-white font-semibold text-5xl\">\n              Welcome, to Blingcodes Programming Masterclass\n            </h1>\n            <p class=\"mt-4 text-lg text-gray-300\">\n\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0);\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-gray-300 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <section class=\"pb-20 bg-gray-300 -mt-24\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap\">\n\n\n        <div class=\"w-full md:w-12/12 px-4 text-center\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\n          >\n            <div class=\"px-4 py-5 flex-auto\">\n              <div\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400\"\n              >\n                <i class=\"fas fa-retweet\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\"></h6>\n              <p class=\"mt-2 mb-4 text-gray-600\">\n                Sit back as we take you through a wonderful Journey into the world of programming\n              </p>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n    </div>\n  </section>\n\n\n\n\n\n\n</main>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "3IhM":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/cards/card-page-visits/card-page-visits.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: CardPageVisitsComponent */

    /***/
    function IhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardPageVisitsComponent", function () {
        return CardPageVisitsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-page-visits.component.html */
      "L/HX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardPageVisitsComponent = /*#__PURE__*/function () {
        function CardPageVisitsComponent() {
          _classCallCheck(this, CardPageVisitsComponent);
        }

        _createClass(CardPageVisitsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardPageVisitsComponent;
      }();

      CardPageVisitsComponent.ctorParameters = function () {
        return [];
      };

      CardPageVisitsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-page-visits',
        template: _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardPageVisitsComponent);
      /***/
    },

    /***/
    "4b2p":
    /*!***************************************************************************!*\
      !*** ./src/app/components/navbars/index-navbar/index-navbar.component.ts ***!
      \***************************************************************************/

    /*! exports provided: IndexNavbarComponent */

    /***/
    function b2p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexNavbarComponent", function () {
        return IndexNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index-navbar.component.html */
      "RORk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IndexNavbarComponent = /*#__PURE__*/function () {
        function IndexNavbarComponent() {
          _classCallCheck(this, IndexNavbarComponent);

          this.navbarOpen = false;
        }

        _createClass(IndexNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setNavbarOpen",
          value: function setNavbarOpen() {
            this.navbarOpen = !this.navbarOpen;
          }
        }]);

        return IndexNavbarComponent;
      }();

      IndexNavbarComponent.ctorParameters = function () {
        return [];
      };

      IndexNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-index-navbar',
        template: _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], IndexNavbarComponent);
      /***/
    },

    /***/
    "8GP7":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GP7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\n<main class=\"profile-page\">\n  <section class=\"relative block h-500-px\">\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-50 bg-black\"\n      ></span>\n    </div>\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0);\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-gray-300 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </section>\n  <section class=\"relative py-16 bg-gray-300\">\n    <div class=\"container mx-auto px-4\">\n      <div\n        class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\"\n      >\n        <div class=\"px-6\">\n          <div class=\"flex flex-wrap justify-center\">\n            <div class=\"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\">\n              <div class=\"relative\">\n                <img\n                  alt=\"...\"\n                  src=\"assets/img/team-2-800x800.jpg\"\n                  class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n                />\n              </div>\n            </div>\n            <div\n              class=\"w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center\"\n            >\n              <div class=\"py-6 px-3 mt-32 sm:mt-0\">\n                <button\n                  class=\"bg-red-600 active:bg-red-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Connect\n                </button>\n              </div>\n            </div>\n            <div class=\"w-full lg:w-4/12 px-4 lg:order-1\">\n              <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\n                <div class=\"mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-gray-700\"\n                  >\n                    22\n                  </span>\n                  <span class=\"text-sm text-gray-500\">Friends</span>\n                </div>\n                <div class=\"mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-gray-700\"\n                  >\n                    10\n                  </span>\n                  <span class=\"text-sm text-gray-500\">Photos</span>\n                </div>\n                <div class=\"lg:mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-gray-700\"\n                  >\n                    89\n                  </span>\n                  <span class=\"text-sm text-gray-500\">Comments</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center mt-12\">\n            <h3\n              class=\"text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2\"\n            >\n              Jenna Stones\n            </h3>\n            <div\n              class=\"text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase\"\n            >\n              <i class=\"fas fa-map-marker-alt mr-2 text-lg text-gray-500\"></i>\n              Los Angeles, California\n            </div>\n            <div class=\"mb-2 text-gray-700 mt-10\">\n              <i class=\"fas fa-briefcase mr-2 text-lg text-gray-500\"></i>\n              Solution Manager - Creative Tim Officer\n            </div>\n            <div class=\"mb-2 text-gray-700\">\n              <i class=\"fas fa-university mr-2 text-lg text-gray-500\"></i>\n              University of Computer Science\n            </div>\n          </div>\n          <div class=\"mt-10 py-10 border-t border-gray-300 text-center\">\n            <div class=\"flex flex-wrap justify-center\">\n              <div class=\"w-full lg:w-9/12 px-4\">\n                <p class=\"mb-4 text-lg leading-relaxed text-gray-800\">\n                  An artist of considerable range, Jenna the name taken by\n                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs\n                  and records all of his own music, giving it a warm, intimate\n                  feel with a solid groove structure. An artist of considerable\n                  range.\n                </p>\n                <a href=\"javascript:void(0)\" class=\"font-normal text-red-600\">\n                  Show more\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "AN84":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/landing.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AN84(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\n<main>\n  <div\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"\n  >\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-75 bg-black\"\n      ></span>\n    </div>\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n            <h1 class=\"text-white font-semibold text-5xl\">\n            Send Us a Mail\n            </h1>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0);\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-gray-300 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </div>\n\n\n\n\n\n<br><br><br>\n\n  <section class=\"relative block py-24 lg:pt-0 bg-gray-900\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300\"\n          >\n            <div class=\"flex-auto p-5 lg:p-10\">\n              <h4 class=\"text-2xl font-semibold\">\n               Got Couple of Questions, Clarifications, Requests or Complaints?\n              </h4>\n              <p class=\"leading-relaxed mt-1 mb-4 text-gray-600\">\n                Complete this form and we will get back to you within 24 hours.\n              </p>\n              <div class=\"relative w-full mb-3 mt-8\">\n                <label\n                  class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n                  htmlFor=\"full-name\"\n                >\n                  Full Name\n                </label>\n                <input\n                  type=\"text\"\n                  class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Full Name\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n                  htmlFor=\"email\"\n                >\n                  Email\n                </label>\n                <input\n                  type=\"email\"\n                  class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Email\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n                  htmlFor=\"message\"\n                >\n                  Message\n                </label>\n                <textarea\n                  rows=\"4\"\n                  cols=\"80\"\n                  class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full\"\n                  placeholder=\"Type a message...\"\n                ></textarea>\n              </div>\n              <div class=\"text-center mt-6\">\n                <button\n                  class=\"bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Send Message\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "AiJS":
    /*!************************************************!*\
      !*** ./src/app/views/index/index.component.ts ***!
      \************************************************/

    /*! exports provided: IndexComponent */

    /***/
    function AiJS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
        return IndexComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index.component.html */
      "W8yq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IndexComponent = /*#__PURE__*/function () {
        function IndexComponent() {
          _classCallCheck(this, IndexComponent);
        }

        _createClass(IndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IndexComponent;
      }();

      IndexComponent.ctorParameters = function () {
        return [];
      };

      IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-index',
        template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], IndexComponent);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "CzbP":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer/footer.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CzbP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"relative bg-gray-300 pt-8 pb-6\">\n  <div\n    class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n    style=\"transform: translateZ(0);\"\n  >\n    <svg\n      class=\"absolute bottom-0 overflow-hidden\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      preserveAspectRatio=\"none\"\n      version=\"1.1\"\n      viewBox=\"0 0 2560 100\"\n      x=\"0\"\n      y=\"0\"\n    >\n      <polygon\n        class=\"text-gray-300 fill-current\"\n        points=\"2560 0 2560 100 0 100\"\n      ></polygon>\n    </svg>\n  </div>\n  <div class=\"container mx-auto px-4\">\n    <div class=\"flex flex-wrap text-center lg:text-left\">\n      <div class=\"w-full lg:w-6/12 px-4\">\n        <h4 class=\"text-3xl font-semibold\">Let's keep in touch!</h4>\n        <h5 class=\"text-lg mt-0 mb-2 text-gray-700\">\n          Find us on any of these platforms, we respond 1-2 business days.\n        </h5>\n        <div class=\"mt-6 lg:mb-0 mb-6\">\n\n          <button\n            class=\"bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >   <a href=\"https://web.facebook.com/blingcodes\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <i class=\"fab fa-facebook-square\"></i></a>\n          </button>\n          <button\n          class=\"bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n          type=\"button\"\n        >   <a href=\"https://t.me/blingcodes\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <i class=\"fab fa-telegram\"></i></a>\n        </button>\n\n          <button\n\n            class=\"bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n          <a href=\"https://instagram.com/blingcodes_official\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <i class=\"fab fa-instagram\"></i></a>\n          </button>\n        </div>\n      </div>\n      <div class=\"w-full lg:w-6/12 px-4\">\n        <div class=\"flex flex-wrap items-top mb-6\">\n\n          <div class=\"w-full lg:w-4/12 px-4\">\n            <span\n              class=\"block uppercase text-gray-600 text-sm font-semibold mb-2\"\n            >\n\n            </span>\n            <ul class=\"list-unstyled\">\n\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  [routerLink]=\"['/terms']\"\n                >\n                  Terms & Conditions\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  [routerLink]=\"['/privacy-policy']\"\n                >\n                  Privacy Policy\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                 [routerLink]=\"['/support']\"\n                >\n                  Contact Us\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr class=\"my-6 border-gray-400\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4 mx-auto text-center\">\n        <div class=\"text-sm text-gray-600 font-semibold py-1\">\n          Copyright © {{ date }}\n          <a\n            href=\"https://www.creative-tim.com?ref=na-footer\"\n            class=\"text-gray-600 hover:text-gray-900\"\n          >\n           Blingcodes\n          </a>\n          .\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n";
      /***/
    },

    /***/
    "DLfO":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-small/footer-small.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DLfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer\n  class=\"pb-6\"\n  [ngClass]=\"absolute ? 'absolute w-full bottom-0 bg-gray-900' : 'relative'\"\n>\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-6 border-b-1 border-gray-700\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div\n          class=\"text-sm text-white font-semibold py-1 text-center md:text-left\"\n        >\n          Copyright © {{ date }}\n          <a\n            href=\"https://www.creative-tim.com?ref=na-footer-small\"\n            class=\"text-white hover:text-gray-400 text-sm font-semibold py-1\"\n          >\n           Blingcodes\n          </a>\n        </div>\n      </div>\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\n          <li>\n            <a\n              href=\"https://blingcodes.ml\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\"\n            >\n              Blingcodes\n            </a>\n          </li>\n\n\n          <li>\n            <a\n              [routerLink]=\"['/privacy-policy']\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\"\n            >\n             Privacy Policy\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n";
      /***/
    },

    /***/
    "EbUq":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-admin/footer-admin.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EbUq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"block py-4\">\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-4 border-b-1 border-gray-300\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div\n          class=\"text-sm text-gray-600 font-semibold py-1 text-center md:text-left\"\n        >\n          Copyright © {{ date }}\n          <a\n            href=\"https://www.creative-tim.com?ref=na-footer-admin\"\n            class=\"text-gray-600 hover:text-gray-800 text-sm font-semibold py-1\"\n          >\n            Creative Tim\n          </a>\n        </div>\n      </div>\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\n          <li>\n            <a\n              href=\"https://www.creative-tim.com?ref=na-footer-admin\"\n              class=\"text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3\"\n            >\n              Creative Tim\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-admin\"\n              class=\"text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3\"\n            >\n              About Us\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"http://blog.creative-tim.com?ref=na-footer-admin\"\n              class=\"text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3\"\n            >\n              Blog\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/master/LICENSE.md?ref=creativetim\"\n              class=\"text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3\"\n            >\n              MIT License\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n";
      /***/
    },

    /***/
    "H3xT":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/user-dropdown/user-dropdown.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H3xT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"text-gray-600 block\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <div class=\"items-center flex\">\n    <span\n      class=\"w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full\"\n    >\n      <img\n        alt=\"...\"\n        class=\"w-full rounded-full align-middle border-none shadow-lg\"\n        src=\"assets/img/team-1-800x800.jpg\"\n      />\n    </span>\n  </div>\n</a>\n";
      /***/
    },

    /***/
    "HEly":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-stats/card-stats.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HEly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg\"\n>\n  <div class=\"flex-auto p-4\">\n    <div class=\"flex flex-wrap\">\n      <div class=\"relative w-full pr-4 max-w-full flex-grow flex-1\">\n        <h5 class=\"text-gray-500 uppercase font-bold text-xs\">\n          {{ statSubtitle }}\n        </h5>\n        <span class=\"font-semibold text-xl text-gray-800\">\n          {{ statTitle }}\n        </span>\n      </div>\n      <div class=\"relative w-auto pl-4 flex-initial\">\n        <div\n          class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full\"\n          [ngClass]=\"[statIconColor]\"\n        >\n          <i [ngClass]=\"statIconName\"></i>\n        </div>\n      </div>\n    </div>\n    <p class=\"text-sm text-gray-500 mt-4\">\n      <span class=\"mr-2\" [ngClass]=\"statPercentColor\">\n        <i\n          [ngClass]=\"\n            statArrow === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'\n          \"\n        ></i>\n        {{ statPercent }}%\n      </span>\n      <span class=\"whitespace-no-wrap\">{{ statDescripiron }}</span>\n    </p>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "J87Q":
    /*!*********************************************************************!*\
      !*** ./src/app/components/cards/card-stats/card-stats.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CardStatsComponent */

    /***/
    function J87Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardStatsComponent", function () {
        return CardStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-stats.component.html */
      "HEly");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardStatsComponent = /*#__PURE__*/function () {
        function CardStatsComponent() {
          _classCallCheck(this, CardStatsComponent);

          this._statSubtitle = 'Traffic';
          this._statTitle = '350,897';
          this._statArrow = 'up';
          this._statPercent = '3.48';
          this._statPercentColor = 'text-green-500';
          this._statDescripiron = 'Since last month';
          this._statIconName = 'far fa-chart-bar';
          this._statIconColor = 'bg-red-500';
        }

        _createClass(CardStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "statSubtitle",
          get: function get() {
            return this._statSubtitle;
          },
          set: function set(statSubtitle) {
            this._statSubtitle = statSubtitle === undefined ? 'Traffic' : statSubtitle;
          }
        }, {
          key: "statTitle",
          get: function get() {
            return this._statTitle;
          },
          set: function set(statTitle) {
            this._statTitle = statTitle === undefined ? '350,897' : statTitle;
          } // The value must match one of up or down

        }, {
          key: "statArrow",
          get: function get() {
            return this._statArrow;
          },
          set: function set(statArrow) {
            this._statArrow = statArrow !== 'down' && statArrow !== 'up' ? 'up' : statArrow;
          }
        }, {
          key: "statPercent",
          get: function get() {
            return this._statPercent;
          },
          set: function set(statPercent) {
            this._statPercent = statPercent === undefined ? '3.48' : statPercent;
          } // can be any of the text color utilities
          // from tailwindcss

        }, {
          key: "statPercentColor",
          get: function get() {
            return this._statPercentColor;
          },
          set: function set(statPercentColor) {
            this._statPercentColor = statPercentColor === undefined ? 'text-green-500' : statPercentColor;
          }
        }, {
          key: "statDescripiron",
          get: function get() {
            return this._statDescripiron;
          },
          set: function set(statDescripiron) {
            this._statDescripiron = statDescripiron === undefined ? 'Since last month' : statDescripiron;
          }
        }, {
          key: "statIconName",
          get: function get() {
            return this._statIconName;
          },
          set: function set(statIconName) {
            this._statIconName = statIconName === undefined ? 'far fa-chart-bar' : statIconName;
          } // can be any of the background color utilities
          // from tailwindcss

        }, {
          key: "statIconColor",
          get: function get() {
            return this._statIconColor;
          },
          set: function set(statIconColor) {
            this._statIconColor = statIconColor === undefined ? 'bg-red-500' : statIconColor;
          }
        }]);

        return CardStatsComponent;
      }();

      CardStatsComponent.ctorParameters = function () {
        return [];
      };

      CardStatsComponent.propDecorators = {
        statSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statPercent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statPercentColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statDescripiron: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statIconName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        statIconColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      CardStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-stats',
        template: _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardStatsComponent);
      /***/
    },

    /***/
    "J8Ne":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dropdowns/index-dropdown/index-dropdown.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: IndexDropdownComponent */

    /***/
    function J8Ne(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexDropdownComponent", function () {
        return IndexDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index-dropdown.component.html */
      "e8es");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var IndexDropdownComponent = /*#__PURE__*/function () {
        function IndexDropdownComponent() {
          _classCallCheck(this, IndexDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(IndexDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(event) {
            event.preventDefault();

            if (this.dropdownPopoverShow) {
              this.dropdownPopoverShow = false;
            } else {
              this.dropdownPopoverShow = true;
              this.createPoppper();
            }
          }
        }, {
          key: "createPoppper",
          value: function createPoppper() {
            Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
              placement: 'bottom-start'
            });
          }
        }]);

        return IndexDropdownComponent;
      }();

      IndexDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['btnDropdownRef', {
            "static": false
          }]
        }],
        popoverDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['popoverDropdownRef', {
            "static": false
          }]
        }]
      };
      IndexDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-index-dropdown',
        template: _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], IndexDropdownComponent);
      /***/
    },

    /***/
    "JroR":
    /*!******************************************************************!*\
      !*** ./src/app/views/privacy-policy/privacy-policy.component.ts ***!
      \******************************************************************/

    /*! exports provided: PrivacyComponent */

    /***/
    function JroR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
        return PrivacyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_privacy_policy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./privacy-policy.component.html */
      "mvjs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PrivacyComponent = /*#__PURE__*/function () {
        function PrivacyComponent() {
          _classCallCheck(this, PrivacyComponent);
        }

        _createClass(PrivacyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyComponent;
      }();

      PrivacyComponent.ctorParameters = function () {
        return [];
      };

      PrivacyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-privacy',
        template: _raw_loader_privacy_policy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PrivacyComponent);
      /***/
    },

    /***/
    "KKA+":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KKA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\n  class=\"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6\"\n>\n  <div\n    class=\"md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto\"\n  >\n    <!-- Toggler -->\n    <button\n      class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n      type=\"button\"\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\n    >\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <!-- Brand -->\n    <a\n      [routerLink]=\"['/']\"\n      class=\"md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0\"\n    >\n      <span class=\"block sm:hidden\">\n        Tailwind Angular\n      </span>\n      <span class=\"hidden sm:block\">\n        Notus Angular\n      </span>\n    </a>\n    <!-- User -->\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\n      <li class=\"inline-block relative\">\n        <app-notification-dropdown class=\"block\"></app-notification-dropdown>\n      </li>\n      <li class=\"inline-block relative\">\n        <app-user-dropdown class=\"block\"></app-user-dropdown>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div\n      class=\"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded\"\n      [ngClass]=\"collapseShow\"\n    >\n      <!-- Collapse header -->\n      <div\n        class=\"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300\"\n      >\n        <div class=\"flex flex-wrap\">\n          <div class=\"w-6/12\">\n            <a\n              [routerLink]=\"['/']\"\n              class=\"md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0\"\n            >\n              Notus Angular\n            </a>\n          </div>\n          <div class=\"w-6/12 flex justify-end\">\n            <button\n              type=\"button\"\n              class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n              (click)=\"toggleCollapseShow('hidden')\"\n            >\n              <i class=\"fas fa-times\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-6 mb-4 md:hidden\">\n        <div class=\"mb-3 pt-0\">\n          <input\n            type=\"text\"\n            placeholder=\"Search\"\n            class=\"px-3 py-2 h-12 border border-solid border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal\"\n          />\n        </div>\n      </form>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Admin Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/dashboard']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminDashboard=\"routerLinkActive\"\n            [ngClass]=\"\n              adminDashboard.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-gray-800 hover:text-gray-600'\n            \"\n          >\n            <i\n              class=\"fas fa-tv mr-2 text-sm\"\n              [ngClass]=\"\n                adminDashboard.isActive ? 'opacity-75' : 'text-gray-400'\n              \"\n            ></i>\n            Dashboard\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/settings']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminSettings=\"routerLinkActive\"\n            [ngClass]=\"\n              adminSettings.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-gray-800 hover:text-gray-600'\n            \"\n          >\n            <i\n              class=\"fas fa-tools mr-2 text-sm\"\n              [ngClass]=\"\n                adminSettings.isActive ? 'opacity-75' : 'text-gray-400'\n              \"\n            ></i>\n            Settings\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/tables']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminTables=\"routerLinkActive\"\n            [ngClass]=\"\n              adminTables.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-gray-800 hover:text-gray-600'\n            \"\n          >\n            <i\n              class=\"fas fa-table mr-2 text-sm\"\n              [ngClass]=\"adminTables.isActive ? 'opacity-75' : 'text-gray-400'\"\n            ></i>\n            Tables\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/maps']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminMaps=\"routerLinkActive\"\n            [ngClass]=\"\n              adminMaps.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-gray-800 hover:text-gray-600'\n            \"\n          >\n            <i\n              class=\"fas fa-map-marked mr-2 text-sm\"\n              [ngClass]=\"adminMaps.isActive ? 'opacity-75' : 'text-gray-400'\"\n            ></i>\n            Maps\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Auth Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/auth/login']\"\n            class=\"text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-fingerprint text-gray-400 mr-2 text-sm\"></i>\n            Login\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/auth/register']\"\n            class=\"text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-clipboard-list text-gray-400 mr-2 text-sm\"></i>\n            Register\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        No Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/landing']\"\n            class=\"text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-newspaper text-gray-400 mr-2 text-sm\"></i>\n            Landing Page\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/profile']\"\n            class=\"text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-user-circle text-gray-400 mr-2 text-sm\"></i>\n            Profile Page\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Documentation\n      </h6>\n      <!-- Navigation -->\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/colors/notus\"\n            target=\"_blank\"\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fas fa-paint-brush mr-2 text-gray-400 text-base\"></i>\n            Styles\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus\"\n            target=\"_blank\"\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-css3-alt mr-2 text-gray-400 text-base\"></i>\n            CSS Components\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus\"\n            target=\"_blank\"\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-angular mr-2 text-gray-400 text-base\"></i>\n            Angular\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus\"\n            target=\"_blank\"\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-js-square mr-2 text-gray-400 text-base\"></i>\n            Javascript\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus\"\n            target=\"_blank\"\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-react mr-2 text-gray-400 text-base\"></i>\n            NextJS\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus\"\n            target=\"_blank\"\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-react mr-2 text-gray-400 text-base\"></i>\n            React\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus\"\n            target=\"_blank\"\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fas fa-link mr-2 text-gray-400 text-base\"></i>\n            Svelte\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus\"\n            target=\"_blank\"\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-vuejs mr-2 text-gray-400 text-base\"></i>\n            VueJS\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "L/HX":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-page-visits/card-page-visits.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LHX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3 class=\"font-semibold text-base text-gray-800\">\n          Page visits\n        </h3>\n      </div>\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\n        <button\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n        >\n          See all\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead>\n        <tr>\n          <th\n            class=\"px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n          >\n            Page name\n          </th>\n          <th\n            class=\"px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n          >\n            Visitors\n          </th>\n          <th\n            class=\"px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n          >\n            Unique users\n          </th>\n          <th\n            class=\"px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n          >\n            Bounce rate\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            /argon/\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            4,569\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            340\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-arrow-up text-green-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            /argon/index.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            3,985\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            319\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            /argon/charts.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            3,513\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            294\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\n            36,49%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            /argon/tables.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            2,050\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            147\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-arrow-up text-green-500 mr-4\"></i>\n            50,87%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            /argon/profile.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            1,795\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            190\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-red-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "LN9C":
    /*!***********************************************************!*\
      !*** ./src/app/views/auth/register/register.component.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function LN9C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "O/dV");
      /* harmony import */


      var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.scss */
      "Sra/");
      /* harmony import */


      var _services_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/registration.service */
      "rMDH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(traineeRegistrationService, router) {
          _classCallCheck(this, RegisterComponent);

          this.traineeRegistrationService = traineeRegistrationService;
          this.router = router;
          this.hidden = false;
          this.interests = [{
            interest: 'Java',
            isSelected: true
          }, {
            interest: 'Python'
          }, {
            interest: 'C++'
          }, {
            interest: 'Ruby'
          }, {
            interest: 'Angular'
          }, {
            interest: 'Basic Web'
          }, {
            interest: 'i dont know yet'
          }];
          this.isPrivacyAccepted = false;
          this.experiences = [{
            experence: 'No experience',
            description: 'I have never coded before, neither do i have any prfessional experience'
          }, {
            experence: 'Beginner',
            description: 'I know how to use loops, conditional statements, variables, methods'
          }, {
            experence: 'Intermediate',
            description: 'I have a good understanding of object oriented programming and I can develop small applications'
          }, {
            experence: 'Advanced',
            description: 'I was involved in development process for multiple projects'
          }];
          this.model = {};
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "redirect",
          value: function redirect() {
            window.location.href = 'https://paystack.com/pay/blingcodes'; // this.router.navigate(['masterclass/callback']);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.traineeRegistrationService.registerTrainee(this.model).subscribe(function (response) {
              _this.redirect();
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _services_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterComponent);
      /***/
    },

    /***/
    "O/dV":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth/register/register.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ODV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container mx-auto px-4 h-full\">\n  <div class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\">\n\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-8/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-13\">\n            <img  src=\"assets/img/bling2_1.png\" alt=\"...\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0);\">\n\n    </div>\n\n  </div>\n  <div class=\"flex content-center items-center justify-center h-full\">\n\n    <div class=\"w-full lg:w-8/12 px-4\">\n\n      <div class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0\">\n\n        <div class=\"rounded-t mb-0 px-6 py-6\">\n\n          <div class=\"text-center mb-3\">\n            <blockquote class=\"blockquote text-center\">\n              <p class=\"mb-0\">\n                We have created an environment for the fulfillment of your dreams!</p>\n              <footer class=\"blockquote-footer\"> as we're ready to take you on a journey to igniting and accelerating your career as a <cite tle=\"Source Title\"> prospective or practicing software developer.</cite></footer>\n            </blockquote>\n\n            <dl class=\"row\">\n              <dt class=\"col-sm-3\">Training will be held in real-time on :</dt>\n              <dd class=\"col-sm-9\">7th November & 8th November 2020</dd>\n\n              <dt class=\"col-sm-3\">Time</dt>\n              <dd class=\"col-sm-9\">\n                <p>13:00 GMT</p>\n\n              </dd>\n\n            </dl>\n            <div class=\"\">\n\n<div style=\"text-align: center\">\n  <b><p class=\"\"> Agenda for the participants:</p></b><br>\n              <ul>\n                <li>Introduction to Software Developmet Concepts</li>\n                <li>Web Development and Principles</li>\n                <li>Software development tools</li>\n              </ul>\n</div>\n\n            </div>\n            <h6 class=\"text-gray-600 text-lg font-bold\">\n              Register for the Training\n            </h6>\n          </div>\n\n          <hr class=\"mt-6 border-b-1 border-gray-400\" />\n        </div>\n        <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\n\n          <form name=\"f\">\n            <div class=\"relative w-full mb-3\">\n              <label class=\"block uppercase text-gray-700 text-xs font-bold mb-2\" htmlFor=\"grid-password\">\n                Name\n              </label>\n              <input type=\"text\" minlength=\"5\" [(ngModel)]=\"model.fullname\" name=\"fullname\" #fullname=\"ngModel\" required\n                class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n                placeholder=\"Name\" />\n\n              <div *ngIf=\"fullname.invalid && (fullname.dirty || fullname.touched)\" class=\"text-danger-200\">\n\n                <div *ngIf=\"fullname.errors.required\">\n                  Name is required.\n                </div>\n                <div *ngIf=\"fullname.errors.minlength\">\n                  Name must be at least 5 characters long.\n                </div>\n              </div>\n\n              <div class=\"invalid-feedback\" *ngIf=\" fullname.invalid\">\n                <div *ngIf=\"fullname.errors.required\">Fullname is required</div>\n              </div>\n            </div>\n\n            <div class=\"relative w-full mb-3\">\n              <label class=\"block uppercase text-gray-700 text-xs font-bold mb-2\" htmlFor=\"grid-password\">\n                Email\n              </label>\n              <input type=\"email\" [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\" required\n                class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n                placeholder=\"Email\" />\n              <div class=\"invalid-feedback\"\n                *ngIf=\" email.invalid && (email.dirty || email.touched || email.errors.email)\">\n                <div *ngIf=\"email.errors.required\">Email is required</div>\n                <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n              </div>\n            </div>\n            <div class=\"relative w-full mb-3\">\n              <label class=\"block uppercase text-gray-700 text-xs font-bold mb-2\" htmlFor=\"grid-password\">\n                Phone Number\n              </label>\n              <input type=\"text\" name=\"phone\" [(ngModel)]=\"model.phone\" #phone=\"ngModel\"\n                class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n                placeholder=\"Phone\" />\n\n            </div>\n            <div class=\"relative w-full mb-3\">\n              <label class=\"block uppercase text-gray-700 text-xs font-bold mb-2\" htmlFor=\"grid-password\">\n                Country\n              </label>\n              <input type=\"text\" name=\"country\" #country=\"ngModel\" [(ngModel)]=\"model.country\"\n                class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n                placeholder=\"Country\" required />\n              <div class=\"invalid-feedback\" *ngIf=\" country.invalid && (country.dirty || country.touched)\">\n                <div *ngIf=\"country.errors.required\">Country is required</div>\n              </div>\n            </div>\n            <div class=\"relative w-full mb-3\">\n              <label class=\"block uppercase text-gray-700 text-xs font-bold mb-2\" htmlFor=\"grid-password\">\n                City\n              </label>\n              <input type=\"text\" name=\"city\" [(ngModel)]=\"model.city\" #city=\"ngModel\"\n                class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n                placeholder=\"City\" />\n            </div>\n            <div class=\"relative w-full mb-3\">\n              <label class=\"block uppercase text-gray-700 text-xs font-bold mb-2\" htmlFor=\"grid-password\">\n                Interests\n              </label>\n              <select name=\"interest\" [(ngModel)]=\"model.interest\" #interest=\"ngModel\" required\n                class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\">\n                <option *ngFor=\"let item of interests\" [value]=\"item.interest\">{{item.interest}}</option>\n              </select>\n              <div class=\"invalid-feedback\" *ngIf=\" interest.invalid && (interest.dirty || interest.touched)\">\n                <div *ngIf=\"interest.errors.required\">Interest is required</div>\n              </div>\n            </div>\n            <div class=\"relative w-full mb-3\">\n              <label class=\"block uppercase text-gray-700 text-xs font-bold mb-2\" htmlFor=\"grid-password\">\n                Coding Level\n              </label>\n\n              <select name=\"coding_level\" [(ngModel)]=\"model.coding_level\" #coding_level=\"ngModel\" required\n                class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\">\n                <option *ngFor=\"let item of experiences\" [value]=\"item.experence\">{{item.experence}}</option>\n              </select>\n              <div class=\"invalid-feedback\"\n                *ngIf=\" coding_level.invalid && (coding_level.dirty || coding_level.touched)\">\n                <div *ngIf=\"coding_level.errors.required\">Experience Level is required</div>\n              </div>\n              <!-- <optgroup> -->\n              <!-- <option *ngFor=\"let experience of experiences\" [value]=\"experience.experence\">\n                  <p>{{experience.experence}}</p>\n                  <p>{{experience.description}}</p><br>\n                </option><br> -->\n\n              <!-- </optgroup> -->\n\n\n            </div>\n\n            <div>\n              <label class=\"inline-flex items-center cursor-pointer\">\n                <input id=\"customCheckLogin\" type=\"checkbox\" required name=\"privacy_checked\" #privacy_checked=\"ngModel\"\n                  [(ngModel)]=\"model.privacy_checked\"\n                  class=\"form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150\" />\n                <span class=\"ml-2 text-sm font-semibold text-gray-700\">\n                  I agree with the\n                  <a [routerLink]=\"['/privacy-policy']\" class=\"text-red-600\">\n                    Privacy Policy\n                  </a>\n                </span>\n              </label>\n              <div *ngIf=\" privacy_checked.invalid && (privacy_checked.dirty || privacy_checked.touched)\"\n                class=\"invalid-feedback\">Accept Ts & Cs is required\n              </div>\n            </div>\n\n            <div class=\"text-center mt-6\">\n              <button [disabled]=\"!model.privacy_checked\" (click)=\"submit()\"\n                class=\"bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150\"\n                type=\"button\">\n                Create Account\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "OWqY":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/terms/terms.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function OWqY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\n<main>\n  <div\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"\n  >\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-75 bg-black\"\n      ></span>\n    </div>\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n            <h1 class=\"text-white font-semibold text-5xl\">\n           Blingcodes Terms and Condititions\n            </h1>\n            <p class=\"mt-4 text-lg text-gray-300\">\n\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0);\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-gray-300 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <section class=\"pb-20 bg-gray-300 -mt-24\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap\">\n\n\n        <div class=\"w-full md:w-12/12 px-4 text-center\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\n          >\n            <div class=\"px-4 py-5 flex-auto\">\n              <div\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400\"\n              >\n                <i class=\"fas fa-retweet\"></i>\n              </div>\n              <h6 class=\"text-l font-semibold\">Terms and Conditions</h6>\n              <div class=\"mt-2 mb-4 text-black-600\">\n                <p>INDIVIDUAL TERMS OF USE</p>\n                <p>Business Terms of Use</p>\n                <p>Effective Date: October,22nd 2020 (v. 1.0)</p>\n                <p>Welcome to Blingcodes! Our mission is creating progress through technology that lifts the human condition, which we are Accomplished by building an ecosystem for people to learn, teach, and connect specifically about programming. When you visit, view, use, or access our website Blingcodes.ml and any applicable subdomains thereof, or any applications, mobile applications, functionalities, content, materials, or other online services provided by Blingcodes(collectively, the &ldquo;Platform&rdquo;), whether as a guest or a registered user, you&rsquo;re agreeing to the following terms and conditions, so please take a few minutes to read over the Terms of Use below.</p>\n\n                <p>TABLE OF CONTENTS</p>\n                <ol>\n                <li>INTRODUCTION</li>\n                <li>PRIVACY POLICY</li>\n                <li>PLATFORM ACCESS AND ACCOUNT REGISTRATION</li>\n                <li>BLINGCODES PAYMENT PLANS</li>\n                <li>PROPRIETARY MATERIALS</li>\n                <li>CONFIDENTIALITY</li>\n                <li>USER CONTENT</li>\n                <li>FEEDBACK</li>\n                <li>&ldquo;DOs&rdquo; and &ldquo;DON&rsquo;Ts&rdquo;</li>\n                <li>REPRESENTATION, WARRANTIES, AND COVENANTS</li>\n                <li>TERMINATION; CANCELLATION POLICY</li>\n                <li>INDEMNIFICATION</li>\n                <li>NO WARRANTY; LIMITATIONS ON LIABILITY</li>\n                <li>CHANGES TO TERMS OR THE PLATFORM</li>\n                <li>ADDITIONAL TERMS</li>\n                <li>GENERAL</li>\n                </ol>\n\n\n                <p>DOWNLOAD BUSINESS TERMS OF USE</p>\n                <ol>\n                <li>INTRODUCTION</li>\n                </ol>\n                <p>These Terms of Use (&ldquo;Terms of Use&rdquo;) including those additional terms outlined in Section 15 below as may be amended from time to time, together with any documents, policies, or terms they incorporate by reference (collectively, the &ldquo;Terms&rdquo;) are entered into by and between you and Blingcodes (&ldquo;Blingcodes&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;). For purposes of these Terms, &ldquo;you&rdquo; includes, individually and collectively, any individual you (the user or the user&rsquo;s entity or organization) permit to visit, view, use, or access the Platform under your Plan. To the extent that you have entered into another written agreement with Blingcodes that contains terms that directly conflict with any of these Terms, then the conflicted terms set forth in such other agreement will control.</p>\n                <p>You acknowledge and agree that by (i) visiting, viewing, using, or accessing the Platform, (ii) clicking &ldquo;Agree&rdquo;, &ldquo;Purchase&rdquo;, &ldquo;Submit&rdquo;, or similar links, or (iii) signing or confirming a Sales Order or other agreement incorporating these Terms, that you have read, understand, and agree to be bound by these Terms, irrespective of whether you are a guest or a registered user of the Platform. IF YOU DO NOT AGREE TO THESE TERMS, THEN YOU MAY NOT ACCESS OR USE THE PLATFORM. BLINGCODES&rsquo;S ALLOWANCE OF YOUR USE AND ACCESS TO THE PLATFORM IS EXPRESSLY CONDITIONED UPON YOUR ASSENT TO ALL OF THE TERMS AND CONDITIONS OF THESE TERMS.</p>\n                <ol>\n                <li>PRIVACY POLICY</li>\n                </ol>\n                <p>Your privacy is important to us, and we are committed to protecting your personal information. Any personal information submitted in connection with your use of the Platform is subject to our privacy policy found at http://www.blingcodes.ml/privacy (the &ldquo;Privacy Policy&rdquo;), which is hereby incorporated by this reference. We will use information about you that we obtain either directly from you or that we obtain by nature of your use of the Platform in accordance with our Privacy Policy solely in furtherance of providing services to you and improving the Platform.</p>\n                <ol>\n                <li>PLATFORM ACCESS AND ACCOUNT REGISTRATION</li>\n                </ol>\n                <p>To access the Platform, you may be asked to provide certain information to help us create and maintain a Blingcodes account for you. As such, it is a condition of your use of the Platform that all information you provide is correct, current, and complete. You agree that all information you provide is governed by our Privacy Policy and you consent to all actions we take with respect to your information consistent with our Privacy Policy.</p>\n                <p>Except as expressly provided herein, you may not transfer your account to any other person and you may not use anyone else&rsquo;s account at any time. In cases where you have nevertheless authorized or registered another person to use your account or Plan, or where you have acted negligently in safeguarding your account as set forth above, you agree you are fully responsible for (i) the acts and omissions of such person accessing the Platform via your account, (ii) controlling the person&rsquo;s access to and use of the Platform, and (iii) the consequences of any use or misuse by such person(s).</p>\n                <ol>\n                <li>BLINGCODES PAYMENT PLANS</li>\n                </ol>\n                <p>We may at one time offer or demand charges which could be periodic or one time based on several services we will be rendering at a specific point in time.</p>\n                <ol>\n                <li>PROPRIETARY MATERIALS</li>\n                </ol>\n                <p>(a) Use of Blingcodes&rsquo;s Proprietary Materials. The Platform contains copyrighted materials, trademarks, proprietary and confidential information, and intellectual property of Blingcodes and licensors of Blingcodes (collectively, &ldquo;Proprietary Materials&rdquo;), including without limitation source code, video, text, software, photos, graphics, images, music, and sound. You agree not to modify, publish, transmit, participate in the transfer or sale of, create derivative works of, or in any way exploit, in whole or in part, any Proprietary Materials. Proprietary Materials may only be accessed through the Platform, and not by or from any other site or means. The right of access to the Platform does not grant to you any right to download or store any Proprietary Materials in any medium, other than (i) that downloadable content that may be provided in connection with your Plan for certain training courses, including exercise files, course slides, and sample code, (ii) files that are automatically cached by your web browser for display purposes, and (iii) if we provide desktop, mobile, or other applications for download, a single copy of such application for your computer or mobile device solely for your own, personal use, provided you agree to be bound by these Terms and the end user license agreement below (collectively, the &ldquo;Authorized Downloadable Materials&rdquo;). Authorized Downloadable Materials are held by you pursuant to a limited revocable license only, and are subject to all restrictions described herein, including the prohibition on further transfer, sale, creation of derivative works, or exploitation in any manner.</p>\n                <p>(b) End-user License Agreement. Blingcodes grants to you a non-exclusive license for the use and installation of the Authorized Downloadable Materials subject to all the terms and conditions as set forth in the Terms. This license governs any and all software upgrades or additional features provided by Pluralsight that would replace or supplement the original installed version of the Authorized Downloadable Materials, unless those other upgrades or features are covered under a separate license, in which case those terms govern.</p>\n                <p>(c) Reservation of Rights. Blingcodes reserves all intellectual property rights to the Proprietary Materials, other than as specifically granted under the applicable license granted you under these Terms. No posting, copying, transmission, retransmission, distribution, redistribution, publication, republication, decompilation, disassembling, reverse engineering, or otherwise reproducing, storing, transmitting, modifying, or commercially exploiting any Proprietary Materials in any form or by any means, for any purpose, is permitted without our express written permission.</p>\n                <p>(d) Pluralsight Copyright and Marks. The entire Platform is protected by copyright. Complying with all applicable copyright laws is your responsibility. &ldquo;Blingcodes\" and other Blingcodes marks and logos are service marks and trademarks of Blingcodes.</p>\n                <p>(e) Violation of Copyright or Intellectual Property Laws. We respect the intellectual property of others, and we ask our users to do the same. We may, in appropriate circumstances and at our sole discretion, remove or disable access to any materials on the Platform that we believe (or are notified) may infringe on the rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement or otherwise infringes on your intellectual property rights, please report it to us promptly by way of the procedures that we maintain at http://www.blingcodes.ml/copyright-procedure.</p>\n                <ol>\n                <li>CONFIDENTIALITY</li>\n                </ol>\n                <p>(a) Confidential Information. &ldquo;Confidential Information&rdquo; means all information which is disclosed to or obtained by one party (whether directly or indirectly) from the other, including the Proprietary Materials, and all information relating to that other&rsquo;s business, operations, systems, processes, products, trade secrets, know-how, contracts, finances, plans, strategies or current, former or prospective clients, customers, partners or suppliers (together with copies made of any of the above) whether or not such information is marked as being confidential, but excluding information which: (i) is available to the public other than because of any breach of these Terms; (ii) is, when it is supplied, already known to whoever it is disclosed to in circumstances in which they are not prevented from disclosing it to others; (iii) is independently obtained by whoever it is disclosed to in circumstances in which they are not prevented from disclosing it to others; or (iv) is developed independently of and without reference to any Confidential Information provided.</p>\n                <p>(b) Use of Confidential Information. Blingcodes agrees to use your Confidential Information only for the purpose of performing its obligations under these Terms.</p>\n                <ol>\n                <li>USER CONTENT</li>\n                </ol>\n                <p>(a) The Platform may provide you with the ability to upload, post, submit, publish, or transmit information to the Platform, other users, or to third parties (&ldquo;User Content&rdquo;).</p>\n                <p>(i) Unless otherwise noted, all User Content you submit to the Platform, to third parties, or that is otherwise made available to Blingcodes will be considered confidential and proprietary and will be made available only to individuals or third parties that you authorize to access it via the Platform, API, or other means of transmission.</p>\n                <p>(ii) To the extent that you provide any User Content, you represent and warrant that (a) you have all necessary rights, licenses and/or clearances to provide such User Content as provided above, (b) such User Content is accurate and reasonably complete, (c) as between you and Blingcodes, you are responsible for the payment of third-party fees, if any, related to the provision and use of such User Content, (d) such User Content does not and will not infringe or misappropriate any third-party rights or constitute a fraudulent statement or misrepresentation or unfair business practices, (e) you are responsible for any User Content you upload or provide to the Platform and for complying with applicable laws relating thereto, including export control regulations, and (f) you agree to comply with all applicable rules regarding online conduct and acceptable content we may post on the Platform from time to time, including those set forth in Section 9 below.</p>\n                <p>(iii) User Content that is submitted within certain areas of the Platform, such publicly-available channels or blog posts, will be considered non-confidential and non-proprietary, and by so doing, you hereby grant us and our affiliates and service providers, and each other and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material.</p>\n                <p>(b) Monitoring and Enforcement. We have the right to:</p>\n                <p>(i) remove or refuse to post any User Content for any or no reason in our sole discretion;</p>\n                <p>(ii) take any action with respect to any User Content that we deem necessary or appropriate in our sole discretion, including if we believe that such User Content violates these Terms, infringes any intellectual property right or other right of any person or entity, threatens the personal safety of users of the Platform or the public, or could create risk or liability for Pluralsight;</p>\n                <p>(iii) disclose your identity or other information about you to any third party who claims that material posted by you violates their rights, including their intellectual property rights or their right to privacy;</p>\n                <p>(iv) take appropriate legal action, including without limitation referral to law enforcement for any illegal or unauthorized use of the Platform; and</p>\n                <p>(v) terminate or suspend your access to all or part of the Platform for any violation of these Terms.</p>\n                <p>(c) Notwithstanding anything to the contrary, we have no obligation to review any User Content or materials before they are posted on the Platform, and we cannot ensure prompt removal of objectionable material after it has been posted. Accordingly, we assume no liability for any action or inaction regarding transmissions, communications, or content provided by any user or third party, and we have no liability or responsibility to anyone for performance or nonperformance of the activities described in this Section.</p>\n                <ol>\n                <li>FEEDBACK</li>\n                </ol>\n                <p>We welcome and encourage you to provide feedback, comments, and suggestions for improvements to the Platform. You acknowledge and agree that any and all feedback provided by way of the Platform or otherwise will be the sole and exclusive property of Blingcodes, and you hereby irrevocably assign to Blingcodes and agree to irrevocably assign to Blingcodes all of your right, title, and interest in and to all feedback, including without limitation all worldwide patent rights, copyright rights, trade secret rights, and other proprietary or intellectual property rights therein. At our request and expense, you will execute documents and take such further acts as we may reasonably request to assist Blingcodes to acquire, perfect, and maintain its intellectual property rights and other legal protections for the feedback.</p>\n                <ol>\n                <li>BLINGCODES &ldquo;DOs&rdquo; and &ldquo;DON&rsquo;Ts&rdquo;</li>\n                </ol>\n                <p>As a condition of using the Platform, you agree to adhere and abide to the following DOs and DON&rsquo;Ts.</p>\n                <p>(a) DOs (Your Obligations). You acknowledge and agree that you will:</p>\n                <p>(i) comply with all applicable federal, state, local, or international law or regulations (including without limitation any laws regarding copyright, intellectual property, privacy and personal identity, or the export of data or software to and from the U.S. or other countries);</p>\n                <p>(ii) provide true and accurate information to us and keep it updated;</p>\n                <p>(iii) use all portions on the Platform in a respectful manner; and</p>\n                <p>(iv) exit from your account at the end of each session or use of the Platform.</p>\n                <p>(b) DON&rsquo;Ts (Prohibited Conduct). You acknowledge and agree that you will not:</p>\n                <p>(i) reproduce, redistribute, transmit, assign, sell, broadcast, rent, share, lend, modify, adapt, edit, create derivative works of, license, capture, download, save, upload, print, or otherwise transfer or retain information or content available on the Platform other than with regard to Authorized Downloadable Materials, subject to the limited permissions set forth herein;</p>\n                <p>(ii) manually or systematically harvest, scrape, collect or otherwise extract information or data contained on the Platform, other than permitted use of Authorized Downloadable Materials or temporary storage of video materials for offline viewing (if permitted by your Plan).</p>\n                <p>(iii) permit or provide others access to the Platform;</p>\n                <p>(iv) impersonate or attempt to impersonate Blingcodes, a Blingcodes employee, another user, or any other person or entity (including without limitation by using e-mail addresses or account information associated with any of the foregoing) or provide incorrect or knowingly false information;</p>\n                <p>(v) remove or modify any copyright, trademark, legal notices, or other proprietary notations from the Proprietary Materials or any other content available on the Platform;</p>\n                <p>(vi) violate or attempt to violate the Platform&rsquo;s security mechanisms, attempt to gain unauthorized access to the Platform or assist others to do so, or otherwise breach the security of the Platform or corrupt the Platform in any way;</p>\n                <p>(vii) co-brand or frame the Platform or establish a link in such a way as to suggest any form or association, approval, or endorsement on our part, without the prior express written permission of an authorized representative of Blingcodes;</p>\n                <p>(viii) use any portion of the Platform to aid in transmitting, or procure the sending of, any advertising or promotional material, including any &ldquo;junk mail&rdquo;, &ldquo;chain letter&rdquo;, or &ldquo;spam&rdquo; or any other similar solicitation;</p>\n                <p>(ix) post to any portion of the Platform any inappropriate, offensive, racist, hateful, sexist, pornographic, false, misleading, infringing, defamatory, or libelous content;</p>\n                <p>(x) use the Platform or its contents (including User Content) to recruit, solicit, or contact in any form other users or potential users for employment or contracting for a business not affiliated with us without the prior express written permission of an authorized representative of Pluralsight;</p>\n                <p>(xi) use or attempt to use the Platform to store or transmit software viruses, worms, time bombs, Trojan horses, or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software, hardware, or telecommunications equipment;</p>\n                <p>(xii) engage in any conduct that restricts or inhibits anyone&rsquo;s use or enjoyment of the Platform, or which, as determined by us, may harm us or users of the Platform or expose them to liability; and/or</p>\n                <p>(xiii) use the Platform in any manner that could disable, overburden, damage, or impair the Platform, interfere with any other party&rsquo;s use of the Platform (including their ability to engage in real time activities through the Platform), or otherwise attempt to interfere with the proper working of the Platform.</p>\n                <p>(c) Restricted Use of Platform. We reserve the right to monitor use of the Platform and to suspend, revoke, deny, disable, or terminate your access or the access of any of your users if you or they violate any provisions of these Terms (including, but not limited to the DOs and DON&rsquo;Ts above) or if your or their usage behavior exceeds reasonable limits, as determined in our sole discretion.</p>\n                <ol>\n                <li>REPRESENTATION, WARRANTIES, AND COVENANTS</li>\n                </ol>\n                <p>(a) Your Representations and Warranties. You represent and warrant that:</p>\n                <p>(i) You are over the age of 15 as all portions of the Platform are intended for only individuals over 15. If you are under 15 years of age, you may not register for an account or otherwise use the Platform;</p>\n                <p>(ii) You are solely responsible for all service, telephony, data charges, and other fees and costs associated with your access to and use of the Platform, including without limitation maintaining all internet, browser software and extensions, computer hardware, telephone, and other equipment required for such access.</p>\n                <p>(b) Authority. You and Blingcodes each represent, warrant, and covenant that it has the full power and authority to: (i) enter into an agreement subject to these Terms; (ii) perform its obligations hereunder, and that its performance hereunder does not conflict with, limit, or be contrary to any other agreement; (iii) and that by so doing, it does not violate any applicable laws or any contractual relationship.</p>\n                <p>(c) Blingcodes Intellectual Property. We represent, warrant, and covenant that: (i) we have and will have all rights, titles, licenses, intellectual property, permissions and approvals necessary in connection with our performance under these Terms to grant you rights granted hereunder; and (ii) neither the Platform (including the Proprietary Materials), nor the provision or utilization thereof as contemplated under these Terms, will infringe, violate, trespass or in any manner contravene or breach or constitute the unauthorized use or misappropriation of any intellectual property of any third party.</p>\n                <p>(d) Reliance and Functionality. Blingcodes does not warrant that the content or functions of the Platform will meet your requirements or that the operation of the Platform will be uninterrupted or error free. The content and materials presented on or through the Platform is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from or related to any reliance placed on our materials by you, your users, or any other visitor to the Platform, or by anyone who may be informed of any of its contents. The Platform may include content provided by third parties, including materials provided by other users, bloggers, or third-party licensors, syndicators, aggregators, and reporting services. All statements and opinions expressed in these materials, and all articles and responses to questions and other content, other than the content provided by Blingcodes,are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of Blingcodes. We are not responsible or liable to you or any third party, for the content or accuracy of any materials provided by any third parties, and use of any services provided by third parties is subject to their policies and at your own risk.</p>\n                <p>(e) Availability of Platform. You recognize that the traffic of data through the Internet may cause delays during your use of or access to the Platform, and accordingly, you agree not to hold us liable for delays that are ordinary in the course of Internet use. You further acknowledge and accept that the Platform may not be available on a continual 24-hour basis due to such delays, delays caused by our upgrading, modification, or standard maintenance of the Platform, or any other delays outside of our control.</p>\n                <ol>\n                <li>TERMINATION; CANCELLATION POLICY</li>\n                </ol>\n                <p>(a) Blingcode's Rights of Termination. You agree that we may suspend or deactivate your account or terminate your Plan if we believe that you have (a) breached these Terms; (b) infringed the intellectual property rights of a third party; (c) posted, uploaded or transmitted unauthorized User Content; or (d) violated or acted inconsistently with these Terms, our Privacy Policy, or any other applicable policies. You agree that any such suspension, deactivation or termination for the foregoing reasons may be effected without prior notice to you and that Blingcodes will not be liable to you or any third party for any deactivation of your account or termination of your Plan.</p>\n                <p>(b) Customer&rsquo;s Rights of Termination.</p>\n                <p>(i) For Cause. Either the business that purchased the Plan or Blingcodes may terminate the Plan or any Sales Order prior to its expiration if the other party breaches these Terms and fails to cure said breach within thirty (30) days after receipt of written notice thereof. Except for instances arising from Blingcodes&rsquo;s uncured breach, all fees or charges related to your Plan are non-refundable and all unpaid fees are due and payable immediately upon termination.</p>\n                <p>(ii) For Convenience. Unless otherwise specifically stated in terms specific to other products or Plans you purchase, a Plan may be terminated for convenience by sending written notice to Blingcodes at least thirty (30) days prior to the expiration of the then-current Term; however, in the event of any termination for convenience all fees paid are completely non-refundable and any fees unpaid at the time of such termination for convenience shall remain due and payable. For avoidance of doubt, in the event that the Sales Order is for a multiple year Term, any termination under this section will only be permitted at the end of that Term. With respect to any Term still in effect as of the date of such termination for convenience, and upon your request, your Plan will remain active to the end of your then-current Term to the extent your fee(s) have been paid; provided that these Terms will continue in effect and govern such Term until its expiration or earlier termination for cause. All termination requests made pursuant to this Section 11(b)(ii) must be emailed to manage-subscription@blingcodes.ml no later than thirty (30) days in advance of the expiration of the then-current Term.</p>\n                <p>(iii) No Refunds. Refunds will not be given if you cancel your Plan or delete your account prior to the end of your Term.</p>\n                <p>(c) You acknowledge and agree that Blingcodes may retain and store your information on Pluralsight&rsquo;s systems for archival purposes notwithstanding any termination or cancellation of your account or Plan.</p>\n                <ol>\n                <li>INDEMNIFICATION</li>\n                </ol>\n                <p>(a) Indemnification. You agree to defend, indemnify and hold harmless Blingcodes, its directors, employees, licensors, independent contractors, providers, subsidiaries, and affiliates, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses or fees (including reasonable attorneys&rsquo; fees) (hereinafter, &ldquo;Claims&rdquo;) arising out of or relating to : (i) your violation of these Terms; (ii) any information you post to the Platform; (iii) any use by you of the Platform&rsquo;s material, content, services, or products other than as expressly authorized in these Terms; or (iv) your use of any information obtained from the Platform.</p>\n                <p>(b) Indemnification Procedure. You agree to cooperate as fully as reasonably required in the defense of any Claims, including asserting any available defenses. We reserve the right, at our own expense, to assume the exclusive defense and control of any Claims or matter otherwise subject to indemnification by you and you may not in any event settle any Claims without our prior written consent.</p>\n                <ol>\n                <li>NO WARRANTY; LIMITATIONS ON LIABILITY</li>\n                </ol>\n                <p>(a) No Warranty. EXCEPT FOR THOSE WARRANTIES OUTLINED HEREIN, THE PLATFORM IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESSED OR IMPLIED. NEITHER BLINGCODES NOR ANY PERSON OR ENTITY ASSOCIATED WITH BLINGCODES MAKES ANY PROMISE, WARRANTY, OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE PLATFORM. WITHOUT LIMITING THE FOREGOING, NEITHER BLINGCODES NOR ANY PERSON OR ENTITY ASSOCIATED WITH BLINGCODES PROMISES, REPRESENTS OR WARRANTS THAT THE PLATFORM OR CONTENT OBTAINED THROUGH THE PLATFORM OR ANY PORTION THEREOF WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE PLATFORM OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SITE OR ITS CONTENT OR MATERIALS WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS. BLINGCODES HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON- INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE.</p>\n                <p>(b) Limitation on Liability. IN NO EVENT WILL BLINGCODES, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE TO YOU, ANY OF YOUR USERS, OR ANY THIRD PARTY WITH RESPECT TO THE PLATFORM OR THE SUBJECT MATTER OF THESE TERMS UNDER ANY CONTRACT, NEGLIGENCE, TORT, STRICT LIABILITY, OR OTHER LEGAL OR EQUITABLE THEORY, EVEN IF FORESEEABLE, FOR: (i) ANY AMOUNT IN THE AGGREGATE IN EXCESS OF THE GREATER OF THE AMOUNT YOU HAVE PAID TO BLINGCODES FOR THE PLATFORM IN THE THREE (3) MONTHS IMMEDIATELY PRIOR TO LIABILITY ARISING; (ii) FOR ANY SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER, INCLUDING WITHOUT LIMITATION LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS, LOSS OF ANTICIPATED SAVINGS, LOSS OF USE, OR LOSS OF GOODWILL; (iii) USER CONTENT OR DATA LOSS OR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; (iv) FOR ANY MATTER BEYOND OUR REASONABLE CONTROL; OR (v) FOR ANY ACTIONS OF, OR SERVICES PROVIDED BY, THIRD-PARTY SERVICE PROVIDERS OR INDEPENDENT CONTRACTORS (INCLUDING MENTORS) PROVIDING SERVICES ON BEHALF OF BLINGCODES OR VIA THE PLATFORM.</p>\n                <p>THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>\n                <ol>\n                <li>CHANGES TO TERMS OR THE PLATFORM</li>\n                </ol>\n                <p>(a) Changes to these Terms. We reserve the right to change or modify these Terms, our Privacy Policy, or any terms they incorporate by reference in our sole discretion and at any time. Any such change or modification will be effective immediately upon posting to the Platform; however, We will take reasonable steps to notify you of any changes or modifications, but you agree to review the Platform periodically to be aware of any changes or modifications. Notwithstanding anything to the contrary, your continued use of the Platform and any other Blingcodes- provided services will be deemed your conclusive acceptance of all such changed or modified terms and conditions.</p>\n                <p>(b) Changes to the Platform. Blingcodes may at any time, without notice or liability, change or eliminate any content or feature of the Platform or any portion thereof, or restrict the use of any portion of the Platform. Your only right with respect to any dissatisfaction with any service-related change or elimination is to cease use of the Platform. We will not be liable if for any reason all or any part of the Platform is unavailable at any time or for any reason.</p>\n                <ol>\n                <li>ADDITIONAL TERMS</li>\n                </ol>\n                <p>Our Platform and services are made available to you in accordance with these Terms and may also be subject to one or more of the additional terms set forth below (\"Additional Terms\"). If there is any conflict between these Terms of Use and the Additional Terms, then the Additional Terms govern in relation to that specific Plan or service you purchased from Blingcodes. The Additional Terms are subject to change.</p>\n                <p>(b) Blingcodes Live(User Conference Event). In the event you purchase a ticket to Blingcodes's user conference (known as &ldquo;Blingcodes Seasons&rdquo;), you agree that your attendance is governed exclusively by the Blingcodes Seasons: General Terms and Conditions .</p>\n                <p>(c) If you use a mobile device or Blingcodes-provided mobile application to access the Platform, the following additional terms and conditions also apply.</p>\n                <p>(i) You agree that you are solely responsible for all message and data charges that apply to use of your mobile device to access the Platform. All such charges are billed by and payable to your mobile service provider. Please contact your participating mobile service provider for pricing plans, participation status, and details.</p>\n                <p>(ii) You understand that wireless service may not be available in all areas at all times and may be affected by product, software, coverage, or service changes made by your service provider or otherwise. Additional terms and conditions may apply to your use of our mobile applications based on the type of mobile device that you use.</p>\n                <p>(iii) Your access to or use of the Platform via your mobile device or Blingcodes- provided mobile application confirms your agreement to these terms of use.</p>\n                <p>(c) Additional guidance on using the Platform is available at our online help center as updated from time to time.</p>\n                <ol>\n                <li>GENERAL</li>\n                </ol>\n                <p>(a) Non-Waiver. Failure by Blingcodes to enforce any provision(s) of these Terms will not be construed as a waiver of any provision or right.</p>\n                <p>(b) Severability. If any provision of these Terms is found to be illegal, void, or unenforceable, then that provision will be deemed severable from these Terms and will not affect the validity and enforceability of any remaining provisions of these Terms.</p>\n                <p>(d) Compliance with Legal Requests. Without limiting the foregoing, we have the right to fully cooperate with any valid legal process from a law enforcement authority with jurisdiction that requests or directs us to disclose customer data or other information on the Platform. YOU WAIVE AND HOLD HARMLESS US AND OUR AFFILIATES, LICENSEES, AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY US OR ANY OF THE FOREGOING PARTIES DURING OR AS A RESULT OF ITS INVESTIGATIONS AND FROM ANY ACTIONS TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY EITHER US, SUCH PARTIES, OR LAW ENFORCEMENT AUTHORITIES.</p>\n                <p>(e) Compliance with Applicable Laws. Blingcodes agrees to comply with all applicable laws and regulations, and also with respect to the use and disclosure of your personal information.</p>\n                <p>(f) Your Marks. You agree that we may identify you as a customer of Blingcodes on Blingcodes&rsquo;s website and in other marketing materials. Blingcodes may display your trademarks, service marks, and/or logos in Blingcodes marketing materials or on our Platform in order to identify you as a customer. The foregoing shall be deemed a worldwide, non-exclusive, and irrevocable license to use your name, trademarks, service marks, and logos for this purpose during the Term. You also agree to be referenced in press releases and case studies prepared by Blingcodes. Such license and consent will terminate at the end of your Term.</p>\n                <p>(g) Dispute Resolution. Should any dispute arise with regard to these Terms, the parties agree to first work in good faith to resolve such dispute, and neither party may commence any action with regard to such dispute until thirty (30) days have passed from the time such party has provided written notice to the other party of the nature of such dispute, provided that nothing herein will prevent us from seeking injunctive relief in the event of your actual or threatened breach of any terms of these Terms..</p>\n                <p>(h) Notice. Any notice which may be required to be given under these Terms, will be given: (i) by Blingcodes to you via e-mail to the e-mail address you maintain in your account settings or by notifying you electronically by displaying the notice in the Platform; (ii) by you to us in any commercially reasonable manner, including certified mail, return receipt requested, e-mail, or any other customary means of communication at the applicable mailing address set forth below, as may be updated from time to time. Any notice given otherwise than in accordance with this Section will be deemed ineffective.</p>\n                <p>Email: blingcodes@gmail.com</p>\n                <p>(i) No Agency. Nothing in these Terms will be construed as making either party the partner, joint venture, agent, legal representative, employer, contractor, or employee of the other. Neither Blingcodes nor any other party to these Terms has, or may hold itself out to any third party as having, any authority to make any statements, representations or commitments of any kind, or to take any action that is binding on the other party, except as provided for herein or authorized in writing by the party to be bound.</p>\n                <p>(j) Equitable Relief. You acknowledge that a breach of these Terms may cause us irreparable damage, for which the award of damages would not be adequate compensation. Consequently, you agree that we may institute an action to enjoin you from any and all acts in violation of those provisions, which remedy will be cumulative and not exclusive, and we may seek the entry of an injunction enjoining any breach or threatened breach of those provisions, in addition to any other relief to which we may be entitled at law or in equity.</p>\n                <p>(k) Assignment. We may freely transfer or assign any portion of our rights or delegate our obligations under these Terms. You may not assign or otherwise transfer your rights, obligations, or duties under these Terms, in whole or in part, without our prior written consent, in our sole discretion. Any attempted transfer or assignment of these Terms without the prior written consent of Blingcodes will be null and void ab initio. Notwithstanding the foregoing, these Terms will be binding upon and will inure to the benefit of the permitted successors and assigns of each party to these Terms. For the avoidance of doubt, in the event you assign these Terms in violation of the foregoing, such assignee shall be responsible for compliance with these Terms, including but not limited to payment of any outstanding fees.</p>\n                <p>(l) Miscellaneous. These Terms and any terms that incorporate these Terms by reference, together with each Sales Order, as applicable, constitute the sole and entire agreement between you and Blingcodes with respect to the Platform and supersede all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, with respect to the Platform. The section titles used herein are displayed for convenience only and have no legal effect. Nothing in these Terms confers any third-party beneficiary rights or remedies. The inclusion of your purchase order number on any Sales Order, invoice, or other Blingcodes-provided document is for reference purposes only and is not an acceptance by Blingcodes of your terms or conditions contained therein or elsewhere. The terms on any such purchase order or similar document submitted by you to Blingcodes will have no effect and are hereby rejected. If any dispute should arise between the parties hereto regarding the terms or subject matter of these Terms or the enforcement or breach of such terms, then the party prevailing in such dispute, whether by out-of-court settlement or final judicial determination, will be entitled to recover from the non-prevailing party all costs and expenses of such dispute incurred by such prevailing party, including without limitation reasonable attorneys&rsquo; fees.</p>\n                <p>[END OF TERMS OF USE]</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n    </div>\n  </section>\n\n\n\n\n\n\n</main>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "Pibi":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/admin-navbar/admin-navbar.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pibi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Navbar -->\n<nav\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4\"\n>\n  <div\n    class=\"w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4\"\n  >\n    <!-- Brand -->\n    <a\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\n      href=\"#pablo\"\n      >Dashboard</a\n    >\n    <!-- Form -->\n    <form\n      class=\"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3\"\n    >\n      <div class=\"relative flex w-full flex-wrap items-stretch\">\n        <span\n          class=\"z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3\"\n          ><i class=\"fas fa-search\"></i\n        ></span>\n        <input\n          type=\"text\"\n          placeholder=\"Search here...\"\n          class=\"px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10\"\n        />\n      </div>\n    </form>\n    <!-- User -->\n    <ul class=\"flex-col md:flex-row list-none items-center hidden md:flex\">\n      <app-user-dropdown class=\"block\"></app-user-dropdown>\n    </ul>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "RLAj":
    /*!***************************************************************************!*\
      !*** ./src/app/components/headers/header-stats/header-stats.component.ts ***!
      \***************************************************************************/

    /*! exports provided: HeaderStatsComponent */

    /***/
    function RLAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderStatsComponent", function () {
        return HeaderStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header-stats.component.html */
      "UhXh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderStatsComponent = /*#__PURE__*/function () {
        function HeaderStatsComponent() {
          _classCallCheck(this, HeaderStatsComponent);
        }

        _createClass(HeaderStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderStatsComponent;
      }();

      HeaderStatsComponent.ctorParameters = function () {
        return [];
      };

      HeaderStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header-stats',
        template: _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], HeaderStatsComponent);
      /***/
    },

    /***/
    "RMzx":
    /*!****************************************************!*\
      !*** ./src/app/views/landing/landing.component.ts ***!
      \****************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function RMzx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./landing.component.html */
      "AN84");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent() {
          _classCallCheck(this, LandingComponent);
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingComponent;
      }();

      LandingComponent.ctorParameters = function () {
        return [];
      };

      LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-landing',
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LandingComponent);
      /***/
    },

    /***/
    "RORk":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/index-navbar/index-navbar.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RORk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\n  class=\"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow\">\n  <div class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\">\n    <div class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\">\n      <!-- <a\n        [routerLink]=\"['/']\"\n     class=\"text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase\"\n        href=\"#pablo\"\n      > -->\n      <!-- BLINGCODES -->\n      <div>\n        <img style=\"height: 40px; width: 160px;\" src=\"../../../../assets/img/logo.png\" alt=\"\">\n      </div>\n\n      <!-- </a> -->\n      <button\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\n        type=\"button\" (click)=\"setNavbarOpen()\">\n        <i class=\"fas fa-bars\"></i>\n      </button>\n    </div>\n    <div class=\"lg:flex flex-grow items-center\" [ngClass]=\"{ hidden: !navbarOpen, block: navbarOpen }\"\n      id=\"example-navbar-warning\">\n\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\n        <!-- <li class=\"flex items-center\">\n          <app-index-dropdown class=\"block\"></app-index-dropdown>\n        </li> -->\n        <li class=\"flex items-center\">\n          <a class=\"hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblingcodes.ml\" target=\"_blank\">\n            <i class=\"text-gray-500 fab fa-facebook text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a class=\"hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://twitter.com/home?status=https://blingcodes.ml i just came across an awesome software development academy. you can become a software professional!!\"\n            target=\"_blank\">\n            <i class=\"text-gray-500 fab fa-twitter text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\n          </a>\n        </li>\n\n\n\n        <li class=\"flex items-center\">\n          <button\n            class=\"bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\n            type=\"button\"\n            [routerLink]=\"['/masterclass/register']\"\n            >\n             Apply Now\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Skd6":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: NotificationDropdownComponent */

    /***/
    function Skd6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationDropdownComponent", function () {
        return NotificationDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notification-dropdown.component.html */
      "XqAX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotificationDropdownComponent = /*#__PURE__*/function () {
        function NotificationDropdownComponent() {
          _classCallCheck(this, NotificationDropdownComponent);

          this.dropdownPopoverShow = false;
          this.popper = document.createElement('div'); // toggleDropdown(event) {
          //   event.preventDefault();
          //   if (this.dropdownPopoverShow) {
          //     this.dropdownPopoverShow = false;
          //     this.destroyPopper();
          //   } else {
          //     this.dropdownPopoverShow = true;
          //     this.createPoppper();
          //   }
          // }
          // destroyPopper() {
          //   this.popper.parentNode.removeChild(this.popper);
          // }
          // createPoppper() {
          //   new Popper(this.btnDropdownRef.nativeElement, this.popper, {
          //     placement: "bottom-end",
          //   });
          //   this.btnDropdownRef.nativeElement.parentNode.insertBefore(
          //     this.popper,
          //     this.btnDropdownRef.nativeElement.nextSibling
          //   );
          // }
        }

        _createClass(NotificationDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.popper.innerHTML = "<div class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1\" style=\"min-width:12rem\" #popoverDropdownRef>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Action\n  </a>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Another action\n  </a>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Something else here\n  </a>\n  <div class=\"h-0 my-2 border border-solid border-gray-200\"></div>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Seprated link\n  </a>\n</div>";
          }
        }]);

        return NotificationDropdownComponent;
      }();

      NotificationDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['btnDropdownRef', {
            "static": false
          }]
        }]
      };
      NotificationDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-notification-dropdown',
        template: _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], NotificationDropdownComponent);
      /***/
    },

    /***/
    "Sra/":
    /*!*************************************************************!*\
      !*** ./src/app/views/auth/register/register.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function Sra(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button:disabled,\nbutton[disabled] {\n  border: 1px solid #7e8188;\n  background-color: #cccccc;\n  color: #666666;\n}\n\n.invalid-feedback {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTs7RUFFRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0UsVUFBQTtBQUxGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCxcclxuYnV0dG9uW2Rpc2FibGVkXXtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjN2U4MTg4OztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'angular-dashboard-page';
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppComponent);
      /***/
    },

    /***/
    "TmC4":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/cards/card-bar-chart/card-bar-chart.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CardBarChartComponent */

    /***/
    function TmC4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardBarChartComponent", function () {
        return CardBarChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-bar-chart.component.html */
      "/GnJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);

      var CardBarChartComponent = /*#__PURE__*/function () {
        function CardBarChartComponent() {
          _classCallCheck(this, CardBarChartComponent);
        }

        _createClass(CardBarChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var config = {
              type: 'bar',
              data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: new Date().getFullYear(),
                  backgroundColor: '#ed64a6',
                  borderColor: '#ed64a6',
                  data: [30, 78, 56, 34, 100, 45, 13],
                  fill: false,
                  barThickness: 8
                }, {
                  label: new Date().getFullYear() - 1,
                  fill: false,
                  backgroundColor: '#4c51bf',
                  borderColor: '#4c51bf',
                  data: [27, 68, 86, 74, 10, 4, 87],
                  barThickness: 8
                }]
              },
              options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                  display: false,
                  text: 'Orders Chart'
                },
                tooltips: {
                  mode: 'index',
                  intersect: false
                },
                hover: {
                  mode: 'nearest',
                  intersect: true
                },
                legend: {
                  labels: {
                    fontColor: 'rgba(0,0,0,.4)'
                  },
                  align: 'end',
                  position: 'bottom'
                },
                scales: {
                  xAxes: [{
                    display: false,
                    scaleLabel: {
                      display: true,
                      labelString: 'Month'
                    },
                    gridLines: {
                      borderDash: [2],
                      borderDashOffset: [2],
                      color: 'rgba(33, 37, 41, 0.3)',
                      zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2]
                    }
                  }],
                  yAxes: [{
                    display: true,
                    scaleLabel: {
                      display: false,
                      labelString: 'Value'
                    },
                    gridLines: {
                      borderDash: [2],
                      drawBorder: false,
                      borderDashOffset: [2],
                      color: 'rgba(33, 37, 41, 0.2)',
                      zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2]
                    }
                  }]
                }
              }
            };
            var ctx = document.getElementById('bar-chart');
            ctx = ctx.getContext('2d');
            new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
          }
        }]);

        return CardBarChartComponent;
      }();

      CardBarChartComponent.ctorParameters = function () {
        return [];
      };

      CardBarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-bar-chart',
        template: _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardBarChartComponent);
      /***/
    },

    /***/
    "UIMn":
    /*!***************************************************************************!*\
      !*** ./src/app/components/footers/footer-admin/footer-admin.component.ts ***!
      \***************************************************************************/

    /*! exports provided: FooterAdminComponent */

    /***/
    function UIMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterAdminComponent", function () {
        return FooterAdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer-admin.component.html */
      "EbUq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterAdminComponent = /*#__PURE__*/function () {
        function FooterAdminComponent() {
          _classCallCheck(this, FooterAdminComponent);

          this.date = new Date().getFullYear();
        }

        _createClass(FooterAdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterAdminComponent;
      }();

      FooterAdminComponent.ctorParameters = function () {
        return [];
      };

      FooterAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer-admin',
        template: _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterAdminComponent);
      /***/
    },

    /***/
    "UY35":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dropdowns/table-dropdown/table-dropdown.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: TableDropdownComponent */

    /***/
    function UY35(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableDropdownComponent", function () {
        return TableDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./table-dropdown.component.html */
      "rOy2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import Popper from "popper.js";


      var TableDropdownComponent = /*#__PURE__*/function () {
        function TableDropdownComponent() {
          _classCallCheck(this, TableDropdownComponent);

          this.dropdownPopoverShow = false;
          this.popper = document.createElement('div'); // toggleDropdown(event) {
          //   event.preventDefault();
          //   if (this.dropdownPopoverShow) {
          //     this.dropdownPopoverShow = false;
          //     this.destroyPopper();
          //   } else {
          //     this.dropdownPopoverShow = true;
          //     this.createPoppper();
          //   }
          // }
          // destroyPopper() {
          //   this.popper.parentNode.removeChild(this.popper);
          // }
          // createPoppper() {
          //   new Popper(this.btnDropdownRef.nativeElement, this.popper, {
          //     placement: "bottom-end",
          //   });
          //   this.btnDropdownRef.nativeElement.parentNode.insertBefore(
          //     this.popper,
          //     this.btnDropdownRef.nativeElement.nextSibling
          //   );
          // }
        }

        _createClass(TableDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.popper.style.zIndex = '1';
            this.popper.innerHTML = "<div class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1\" style=\"min-width:12rem\" #popoverDropdownRef>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Action\n  </a>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Another action\n  </a>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Something else here\n  </a>\n  <div class=\"h-0 my-2 border border-solid border-gray-200\"></div>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Seprated link\n  </a>\n</div>";
          }
        }]);

        return TableDropdownComponent;
      }();

      TableDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['btnDropdownRef', {
            "static": false
          }]
        }]
      };
      TableDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-table-dropdown',
        template: _raw_loader_table_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TableDropdownComponent);
      /***/
    },

    /***/
    "UhXh":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/header-stats/header-stats.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UhXh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Header -->\n<div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\n  <div class=\"px-4 md:px-10 mx-auto w-full\">\n    <div>\n      <!-- Card stats -->\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"TRAFFIC\"\n            statTitle=\"350,897\"\n            statArrow=\"up\"\n            statPercent=\"3.48\"\n            statPercentColor=\"text-green-500\"\n            statDescripiron=\"Since last month\"\n            statIconName=\"far fa-chart-bar\"\n            statIconColor=\"bg-red-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"NEW USERS\"\n            statTitle=\"2,356\"\n            statArrow=\"down\"\n            statPercent=\"3.48\"\n            statPercentColor=\"text-red-500\"\n            statDescripiron=\"Since last week\"\n            statIconName=\"fas fa-chart-pie\"\n            statIconColor=\"bg-orange-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"SALES\"\n            statTitle=\"924\"\n            statArrow=\"down\"\n            statPercent=\"1.10\"\n            statPercentColor=\"text-orange-500\"\n            statDescripiron=\"Since yesterday\"\n            statIconName=\"fas fa-users\"\n            statIconColor=\"bg-pink-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"PERFORMANCE\"\n            statTitle=\"49,65%\"\n            statArrow=\"up\"\n            statPercent=\"12\"\n            statPercentColor=\"text-green-500\"\n            statDescripiron=\"Since last month\"\n            statIconName=\"fas fa-percent\"\n            statIconColor=\"bg-green-500\"\n          ></app-card-stats>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Vbwu":
    /*!************************************************!*\
      !*** ./src/app/layouts/auth/auth.component.ts ***!
      \************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function Vbwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth.component.html */
      "dnvD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ctorParameters = function () {
        return [];
      };

      AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AuthComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "W8yq":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/index/index.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function W8yq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-index-navbar></app-index-navbar>\n<section class=\"header relative pt-16 items-center flex h-screen max-h-860-px\">\n  <div class=\"container mx-auto items-center flex flex-wrap\">\n    <div class=\"w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4\">\n      <div class=\"pt-32 sm:pt-0\">\n        <h2 class=\"font-semibold text-4xl text-gray-700\">\n          Kickstart your journey of software development, with Blingcodes software academy.\n\n        </h2>\n        <p class=\"mt-4 text-lg leading-relaxed text-gray-600\">\n          Software development is the bedrock of technology. Technology today stands as the pillars for future advancements. As a result, people are willing to create possibilities and solve problems by building software.\n\nWe aim at educating you from basics and establishing incremental pieces of training known as Seasons.  As each season arrives, the level of complexity also increases.\n        </p>\n        <div class=\"mt-12\">\n          <a [routerLink]=\"['/masterclass/register']\"\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\">\n            Apply Now\n          </a>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <img class=\"absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px\"\n    src=\"assets/img/pattern_react.png\" alt=\"...\" />\n</section>\n\n<section class=\"mt-48 md:mt-40 pb-40 relative bg-gray-200\">\n  <div class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\" style=\"transform: translateZ(0);\">\n    <svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n      version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\">\n      <polygon class=\"text-gray-200 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n  <div class=\"container mx-auto\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32\">\n        <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\">\n          <img alt=\"...\"\n            src=\"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80\"\n            class=\"w-full align-middle rounded-t-lg\" />\n          <blockquote class=\"relative p-8 mb-4\">\n            <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\"\n              class=\"absolute left-0 w-full block h-95-px -top-94-px\">\n              <polygon points=\"-30,95 583,95 583,65\" class=\"text-red-600 fill-current\"></polygon>\n            </svg>\n            <h4 class=\"text-xl font-bold text-white\">\n              Awesome Curriculum Covering\n            </h4>\n            <p class=\"text-md font-light mt-2 text-white\">\n              We have put together a range of topics, carefully selected to grant our trainees knowledge. it doesn't\n              matter if you are a total beginner, you will definitely learn a lot,\n\n            </p>\n          </blockquote>\n        </div>\n      </div>\n\n      <div class=\"w-full md:w-6/12 px-4\">\n        <div class=\"flex flex-wrap\">\n          <div class=\"w-full md:w-6/12 px-4\">\n            <div class=\"relative flex flex-col mt-4\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\">\n                  <i class=\"fas fa-sitemap\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">\n                  Software Development Concepts\n                </h6>\n                <p class=\"mb-4 text-gray-600\">\n                  As a beginner, we will teach you what it means to build fully\n                   workable software from start to finish.\n\n                </p>\n              </div>\n            </div>\n            <div class=\"relative flex flex-col min-w-0\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\">\n                  <i class=\"fas fa-drafting-compass\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">\n                  Frontend Frameworks\n                </h6>\n                <p class=\"mb-4 text-gray-600\">\n\n                  We aim at granting exposure to our trainees on how to create splendid designs for your projects, what tools to use, and what frameworks are available\n                  for front-end applications. Which one should you use and why?\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"w-full md:w-6/12 px-4\">\n            <div class=\"relative flex flex-col min-w-0 mt-4\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\">\n                  <i class=\"fas fa-newspaper\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">Backend Development</h6>\n                <p class=\"mb-4 text-gray-600\">\n\n                  With the panned out curriculum, you will learn about how the term  Full Stack development comes into play and understand what a backend is and why it is needed.  We will be working with codes for each session.\n                </p>\n              </div>\n            </div>\n            <div class=\"relative flex flex-col min-w-0\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\">\n                  <i class=\"fas fa-file-alt\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">\n                  Rest APIs\n                </h6>\n                <p class=\"mb-4 text-gray-600\">\n                  You'll understand what a REST API is and why it is important.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container mx-auto overflow-hidden pb-20\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\n        <div\n          class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\">\n          <i class=\"fas fa-sitemap text-xl\"></i>\n        </div>\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n          Software Development Concepts\n        </h3>\n        <p class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700\">\n\n          How do I create better software, what is the idea behind software development?, how do I turn my big idea into a finished product? These questions often arise while making software. We will make sure these questions are treated adequately\n        </p>\n        <div class=\"block pb-6\">\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            programming\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            code\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            python\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            models\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            functions\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            parameters\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            classes\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2\">\n            constructors\n          </span>\n        </div>\n\n      </div>\n\n      <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto mt-32\">\n\n\n        <!-- <div class=\"relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0\">\n          <img\n            alt=\"...\"\n            src=\"assets/img/component-btn.png\"\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3\"\n          />\n          <img\n            alt=\"...\"\n            src=\"assets/img/component-profile-card.png\"\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px\"\n          />\n          <img\n            alt=\"...\"\n            src=\"assets/img/component-info-card.png\"\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2\"\n          />\n          <img\n            alt=\"...\"\n            src=\"assets/img/component-info-2.png\"\n            class=\"w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px\"\n          />\n          <img\n            alt=\"...\"\n            src=\"assets/img/component-menu.png\"\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px\"\n          />\n          <img\n            alt=\"...\"\n            src=\"assets/img/component-btn-pink.png\"\n            class=\"w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px\"\n          />\n        </div> -->\n      </div>\n    </div>\n\n    <div class=\"flex flex-wrap items-center pt-32\">\n      <div class=\"w-full md:w-6/12 px-4 mr-auto ml-auto mt-32\">\n        <div class=\"justify-center flex flex-wrap relative\">\n          <div class=\"my-4 w-full lg:w-6/12 px-4\">\n\n              <div class=\"bg-red-600 shadow-lg rounded-lg text-center p-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">\n                  Svelte\n                </p>\n              </div>\n\n\n              <div class=\"bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">\n                  ReactJS\n                </p>\n              </div>\n\n\n              <div class=\"bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">\n                  NextJS\n                </p>\n              </div>\n\n          </div>\n          <div class=\"my-4 w-full lg:w-6/12 px-4 lg:mt-16\">\n\n              <div class=\"bg-yellow-500 shadow-lg rounded-lg text-center p-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">\n                  JavaScript\n                </p>\n              </div>\n              <div class=\"bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">\n                  Angular\n                </p>\n              </div>\n              <div class=\"bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8\">\n                <img alt=\"...\" class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg\" />\n                <p class=\"text-lg text-white mt-4 font-semibold\">\n                  Vue.js\n                </p>\n              </div>\n            </div>\n        </div>\n      </div>\n\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\n        <div\n          class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\">\n          <i class=\"fas fa-drafting-compass text-xl\"></i>\n        </div>\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n          Frontend Frameworks\n        </h3>\n        <p class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700\">\n          You will understand what frontend \"frameworks\" are and which is best to start with,  how to use frameworks, and why they are necessary\n\n        </p>\n\n\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container mx-auto px-4 pb-32 pt-48\">\n    <div class=\"items-center flex flex-wrap\">\n      <div class=\"w-full md:w-5/12 ml-auto px-12 md:px-4\">\n        <div class=\"md:pr-12\">\n          <div\n            class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\">\n            <i class=\"fas fa-file-alt text-xl\"></i>\n          </div>\n          <h3 class=\"text-3xl font-semibold\">\n         Backend Development\n          </h3>\n          <p class=\"mt-4 text-lg leading-relaxed text-gray-600\">\n            Backends are one of the most integral parts of any application it contains login that you don't see on web browsers and mobile apps. Instead, the code logic is stored elsewhere. You'll understand the core idea of backend and how to set one up.\n\n\n          </p>\n          <ul class=\"list-none mt-6\">\n            <li class=\"py-2\">\n              <div class=\"flex items-center\">\n                <div>\n                  <span\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3\">\n                    <i class=\"fas fa-fingerprint\"></i>\n                  </span>\n                </div>\n                <div>\n                  <h4 class=\"text-gray-600\">\n                    What is a database and how to configure databases\n                  </h4>\n                </div>\n              </div>\n            </li>\n            <li class=\"py-2\">\n              <div class=\"flex items-center\">\n                <div>\n                  <span\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3\">\n                    <i class=\"fab fa-html5\"></i>\n                  </span>\n                </div>\n                <div>\n                  <h4 class=\"text-gray-600\">\n                    How to write clean codes for your backend applications (APIs)\n                  </h4>\n                </div>\n              </div>\n            </li>\n            <li class=\"py-2\">\n              <div class=\"flex items-center\">\n                <div>\n                  <span\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3\">\n                    <i class=\"far fa-paper-plane\"></i>\n                  </span>\n                </div>\n                <div>\n                  <h4 class=\"text-gray-600\">\n                    What is backend development\n                  </h4>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0\">\n        <img alt=\"...\" class=\"max-w-full rounded-lg shadow-xl\" style=\"\n            transform: scale(1) perspective(1040px) rotateY(-11deg)\n              rotateX(2deg) rotate(2deg);\n          \" src=\"assets/img/documentation.png\" />\n      </div>\n    </div>\n  </div>\n\n\n</section>\n\n\n\n<section class=\"pt-20 pb-48\">\n  <div class=\"container mx-auto px-4\">\n    <div class=\"flex flex-wrap justify-center text-center mb-24\">\n      <div class=\"w-full lg:w-6/12 px-4\">\n        <h2 class=\"text-4xl font-semibold\">Here are our Legends</h2>\n        <p class=\"text-lg leading-relaxed m-4 text-gray-600\">\n          These people have contributed greatly to making blingcodes a reality!\n        </p>\n      </div>\n    </div>\n    <div class=\"flex flex-wrap justify-center\">\n      <div class=\"w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4\">\n        <div class=\"px-6\">\n          <img\n            alt=\"...\"\n            src=\"assets/img/instructor1.jpeg\"\n            class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n          />\n          <div class=\"pt-6 text-center\">\n            <h5 class=\"text-xl font-bold\">Akinwole Adeola</h5>\n            <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\n              Software Engineer | Instructor\n            </p>\n            <div class=\"mt-6\">\n              <button\n                class=\"bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                type=\"button\"\n              ><a href=\"https://twitter.com/ajunior488\">\n                <i class=\"fab fa-twitter\"></i></a>\n              </button>\n\n              <button\n              class=\"bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n              type=\"button\"\n            ><a target=\"_blank\"   href=\"https://ax3cubed.github.io/portfolio\">\n              <i class=\"fab fa-github\"></i></a>\n            </button>\n              <button\n                class=\"bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                type=\"button\"\n              ><a href=\"https://facebook.com/abraham.a.junior2\">\n                <i class=\"fab fa-facebook-f\"></i></a>\n              </button>\n              <button\n              class=\"bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n              type=\"button\"\n            ><a href=\"https://instagram.com/adecodez\">\n              <i class=\"fab fa-instagram\"></i></a>\n            </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n        <div class=\"px-6\">\n          <img\n            alt=\"...\"\n            src=\"assets/img/pessonnel1.png\"\n            class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n          />\n          <div class=\"pt-6 text-center\">\n            <h5 class=\"text-xl font-bold\">Akinkumi Nifemi Betty</h5>\n            <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\n              Marketing Specialist | Management\n            </p>\n            <div class=\"mt-6\">\n              <button\n                class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                type=\"button\"\n              >\n               <a href=\"https://www.instagram.com/niffybetty/\"><i class=\"fab fa-instagram\"></i></a>\n              </button>\n              <button\n              class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n              type=\"button\"\n            >\n             <a href=\"https://twitter.com/bettyniffy\"><i class=\"fab fa-twitter\"></i></a>\n            </button>\n\n              <button\n                class=\"bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                type=\"button\"\n              ><a href=\"https://facebook/com/betty.niffy.9\">\n                <i class=\"fab fa-facebook-f\"></i></a>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n        <div class=\"px-6\">\n          <img\n            alt=\"...\"\n            src=\"assets/img/instructor2.png\"\n            class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n          />\n          <div class=\"pt-6 text-center\">\n            <h5 class=\"text-xl font-bold\">Akomolafe Ayomide</h5>\n            <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\n              UI/UX Designer | Instructor\n            </p>\n            <div class=\"mt-6\">\n              <button\n                class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                type=\"button\"\n              >\n              <a href=\"https://facebook.com/ayomide.akomolafe\">  <i class=\"fab fa-facebook-f\"></i></a>\n              </button>\n              <button\n                class=\"bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                type=\"button\"\n              ><a href=\"https://instagram.com/ayobrands\">\n                <i class=\"fab fa-instagram\"></i></a>\n              </button>\n              <button\n                class=\"bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                type=\"button\"\n              >\n                <i class=\"fab fa-instagram\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n<section class=\"pb-16 bg-gray-300 relative pt-32\">\n  <div class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\" style=\"transform: translateZ(0);\">\n    <svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n      version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\">\n      <polygon class=\"text-gray-300 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n\n  <div class=\"container mx-auto\">\n    <div class=\"flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10\">\n      <div class=\"w-full text-center lg:w-8/12\">\n        <p class=\"text-4xl text-center\">\n          <span role=\"img\" aria-label=\"love\">\n            🤓\n          </span>\n        </p>\n        <h3 class=\"font-semibold text-3xl\">\n         Is there something you would love to tell us? We would be delighted to help.\n\n        </h3>\n\n        <div class=\"sm:block flex flex-col mt-10\">\n          <a [routerLink]=\"['/support']\"\n            target=\"_blank\"\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\">\n          Contact Support\n          </a>\n\n        </div>\n        <div class=\"text-center mt-16\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "Xodl":
    /*!***************************************************************************!*\
      !*** ./src/app/components/navbars/admin-navbar/admin-navbar.component.ts ***!
      \***************************************************************************/

    /*! exports provided: AdminNavbarComponent */

    /***/
    function Xodl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function () {
        return AdminNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-navbar.component.html */
      "Pibi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminNavbarComponent = /*#__PURE__*/function () {
        function AdminNavbarComponent() {
          _classCallCheck(this, AdminNavbarComponent);
        }

        _createClass(AdminNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminNavbarComponent;
      }();

      AdminNavbarComponent.ctorParameters = function () {
        return [];
      };

      AdminNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin-navbar',
        template: _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AdminNavbarComponent);
      /***/
    },

    /***/
    "XqAX":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XqAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"text-gray-600 block py-1 px-3\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <i class=\"fas fa-bell\"></i>\n</a>\n";
      /***/
    },

    /***/
    "YpXG":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-social-traffic/card-social-traffic.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YpXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3 class=\"font-semibold text-base text-gray-800\">\n          Social traffic\n        </h3>\n      </div>\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\n        <button\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n        >\n          See all\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th\n            class=\"px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n          >\n            Referral\n          </th>\n          <th\n            class=\"px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n          >\n            Visitors\n          </th>\n          <th\n            class=\"px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left min-w-140-px\"\n          ></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            Facebook\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            1,480\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">60%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 60%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            Facebook\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            5,480\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">70%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-green-200\"\n                >\n                  <div\n                    style=\"width: 70%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            Google\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            4,807\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">80%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-purple-200\"\n                >\n                  <div\n                    style=\"width: 80%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            Instagram\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            3,678\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">75%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-blue-200\"\n                >\n                  <div\n                    style=\"width: 75%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left\"\n          >\n            twitter\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            2,645\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">30%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-orange-200\"\n                >\n                  <div\n                    style=\"width: 30%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.config */
      "aR35");
      /* harmony import */


      var _model_Trainee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./model/Trainee */
      "dB0c");
      /* harmony import */


      var _services_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/registration.service */
      "rMDH");
      /* harmony import */


      var _views_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/privacy-policy/privacy-policy.component */
      "JroR");
      /* harmony import */


      var _views_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/terms/terms.component */
      "c7lJ");
      /* harmony import */


      var _views_payment_callback_payment_callback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/payment-callback/payment-callback.component */
      "oToU");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layouts/auth/auth.component */
      "Vbwu");
      /* harmony import */


      var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/auth/register/register.component */
      "LN9C");
      /* harmony import */


      var _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./views/index/index.component */
      "AiJS");
      /* harmony import */


      var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./views/landing/landing.component */
      "RMzx");
      /* harmony import */


      var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./views/profile/profile.component */
      "wF9P");
      /* harmony import */


      var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/navbars/admin-navbar/admin-navbar.component */
      "Xodl");
      /* harmony import */


      var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/navbars/auth-navbar/auth-navbar.component */
      "zslb");
      /* harmony import */


      var _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/cards/card-bar-chart/card-bar-chart.component */
      "TmC4");
      /* harmony import */


      var _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/cards/card-line-chart/card-line-chart.component */
      "+Kwz");
      /* harmony import */


      var _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/cards/card-page-visits/card-page-visits.component */
      "3IhM");
      /* harmony import */


      var _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/cards/card-profile/card-profile.component */
      "diaN");
      /* harmony import */


      var _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/cards/card-settings/card-settings.component */
      "vwLF");
      /* harmony import */


      var _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/cards/card-social-traffic/card-social-traffic.component */
      "xud4");
      /* harmony import */


      var _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/cards/card-stats/card-stats.component */
      "J87Q");
      /* harmony import */


      var _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/cards/card-table/card-table.component */
      "uhhN");
      /* harmony import */


      var _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/footers/footer-admin/footer-admin.component */
      "UIMn");
      /* harmony import */


      var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/footers/footer/footer.component */
      "1DoU");
      /* harmony import */


      var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/footers/footer-small/footer-small.component */
      "xlab");
      /* harmony import */


      var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/headers/header-stats/header-stats.component */
      "RLAj");
      /* harmony import */


      var _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/navbars/index-navbar/index-navbar.component */
      "4b2p");
      /* harmony import */


      var _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/maps/map-example/map-example.component */
      "u/sr");
      /* harmony import */


      var _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/dropdowns/index-dropdown/index-dropdown.component */
      "J8Ne");
      /* harmony import */


      var _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/dropdowns/table-dropdown/table-dropdown.component */
      "UY35");
      /* harmony import */


      var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */
      "wcq5");
      /* harmony import */


      var _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/dropdowns/notification-dropdown/notification-dropdown.component */
      "Skd6");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      "zBoC");
      /* harmony import */


      var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/dropdowns/user-dropdown/user-dropdown.component */
      "0slC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3"); // no layouts views
      // components for views and layouts


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_18__["CardBarChartComponent"], _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_19__["CardLineChartComponent"], _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_32__["IndexDropdownComponent"], _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_34__["PagesDropdownComponent"], _components_dropdowns_table_dropdown_table_dropdown_component__WEBPACK_IMPORTED_MODULE_33__["TableDropdownComponent"], _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_35__["NotificationDropdownComponent"], _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_37__["UserDropdownComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_36__["SidebarComponent"], _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_28__["FooterSmallComponent"], _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_26__["FooterAdminComponent"], _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_20__["CardPageVisitsComponent"], _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_21__["CardProfileComponent"], _components_cards_card_settings_card_settings_component__WEBPACK_IMPORTED_MODULE_22__["CardSettingsComponent"], _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_23__["CardSocialTrafficComponent"], _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_24__["CardStatsComponent"], _components_cards_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_25__["CardTableComponent"], _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_29__["HeaderStatsComponent"], _components_maps_map_example_map_example_component__WEBPACK_IMPORTED_MODULE_31__["MapExampleComponent"], _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__["AuthNavbarComponent"], _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_16__["AdminNavbarComponent"], _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_30__["IndexNavbarComponent"], _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"], _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _views_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"], _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"], _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _views_payment_callback_payment_callback_component__WEBPACK_IMPORTED_MODULE_6__["PaymentCallbackComponent"], _views_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__["TermsComponent"], _views_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_38__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"]],
        providers: [_services_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"], _model_Trainee__WEBPACK_IMPORTED_MODULE_2__["Trainee"], _app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "aR35":
    /*!*******************************!*\
      !*** ./src/app/app.config.ts ***!
      \*******************************/

    /*! exports provided: AppConfig */

    /***/
    function aR35(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConfig", function () {
        return AppConfig;
      });

      var AppConfig = function AppConfig() {
        _classCallCheck(this, AppConfig);
      };

      AppConfig.apiEndpoint = 'http://localhost:81/blingcodes-backend/public/api/';
      AppConfig.serverApiEndpoint = 'https://api.blingcodes.ml/public/api/';
      ;
      /***/
    },

    /***/
    "c7lJ":
    /*!************************************************!*\
      !*** ./src/app/views/terms/terms.component.ts ***!
      \************************************************/

    /*! exports provided: TermsComponent */

    /***/
    function c7lJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
        return TermsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./terms.component.html */
      "OWqY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TermsComponent = /*#__PURE__*/function () {
        function TermsComponent() {
          _classCallCheck(this, TermsComponent);
        }

        _createClass(TermsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermsComponent;
      }();

      TermsComponent.ctorParameters = function () {
        return [];
      };

      TermsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-terms',
        template: _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TermsComponent);
      /***/
    },

    /***/
    "c9Li":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-profile/card-profile.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function c9Li(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16\"\n>\n  <div class=\"px-6\">\n    <div class=\"flex flex-wrap justify-center\">\n      <div class=\"w-full px-4 flex justify-center\">\n        <div class=\"relative\">\n          <img\n            alt=\"...\"\n            src=\"assets/img/team-2-800x800.jpg\"\n            class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n          />\n        </div>\n      </div>\n      <div class=\"w-full px-4 text-center mt-20\">\n        <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\n          <div class=\"mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-gray-700\"\n            >\n              22\n            </span>\n            <span class=\"text-sm text-gray-500\">Friends</span>\n          </div>\n          <div class=\"mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-gray-700\"\n            >\n              10\n            </span>\n            <span class=\"text-sm text-gray-500\">Photos</span>\n          </div>\n          <div class=\"lg:mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-gray-700\"\n            >\n              89\n            </span>\n            <span class=\"text-sm text-gray-500\">Comments</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center mt-12\">\n      <h3 class=\"text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2\">\n        Jenna Stones\n      </h3>\n      <div\n        class=\"text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase\"\n      >\n        <i class=\"fas fa-map-marker-alt mr-2 text-lg text-gray-500\"></i>\n        Los Angeles, California\n      </div>\n      <div class=\"mb-2 text-gray-700 mt-10\">\n        <i class=\"fas fa-briefcase mr-2 text-lg text-gray-500\"></i>\n        Solution Manager - Creative Tim Officer\n      </div>\n      <div class=\"mb-2 text-gray-700\">\n        <i class=\"fas fa-university mr-2 text-lg text-gray-500\"></i>\n        University of Computer Science\n      </div>\n    </div>\n    <div class=\"mt-10 py-10 border-t border-gray-300 text-center\">\n      <div class=\"flex flex-wrap justify-center\">\n        <div class=\"w-full lg:w-9/12 px-4\">\n          <p class=\"mb-4 text-lg leading-relaxed text-gray-800\">\n            An artist of considerable range, Jenna the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and\n            records all of his own music, giving it a warm, intimate feel with a\n            solid groove structure. An artist of considerable range.\n          </p>\n          <a href=\"javascript:void(0);\" class=\"font-normal text-red-600\">\n            Show more\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "dB0c":
    /*!**********************************!*\
      !*** ./src/app/model/Trainee.ts ***!
      \**********************************/

    /*! exports provided: Trainee */

    /***/
    function dB0c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Trainee", function () {
        return Trainee;
      });

      var Trainee = function Trainee() {
        _classCallCheck(this, Trainee);
      };
      /***/

    },

    /***/
    "diaN":
    /*!*************************************************************************!*\
      !*** ./src/app/components/cards/card-profile/card-profile.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CardProfileComponent */

    /***/
    function diaN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardProfileComponent", function () {
        return CardProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-profile.component.html */
      "c9Li");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardProfileComponent = /*#__PURE__*/function () {
        function CardProfileComponent() {
          _classCallCheck(this, CardProfileComponent);
        }

        _createClass(CardProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardProfileComponent;
      }();

      CardProfileComponent.ctorParameters = function () {
        return [];
      };

      CardProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-profile',
        template: _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardProfileComponent);
      /***/
    },

    /***/
    "dnvD":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function dnvD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <app-auth-navbar></app-auth-navbar>\n  <main>\n    <section class=\"relative w-full h-full py-40 min-h-screen\">\n      <div\n        class=\"absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full\"\n        style=\"background-image: url('assets/img/register_bg_2.png');\"\n      ></div>\n      <router-outlet></router-outlet>\n      <app-footer-small [absolute]=\"true\"></app-footer-small>\n    </section>\n  </main>\n</div>\n";
      /***/
    },

    /***/
    "e8es":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/index-dropdown/index-dropdown.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e8es(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  Demo Pages\n</a>\n<div\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  #popoverDropdownRef\n>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500\"\n  >\n    Admin Layout\n  </span>\n  <a\n    [routerLink]=\"['/admin/dashboard']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Dashboard\n  </a>\n  <a\n    [routerLink]=\"['/admin/settings']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Settings\n  </a>\n  <a\n    [routerLink]=\"['/admin/tables']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Tables\n  </a>\n  <a\n    [routerLink]=\"['/admin/maps']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Maps\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-gray-200\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500\"\n  >\n    Auth Layout\n  </span>\n  <a\n    [routerLink]=\"['/auth/login']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Login\n  </a>\n  <a\n    [routerLink]=\"['/auth/register']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Register\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-gray-200\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500\"\n  >\n    No Layout\n  </span>\n  <a\n    [routerLink]=\"['/landing']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Lading\n  </a>\n  <a\n    [routerLink]=\"['/profile']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Profile\n  </a>\n</div>\n";
      /***/
    },

    /***/
    "e8ip":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/auth-navbar/auth-navbar.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e8ip(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\n  class=\"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg\"\n>\n  <div\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\n  >\n    <div\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\n    >\n      <a\n        [routerLink]=\"['/']\"\n        class=\"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase\"\n      >\n      <div>\n        <img style=\"height: 40px; width: 160px;\" src=\"../../../../assets/img/logo-white-hor.png\" alt=\"\">\n      </div>\n\n      </a>\n\n    </div>\n    <div\n      class=\"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none\"\n      [ngClass]=\"{ hidden: !navbarOpen, 'block rounded shadow-lg': navbarOpen }\"\n      id=\"example-navbar-warning\"\n    >\n\n    <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\n\n      <li class=\"flex items-center\">\n        <a class=\"hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n          href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblingcodes.ml\" target=\"_blank\">\n          <i class=\"text-gray-500 fab fa-facebook text-lg leading-lg\"></i>\n          <span class=\"lg:hidden inline-block ml-2\">Share</span>\n        </a>\n      </li>\n\n\n      <li class=\"flex items-center\">\n        <a class=\"hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n          href=\"https://twitter.com/home?status=https://blingcodes.ml i just came across an awesome software development academy. you can become a software professional!!\"\n          target=\"_blank\">\n          <i class=\"text-gray-500 fab fa-twitter text-lg leading-lg\"></i>\n          <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\n        </a>\n      </li>\n\n\n\n\n    </ul>\n\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "eix7":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-settings/card-settings.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eix7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0\"\n>\n  <div class=\"rounded-t bg-white mb-0 px-6 py-6\">\n    <div class=\"text-center flex justify-between\">\n      <h6 class=\"text-gray-800 text-xl font-bold\">My account</h6>\n      <button\n        class=\"bg-red-600 text-white active:bg-red-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150\"\n        type=\"button\"\n      >\n        Settings\n      </button>\n    </div>\n  </div>\n  <div class=\"flex-auto px-4 lg:px-10 py-10 pt-0\">\n    <form>\n      <h6 class=\"text-gray-500 text-sm mt-3 mb-6 font-bold uppercase\">\n        User Information\n      </h6>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Username\n            </label>\n            <input\n              type=\"text\"\n              class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n              value=\"lucky.jesse\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Email address\n            </label>\n            <input\n              type=\"email\"\n              class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n              value=\"jesse@example.com\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              First Name\n            </label>\n            <input\n              type=\"text\"\n              class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n              value=\"Lucky\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Last Name\n            </label>\n            <input\n              type=\"text\"\n              class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n              value=\"Jesse\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <hr class=\"mt-6 border-b-1 border-gray-400\" />\n\n      <h6 class=\"text-gray-500 text-sm mt-3 mb-6 font-bold uppercase\">\n        Contact Information\n      </h6>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-12/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Address\n            </label>\n            <input\n              type=\"text\"\n              class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n              value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-4/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              City\n            </label>\n            <input\n              type=\"email\"\n              class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n              value=\"New York\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-4/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Country\n            </label>\n            <input\n              type=\"text\"\n              class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n              value=\"United States\"\n            />\n          </div>\n        </div>\n        <div class=\"w-full lg:w-4/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              Postal Code\n            </label>\n            <input\n              type=\"text\"\n              class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n              value=\"Postal Code\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <hr class=\"mt-6 border-b-1 border-gray-400\" />\n\n      <h6 class=\"text-gray-500 text-sm mt-3 mb-6 font-bold uppercase\">\n        About Me\n      </h6>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-12/12 px-4\">\n          <div class=\"relative w-full mb-3\">\n            <label\n              class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n              htmlFor=\"grid-password\"\n            >\n              About me\n            </label>\n            <textarea\n              type=\"text\"\n              class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n              rows=\"4\"\n            >\n                  A beautiful UI Kit and Admin for Angular & Tailwind CSS. It is Free\n                  and Open Source.\n                </textarea\n            >\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "lLla":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-line-chart/card-line-chart.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lLla(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-gray-200 mb-1 text-xs font-semibold\">\n          Overview\n        </h6>\n        <h2 class=\"text-white text-xl font-semibold\">\n          Sales value\n        </h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height: 350px;\">\n      <canvas id=\"line-chart\"></canvas>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "mvjs":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/privacy-policy/privacy-policy.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mvjs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-auth-navbar></app-auth-navbar>\n<main>\n  <div class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\">\n    <div class=\"absolute top-0 w-full h-full bg-center bg-cover\" style=\"\n        background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\n      \">\n      <span id=\"blackOverlay\" class=\"w-full h-full absolute opacity-75 bg-black\"></span>\n    </div>\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n            <h1 class=\"text-white font-semibold text-5xl\">\n              Blingcodes Privacy Policy\n            </h1>\n            <p class=\"mt-4 text-lg text-gray-300\">\n\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0);\">\n      <svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"\n        version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\">\n        <polygon class=\"text-gray-300 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <section class=\"pb-20 bg-gray-300 -mt-24\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap\">\n\n\n        <div class=\"w-full md:w-12/12 px-4 text-center\">\n          <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\">\n            <div class=\"px-4 py-5 flex-auto\">\n              <div\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400\">\n                <i class=\"fas fa-retweet\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">Privacy Policy</h6>\n              <p class=\"mt-2 mb-4 text-gray-600\">\n              <p>This Privacy Policy describes the types of information we may collect from you or that you may provide\n                to us when you visit the blingcodes.ml website or use our services located at www.blingcodes.ml (the\n                &ldquo;Website&rdquo;), and our practices for collecting, using, maintaining, protecting and disclosing\n                such information. This Privacy Policy applies to information we collect: (i) through our Services, and\n                (ii) in text and electronic messages between you and our Services.</p>\n              <p>By accessing or using our Services, you agree to this Privacy Policy.</p>\n              <p>IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, PLEASE DO NOT ACCESS OR USE OUR SERVICES.</p>\n              <p>Please read the information below:</p>\n              <p>1.Information we collect about you</p>\n              <p>2.Where we store data</p>\n              <p>3.How we use your information</p>\n              <p>4.Disclosure of your information</p>\n              <p>5.Updating or correcting your personal data</p>\n              <p>6.Canceling your account or deleting your personal data</p>\n              <p>7.Choices regarding control of your personal data</p>\n              <p>8.Lawful Bases for Processing</p>\n              <p>9.Information related to data collected through the Blingcodes service</p>\n              <p>10.Data Security</p>\n              <p>11.Cookies and other technologies</p>\n              <p>12.Mobile Analytics</p>\n              <p>13.Direct Marketing</p>\n              <p>14.Changes to this Privacy Policy</p>\n              <p>How do you contact us with questions?</p>\n              <ol>\n                <li>INFORMATION WE COLLECT ABOUT YOU</li>\n              </ol>\n              <p>We collect several types of information about visitors and/or users of our Services. We may collect\n                this information either directly when you provide it to us or automatically as you navigate through the\n                Website.</p>\n              <p>(a) We will collect and process your personal data when you register for a Service/create an account,\n                subscribe to a newsletter, submit feedback, enter a contest, fill out a survey, or send us a\n                communication. When ordering services on the Website, you may also be asked to provide a credit card\n                number and other payment-related information. Depending upon the activity, some of the information we\n                ask you to provide is required to use the Services (e.g. registering an account) and some is voluntary.\n                If you do not provide data when needed for a particular activity, you will not be able to engage in that\n                activity.</p>\n              <p>We also collect your Internet Protocol (&ldquo;IP&rdquo;) address. We use your IP address to diagnose\n                problems with our servers and/or software, to administer our Services, and to gather demographic\n                information.</p>\n              <p>(b) We may collect certain information that does not by itself identify a specific individual. Such\n                information tells us about your equipment, browsing actions, and the resources that you access and use\n                through the Services, such as your operating system and browser type. We use analytics and similar\n                services, as explained in our Cookie Policy, to help us to deliver a better and more personalized\n                service to users by enabling us to estimate usage patterns, customize our Services according to your\n                individual preferences, and speed up your searches.</p>\n              <p>(c) When you use our Services, we automatically collect information on the type of device you use and\n                the operating system version, so we know the best version of the application to provide you. We do not\n                ask you for, access, or track any location-based information from your mobile device at any time while\n                using Services.</p>\n              <p>(d) When you contact us for customer support we may collect additional information to resolve your\n                issue.</p>\n              <p>(e) We are not a site targeted at children or those under the age of 15. If you are a school and you\n                use a Lynda service for children under the age of 15, or the equivalent minimum age in the relevant\n                jurisdiction, you are responsible for obtaining consent from the parents/legal guardians of each child\n                you wish to allow to participate in using any of our Services. A child using our Services will be able\n                to participate in certain limited activities (such as taking online educational and informational\n                courses).</p>\n              <ol>\n                <li>WHERE WE STORE DATA</li>\n              </ol>\n              <p>By submitting your personal data, you agree to the transfer, storing and processing of your data\n                outside of the country where you reside. We will take reasonable steps to ensure that your data is\n                treated securely and in accordance with this Privacy Policy.</p>\n              <ol>\n                <li>HOW WE USE YOUR INFORMATION</li>\n              </ol>\n              <p>We use information held about you in the following ways:</p>\n              <p>To present content from our Services in an effective manner for you and for your computer or mobile\n                device</p>\n              <p>To provide you with information, products or services that you request from us or which we feel may\n                interest you</p>\n              <p>To carry out our obligations arising from any contracts entered into between you and us, including for\n                billing and collection</p>\n              <p>If you pay for Services using a credit card, we will transmit your credit card data to the appropriate\n                credit card company and/or credit card payment processing company</p>\n              <p>To allow you to participate in interactive features of our Services, when you choose to do so</p>\n              <p>To contact you about our Services</p>\n              <p>In any other way we may describe when you provide the information or when we prompt you regarding a new\n                use of information about you.</p>\n              <ol>\n                <li>DISCLOSURE OF YOUR INFORMATION</li>\n              </ol>\n              <p>We will share your personal data with third parties only in the ways that are described in this Privacy\n                Policy. We do not sell, trade, rent or disclose your information to others, except as provided herein:\n              </p>\n              <p>(a) We provide and support some of our Services through contractual arrangements with service providers\n                and other third parties. We and our service providers use your personal data to operate our Websites and\n                to deliver Services. For example, we must release your credit card information to the card-issuing bank\n                to confirm payment for products and services purchased on our Website; and provide order information to\n                third parties that help us deliver the Services.</p>\n              <p>(b) We will also disclose personal data in the following circumstances: (i) if it is required by law\n                enforcement or judicial authorities, or to cooperate with a law enforcement investigation; (ii) if we\n                have a good faith belief that we are required or permitted to do so by law or legal process; (iii) to\n                protect our rights, reputation, property or the safety of us or others; (iv) to defend or enforce our\n                rights or your obligations; (v) if the disclosure is required by mandatory professional standards; (vi)\n                to a third party with your prior consent to do so; or (vii) if we are under a duty to disclose or share\n                your personal data in order to enforce or apply any contracts or agreement that may exist between you\n                and us including this Privacy Policy, our Website Use Policy and our Terms of Service. This includes\n                exchanging information with other companies and organizations for the purposes of fraud protection and\n                credit risk reduction.</p>\n              <ol>\n                <li>UPDATING OR CORRECTING YOUR PERSONAL DATA</li>\n              </ol>\n              <p>We offer settings to control and manage the personal data we have about you, including the ability to:\n              </p>\n              <p>Delete Data: You can ask us to erase or delete all or some of your personal data (e.g., if it is no\n                longer necessary to provide Services to you).</p>\n              <p>Amend or Rectify Data: You can edit some of your personal data through your account. You can also ask\n                us to amend your data in certain cases, particularly if it is inaccurate.</p>\n              <p>Object to, or Limit or Restrict, Use of Data: You can ask us to stop using all or some of your personal\n                data (e.g., if we have no legal right to keep using it) or to limit our use of it (e.g., if your\n                personal data is inaccurate or unlawfully held).</p>\n              <p>Right to Access and/or Take Your Data: You can ask us for a copy of your personal data and can ask for\n                a copy of personal data you provided in machine readable form.</p>\n              <p>You may change your personal data associated with your account on your &ldquo;My Profile&rdquo; tab.\n              </p>\n              <p>You may also access, request deletion, and correct your personal data by submitting a data request\n                through Customer Support or by writing to us at the addresses at the end of this Privacy Policy.</p>\n              <p>You may choose to close your account in which case we will delete your information, including your\n                learning history, within 60 days of your request. However, we may retain your personal data even after\n                you have closed your account if reasonably necessary to comply with our legal obligations (including law\n                enforcement requests), comply with contractual obligations meet regulatory requirements, resolve\n                disputes, maintain security, prevent fraud and abuse, enforce our Terms of Service or Website Use\n                Policy, or fulfill your request to &ldquo;unsubscribe&rdquo; from further messages from us. We will\n                retain de-personalized information after your account has been closed. You can close your account on\n                your &ldquo;My Profile&rdquo; tab.</p>\n              <p>If you would like to access the information that we have about your use of and access to blingcodes.ml\n                Services, please request it through your &ldquo;My Profile&rdquo; tab or by writing to us at the\n                addresses at the end of this Privacy Policy. You can also ask us to stop using all or some of your\n                personal data (e.g., if we have no legal right to keep using it) or to limit our use of it (e.g., your\n                personal data is inaccurate or unlawfully held) by submitting a data request through Customer Support or\n                by writing to us at the addresses at the end of this Privacy Policy.</p>\n              <ol>\n                <li>CHOICES REGARDING CONTROL OF YOUR PERSONAL DATA</li>\n              </ol>\n              <p>You can access some of the information that we collect about you. For example, by logging into your\n                account, you can access information regarding recent actions in the Websites; certain personal data we\n                maintain about you; your communication preferences; and your payment settings.</p>\n              <p>You can ask us for a copy of your personal data in machine readable format on your &ldquo;My\n                Profile&rdquo; tab. If you have questions on this process, please contact Customer Support. You may also\n                contact us by submitting a data request by writing to us at the addresses at the end of this Privacy\n                Policy, and we will consider your request in accordance with applicable laws.</p>\n              <p>With respect to your communications preferences, you can unsubscribe from newsletters by following the\n                instructions included in the newsletter you receive, or you can log into your account and update your\n                email subscription options. If your email address has changed you will need to access your account, and\n                update your email address information in your account. Occasionally we may send out emails concerning\n                website disruptions.</p>\n              <p>You also have choices with respect to cookies.. By modifying your browser preferences, you may be able\n                to choose to accept all cookies, to be notified when a cookie is set, or to reject all cookies. If you\n                choose to reject all cookies some parts of our Websites may not work properly in your case.</p>\n              <ol>\n                <li>LAWFUL BASES FOR PROCESSING</li>\n              </ol>\n              <p>We will only collect and process personal data about you where we have lawful bases. Lawful bases\n                include consent (where you have given consent), contract (where processing is necessary for the\n                performance of a contract with you (e.g., to deliver the Services you have requested) and\n                &ldquo;legitimate interests.&rdquo; Learn more.</p>\n              <p>Where we rely on your consent to process personal data, you have the right to withdraw or decline your\n                consent at any time and where we rely on legitimate interests, you have the right to object. If you\n                reside in the Designated Countries and have any questions about the lawful basis upon which we collect\n                and use your personal data, please contact through our email address</p>\n              <ol>\n                <li>INFORMATION RELATED TO DATA COLLECTED THROUGH THE BLINGCODES SERVICE</li>\n              </ol>\n              <p>For certain services, we collect information under the direction of our clients (e.g., an entity that\n                subscribes to the Services for use by the entity&rsquo;s personnel). In this respect, we act as a data\n                processor under applicable laws. We will retain and use this personal data as necessary to comply with\n                our legal obligations and resolve disputes.</p>\n              <ol>\n                <li>DATA SECURITY</li>\n              </ol>\n              <p>Access by you to your account is available through a password and/or unique username selected by you.\n                This password is encrypted. We recommend that you do not divulge your password to anyone, that you\n                change your password often using a combination of letters and numbers, and that you ensure you use a\n                secure web browser. We cannot be held accountable for activity that results from your own neglect to\n                safeguard the secrecy of your password and username. If you share a computer with anyone, you should\n                always log out of your account after you are finished in order to prevent access to your information\n                from subsequent users of that computer.</p>\n              <p>Please notify Customer Support as soon as possible if your username or password is compromised.</p>\n              <p>Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be\n                100% secure. As a result, while we strive to protect your personal data, you acknowledge that: (a) there\n                are security and privacy limitations of the Internet which are beyond our control; (b) the security,\n                integrity and privacy of any and all information and data exchanged between you and us through this\n                Website cannot be guaranteed and we shall have no liability to you or any third party for loss, misuse,\n                disclosure or alteration of such information; and (c) any such information and data may be viewed or\n                tampered with in transit by a third party.</p>\n              <p>In the unlikely event that we believe that the security of your personal data in our control may have\n                been compromised, we will try to notify you. To the extent you have provided us with your email address,\n                we may notify you by email and you agree to our use of email as a means of such notification. .</p>\n              <ol>\n                <li>COOKIES AND OTHER TECHNOLOGIES</li>\n              </ol>\n              <p>When you use our Websites we may use cookies and other technologies in order to facilitate and\n                customize your use of our Services.</p>\n              <ol>\n                <li>MOBILE ANALYTICS</li>\n              </ol>\n              <p>We use mobile analytics software to allow us to better understand the functionality of our mobile\n                software on your phone.</p>\n              <ol>\n                <li>DIRECT MARKETING</li>\n              </ol>\n              <p>We currently do not share personal data with third parties for their direct marketing purposes without\n                your permission.</p>\n              <ol>\n                <li>CHANGES TO THIS PRIVACY POLICY</li>\n              </ol>\n              <p>It is our policy to post any changes we make to our Privacy Policy on this page (with a notice that the\n                Privacy Policy has been updated on the Website). The date the Privacy Policy was last revised is\n                identified at the top of the page. You are responsible for ensuring we have an up-to-date active and\n                deliverable email address for you, and for periodically visiting our Website and this Privacy Policy to\n                check for any changes.</p>\n              <p>Your continued use of the Services after such modifications will constitute your agreement to the\n                updated terms of the modified Privacy Policy.</p>\n              <ol>\n                <li>HOW DO YOU CONTACT US WITH QUESTIONS?</li>\n              </ol>\n              <p>If you have questions or complaints regarding this Privacy Policy, You can reach us by physical mail at\n                the addresses below.</p>\n              <p>blingcodes@gmail.com</p>\n\n\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n    </div>\n  </section>\n\n\n\n\n\n\n</main>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "oToU":
    /*!**********************************************************************!*\
      !*** ./src/app/views/payment-callback/payment-callback.component.ts ***!
      \**********************************************************************/

    /*! exports provided: PaymentCallbackComponent */

    /***/
    function oToU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentCallbackComponent", function () {
        return PaymentCallbackComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payment_callback_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payment-callback.component.html */
      "2QWS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PaymentCallbackComponent = /*#__PURE__*/function () {
        function PaymentCallbackComponent() {
          _classCallCheck(this, PaymentCallbackComponent);
        }

        _createClass(PaymentCallbackComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaymentCallbackComponent;
      }();

      PaymentCallbackComponent.ctorParameters = function () {
        return [];
      };

      PaymentCallbackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-privacy',
        template: _raw_loader_payment_callback_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PaymentCallbackComponent);
      /***/
    },

    /***/
    "owMO":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function owMO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  Demo Pages\n</a>\n<div\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  #popoverDropdownRef\n>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500\"\n  >\n    Admin Layout\n  </span>\n  <a\n    [routerLink]=\"['/admin/dashboard']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Dashboard\n  </a>\n  <a\n    [routerLink]=\"['/admin/settings']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Settings\n  </a>\n  <a\n    [routerLink]=\"['/admin/tables']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Tables\n  </a>\n  <a\n    [routerLink]=\"['/admin/maps']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Maps\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-gray-200\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500\"\n  >\n    Auth Layout\n  </span>\n  <a\n    [routerLink]=\"['/auth/login']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Login\n  </a>\n  <a\n    [routerLink]=\"['/auth/register']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Register\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-gray-200\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500\"\n  >\n    No Layout\n  </span>\n  <a\n    [routerLink]=\"['/landing']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Lading\n  </a>\n  <a\n    [routerLink]=\"['/profile']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800\"\n  >\n    Profile\n  </a>\n</div>\n";
      /***/
    },

    /***/
    "rMDH":
    /*!**************************************************!*\
      !*** ./src/app/services/registration.service.ts ***!
      \**************************************************/

    /*! exports provided: RegistrationService */

    /***/
    function rMDH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationService", function () {
        return RegistrationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../app.config */
      "aR35");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RegistrationService = /*#__PURE__*/function () {
        function RegistrationService(http) {
          _classCallCheck(this, RegistrationService);

          this.http = http;
        }

        _createClass(RegistrationService, [{
          key: "registerTrainee",
          value: function registerTrainee(trainee) {
            return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].serverApiEndpoint + 'trainee', trainee);
          }
        }]);

        return RegistrationService;
      }();

      RegistrationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      RegistrationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], RegistrationService);
      /***/
    },

    /***/
    "rOy2":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/table-dropdown/table-dropdown.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rOy2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<a\n  class=\"text-gray-600 block py-1 px-3\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <i class=\"fas fa-ellipsis-v\"></i>\n</a>\n";
      /***/
    },

    /***/
    "u/sr":
    /*!**********************************************************************!*\
      !*** ./src/app/components/maps/map-example/map-example.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MapExampleComponent */

    /***/
    function uSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapExampleComponent", function () {
        return MapExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./map-example.component.html */
      "xkbx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MapExampleComponent = /*#__PURE__*/function () {
        function MapExampleComponent() {
          _classCallCheck(this, MapExampleComponent);
        }

        _createClass(MapExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var map = document.getElementById('map-canvas');
            var lat = map.getAttribute('data-lat');
            var lng = map.getAttribute('data-lng');
            var myLatlng = new google.maps.LatLng(lat, lng);
            var mapOptions = {
              zoom: 12,
              scrollwheel: false,
              center: myLatlng,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: [{
                featureType: 'administrative',
                elementType: 'labels.text.fill',
                stylers: [{
                  color: '#444444'
                }]
              }, {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [{
                  color: '#f2f2f2'
                }]
              }, {
                featureType: 'poi',
                elementType: 'all',
                stylers: [{
                  visibility: 'off'
                }]
              }, {
                featureType: 'road',
                elementType: 'all',
                stylers: [{
                  saturation: -100
                }, {
                  lightness: 45
                }]
              }, {
                featureType: 'road.highway',
                elementType: 'all',
                stylers: [{
                  visibility: 'simplified'
                }]
              }, {
                featureType: 'road.arterial',
                elementType: 'labels.icon',
                stylers: [{
                  visibility: 'off'
                }]
              }, {
                featureType: 'transit',
                elementType: 'all',
                stylers: [{
                  visibility: 'off'
                }]
              }, {
                featureType: 'water',
                elementType: 'all',
                stylers: [{
                  color: '#feb2b2'
                }, {
                  visibility: 'on'
                }]
              }]
            };
            map = new google.maps.Map(map, mapOptions);
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              animation: google.maps.Animation.DROP,
              title: 'Hello World!'
            });
            var contentString = '<div class="info-window-content"><h2>Notus Angular</h2>' + '<p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>';
            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });
            google.maps.event.addListener(marker, 'click', function () {
              infowindow.open(map, marker);
            });
          }
        }]);

        return MapExampleComponent;
      }();

      MapExampleComponent.ctorParameters = function () {
        return [];
      };

      MapExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-map-example',
        template: _raw_loader_map_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MapExampleComponent);
      /***/
    },

    /***/
    "uhhN":
    /*!*********************************************************************!*\
      !*** ./src/app/components/cards/card-table/card-table.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CardTableComponent */

    /***/
    function uhhN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardTableComponent", function () {
        return CardTableComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-table.component.html */
      "wMhV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardTableComponent = /*#__PURE__*/function () {
        function CardTableComponent() {
          _classCallCheck(this, CardTableComponent);

          this._color = 'light';
        }

        _createClass(CardTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(color) {
            this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
          }
        }]);

        return CardTableComponent;
      }();

      CardTableComponent.ctorParameters = function () {
        return [];
      };

      CardTableComponent.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      CardTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-table',
        template: _raw_loader_card_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardTableComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _views_payment_callback_payment_callback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./views/payment-callback/payment-callback.component */
      "oToU");
      /* harmony import */


      var _views_terms_terms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./views/terms/terms.component */
      "c7lJ");
      /* harmony import */


      var _views_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./views/privacy-policy/privacy-policy.component */
      "JroR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layouts/auth/auth.component */
      "Vbwu");
      /* harmony import */


      var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/auth/register/register.component */
      "LN9C");
      /* harmony import */


      var _views_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/index/index.component */
      "AiJS");
      /* harmony import */


      var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/landing/landing.component */
      "RMzx");
      /* harmony import */


      var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/profile/profile.component */
      "wF9P"); // no layouts views


      var routes = [// auth views
      {
        path: 'masterclass',
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
        children: [{
          path: 'register',
          component: _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
        }, {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        }, {
          path: 'callback',
          component: _views_payment_callback_payment_callback_component__WEBPACK_IMPORTED_MODULE_1__["PaymentCallbackComponent"]
        }]
      }, // no layout views
      {
        path: 'profile/:user',
        component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
      }, {
        path: 'support',
        component: _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"]
      }, {
        path: 'privacy-policy',
        component: _views_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"]
      }, {
        path: 'terms',
        component: _views_terms_terms_component__WEBPACK_IMPORTED_MODULE_2__["TermsComponent"]
      }, {
        path: '',
        component: _views_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"]
      }, {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vwLF":
    /*!***************************************************************************!*\
      !*** ./src/app/components/cards/card-settings/card-settings.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CardSettingsComponent */

    /***/
    function vwLF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardSettingsComponent", function () {
        return CardSettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-settings.component.html */
      "eix7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardSettingsComponent = /*#__PURE__*/function () {
        function CardSettingsComponent() {
          _classCallCheck(this, CardSettingsComponent);
        }

        _createClass(CardSettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardSettingsComponent;
      }();

      CardSettingsComponent.ctorParameters = function () {
        return [];
      };

      CardSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-settings',
        template: _raw_loader_card_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardSettingsComponent);
      /***/
    },

    /***/
    "wF9P":
    /*!****************************************************!*\
      !*** ./src/app/views/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function wF9P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "8GP7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ProfileComponent);
      /***/
    },

    /***/
    "wMhV":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-table/card-table.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wMhV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded\"\n  [ngClass]=\"color === 'light' ? 'bg-white' : 'bg-red-900 text-white'\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3\n          class=\"font-semibold text-lg\"\n          [ngClass]=\"color === 'light' ? 'text-gray-800' : 'text-white'\"\n        >\n          Card Tables\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead>\n        <tr>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-gray-100 text-gray-600 border-gray-200'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Project\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-gray-100 text-gray-600 border-gray-200'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Budget\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-gray-100 text-gray-600 border-gray-200'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Status\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-gray-100 text-gray-600 border-gray-200'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Users\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-gray-100 text-gray-600 border-gray-200'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          >\n            Completion\n          </th>\n          <th\n            class=\"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left\"\n            [ngClass]=\"\n              color === 'light'\n                ? 'bg-gray-100 text-gray-600 border-gray-200'\n                : 'bg-red-800 text-red-300 border-red-700'\n            \"\n          ></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/bootstrap.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-gray-700' : 'text-white'\"\n            >\n              Argon Design System\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            $2,500 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-circle text-orange-500 mr-2\"></i> pending\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">60%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 60%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/angular.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-gray-700' : 'text-white'\"\n            >\n              Angular Now UI Kit PRO\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            $1,800 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-circle text-green-500 mr-2\"></i>\n            completed\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">100%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-green-200\"\n                >\n                  <div\n                    style=\"width: 100%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/sketch.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-gray-700' : 'text-white'\"\n            >\n              Black Dashboard Sketch\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            $3,150 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-circle text-red-500 mr-2\"></i> delayed\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">73%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 73%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/react.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-gray-700' : 'text-white'\"\n            >\n              React Material Dashboard\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            $4,400 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-circle text-teal-500 mr-2\"></i> on schedule\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">90%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-teal-200\"\n                >\n                  <div\n                    style=\"width: 90%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center\"\n          >\n            <img\n              src=\"assets/img/vue.jpg\"\n              class=\"h-12 w-12 bg-white rounded-full border\"\n              alt=\"...\"\n            />\n            <span\n              class=\"ml-3 font-bold\"\n              [ngClass]=\"color === 'light' ? 'text-gray-700' : 'text-white'\"\n            >\n              React Material Dashboard\n            </span>\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            $2,200 USD\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <i class=\"fas fa-circle text-green-500 mr-2\"></i>\n            completed\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex\">\n              <img\n                src=\"assets/img/team-1-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow\"\n              />\n              <img\n                src=\"assets/img/team-2-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-3-800x800.jpg\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n              <img\n                src=\"assets/img/team-4-470x470.png\"\n                alt=\"...\"\n                class=\"w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4\"\n              />\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">100%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-green-200\"\n                >\n                  <div\n                    style=\"width: 100%;\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right\"\n          >\n            <app-table-dropdown></app-table-dropdown>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "wcq5":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: PagesDropdownComponent */

    /***/
    function wcq5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesDropdownComponent", function () {
        return PagesDropdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pages-dropdown.component.html */
      "owMO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @popperjs/core */
      "EjV/");

      var PagesDropdownComponent = /*#__PURE__*/function () {
        function PagesDropdownComponent() {
          _classCallCheck(this, PagesDropdownComponent);

          this.dropdownPopoverShow = false;
        }

        _createClass(PagesDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(event) {
            event.preventDefault();

            if (this.dropdownPopoverShow) {
              this.dropdownPopoverShow = false;
            } else {
              this.dropdownPopoverShow = true;
              this.createPoppper();
            }
          }
        }, {
          key: "createPoppper",
          value: function createPoppper() {
            Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
              placement: 'bottom-start'
            });
          }
        }]);

        return PagesDropdownComponent;
      }();

      PagesDropdownComponent.propDecorators = {
        btnDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['btnDropdownRef', {
            "static": false
          }]
        }],
        popoverDropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['popoverDropdownRef', {
            "static": false
          }]
        }]
      };
      PagesDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pages-dropdown',
        template: _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PagesDropdownComponent);
      /***/
    },

    /***/
    "xkbx":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/maps/map-example/map-example.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xkbx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  id=\"map-canvas\"\n  class=\"relative w-full rounded h-600-px\"\n  data-lat=\"40.748817\"\n  data-lng=\"-73.985428\"\n></div>\n";
      /***/
    },

    /***/
    "xlab":
    /*!***************************************************************************!*\
      !*** ./src/app/components/footers/footer-small/footer-small.component.ts ***!
      \***************************************************************************/

    /*! exports provided: FooterSmallComponent */

    /***/
    function xlab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterSmallComponent", function () {
        return FooterSmallComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer-small.component.html */
      "DLfO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterSmallComponent = /*#__PURE__*/function () {
        function FooterSmallComponent() {
          _classCallCheck(this, FooterSmallComponent);

          this.date = new Date().getFullYear();
          this._absolute = false;
        }

        _createClass(FooterSmallComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "absolute",
          get: function get() {
            return this._absolute;
          },
          set: function set(absolute) {
            this._absolute = absolute === undefined ? false : absolute;
          }
        }]);

        return FooterSmallComponent;
      }();

      FooterSmallComponent.ctorParameters = function () {
        return [];
      };

      FooterSmallComponent.propDecorators = {
        absolute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      FooterSmallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer-small',
        template: _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterSmallComponent);
      /***/
    },

    /***/
    "xud4":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/cards/card-social-traffic/card-social-traffic.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: CardSocialTrafficComponent */

    /***/
    function xud4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardSocialTrafficComponent", function () {
        return CardSocialTrafficComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-social-traffic.component.html */
      "YpXG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CardSocialTrafficComponent = /*#__PURE__*/function () {
        function CardSocialTrafficComponent() {
          _classCallCheck(this, CardSocialTrafficComponent);
        }

        _createClass(CardSocialTrafficComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardSocialTrafficComponent;
      }();

      CardSocialTrafficComponent.ctorParameters = function () {
        return [];
      };

      CardSocialTrafficComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-social-traffic',
        template: _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CardSocialTrafficComponent);
      /***/
    },

    /***/
    "zBoC":
    /*!*********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.ts ***!
      \*********************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function zBoC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "KKA+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);

          this.collapseShow = 'hidden';
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleCollapseShow",
          value: function toggleCollapseShow(classes) {
            this.collapseShow = classes;
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [];
      };

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SidebarComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zslb":
    /*!*************************************************************************!*\
      !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AuthNavbarComponent */

    /***/
    function zslb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function () {
        return AuthNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth-navbar.component.html */
      "e8ip");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthNavbarComponent = /*#__PURE__*/function () {
        function AuthNavbarComponent() {
          _classCallCheck(this, AuthNavbarComponent);

          this.navbarOpen = false;
        }

        _createClass(AuthNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setNavbarOpen",
          value: function setNavbarOpen() {
            this.navbarOpen = !this.navbarOpen;
          }
        }]);

        return AuthNavbarComponent;
      }();

      AuthNavbarComponent.ctorParameters = function () {
        return [];
      };

      AuthNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-auth-navbar',
        template: _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AuthNavbarComponent);
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map