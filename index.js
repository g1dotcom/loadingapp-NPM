"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = LoadingSpinner;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function LoadingSpinner() {
  var animationName = "myAnimation";
  var styles = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  var styles1 = {
    border: "3px solid rgba(0, 0, 0, 0.1)",
    borderLeftColor: "#000",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    animation: "".concat(animationName, " 0.8s linear infinite"),
  };
  var keyframes = "\n    @keyframes ".concat(
    animationName,
    " {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  "
  );
  return /*#__PURE__*/ _react["default"].createElement(
    _react["default"].Fragment,
    null,
    /*#__PURE__*/ _react["default"].createElement("style", null, keyframes),
    /*#__PURE__*/ _react["default"].createElement(
      "div",
      {
        style: styles,
      },
      /*#__PURE__*/ _react["default"].createElement("div", {
        style: styles1,
      })
    )
  );
}
