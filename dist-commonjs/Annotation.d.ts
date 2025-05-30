import { AnnotationMotivation } from "@iiif/vocabulary/dist-commonjs";
import { AnnotationBody, IManifestoOptions, ManifestResource, Resource } from "./internal";
import { Vector3 } from "threejs-math";
export declare class Annotation extends ManifestResource {
    constructor(jsonld: any, options: IManifestoOptions);
    /**
    In spite of its name, this method returns an array of objects, each of which
    represents a potential body annotations
    
    @see{ https://iiif.io/api/cookbook/recipe/0033-choice/ }
    **/
    getBody(): AnnotationBody[];
    get Body(): AnnotationBody[];
    /**
    auxiliary function to getBody; intended to hande an object that has an element items
    which is a array of annotation- body-like objects. This : https://iiif.io/api/cookbook/recipe/0033-choice/
    seems to be the use case for this
    **/
    private parseBodiesFromItemsList;
    /**
    auxiliary function to parseBodiesFromItemsList and getBody, this is the last
    step on recursively going through collections of bodies.
    **/
    private parseSingletonBody;
    /**
    Developer Note: 8 April 2024
    getBody3D function was developed in the early stages of the 3D API Feb-March 2024
    as alternative to the existing Annotation getBody function, but the signature for
    getBody3D was chosen to be a single object instance, not an array.
    
    At this stage, the merging of the 2D API anf the draft 3D API has been completed, so
    3D applications can use the getBody() function to retrieve the body of an Annotation intended
    to target a scene. For compatibily the return value of the function is still an
    array.
    
    3D clients using getBody are responsible for choosing the appropriate instance from the
    returned array. In most cases this will be the sole 0th element.
    **/
    getBody3D(): AnnotationBody;
    getMotivation(): AnnotationMotivation | null;
    getOn(): string;
    getTarget(): any;
    get Target(): any;
    getResource(): Resource;
    /**
    *    A 3D point coordinate object for the location of an Annotation
    *    to satisfy the requirements of the lookAt property of camera and
    *    spotlight resources, according to the draft v4 API as of April 1 2024
    *
    *    Is the position of the point for a target which is a SpecificResource with
    *    a PointSelector
    *    Otherwise, for example when the annotation target is an entire Scene, the
    *    location for lookAt is the origin (0,0,0)
    **/
    get LookAtLocation(): Vector3;
}
