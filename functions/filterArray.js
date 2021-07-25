export const filterArray = (array, callback) => {
    
    const newArray = [];
    let j = 0

    for (let index = 0; index < array.length; index++) {
        const item = array[index];  
        if (callback(item)) {
            newArray[j] = item;
             j++
        }
    }
    return newArray;
}