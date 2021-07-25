//Test for map(arr, callback) function

// import items
import { mapArray } from '../functions/mapArrCallback.js';
import { filterArray } from '../functions/filterArray.js';
import { findIndex } from '../functions/findIndex.js';
import { reduceArray } from '../functions/reduceArray.js';

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

describe('findIndex', () => {
    it('returns the index of the first item whos callback returns true', () => {
        const numArray = ['a', 'b', 'c', 'd', 'e'];
        const callback = (item) => item === 'b'
        const expected = 1
        const actual = findIndex(numArray, callback);

        expect(actual).toEqual(expected);
    })

    it('return neg 1 if nothing found', () => {
        const numArray = [1, 2, 3, 2, 5];
        const callback = (item) => item === 8
        const expected = -1
        const actual = findIndex(numArray, callback);

        expect(actual).toEqual(expected);

    })
})

describe('reduceArray', () => {
    it('reduces array to single value', () => {
        const numArray = ['h', 'e', 'l', 'l', 'o'];
        const callback = (accumulator, item) => {
            return accumulator + item;
        };
        const expected = 'hello';
        const actual = reduceArray(numArray, callback);

        expect(actual).toEqual(expected);

    })

    it('reduces array with initial value', () => {
        const numArray = ['h', 'e', 'l', 'l', 'o'];
        const callback = (accumulator, item) => {
            return accumulator + item;
        };
        const expected = '4hello';
        const actual = reduceArray(numArray, callback, '4');

        expect(actual).toEqual(expected);
    })
})