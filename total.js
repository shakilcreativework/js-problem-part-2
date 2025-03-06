const numbers = [300, 100, 700, 1200];


const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200},
];

// console.log(products);

function getShoppingTotal(products){
    // console.log(products);
    let total = 0;
    for(const product of products){
        // console.log(product.price);
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('tatal ajke khoshabo: ', total);