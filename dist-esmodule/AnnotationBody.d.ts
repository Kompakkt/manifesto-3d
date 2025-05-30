import { ExternalResourceType, MediaType } from "@iiif/vocabulary/dist-commonjs";
import { IManifestoOptions, ManifestResource, Transform } from "./internal";
/**
With the 3D extensions to the IIIF Presentation API the name of this
class is misleading, but for now is being retained for the sake backward
compatibility with earlier manifesto code and tests.

The 3D extensions allow that the body property of an annotation can be
a light, camera, or model, or a SpecificResource object wrapping a light, camera,
or model.
**/
export declare class AnnotationBody extends ManifestResource {
    constructor(jsonld?: any, options?: IManifestoOptions);
    getResourceID(): string | null;
    getFormat(): MediaType | null;
    getType(): ExternalResourceType | null;
    getWidth(): number;
    getHeight(): number;
    getTransform(): Transform[];
    getPropertyFromSelfOrSource(prop: string): any;
    getSource(): AnnotationBody | string | null;
    isModel(): boolean;
    isSpecificResource(): boolean;
}
