// Условный оператор if…else. Вложенные условия. Оператор выбора switch.

//Задание 1

console.log('Задание 1')

let name = prompt('ваше имя'),
    age = prompt('возраст'),
    city = prompt('город проживания'),
    phone = prompt('телефон'),
    email = prompt('почтовый ящик'),
    company = prompt('место работы');

console.log('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');

//Задание 2

console.log('')
console.log('Задание 2')

let today = new Date();
let year = today.getFullYear() - age;

console.log(' ' + name + ' родился в  ' + year + ' году. ');

// Задание 3

console.log('')
console.log('Задание 3')

let str = '795168';
let str1 = str[0] + str[1] + str[2];
let str2 = str[3] + str[4] + str[5];

if (str1 == str2){
    console.log('Да');
}else{
    console.log('Нет');
}

// зАдание 4

console.log('')
console.log('Задание 4')

let a = 1; // 1, 0, -3

if (a > 0){
    console.log('Верно');
}else{
    console.log('Неверно');
}

//Задание 5. В фигурных скобках, ибо в заданиях встречаются одинаковые переменные

console.log('')
console.log('Задание 5')

{
let a = 10,
    b = 2;
console.log(`Сумма ${a + b}. Разность ${a - b}. Произведение ${a * b}. Частное ${a / b}.`);

if ((a + b) > 1){
    console.log(Math.pow((a + b), 2));
}else{
    console.log('Мало'); //Это для себя. Так ведь можно делать?
}

// Задание 6. Оно находится в фигурных скобках задания 5.

console.log('')
console.log('Задание 6')

if (a > 2 && a < 11 || b >= 6 && b < 14){
    console.log('Верно');
}else{
    console.log('Неверно');
}

}

// Задание 7

console.log('')
console.log('Задание 7')

let n = Math.floor(Math.random() * (59 - 0) + 0);
console.log(n);

if (n < 15){
    console.log('Первая четверть');
}else if (n > 15 && n < 30){
    console.log('Вторая четверть');
}else if (n > 15 && n >= 30 && n <= 45){
    console.log('Третья четверть');
}else if (n > 15 && n >= 30 && n > 45 && n < 60){
    console.log('четвёртая четверть');
}else{

}

// Задание 8

console.log('')
console.log('Задание 8')

let day = Math.floor(Math.random() * (31 - 1) + 1);
console.log(day);

if (day < 10){
    console.log('Первая декада месяца');
}else if (day > 10 && day < 20){
    console.log('Вторая декада месяца');
}else if (day > 10 && day >= 20 && day <= 31){
    console.log('Третья декада месяца')
}

//Задание 10

console.log('')
console.log('Задание 10')

let dayOfMonth = day + Math.floor(Math.random() * (334 - 1) + 1);

if (dayOfMonth >= 0 && dayOfMonth <= 31){
    console.log('Январь');
}else if (dayOfMonth > 31 && dayOfMonth <= 59){
    console.log('Февраль');
}else if (dayOfMonth > 59 && dayOfMonth <= 90){
    console.log('Март');
}else if (dayOfMonth > 90 && dayOfMonth <= 120){
    console.log('Апрель');
}else if (dayOfMonth > 120 && dayOfMonth <= 151){
    console.log('Май');
}else if (dayOfMonth > 151 && dayOfMonth <= 181){
    console.log('Июнь');
}else if (dayOfMonth > 181 && dayOfMonth <= 212){
    console.log('Июль');
}else if (dayOfMonth > 212 && dayOfMonth <= 243){
    console.log('Август');
}else if (dayOfMonth > 243 && dayOfMonth <= 273){
    console.log('Сентябрь');
}else if (dayOfMonth > 273 && dayOfMonth <= 304){
    console.log('Октябрь');
}else if (dayOfMonth > 304 && dayOfMonth <= 334){
    console.log('Ноябрь');
}else if (dayOfMonth > 334 && dayOfMonth <= 365){
    console.log('Декабрь');
}


if (dayOfMonth >= 0 && dayOfMonth <= 31){
    p = 1;
}else if (dayOfMonth > 31 && dayOfMonth <= 59){
    p = 2;
}else if (dayOfMonth > 59 && dayOfMonth <= 90){
    p = 3;
}else if (dayOfMonth > 90 && dayOfMonth <= 120){
    p = 4;
}else if (dayOfMonth > 120 && dayOfMonth <= 151){
    p = 5;
}else if (dayOfMonth > 151 && dayOfMonth <= 181){
    p = 6;
}else if (dayOfMonth > 181 && dayOfMonth <= 212){
    p = 7;
}else if (dayOfMonth > 212 && dayOfMonth <= 243){
    p = 8;
}else if (dayOfMonth > 243 && dayOfMonth <= 273){
    p = 9;
}else if (dayOfMonth > 273 && dayOfMonth <= 304){
    p = 10;
}else if (dayOfMonth > 304 && dayOfMonth <= 334){
    p = 11;
}else if (dayOfMonth > 334 && dayOfMonth <= 365){
    p = 12;
}
switch (p) {
    case 1:
    case 2:
    case 3:
        console.log('Зима');
    break;
    case 4:
    case 5:
    case 6:
        console.log('Весна');
    break;
    case 7:
    case 8:
    case 9:
        console.log('Лето');
    break;
    case 10:
    case 11:
    case 12:
        console.log('Осень');
    break;
}


// Задание 9

console.log('')
console.log('Задание 9')

/*let days = Math.floor(Math.random() * (99 - 1) + 1);
console.log('Дни', days);*/

let days = prompt('Введите любое количество дней')

let years = days / 365;
console.log('Года', Math.floor(years));

let months = days / 31;
console.log('Месяцы', Math.floor(months + 1));

let weeks = days / 7;
console.log('Недели', Math.floor(weeks));

let hours = days * 24;
console.log('Часы', Math.floor(hours));

let minutes = hours * 60;
console.log('Минуты', Math.floor(minutes));

let seconds = minutes * 60;
console.log('Секунды', Math.floor(seconds));

if (days < 7){
    console.log('Меньше недели');
}else if (days >= 7 && days < 31){
    console.log('Меньше месяца');
}else if (days >= 7 && days >= 31 && days < 365){
    console.log('Меньше года')
}

