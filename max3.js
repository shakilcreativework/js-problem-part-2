const jim = 56;
const tim = 89;
const kim = 68;

// if(jim > tim && jim > kim){
//     console.log('Jim is the ultimate boss');
// }else if(tim > jim && tim > kim){
//     console.log('Tim is the ultimate boss');
// }else{
//     console.log('Kim is the ultimate boss');
// }


// function of max
function maxOfThree(num1, num2, num3){
    if(jim > tim && jim > kim){
        // console.log('Jim is the ultimate boss');
        return 'Jim is the ultimate boss';
    }else if(tim > jim && tim > kim){
        // console.log('Tim is the ultimate boss');
        return 'Tim is the ultimate boss'
    }else{
        // console.log('Kim is the ultimate boss');
        return 'Kim is the ultimate boss'
    }
}

const maxThree = maxOfThree(jim, tim, kim);
console.log(maxThree);