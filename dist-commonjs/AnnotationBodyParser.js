"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationBodyParser = void 0;
var internal_1 = require("./internal");
// Todo: Add these to @iiif/vocabulary
var LightTypes = ["AmbientLight", "DirectionalLight", "PointLight", "SpotLight"];
var CameraTypes = ["PerspectiveCamera", "OrthographicCamera"];
var DisplayedTypes = ["Image", "Document", "Audio", "Model", "Video"];
var AnnotationBodyParser = /** @class */ (function () {
    function AnnotationBodyParser() {
    }
    AnnotationBodyParser.BuildFromJson = function (jsonld, options) {
        var type = (jsonld.type === "SpecificResource" && jsonld.source)
            ? ([].concat(jsonld.source))[0]["type"]
            : jsonld.type;
        if (DisplayedTypes.includes(type))
            return new internal_1.AnnotationBody(jsonld, options);
        else if (LightTypes.includes(type))
            return new internal_1.Light(jsonld, options);
        else if (CameraTypes.includes(type))
            return new internal_1.Camera(jsonld, options);
        else if (type === "TextualBody")
            return new internal_1.TextualBody(jsonld, options);
        else
            throw new Error("unimplemented type for AnnotationBody: " + type);
    };
    return AnnotationBodyParser;
}());
exports.AnnotationBodyParser = AnnotationBodyParser;
//# sourceMappingURL=AnnotationBodyParser.js.map