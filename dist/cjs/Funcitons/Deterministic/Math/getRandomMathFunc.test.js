"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckOrderTestSuiteA = void 0;
const getRandomMathFunc_1 = require("./getRandomMathFunc");
const determinismus_1 = require("determinismus");
const tulleries_1 = require("tulleries");
const CheckOrderTestSuiteA = () => {
    describe("Basic functionality", () => {
        test("Results from functions are likely deterministic", () => {
            const i = Math.floor(Math.random() * 100) + 10;
            Array(i).fill(null).map(() => {
                const func = (0, getRandomMathFunc_1.getRandomMathFunciton)();
                expect((0, determinismus_1.seemsDeterministic)({
                    func: func,
                    argGenerator: getRandomMathFunc_1.generateRandomMathArgs,
                    toleranceFunc: (0, tulleries_1.withPrecision)()
                })).toBe(true);
            });
        });
        test("Functions picked are likely undeterministic", () => {
            const i = Math.floor(Math.random() * 100) + 10;
            Array(i).fill(null).map(() => {
                expect((0, determinismus_1.seemsDeterministic)({
                    func: getRandomMathFunc_1.getRandomMathFunciton,
                    argGenerator: () => [],
                    toleranceFunc: tulleries_1.functionsStringEqual
                })).toBe(false);
            });
        });
    });
};
exports.CheckOrderTestSuiteA = CheckOrderTestSuiteA;
(0, exports.CheckOrderTestSuiteA)();
