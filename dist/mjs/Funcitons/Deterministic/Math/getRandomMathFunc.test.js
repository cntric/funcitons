import { getRandomMathFunciton, generateRandomMathArgs } from "./getRandomMathFunc";
import { seemsDeterministic } from "determinismus";
import { withPrecision, functionsStringEqual } from "tulleries";
export const CheckOrderTestSuiteA = () => {
    describe("Basic functionality", () => {
        test("Results from functions are likely deterministic", () => {
            const i = Math.floor(Math.random() * 100) + 10;
            Array(i).fill(null).map(() => {
                const func = getRandomMathFunciton();
                expect(seemsDeterministic({
                    func: func,
                    argGenerator: generateRandomMathArgs,
                    toleranceFunc: withPrecision()
                })).toBe(true);
            });
        });
        test("Functions picked are likely undeterministic", () => {
            const i = Math.floor(Math.random() * 100) + 10;
            Array(i).fill(null).map(() => {
                expect(seemsDeterministic({
                    func: getRandomMathFunciton,
                    argGenerator: () => [],
                    toleranceFunc: functionsStringEqual
                })).toBe(false);
            });
        });
    });
};
CheckOrderTestSuiteA();
