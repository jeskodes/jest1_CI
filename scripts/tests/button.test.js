/**
 * @jest-environment jsdom
 */


const {
    beforeEach
} = require("jest-circus");
const buttonClick = require("./button");

beforeEach(() => {
    document.body.innerHTML = "<p id = 'par'></p>";

});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        expect(document.getElementById('par').innerHTML).toEqual("You Clicked");
    });
});

//describe is optional but helpful 
//jsdom creates a simulated DOM so don't need to add the entire html here
//just add the <p></p> with the ID of par