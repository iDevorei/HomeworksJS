// Задание 8
//происходит конфликт с другим файлом javascript при задавании значения для a!!!
let a01 = 8,
    b01 = 3;

let x1 = ((16 - a01) / 2) + b01;
console.log(x1);

    //a+2*xb=16//// 2*xb=16-a/// xb=(16-a)/2/// x-b=(16-a)/2/// x = ((16-a)/2)+b
    // x-b=f// x=f+b

let x2 = (a01 - 15 * b01) / (b01 - 6);
console.log(x2);

//b(x+15)=a+6x/// b(x+15)-6x=a/// bx+15b-6x=a///bx-6x=a-15b/// 
///x(b-6)=a-15b/// x = (a-15b) / (b-6)

let x3 = 23780 / (1 + 2 + a01 + b01);
console.log(x3);
// x+2x+ax+bx=23780// x(1+2+a+b)=23780// x=23780/(1+2+a+b)
