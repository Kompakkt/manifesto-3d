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
import { Utils, AnnotationBody, Color, PointSelector } from "./internal";
var Light = /** @class */ (function (_super) {
    __extends(Light, _super);
    function Light(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    Light.prototype.getColor = function () {
        var hexColor = this.getProperty("color");
        if (hexColor)
            return Color.fromCSS(hexColor);
        else
            return new Color([255, 255, 255]); // white light
    };
    Object.defineProperty(Light.prototype, "Color", {
        get: function () { return this.getColor(); },
        enumerable: false,
        configurable: true
    });
    /**
    * The implementation of the intensity is based on
    * {@link https://github.com/IIIF/3d/blob/main/temp-draft-4.md | temp-draft-4.md }
    * and the example 3D manifests
    * {@link https://github.com/IIIF/3d/tree/main/manifests/3_lights | lights }
    * on 24 Mar 2024. The intensity property in the manifest is an object
    * with declared type 'Value', a numeric property named 'value' and a
    * property named unit . This implementation will only work with a unit == 'relative'
    * and it will be assumed that a relative unit value of 1.0 corresponds to the
    * brightest light source a rendering engine supports.
    *
    * This code will implement a default intensity of 1.0
    **/
    Light.prototype.getIntensity = function () {
        var intObject = this.getProperty("intensity");
        if (intObject) {
            try {
                if (!(intObject.type === "Value" && intObject.unit === "relative"))
                    throw new Error();
                return intObject.value;
            }
            catch (err) {
                throw new Error("unable to interpret raw intensity object " + JSON.stringify(intObject));
            }
        }
        else
            return 1.0;
    };
    Object.defineProperty(Light.prototype, "Intensity", {
        get: function () { return this.getIntensity(); },
        enumerable: false,
        configurable: true
    });
    /**
    * As defined in the temp-draft-4.md (
    * https://github.com/IIIF/3d/blob/main/temp-draft-4.md#lights ; 12 May 2024)
    * this quantity is the half-angle of the cone of the spotlight.
    *
    * The inconsistency between this definition of the angle and the definition of
    * fieldOfView for PerspectiveCamera (where the property value defines the full angle) has
    * already been noted: https://github.com/IIIF/api/issues/2284
    *
    * provisional decision is to return undefined in case that this property
    * is accessed in a light that is not a spotlight
    *
    *
    * @returns number
    
    **/
    Light.prototype.getAngle = function () {
        if (this.isSpotLight()) {
            return Number(this.getProperty("angle"));
        }
        else {
            return undefined;
        }
    };
    Object.defineProperty(Light.prototype, "Angle", {
        get: function () { return this.getAngle(); },
        enumerable: false,
        configurable: true
    });
    /**
    * @return : if not null, is either a PointSelector, or an object
    * with an id matching the id of an Annotation instance.
    **/
    Light.prototype.getLookAt = function () {
        var _a, _b;
        var rawObj = (_a = this.getPropertyAsObject("lookAt")) !== null && _a !== void 0 ? _a : null;
        if (rawObj == null)
            return null;
        var rawType = (_b = (rawObj["type"] || rawObj["@type"])) !== null && _b !== void 0 ? _b : null;
        if (rawType == null)
            return null;
        if (rawType == "Annotation") {
            return rawObj;
        }
        if (rawType == "PointSelector") {
            return new PointSelector(rawObj);
        }
        throw new Error('unidentified value of lookAt ${rawType}');
    };
    Object.defineProperty(Light.prototype, "LookAt", {
        get: function () { return this.getLookAt(); },
        enumerable: false,
        configurable: true
    });
    Light.prototype.isAmbientLight = function () {
        return (Utils.normaliseType(this.getType() || "") === "ambientlight");
    };
    Light.prototype.isDirectionalLight = function () {
        return (Utils.normaliseType(this.getType() || "") === "directionallight");
    };
    Light.prototype.isPointLight = function () {
        return (Utils.normaliseType(this.getType() || "") === "pointlight");
    };
    Light.prototype.isSpotLight = function () {
        return (Utils.normaliseType(this.getType() || "") === "spotlight");
    };
    return Light;
}(AnnotationBody));
export { Light };
//# sourceMappingURL=Light.js.map