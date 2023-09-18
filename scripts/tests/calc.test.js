const addition = require("./calc");

//red test - will fail 
// then green - just enough code to get test to pass 
//refactor - optimise test 

describe("Calculator", () => {
            describe("Addition Function", () => {
                test("should return 42 for 20 + 22", () => {
                    expect(addition(20, 22)).toBe(42);
                });
                test("should return 73 for 42 + 31", () => {
                    expect(addition(42, 31)).toBe(73);
                });

                describe("Multiply Function", () => {

                });
                describe("Divide Function", () => {

                });
            })})