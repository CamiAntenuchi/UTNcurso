function NroMax(array) {  

    let max = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) 
            max = array[i]; 
    } 
    return max; 
} 

let array = [15, 59, 45, 93, 180, 3];
console.log(NroMax(array)); 
