"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateTransform = void 0;
var internal_1 = require("./internal");
var TranslateTransform = /** @class */ (function (_super) {
    __extends(TranslateTransform, _super);
    function TranslateTransform(jsonld) {
        var _this = _super.call(this, jsonld) || this;
        _this.isTranslateTransform = true;
        return _this;
    }
    TranslateTransform.prototype.getTranslation = function () {
        var retVal = {};
        for (var _i = 0, _a = ["x", "y", "z"]; _i < _a.length; _i++) {
            var attrib = _a[_i];
            var raw = this.__jsonld[attrib];
            retVal[attrib] = raw !== undefined ? Number(raw) : 0.0;
        }
        return retVal;
    };
    return TranslateTransform;
}(internal_1.Transform));
exports.TranslateTransform = TranslateTransform;
//# sourceMappingURL=TranslateTransform.js.map