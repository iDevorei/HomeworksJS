//Циклы do... while, while, for. Вложенные циклы.

console.log('Задание 1');

for(let i = 1; i <= 50; i++) {
    document.write(` ${i} `);
}

document.write(`<hr>`);

for(let i = 35; i >= 8; i--) {
    document.write(` ${i} `);
}
console.log('');
console.log('Задание 2');
document.write(`<hr>`);

let i = 89;
while(i >= 11) {
    document.write(`${i}<br>`);
    i--;
}

console.log('');
console.log('Задание 3');
document.write(`<hr>`);

let sum = 0;
for(let i = 0; i <= 100; i++) {
    sum += i;
}
document.write(`сумма от 0 до 100 = ${sum}`);

console.log('');
console.log('Задание 4');
document.write(`<hr>`);

sum = 0;

for(let i = 1; i <= 5; i++) {
    sum = 0;
    for(let j = 1; j <= i; j++) {
        sum += j;
    }
    document.write(`сумма чисел в числе ${i} = ${sum}<br>`);
}

console.log('');
console.log('Задание 5');
document.write(`<hr>`);

for(let i = 8; i <= 56; i++) {
    if(i % 2) continue;
    document.write(` ${i} `);
}

document.write(`<br>`);

i = 7;
while(i <= 56) {
    i++;
    if(i % 2) continue;
    document.write(` ${i} `);
}

console.log('');
console.log('Задание 6');
document.write(`<hr>`);

for(let i = 2; i <= 9; i++) {
    document.write(`<hr>`);
    for(let j = 1; j <= 10; j++) {
        document.write(`${i} * ${j} = ${i * j}<br>`);
    }
}

console.log('');
console.log('Задание 7');
document.write(`<hr>`);

let num = 0;
for(let n = 1000; n >= 50; n /= 2) {
    num++;
    document.write(`Результаты: ${n}<br>`);
}
document.write(`Количество итераций = ${num}`);

console.log('');
console.log('Задание 8');
document.write(`<hr>`);

let rez = 0;
let count = 0;
while(true) {
    let num = +prompt('введите число');
    cycle: if(num == 0 || num == '') break;
    if(isNaN(num)) {
        alert('Не число. Введите число!'); continue;
    }
    rez += num;
    count++;
    average = rez / count;
}
document.write(`Сумма чисел ${rez}<br> Среднее арифметическое ${average}`);

console.log('');
console.log('Задание 9');
document.write(`<hr>`);

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

let current = '',
    min,
    max;

for(let i = 0; i < str.length; i++) {
    current += str[i];
    if(+str[i] && !+str[i + 1]) {
        if(typeof min !== 'number' || current < +min) min = +current;
        if(typeof max !== 'number' || current > +max) max = +current;
        current = '';
    }
}
document.write(`Минимальное число ${min}. Максимальное число ${max}.`);

console.log('');
console.log('Задание 10');
document.write(`<hr>`);

let n = Math.floor(Math.random() * (999999 - 1 + 1)) + 1;

let m = String(n);

let numOfM = m.split('');

document.write(`Вводится число: ${m} <br>`);

document.write(`Цифр в числе: ${numOfM.length}<br>`);

for(let i = n; i <= n; i++) {
    sum = 0;
    for(let j = 1; j <= i; j++) {
        sum += j;
    }
    document.write(`сумма чисел в числе ${i} = ${sum}<br>`);
}

revers = '';
for(let i = 0; i < m.length; i++) {
    revers = m[i] + revers;
}
document.write(`Обратный порядок: ${revers}`);






