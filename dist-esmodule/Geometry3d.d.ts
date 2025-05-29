import { Vector3, Euler } from "threejs-math";
import { RotateTransform } from "./internal";
/**
* performs the calculation required for the lookAt
* property of a camera resource. Determines the
* required angles of two rotations, the first about
* the x axis and the second about the y axis, which will
* rotate the default camera direction (0,0,-1) into the
* direction of the input arguments
*
* Result of calculation is returned as a instance of EulerAngle from the
* threejs-math library. The "axes order" of the EulerAngle is "YXZ": The
* three-js library uses body-fixed axes to represent EulerAngles, which reverse
* the ordering of the "relative rotation" algorithm described in the
* draft 3d api.

* @param direction A vector interpreted as a direction. Client code
*        responsible for not passing a 0-length vector, else a

*
* @returns threejs-math.EulerAngle instance
**/
export declare function cameraRelativeRotation(direction: Vector3): Euler;
/**
* Evaluates the rotation required to transform a directional light
* or spot ling, which in iiif 3D spec
* have an initial direction in the -Y direction, to a direction
* along the input argument
*
* TODO : expand on this documentation taking into account the
*        implied specification that RotateTransform instances
*        are to be interpreted as an Euler angle definition of
*        the rotation
*
* @param direction A vector interpreted as a direction. Client code
*        responsible for not passing a 0-length vector, else a
*
* @returns threejs-math.EulerAngle instance
**/
export declare function lightRelativeRotation(direction: Vector3): Euler;
/**
* Implements the convention that the 3 component values for the RotateTranform
* cass (properties  x,y,z) are to be interpreted as Euler angles in the intrinsic XYZ
* order
* @param transform : A object with a Rotation member object, properties x,y,z

*
* @returns threejs-math.EulerAngle instance. From this  threejs-math functionsa
* allow conversion to other rotation representations.
**/
export declare function eulerFromRotateTransform(transform: RotateTransform): Euler;
