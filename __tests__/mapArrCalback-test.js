//Test for map(arr, callback) function

// import items
import { mapArray } from '../functions/mapArrCallback.js';
import { filterArray } from '../functions/filterArray.js';

describe('mapArrCallback', () => {
    it('takes an array and callback and create new array with returned callback value', () => {
        const numArray = [1, 2, 3, 4, 5];
        const callback = (item) => item * 10;
        const expected = [10, 20, 30, 40, 50];
        const actual = mapArray(numArray, callback);

        expect(actual).toEqual(expected);

    })
})

describe('filterArray', () => {
    it('takes and array, filters, returns new array', () => {
        const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const callback = (item) => item % 2 === 0
        const expected = [2, 4, 6, 8, 10];
        const actual = filterArray(numArray, callback);

        expect(actual).toEqual(expected);
    })
});