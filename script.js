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

/*let password = 'пароль';
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
*/




// HOMEWORK 4

// Задание 1. Выведите в консоль 2 раза слово Привет
for (let i = 0; i < 2.; i++) {
    console.log('Привет');    
}

// Задание 2. Выведите в консоль цифры от 1 до 5
let i=1;
while (i<=5) {
    console.log(i);
    i++;
}

// Задание 3. Выведите в консоль числа от 7 до 22
for (let i = 7; i <= 22; i++) {
console.log(i);   
}

// Задание 4. Есть объект (назовем его obj), который содержит 
// следующие пары ключ-значение:"Коля" : '200' "Вася" : '300' "Петя" : '400'
//Эти пары представляют собой имена сотрудников и их зарплаты в долларах. 
// Ваша задача написать код, который будет проходиться по всем записям 
// этого объекта и выводить информацию о каждом сотруднике в формате: 
// "имя сотрудника" — зарплата "сумма" долларов.

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400',
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Задание 5. Дано число  n=1000. Ваша задача — делить его на 2 до тех пор, 
// пока результат деления не станет меньше 50. Определите, какое число получится 
// в результате. Вычислите количество итераций (проходов цикла), которые потребовались 
// для достижения результата, и запишите это количество в переменную num

let n = 1000;
let num = 0;
while (n >= 50) {
    n/=2;
    console.log(n);
    num++;
}
console.log(`Количество циклов ${num}`);

// Задание 6. В вашей компании пятница является отчетным днем.

//Нужно написать программу, которая: считает дни месяца по датам,
//определяет, какой день пятница,выводит сообщение с напоминанием, 
//что нужно подготовить еженедельный отчет.
//Условия задачи:

//Создайте переменную, которая хранит в себе номер первой пятницы месяца
// (число от 1 до 7).
//Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида:
//  "Сегодня пятница, ...-е число. Необходимо подготовить отчет."
//Исходите из того, что в нашем месяце 31 день. Должно вывестись от 4 до 5 сообщений 
// с напоминаниями по разным датам.

let dayFriday = 6;
let allDay = 31;
for (let i = dayFriday; i <= allDay; i += 7) {
console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);    
}

// Доп. задание 1. Дано число k = 100. Ваша задача — вычитать из него до тех пор,
//  пока результат вычитания не станет меньше 0. Определите, какое число получится
//  в результате. Вычислите количество итераций (проходов цикла), которые потребовались 
// для достижения результата, и запишите это количество в переменную iterations

let k = 100;
let iterations = 0;
while (k > 0) {
    k -= 7;
    console.log(k);
    iterations++;
}
console.log(`Количество итераций ${iterations}`);

// Доп. задание 2. Создайте массив months с названиями всех месяцев года. 
// Напишите программу, которая выводит название каждого месяца и его порядковый
//  номер в году.
const months = {
    январь: '1',
    февраль: '2',
    март: '3',
    апрель: '4',
    май: '5',
    июнь: '6',
    июль: '7',
    август: '8',
    сентябрь: '9',
    октябрь: '10',
    ноябрь: '11',
    декабрь: '12',
}
for (const key in months) {
    console.log(`${key}: ${months[key]}`);
}

// Доп. задание 3. Создайте объект, описывающий книгу, с такими свойствами 
// как "название", "автор", "год издания", "жанр". Напишите код, 
// который выводит все свойства этого объекта в консоль.

const book = {
    bookName: 'Мышление, которое меняет все',
    author: 'Имомходжа Амон',
    data: '2025',
    genre: 'психология', 
}
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}


// Доп. задание 4. Создайте массив из 10 случайных чисел. 
// Напишите код, который находит минимальное число в массиве и 
// выводит его в консоль.

/*let number = [10];
for (let i = 1; i < number; i++) {
    if (i < min)
console.log(min);   } 
    {
    else (i = max)
}*/


let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = i;
for (let i = 1; i < 10; i++) {
    if (i < min) 
    console.log(min);  
  }
    