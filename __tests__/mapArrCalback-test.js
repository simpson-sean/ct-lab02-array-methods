//Test for map(arr, callback) function

// import items
import { mapArray } from '../functions/mapArrCallback.js';


describe('mapArrCallback', () => {
    it('takes an array and callback and create new array with returned callback value', () => {
        const numArray = [1, 2, 3, 4, 5];
        const callback = (item) => item * 10;
        const expected = [10, 20, 30, 40, 50];
        const actual = mapArray(numArray, callback);

        expect(actual).toEqual(expected);

    })
})