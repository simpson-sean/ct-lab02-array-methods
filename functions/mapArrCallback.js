//mapArray Function

 export const mapArray = (array, callback) => {
    
    let newArray = []; 
    
    for (let i = 0; i < array.length; i++) {
        newArray = [...newArray, callback(array[i])];
    
    console.log('in the loop', newArray); 
    return newArray;
    
    }
}

