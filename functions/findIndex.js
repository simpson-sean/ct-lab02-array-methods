export const findIndex = (array, callback) => {
    
    for (let index = 0; index < array.length; index++) {
        const item = array[index];  
        if (callback(item)) {
            return index;
        }
    }
    return -1;
}