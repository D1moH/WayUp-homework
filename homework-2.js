// Задание 1:

console.log('Задание 1:');

for(let i = 10; i <=50; i += 2) {
    console.log(i);
}

// Задание 2:

console.log('Задание 2:');

const myData = {
    firstName: 'Дмитрий',
    lastName: 'Простаков',
    age: 31,
    myPet: false
}
console.log(myData);

// Задание 3:

console.log('Задание 3:');

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];
let result = array[3] + ' ' + 
            array[7] + ' ' + 
            array[0] + ' ' + 
            array[8] + ' ' + 
            array[11] + ' ' + 
            array[5] + ' ' + 
            array[9] + ' ' + 
            array[6] + ' ' + 
            array[4] + ' ' + 
            array[1] + ' ' + 
            array[12] + ' ' + 
            array[2] + ' ' + 
            array[10];
console.log(result);

// Задание 4:

console.log('Задание 4:');

function fullName (firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
};
fullName('Дмитрий','Простаков');
  


// Задание 5:

console.log('Задание 5:');

let num = 21;
    while(num<=67) {
        console.log(num);
        num += 2;
};


