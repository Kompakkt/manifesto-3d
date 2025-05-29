import { Transform } from "./internal";
export declare class RotateTransform extends Transform {
    constructor(jsonld?: any);
    /**
     * Returns an object with x,y,z attributes whose values are
     * a counter-clockwise rotation in degrees about the fixed coordinate
     * system axes.
     *
     * @returns object
     **/
    getRotation(): Record<string, number>;
    /**
     * accessor Rotation is an object with x,y,z attributes whose values are
     * a counter-clockwise rotation in degrees about the fixed coordinate
     * system axes.
     **/
    get Rotation(): object;
}
