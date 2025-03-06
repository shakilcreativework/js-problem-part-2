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


function getPrice(products){
    // console.log(typeof products);
    if(typeof products !== 'object'){
        return 'please provide a valid products object';
    }
    return products;
}

// const price = getPrice([]);
// const price = getPrice(5);
// const price = getPrice('shakil');
const price = getPrice({name: 'chulkani dandi', price: 35, color: 'blue'});
// console.log(price.color);


function getSecond(numbers){
    // console.log(typeof numbers);
    if(!Array.isArray(numbers)){
        return 'please provide an array';
    }
    const second = numbers[1];
    return second;
}

// const second = getSecond([1, 4, 6, 7, 29]);
const second = getSecond(43);
// console.log(second);
