/**
 * upto 100: ---> 100
 * more than 101-200: ---> 90;
 * more than 200: ---> 70
 */


function discountPrice(quantity){
    let total = 0;
    if(quantity <= 100){
        const tatal = quantity * 100;
        return tatal;
    }else if(quantity <= 200){
        const tatal = quantity * 90;
        return tatal;
    }else{
        const tatal = quantity * 70;
        return tatal;
    }
}


const tatal = discountPrice(201);
console.log(tatal);