const heights = [65, 66, 68, 72, 78, 60];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const maxNum = getMax(heights);
// console.log(maxNum);


function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const minNum = getMin(heights);
console.log(minNum);