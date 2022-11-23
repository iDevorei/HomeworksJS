console.log('задание 1');
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

document.write('Задание 1 <br/>');

let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    document.write(`${arr[i]}, `);
}

console.log('задание 2');
// Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

document.write('<br/> Задание 2 <br/>');

arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
let result;

for(let i = 0; i < arr.length; i++) {
    if (arr[i] > -10 && arr[i] < -3) {
        result = arr[i];
        document.write(`${result} `);
    }
}

console.log('задание 3');
// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

document.write('<br/> Задание 3 <br/>');

arr = [];

for(let i = 23; i <= 57; i++) {
    arr.push(i);
}
document.write(`Массив от for [${arr}]`);
console.log(arr);

result = 0;

for(let i = 0; i < arr.length; i++) {
    result += arr[i];
}
console.log(result);
document.write(`<br/>Сумма всех чисел массива = ${result}`);

arr = [],
i = 23;

while(i <= 57) {
    arr.push(i);
    i++;
}
document.write(`<br/>Массив от While [${arr}]`);
console.log(arr);


console.log('задание 4');
// Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.
document.write('<br/> Задание 4 <br/>');

arr = ['10', '20', '30', '50', '235', '3000'];
let num;

for(i = 0; i < arr.length; i++) {
    num = arr[i];
    // console.log(num);
    if (num[0] == '1' || num[0] == '2' || num[0] == '5') {
        document.write(`${num} `);
    }else {
        continue;
    }
};

console.log('задание 5');
// Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

document.write('<br/> Задание 5 <br/>');

arrWeek = [];
arrWeek.push('ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС');

for(let i = 0; i < arrWeek.length; i++) {
    if (arrWeek[i] == 'СБ' || arrWeek[i] == 'ВС') {
        document.write(` <strong>${arrWeek[i]}</strong> `);
    } else {
        document.write(` ${arrWeek[i]} `);
    }
};

console.log('задание 6');
// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

arr = new Array(1234, true, null, 'строка');
arr.push('LastElement');
console.log(arr[arr.length - 1]);

// альтернативный простой вариант

console.log(arr.at(-1));

console.log('задание 7');
// Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

document.write('<br/> Задание 7 <br/>');

arr = [];

while(true) {
    num = prompt('ВВедите число.');
    if (num == '') {
        break;
    }else {
        arr.push(+num);
    }
}

document.write(`Введённый массив ${arr}.`);

arr.sort(function(a, b) {
    return a - b;
});

document.write(`<br/> Сортированный массив ${arr}.`);


console.log('задание 8');
// Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

document.write('<br/> Задание 8 <br/>');

arr = [12, false, 'Текст', 4, 2, -5, 0],
arrRez = [],
i = arr.length;

while(i > 0) {
    i--;
    // console.log(arr[i]);
    arrRez.push(arr[i]);
}

document.write(`Через while: ${arrRez} <br/>`);

// через реверс

arr = [12, false, 'Текст', 4, 2, -5, 0],

arrRez = arr.reverse();
// console.log(arrRez);

document.write(`Через реверс: ${arrRez}`);

// правильное (ли) решение
arr = [12, false, 'Текст', 4, 2, -5, 0],
i = arr.length - 1,
rez = [];

while (i >= 0) {
    rez.push(arr[i].toString().split('').reverse().join(''))
    i--;
}

document.write(`<br/>Ответ: ${rez}`);


console.log('задание 9');
// Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

document.write('<br/> Задание 9 <br/>');

arr = [5, 9, 21, , , 9, 78, , , , 6];

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == undefined) {
        count ++;
    }
}
document.write(`Кол-во пустых эл-во = ${count}`);

console.log('задание 10');
// Найдите сумму элементов массива между двумя нулями (первым и последним нулями
//     в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
//     более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
//     [1,8,0,13,76,8,7,0,22,0,2,3,2].

document.write('<br/> Задание 10 <br/>');

arr = [48,9,0,4,21,2,1,0,8,0,76,8,4,13,2],
start = arr.indexOf(0),
finish = arr.lastIndexOf(0),
sum = 0;

if (start == -1 || finish == -1 || start == finish) {
    document.write(`<br/> Меньше двух нулей, поэтому ${0} <br/>`);
} else {
    for (i = start; i <= finish; i++) {
        sum += arr[i];
    }
}
document.write(`Сумма чисел между нулями = ${sum}<br/>`);

// правильное решение

arr = [1,8,0,13,76,8,7,0,22,0,2,3,2],
start = arr.indexOf(0),
end = arr.lastIndexOf(0),
sum = 0;

if (start !== -1 && end !== -1) {
    for (; start < end; start++) {
        sum += arr[start];
    }
    console.log(sum);
}else {
    console.log(sum);
}

console.log('задание 11');

// *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5, на экране:
//          ^
//         ^^^
//        ^^^^^
//       ^^^^^^^
//      ^^^^^^^^^

document.write('<br/> Задание 11 <br/>');

// Треугольник без массивов
document.write(`<hr>`);

hight = 5; //Имитация высоты, которую выберет пользователь
count = hight - 1;
for(i = 0; i < hight; i++) {
    document.write(`<br>`);
    for(j = 0; j < hight; j++) {
        if(j < count) {
            document.write('&nbsp');
        } else {
            document.write('^');
        }
    }
    count--;
}

document.write(`<hr>`);

// правильное решение

let a = 5;

for(let i = 1; i < a; i++) {
    // document.write('<pre>' + ' '.repeat(a - i) + '^'.repeat(i * 2 - 1) + ' '.repeat(a - i) + '</pre>');
    let str = '';
    for (b = 0; b < a - i; b++){
        str += ' ';
    }
    for (let c = 0; c < i * 2 - 1; c++){
        str += '^';
    }
    for (let d = 0; d < a - i; d++){
        str += ' ';
    }
    document.write(`<pre>${str}<pre/>`);
}