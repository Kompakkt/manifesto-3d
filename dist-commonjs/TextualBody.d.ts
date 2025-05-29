import { IManifestoOptions, AnnotationBody, SpecificResource } from "./internal";
/**
An implementation of the TextualBody class (class in JSON-LD sense)
as it is described in Web Annotation Data Model Section 3.2.4
https://www.w3.org/TR/annotation-model/#embedded-textual-body
**/
export declare class TextualBody extends AnnotationBody {
    constructor(jsonld?: any, options?: IManifestoOptions);
    /**
    The simple string that is the data content of this resource
    will return empty string as a default value
    **/
    get Value(): string;
    /**
    Returns a specific resource representing the TextualBody position if
    present, otherwise null.
    **/
    getPosition(): SpecificResource | null;
    get Position(): SpecificResource | null;
}
