function add(num1, num2){
    console.log(num1 + num2);
    console.log(arguments);
    console.log(arguments[3]);
}

add(13, 34, 34, 64, 64, 80);