"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _menorepo() {
  const data = _interopRequireDefault(require("@cyan-pnpm-org/menorepo2"));
  _menorepo = function _menorepo() {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function fn2() {
  (0, _menorepo().default)();
  console.log('is package1');
}
var _default = fn2;
exports.default = _default;