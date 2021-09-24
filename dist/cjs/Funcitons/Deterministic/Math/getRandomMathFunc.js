"use strict";
/**
 * @namespace MathFuncitons
 * Contains functions used to get a deterministic function from the Math object.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomMathArgs = exports.getRandomMathFunciton = exports.getMathFunctions = exports.GetRandomMathFuncConstants = void 0;
exports.GetRandomMathFuncConstants = {
    MIN_ARGS: 2,
    MAX_ARGS: 100
};
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
const getMathFunctions = () => {
    return [
        Math.floor,
        Math.ceil,
        Math.min,
        Math.max,
        Math.sqrt,
        Math.round,
        Math.fround,
        Math.hypot,
        Math.pow,
        Math.log,
        Math.log10
    ];
};
exports.getMathFunctions = getMathFunctions;
/**
 * Gets a determinstic math func at random. (Uses {@link getMathFunctions}.)
 * @returns a math func randomly selected from the {@link getMathFunctions}.
 */
const getRandomMathFunciton = () => {
    const mathFuncs = (0, exports.getMathFunctions)();
    return mathFuncs[Math.floor(Math.random()
        * (mathFuncs.length - 1))];
};
exports.getRandomMathFunciton = getRandomMathFunciton;
/**
 * Generates an array of random numbers to use as math args.
 *
 * _Dev_
 * - {@link MIN_ARGS} and {@link MAX_ARGS} are used to bound the length of the array.
 * - The array must be greater than {@link MIN_ARGS} because some determinisitc functions require {@link MIN_ARGS} arguments.
 * - Additional, arguments will be ignored by whichever math func.
 * @returns
 */
const generateRandomMathArgs = () => {
    return Array(Math.floor(Math.random()
        * (exports.GetRandomMathFuncConstants.MIN_ARGS - exports.GetRandomMathFuncConstants.MIN_ARGS)) + exports.GetRandomMathFuncConstants.MIN_ARGS).fill(null).map(() => {
        return Math.random() * Number.MAX_SAFE_INTEGER;
    });
};
exports.generateRandomMathArgs = generateRandomMathArgs;
