import { AnnotationBody, Light, Camera, TextualBody } from "./internal";
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
            return new AnnotationBody(jsonld, options);
        else if (LightTypes.includes(type))
            return new Light(jsonld, options);
        else if (CameraTypes.includes(type))
            return new Camera(jsonld, options);
        else if (type === "TextualBody")
            return new TextualBody(jsonld, options);
        else
            throw new Error("unimplemented type for AnnotationBody: " + type);
    };
    return AnnotationBodyParser;
}());
export { AnnotationBodyParser };
//# sourceMappingURL=AnnotationBodyParser.js.map