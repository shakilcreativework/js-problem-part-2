function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

// operation
// function calculator(a, b, operation){
//     if(operation === 'add'){
//         const result = add(a, b);
//         return result;
//     }else if(operation === 'subtract'){
//         const result = subtract(a, b);
//         return result;
//     }else if(operation === 'multiply'){
//         const result = multiply(a, b);
//         return result;
//     }else if(operation === 'divide'){
//         const result = divide(a, b);
//         return result;
//     }else{
//         return "Only 'add', 'subtract', 'multiply', 'operation' is allowed";
//     }
// }

function calculator(a, b, operation){
    if(operation === 'add'){
        return add(a, b);
    }else if(operation === 'subtract'){
        return subtract(a, b);
    }else if(operation === 'multiply'){
        return multiply(a, b);
    }else if(operation === 'divide'){
        return divide(a, b);
    }else{
        return "Only 'add', 'subtract', 'multiply', 'operation' is allowed";
    }
}

console.log(calculator(5, 5, 'multiply'));