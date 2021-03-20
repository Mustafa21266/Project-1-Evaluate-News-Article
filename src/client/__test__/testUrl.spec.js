// TODO: import the url check function
import { checkURL } from "../js/checkURL";
describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        const url = new String();
        expect(checkURL(url)).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        // TODO: write your logic here
        const output = false;
        let url = 'anything';
        expect(checkURL(url)).toEqual(output);

    })

    test('Testing the checkUrl function return true for valid url', () => {
        // TODO: write your logic here
        const output = true;
        let url = 'https://en.wikipedia.org/wiki/Article_(grammar)';
        expect(checkURL(url)).toEqual(output);
    })
})
