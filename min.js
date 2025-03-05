const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function getMin(numbers){
    // console.log(numbers);
    let min = prices[0];
    for(const num of numbers){
        // console.log(num);
        if(num < min){
            min = num;
        }
    }
    // return numbers;
    return min;
}

const cheap = getMin(prices);
console.log('cheapest one is:', cheap);