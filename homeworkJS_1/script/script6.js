// задание 7

let S = 2000000,
    p = 0.10,
    years = 5,
    month = years *12;

let  Pereplata = S * p / (1 - (1 / (1 + p)) * month);
console.log (Pereplata, typeof Pereplata);