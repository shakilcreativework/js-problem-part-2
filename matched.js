const numbers = [34, 53, 63, 74, 74, 74, 78];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// for(const number of numbers){
//     console.log(number);
// }


const products = [
    {id: 1, name: 'walton phone', price: 12000},
    {id: 2, name: 'iphone', price: 199000},
    {id: 3, name: 'mac book air', price: 119000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell', price: 19000},
    {id: 6, name: 'Nokia', price: 19000},
];

// for(const product of products){
//     console.log(product);
// }


function matchedProducts(products, search){
    for(const product of products){
        // console.log(product);
        if(product.name === search){
            // console.log(product);
            return product;
        }
    }
}

// const result = matchedProducts(products, 'iphone');
// console.log(result);
// console.log(result.id);
// console.log(result.name);
// console.log(result.price);


function matchedPriceRange(products, price){
    // console.log(products, price);
    let search = [];
    for(const product of products){
        if(product.price >= price){
            search.push(product);
        }
    }
    return search;
}

const result = matchedPriceRange(products, 19000);
console.log(result);
