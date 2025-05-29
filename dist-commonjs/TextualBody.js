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
exports.TextualBody = void 0;
var internal_1 = require("./internal");
/**
An implementation of the TextualBody class (class in JSON-LD sense)
as it is described in Web Annotation Data Model Section 3.2.4
https://www.w3.org/TR/annotation-model/#embedded-textual-body
**/
var TextualBody = /** @class */ (function (_super) {
    __extends(TextualBody, _super);
    function TextualBody(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    Object.defineProperty(TextualBody.prototype, "Value", {
        /**
        The simple string that is the data content of this resource
        will return empty string as a default value
        **/
        get: function () { return this.getProperty("value") || ""; },
        enumerable: false,
        configurable: true
    });
    /**
    Returns a specific resource representing the TextualBody position if
    present, otherwise null.
    **/
    TextualBody.prototype.getPosition = function () {
        var _a;
        var rawPosition = (_a = this.getPropertyAsObject("position")) !== null && _a !== void 0 ? _a : null;
        if (rawPosition == null)
            return null;
        if (rawPosition.type && rawPosition.type == "SpecificResource") {
            return new internal_1.SpecificResource(rawPosition, this.options);
        }
        else {
            throw new Error("unknown position type specified");
        }
    };
    Object.defineProperty(TextualBody.prototype, "Position", {
        get: function () { return this.getPosition(); },
        enumerable: false,
        configurable: true
    });
    return TextualBody;
}(internal_1.AnnotationBody));
exports.TextualBody = TextualBody;
//# sourceMappingURL=TextualBody.js.map