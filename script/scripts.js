// «Условный оператор if...else. Вложенные условия. Оператор выбора switch.»
// homework 2
console.log('');
console.log('Задание 1');
// Задание 1

let name = prompt('Ваше имя?');
    age = prompt('Ваш возраст?'),
    city = prompt('Ваш город проживания?'),
    phone = prompt('Ваш телефонный номер?'),
    email = prompt('Ваша эл. почта?'),
    company = prompt('Место работы?');

document.write(`<h2>Меня зовут ${name}. Мне ${age}. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: Телефон (${phone}), эл. почта (${email})</h2>`);

alert(`Меня зовут ${name}. Мне ${age}. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: Телефон (${phone}), эл. почта (${email})`);

console.log('');
console.log('Задание 2');
// Задание 2

let  today = new Date();
let year = today.getFullYear();
let YearOfBirthday = year - age;

document.write(`<h3>${name} родился в ${YearOfBirthday} году.</h3>`);

alert(`${name} родился в ${YearOfBirthday} году.`);

console.log('');
console.log('Задание 3');
// Задание 3

let string = '123123';

let a = Number(string[0]),
    b = Number(string[1]),
    c = Number(string[2]),
    d = Number(string[3]),
    f = Number(string[4]),
    j = Number(string[5]),
    sum1 = a + b + c,
    sum2 = d + f + j;

(sum1 == sum2) ? console.log('Да!') : console.log('Нет!');

console.log('');
console.log('Задание 4');
// Задание 4

a = 1;

(a > 0) ? console.log('Верно') : console.log('Неверно');

a = 0;

(a > 0) ? console.log('Верно') : console.log('Неверно');

a = -3;

(a > 0) ? console.log('Верно') : console.log('Неверно');

console.log('');
console.log('Задание 5');
// Задание 5

a = 10;
b = 2;
let sum = a + b,
    diff = a - b,
    mult = a * b,
    separ = a / b;
    sumOfSum = sum + diff + mult + separ;

if(sumOfSum > 1) {
    console.log(Math.pow(sumOfSum, 2));
};

console.log('');
console.log('Задание 6');
// Задание 6

if(a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно.');
} else {
    console.log('Неверно.');
}

console.log('');
console.log('Задание 7');
// Задание 7

let random = Math.floor(Math.random() * (60 - 0)) + 0; //Максимум не включается, минимум включается

if(random > 0 && random <= 15) {
    console.log('Певая четверть часа.');
} else if(random > 15 && random <= 30) {
    console.log('Вторая четверть часа.');
} else if(random > 30 && random <= 45) {
    console.log('Третья четверть часа.');
} else {
    console.log('Четвёртая четверть часа.');
}

console.log('');
console.log('Задание 8');
// Задание 8

let day = Math.floor(Math.random() * (31 - 1 + 1)) + 1; //Максимум и минимум включаются

if(day >= 1 && day < 10) {
    console.log('Первая декада месяца.');
} else if(day >= 10 && day < 20) {
    console.log('Вторая декада месяца.');
} else {
    console.log('Третья декада месяца.');
}


console.log('');
console.log('Задание 9');
// Задание 9

let days = Math.floor(Math.random() * (365 - 1 + 1)) + 1;
    console.log(`Дни ${days}`);

    yearOfDays = days / 365,
    console.log(`Год ${yearOfDays}`);

    monthOfDays = days / 31,
    console.log(`Месяцы ${monthOfDays}`);

    weeksOfDays = days / 7,
    console.log(`Недели ${weeksOfDays}`);

    hoursOfDays = days * 24,
    console.log(`Часы ${hoursOfDays}`);

    minutesOfDays = hoursOfDays * 60,
    console.log(`Минуты ${minutesOfDays}`);

    secondsOfDays = minutesOfDays * 60;
    console.log(`Секунды ${secondsOfDays}`);

if(days < 365) {
    console.log('Меньше года');
}

if(days < 31) {
    console.log('Меньше месяца');
}

if(days < 7) {
    console.log('Меньше недели');
}

console.log('');
console.log('Задание 10');
// Задание 10

//использую значение переменной days из задания 9.

let season;

if(days >= 1 && days <= 31) {
    season = 1;
    let jan = 'Январь';
    console.log(jan);
} else if(days > 31 && days <= 59) {
    season = 2;
    let feb  = 'Февраль';
    console.log(feb);
} else if(days > 59 && days <= 90) {
    season = 3;
    let march = 'Март';
    console.log(march);
} else if(days > 90 && days <= 120) {
    season = 4;
    let aprl = 'Апрель';
    console.log(aprl);
} else if(days > 120 && days <= 151) {
    season = 5;
    let may = 'Май';
    console.log(may);
} else if(days > 151 && days <= 181) {
    season = 6;
    let june = 'Июнь';
    console.log(june);
} else if(days > 181 && days <= 212) {
    season = 7;
    let july = 'Июль';
    console.log(july);
} else if(days > 112 && days <= 243) {
    season = 8;
    let aug = 'Август';
    console.log(aug);
} else if(days > 243 && days <= 273) {
    season = 9;
    let sept = 'Сентябрь';
    console.log(sept);
} else if(days > 273 && days <= 304) {
    season = 10;
    let oct = 'Октябрь';
    console.log(oct);
} else if(days > 304 && days <= 334) {
    season = 11;
    let nov = 'Ноябрь';
    console.log(nov);
} else {
    season = 12;
    let dec = 'Декабрь';
    console.log(dec);
};


switch (season) {
    case 1:
        console.log('Зима');
    break;

    case 2:
        console.log('Зима');
    break;

    case 3:
        console.log('Весна');
    break;

    case 4:
        console.log('Весна');
    break;

    case 5:
        console.log('Весна');
    break;

    case 6:
        console.log('Лето');
    break;

    case 7:
        console.log('Лето');
    break;

    case 8:
        console.log('Лето');
    break;

    case 9:
        console.log('Осень');
    break;

    case 10:
        console.log('Осень');
    break;

    case 11:
        console.log('Осень');
    break;

    case 12:
        console.log('Зима');
    break;
}