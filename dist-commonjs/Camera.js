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
exports.Camera = void 0;
var internal_1 = require("./internal");
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    /**
    @returns full angular size of perspective viewport in vertical direction.
    Angular unit is degrees
    **/
    Camera.prototype.getFieldOfView = function () {
        if (this.isPerspectiveCamera()) {
            var value = this.getPropertyFromSelfOrSource("fieldOfView");
            if (value) {
                if (value > 0 && value < 180)
                    return value;
                else {
                    console.warn("Camera fieldOfView out of range and will be considered undefined.");
                    return undefined;
                }
            }
            else
                return undefined;
        }
        else
            return undefined;
    };
    Object.defineProperty(Camera.prototype, "FieldOfView", {
        /**
        Full angular size of perspective viewport in vertical direction.
        Angular unit is degrees
        **/
        get: function () { return this.getFieldOfView(); },
        enumerable: false,
        configurable: true
    });
    /**
    @returns full linear size of orthographic viewport in vertical direction.
    linear unit is Scene global unit of measure
    
    Name of this property was originally Height, has been changed
    at this revision to ViewHeight:
    See issues at https://github.com/IIIF/api/issues/2289
    **/
    Camera.prototype.getViewHeight = function () {
        if (this.isOrthographicCamera()) {
            // the term viewHeight for the resource Type was suggested
            // in https://github.com/IIIF/api/issues/2289#issuecomment-2161608587
            var value = this.getProperty("viewHeight");
            if (value)
                return value;
            else
                return undefined;
        }
        else
            return undefined;
    };
    Object.defineProperty(Camera.prototype, "ViewHeight", {
        get: function () { return this.getViewHeight(); },
        enumerable: false,
        configurable: true
    });
    /**
    * @return : if not null, is either a PointSelector, or an object
    * with an id matching the id of an Annotation instance.
    **/
    Camera.prototype.getLookAt = function () {
        var _a, _b;
        var rawObj = (_a = this.getPropertyAsObject("lookAt")) !== null && _a !== void 0 ? _a : null;
        if (rawObj == null)
            return null;
        var rawType = (_b = (rawObj["type"] || rawObj["@type"])) !== null && _b !== void 0 ? _b : null;
        if (rawType == null)
            return null;
        if (rawType == "Annotation")
            return rawObj;
        else if (rawType == "PointSelector")
            return new internal_1.PointSelector(rawObj);
        else {
            console.error('unidentified value of lookAt ${rawType}');
            return null;
        }
    };
    Object.defineProperty(Camera.prototype, "LookAt", {
        get: function () { return this.getLookAt(); },
        enumerable: false,
        configurable: true
    });
    /**
    @returns the near plane value, i.e. the minimum distance from the camera at
    which something in the space must exist in order to be viewed by the camera.
    **/
    Camera.prototype.getNear = function () {
        var value = this.getPropertyFromSelfOrSource("near");
        if (value)
            return value;
        else
            return undefined;
    };
    Object.defineProperty(Camera.prototype, "Near", {
        /**
        Near plane value of the camera.
        **/
        get: function () { return this.getNear(); },
        enumerable: false,
        configurable: true
    });
    /**
    @returns the far plane value, i.e. the maximum distance from the camera at
    which something in the space must exist in order to be viewed by the camera.
    **/
    Camera.prototype.getFar = function () {
        var value = this.getPropertyFromSelfOrSource("far");
        if (value)
            return value;
        else
            return undefined;
    };
    Object.defineProperty(Camera.prototype, "Far", {
        /**
        Far plane value of the camera.
        **/
        get: function () { return this.getFar(); },
        enumerable: false,
        configurable: true
    });
    Camera.prototype.isPerspectiveCamera = function () {
        return (internal_1.Utils.normaliseType(this.getType() || "") === "perspectivecamera");
    };
    Camera.prototype.isOrthographicCamera = function () {
        return (internal_1.Utils.normaliseType(this.getType() || "") === "orthographiccamera");
    };
    return Camera;
}(internal_1.AnnotationBody));
exports.Camera = Camera;
;
//# sourceMappingURL=Camera.js.map