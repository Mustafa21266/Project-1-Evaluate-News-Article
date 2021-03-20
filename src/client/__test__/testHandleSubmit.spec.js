// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
const handleSubmit = require("../js/formHandler.js");
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        const event = new Event('click');
        const output = true;
        expect(handleSubmit.default(event)).toBeDefined();
    })
})
