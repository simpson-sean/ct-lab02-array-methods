//mapArray Function

 export const mapArray = (array, callback) => {
    
    const newArray = [];

    for (let index = 0; index < array.length; index++) {
        const item = array[index];  
        newArray[index] = callback(item);
    
    console.log('in the loop', newArray); 
    
    }
    return newArray;
}


