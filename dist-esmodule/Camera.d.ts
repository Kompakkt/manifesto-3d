import { IManifestoOptions, AnnotationBody, PointSelector } from "./internal";
export declare class Camera extends AnnotationBody {
    constructor(jsonld?: any, options?: IManifestoOptions);
    /**
    @returns full angular size of perspective viewport in vertical direction.
    Angular unit is degrees
    **/
    getFieldOfView(): number | undefined;
    /**
    Full angular size of perspective viewport in vertical direction.
    Angular unit is degrees
    **/
    get FieldOfView(): number | undefined;
    /**
    @returns full linear size of orthographic viewport in vertical direction.
    linear unit is Scene global unit of measure
    
    Name of this property was originally Height, has been changed
    at this revision to ViewHeight:
    See issues at https://github.com/IIIF/api/issues/2289
    **/
    getViewHeight(): number | undefined;
    get ViewHeight(): number | undefined;
    /**
    * @return : if not null, is either a PointSelector, or an object
    * with an id matching the id of an Annotation instance.
    **/
    getLookAt(): object | PointSelector | null;
    get LookAt(): object | null;
    /**
    @returns the near plane value, i.e. the minimum distance from the camera at
    which something in the space must exist in order to be viewed by the camera.
    **/
    getNear(): number | undefined;
    /**
    Near plane value of the camera.
    **/
    get Near(): number | undefined;
    /**
    @returns the far plane value, i.e. the maximum distance from the camera at
    which something in the space must exist in order to be viewed by the camera.
    **/
    getFar(): number | undefined;
    /**
    Far plane value of the camera.
    **/
    get Far(): number | undefined;
    isPerspectiveCamera(): boolean;
    isOrthographicCamera(): boolean;
}
