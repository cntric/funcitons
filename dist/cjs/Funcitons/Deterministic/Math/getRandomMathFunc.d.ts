/**
 * @namespace MathFuncitons
 * Contains functions used to get a deterministic function from the Math object.
 */
export declare const GetRandomMathFuncConstants: {
    readonly MIN_ARGS: 2;
    readonly MAX_ARGS: 100;
};
export interface MathFuncI {
    (...args: number[]): number;
}
/**
 * Gets an array of dterministic math functions.
 *
 * _Remarks_
 * - This is primarily intended for use within the funcitons packages.
 *
 * _Dev_
 * - Likely, this ought to be renamed to getDeterministic math functions.
 *
 * @returns an array of deterministic math functions from the Math object.
 */
export declare const getMathFunctions: () => MathFuncI[];
/**
 * Gets a determinstic math func at random. (Uses {@link getMathFunctions}.)
 * @returns a math func randomly selected from the {@link getMathFunctions}.
 */
export declare const getRandomMathFunciton: () => MathFuncI;
/**
 * Generates an array of random numbers to use as math args.
 *
 * _Dev_
 * - {@link MIN_ARGS} and {@link MAX_ARGS} are used to bound the length of the array.
 * - The array must be greater than {@link MIN_ARGS} because some determinisitc functions require {@link MIN_ARGS} arguments.
 * - Additional, arguments will be ignored by whichever math func.
 * @returns
 */
export declare const generateRandomMathArgs: () => number[];
