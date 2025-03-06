/**
 * first 100 --> 100
 * 101 - 200 --> 90
 * above 200 --> 70
 */


function layeredDiscountTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const tatal = quantity * first100Price;
        return tatal;
    }else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const tatal = first100Total + remainingTotal;
        return tatal;
    }else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const tatal = first100Total + second100Total + remainingTotal;
        return tatal;
    }
}

const tatal1 = layeredDiscountTotal(21);
const tatal2 = layeredDiscountTotal(101);
const tatal3 = layeredDiscountTotal(201);
console.log(tatal1, tatal2, tatal3);