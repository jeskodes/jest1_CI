const addition = require("./calc");

//red test - will fail 
// then green - just enough code to get test to pass 

describe("Calculator", () => {
    describe("Addition Function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
    });
    describe("Subtract Function", () => {

    });
    describe("Multiply Function", () => {

    });
    describe("Divide Function", () => {

    });
})