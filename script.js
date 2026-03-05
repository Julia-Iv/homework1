/*HW2-JS
//задание 1
let a = 10;
alert (a);
a = 20;
alert (a);

//задание 2
const iphone = 2007;
alert (iphone);

//задание 3
const nameJS = "Брендан Айк";
alert (nameJS);

//задание 4
let f = 10;
let g = 2;
let sum = f + g;
alert (sum);
let difference = f - g;
alert (difference);
let product = f * g;
alert (product);
let quotient = f / g;
alert (quotient);

//задание 5
let result = 2 **5;
alert (result);

//задание 6
let h = 9;
let j = 2;
let remainder = h % j;
alert (remainder);

//задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert (num);

//задание 8
let age = prompt ("Сколько Вам лет?");
alert (age);

//задание 9
const user = {
name: 'Nikita',
age: 17,
isAdmin: false
};
console.log(user['name']);
console.log(user['age']);
console.log(user['isAdmin']);

//задание 10
let userName = prompt ('Ваше Имя?');
alert(`Привет ${userName}!`);*/

//HW-3
//задание 1

let password = 'пароль';
let enterPassword = prompt('Введите пароль');
if (enterPassword === password) {
    console.log ('Пароль введен верно');
} else {
    console.log('Пароль введен неверно');
}

//задание 2

let c = Number(prompt('Введите число'));
if (c>=0 && c<=10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//задание 3

let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));
if (d>=100 || e>=100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//задание 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//задание 5

let mothNumber = Number(prompt('Введите номер месяца'));
switch (mothNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');        
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');        
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');        
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');        
        break;
    default:
        console.log('Такого месяца нет');
        break;
}

//дополнительное задание 1

let anyNumber = prompt('Пожалуйста, введите любое число');
if (anyNumber === "") {
    console.log('Поле не должно быть пустым');
} else {
let result = Number(anyNumber);
if (isNaN(result)) {
    console.log('Не является числом');
} else {
    if (result % 2 === 0) { 
   console.log('Четное');
  }
 else {
    console.log('Нечетное');
 }
}
}

//дополнительное задание 2

let clientOs = String(prompt('Введите операционную систему: IOS или Android'));
clientOs = clientOs.toLocaleLowerCase();
if (clientOs === 'IOS') {
    console.log('Установите версию приложения для IOS по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке');
}

//дополнительное задание 3
let clientOs1 = prompt('IOS или Android');
let clientDeviceYear = prompt('Введите год выпуска');
if (clientOs1 === 'IOS' && clientDeviceYear <= 2015) {
    console.log('Установите облегченную версию приложения для IOS');
} else if (clientOs1 === 'IOS') {
    console.log('Установите версию приложения для IOS');
}
  else if (clientOs1 === 'Android' && clientDeviceYear <= 2015) {
    console.log('Установите облегченную версию приложения для Android');
} else if (clientOs1 ==='Android') {
   console.log('Установите версию приложения для Android');
}
