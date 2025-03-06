function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a valid number';
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, '7');
// console.log(result);


function fullName(first, second){
    if(typeof first !== 'string' || typeof second !== 'string'){
        return 'please provide a valid name as a string';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('shakil', 'ahmed');
// console.log(full);


function getPrice(product){

}

