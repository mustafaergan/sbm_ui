"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _axios = _interopRequireDefault(require("axios"));

var _Dashboard = _interopRequireDefault(require("./components/Dashboard"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _SBMList = _interopRequireDefault(require("./components/SBMList"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _configureStore = require("./store/configureStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ekranlar
// router
// redux
var store = (0, _configureStore.configureStore)();
store.dispatch({
  type: "FETCH_USERS_PENDING",
  payload: _axios["default"].get("https://jsonplaceholder.typicode.com/users").then(function (response) {
    console.log(response);
    return response.data;
  })["catch"](function (err) {})
});

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    component: _Dashboard["default"],
    exact: true
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/list",
    component: _SBMList["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    render: function render() {
      return /*#__PURE__*/_react["default"].createElement("h1", null, "B\xF6yle bir sayfa yok");
    }
  }))));
};

var root = document.getElementById('app');

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), root);
