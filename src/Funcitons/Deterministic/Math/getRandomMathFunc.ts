/**
 * @namespace MathFuncitons
 * Contains functions used to get a deterministic function from the Math object.
 */

export const GetRandomMathFuncConstants = {
    MIN_ARGS : 2,
    MAX_ARGS : 100
} as const;

export interface MathFuncI {
    (...args : number[]) : number
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
export const getMathFunctions = () : MathFuncI[]=>{
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
  ]
}

/**
 * Gets a determinstic math func at random. (Uses {@link getMathFunctions}.)
 * @returns a math func randomly selected from the {@link getMathFunctions}.
 */
export const getRandomMathFunciton = () : MathFuncI=>{

    const mathFuncs = getMathFunctions();
    return mathFuncs[
        Math.floor(
            Math.random()
            * (mathFuncs.length - 1)
        )
    ]

}

/**
 * Generates an array of random numbers to use as math args.
 * 
 * _Dev_
 * - {@link MIN_ARGS} and {@link MAX_ARGS} are used to bound the length of the array.
 * - The array must be greater than {@link MIN_ARGS} because some determinisitc functions require {@link MIN_ARGS} arguments.
 * - Additional, arguments will be ignored by whichever math func.
 * @returns 
 */
export const generateRandomMathArgs = () : number[]=>{

    return Array(
        Math.floor(
            Math.random()
            * (GetRandomMathFuncConstants.MIN_ARGS - GetRandomMathFuncConstants.MIN_ARGS)
        ) + GetRandomMathFuncConstants.MIN_ARGS
    ).fill(null).map(()=>{
        return Math.random() * Number.MAX_SAFE_INTEGER
    })

}