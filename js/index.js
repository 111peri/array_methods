// 1) Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
// Нужно найти перебирая эти элементы с помощью цикла четные числа.
// И эти найденные четные числа должны быть собраны в одном массиве.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const newNumbers = numbers.filter((element, index) => element % 2 === 0)

console.log(newNumbers);


// 2) Заполните массив 10-ю иксами с помощью цикла. [x,x...]

let arr = []

for (let i = 0; i < 10; i++) {
    arr.push('x')
}

console.log(arr);

// 3) У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99.
// С помощью цикла for и оператора if нужно проверить есть ли в массиве число
// со значением, равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!'





const numbers = [1, 2, 115, 4, 58, 5, 7, 99];

const number = 4;
let result = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === number) {
        result = true;
        break;
    }
}

if (result) {
    alert('ЕСТЬ!!!');
}



const numbers2 = [1, 2, 115, 4, 58, 5, 7, 99];

for (let i = 0; i < numbers2.length; i++) {
    const num = numbers[i];

    if (num > 20 && num < 50 && num % 2 === 0) {
        console.log(num);
    }
}