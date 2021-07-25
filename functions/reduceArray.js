export const reduceArray = (array, callback, initialValue) => {
    
    let value = initialValue; 
    let index = 0;

    if(!value) {
        value = array[0];
        index = 1;
    }

    for (; index < array.length; index++) {
        const item = array[index];
        value = callback(value, item)
    }

    return value;
}