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
import { ExternalResourceType, } from "@iiif/vocabulary/dist-commonjs";
import { AnnotationBodyParser, ManifestResource, TransformParser, Utils, } from "./internal";
/**
With the 3D extensions to the IIIF Presentation API the name of this
class is misleading, but for now is being retained for the sake backward
compatibility with earlier manifesto code and tests.

The 3D extensions allow that the body property of an annotation can be
a light, camera, or model, or a SpecificResource object wrapping a light, camera,
or model.
**/
var AnnotationBody = /** @class */ (function (_super) {
    __extends(AnnotationBody, _super);
    function AnnotationBody(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    // Get resource URI ID from either body (for content resource) or source (for specific resource)
    AnnotationBody.prototype.getResourceID = function () {
        if (this.isSpecificResource()) {
            var source = this.getSource();
            if (source instanceof AnnotationBody) {
                return source.id;
            }
            else {
                return source || this.id;
            }
        }
        else {
            return this.id;
        }
    };
    // Format, Type, Width, and Height are the body properties supported
    // in the code that supports Presentation 3
    AnnotationBody.prototype.getFormat = function () {
        var format = this.getPropertyFromSelfOrSource("format");
        if (format) {
            return Utils.getMediaType(format);
        }
        return null;
    };
    AnnotationBody.prototype.getType = function () {
        var type = this.getPropertyFromSelfOrSource("type");
        if (type) {
            return Utils.normaliseType(type);
        }
        return null;
    };
    AnnotationBody.prototype.getWidth = function () {
        return this.getProperty("width");
    };
    AnnotationBody.prototype.getHeight = function () {
        return this.getProperty("height");
    };
    AnnotationBody.prototype.getTransform = function () {
        return this.getProperty("transform").map(function (transform) {
            return TransformParser.BuildFromJson(transform);
        });
    };
    // Some properties may be on this object or (for SpecificResource) in source object
    AnnotationBody.prototype.getPropertyFromSelfOrSource = function (prop) {
        if (this.isSpecificResource() &&
            this.getSource() instanceof AnnotationBody) {
            return this.getSource().getProperty(prop);
        }
        else {
            return this.getProperty(prop);
        }
    };
    // Get the first source available on the annotation body, if any
    AnnotationBody.prototype.getSource = function () {
        var source = [].concat(this.getPropertyAsObject("source"))[0];
        if (source) {
            if (source["isIRI"] === true) {
                return source["id"];
            }
            else {
                return AnnotationBodyParser.BuildFromJson(source, this.options);
            }
        }
        return null;
    };
    AnnotationBody.prototype.isModel = function () {
        return this.getType() === ExternalResourceType.MODEL;
    };
    AnnotationBody.prototype.isSpecificResource = function () {
        return this.getProperty("type") === "SpecificResource";
    };
    return AnnotationBody;
}(ManifestResource));
export { AnnotationBody };
//# sourceMappingURL=AnnotationBody.js.map