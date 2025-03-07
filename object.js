const student = {
    name: 'Shakil Ahmed',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Amir'],
    movies: [
        {name: 'no. 1', year: 2015},
        {name: 'king khan', year: 2018},
    ],
    act: function(){
        console.log('Function call');
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
};

console.log(student.act());