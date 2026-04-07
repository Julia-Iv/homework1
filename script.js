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



/*
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


/*let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = i;
for (let i = 1; i < 10; i++) {
    if (i < min) 
    console.log(min);  
  }
   */ 

/*
  // Homework 5
  
  // Задание 1. Напишите функцию, которая возвращает меньшее из двух чисел.
  // Например, из двух чисел — 8 и 4 — функция должна вернуть значение 4. 
  // Если мы передаем два одинаковых значения, например 6 и 6, то функция должна 
  // вернуть это значение (в данном случае — 6).

  const min = (a, b) => (a < b) ? a : b;
  console.log(min(8,4));
  console.log(min(6,6));
  
  //Задание 2. Напишите функцию, которая принимает число и возвращает: строку 
  // 'Число четное', если число четное;строку 'Число нечетное', если число нечетное.

 function isEven(n) {
    if (n % 2 === 0) {
        return ('число четное')
 } else {
    return ('число нечетное')
 }
 }

 console.log(isEven(2));
 console.log(isEven(3));
 console.log(isEven(55));
 console.log(isEven(68));

 //Задание 3. Напишите функцию, которая принимает параметром число и выводит 
 // в консоль квадрат этого числа. Напишите функцию, которая принимает параметром 
 // число и возвращает квадрат этого числа значением — так, чтобы потом это значение 
 // можно было использовать.
 
 const sqr = (x) => {
    return x ** 2
 }
 console.log(sqr(4));
 console.log(sqr(25));

 //Задание 4. Создайте функцию, которая: Спрашивает у пользователя, сколько ему лет.
 // Если пользователь введет отрицательное число — выведет на экран 'Вы ввели 
 // неправильное значение'.Если пользователь введет число от 0 до 12 — выведет на экран 
 // 'Привет, друг!'.Если пользователь введет число больше или равно 13 — выведет на экран 
 // 'Добро пожаловать!'.

 function age() {
    let age = +prompt('Сколько тебе лет?');
if (age < 0) {
    alert ('Вы ввели неправильное значение');
}
else if (age >= 0  || age <= 12) {
    alert ('Привет, друг!');
}
else if (age >= 13)
    {
    alert('Добро пожаловать!');
}   
 }
 age();

 //Задание 5. Напишите функцию, которая принимает на вход два числа, 
 // а далее следует алгоритму:Проверяет, являются ли переданные параметры 
 // корректными числами. Если нет — возвращает строку 'Одно или оба значения 
 // не являются числом'. Если оба параметра — числа, то возвращает произведение 
 // данных чисел.

 function calc(a,b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) && isNaN(b)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b
    }
 }

 console.log(calc(3,10));

 //Задание 6. Напишите функцию, которая выполняет следующий алгоритм: Запрашивает у пользователя 
 // число. Проверяет, является ли введенное значение числом. Если значение не является числом, 
 // возвращает строку 'Переданный параметр не является числом'.Если значение является числом, 
 // возвращает строку 'n в кубе равняется <получившееся значение>', где n — введенное число, 
 // а получившееся значение> — число, возведенное в куб. Проверьте работу функции с числами 
 // от 0 до 10.

 function getNumber() {
    let number = prompt ('Введите число');
    if (isNaN(number)){
        return 'Переданный параметр не является числом';
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }
 }
 console.log(getNumber());

 //Задание 7. Создайте два объекта, circle1 и circle2, каждый из которых имеет свойство radius. 
 // Оба объекта должны иметь: Метод getArea, который возвращает площадь круга, вычисляемую 
 // через радиус. Метод getPerimeter, который возвращает периметр окружности.

 function getArea() {
    return Math.PI * this.radius ** 2;
 }
 function getPerimeter () {
    return 2 * Math.PI * this.radius;
 }
 const circle1 = {
    radius: 5,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
 }
 const circle2 = {
    radius: 25,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
 }
 console.log(circle1.methodGetArea());
 console.log(circle2.methodGetArea());
 console.log(circle1.methodGetPerimeter());
 console.log(circle2.methodGetPerimeter());

 */

/*
 //HOMEWORK 6

 //Задание 1. Дан массив: [1, 5, 4, 10, 0, 3].Создайте цикл, который будет
 //выводить элементы массива до тех пор, пока не встретит значение 10. 
 // После вывода значения 10 в консоль цикл должен прекратить свою работу.

 const numbs = [1, 5, 4, 10, 0, 3];
 for ( i = 0; i < numbs.length; i++ ) {
        console.log(numbs[i]);
    if (numbs[i] === 10) {
        break;
    }    
 }

 //Задание 2. Дан массив: [1, 5, 4, 10, 0, 3].
 // Найдите индекс значения 4 в этом массиве.

 const arr = [1, 5, 4, 10, 0, 3];
 for ( i = 0; i < arr.length; i++)
 {
    if ( arr[i] == 4) {
        console.log(i);
        break;
    }
 }

 //задание 3. Дан массив чисел: [1, 3, 5, 10, 20].
 // С помощью метода join выведите элементы массива 
 // через пробел (пустую строку ' ').

 const numb = [1, 3, 5, 10, 20];
 console.log(numb.join(' '));

 //Задание 4. С помощью вложенных циклов создайте многомерный массив вида: 
 // [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

let numb1 = [];
for (let i = 0; i < 3; i++) {
    const numb2 = []
    for (let i = 0; i < 3; i++) {
      numb2.push(1);
   }
   numb1.push(numb2);
}
console.log(numb1);

//Задание 5. Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

const array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);

//Задание 6. Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте
//  массив и удалите букву 'a'из массива. Затем выведите массив.

const array1 = [9, 8, 7, 'a', 6, 5];
array1.sort();
console.log(array1);
const filterArray1 = array1.filter((array) => array !=='a');
console.log(filterArray1);

//Задание 7. Дан массив: [9, 8, 7, 6, 5]. Попросите пользователя угадать число 
// с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, 
// выведите в alert«Угадал», в противном случае — «Не угадал».

const array2 = [9, 8, 7, 6, 5];
const user = +prompt('Угадай число'); {
if (array2.includes(user)){
    alert('Угадал');
}else {
    alert('Не угадал');
}
}

//Задание 8. Дана строка: 'abcdef'. Выведите в консоль 'fedcba'

let str = 'abcdef';
str = str.split('');
console.log(str);
str.reverse();
str = str.join('');
console.log(str);

//Задание 9. Дан массив: [[1, 2, 3],[4, 5, 6]].
//Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const comb = [...arr1, ...arr2];
console.log(comb);

//Задание 10. Создайте массив с произвольными числами (диапазон от 1 до 10). 
//Переберите его с помощью цикла for. В каждой итерации выведите в консоль 
//сумму текущего и следующего элементов массива.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < number.length; i++) {
    if (number[i + 1]){
    console.log(number[i] + number[i + 1]);
    }
}

//Задание 11. Создайте функцию, которая принимает на вход массив целых чисел, 
//а возвращает массив квадратов этих чисел.

function square(arr) {
    return arr.map(item => item **2);
}

console.log(square([2, 4, 5]));

//Задание 12. Создайте функцию, которая принимает на вход массив строк,
// а возвращает массив длины слов.

function strLenght(arr) {
    return arr.map(item => item.length);
}

console.log(strLenght(['Привет', 'как', 'дела']));

//Задание 13.Создайте функцию, которая принимает на вход массив целых чисел,
// а возвращает массив, содержащий только отрицательные значения.

function minusNumb(arr) {
    return arr.filter(item => item < 0);
}

console.log(minusNumb([1, 3, -7, 9, -2]));

//Задание 14. Создайте массив, состоящий из 10 значений. 
//Значения массива необходимо сгенерировать с помощью метода Math.random() 
// в диапазоне от 0 до 10.В данном массиве найдите все четные значения и 
// добавьте их в новый массив. Результат работы программы необходимо вывести 
// в консоль — это будут два массива: исходный массив и массив с четными значениями.

function random() {
    return Math.floor(Math.random() * 10);
}
const arrNumb = [];
for (let i = 0; i < 10; i++){
    arrNumb.push(random());
}
const evenNumb = [];
for (let i = 0; i < arrNumb.length; i++) {
    if (arrNumb[i] % 2 === 0) {
        evenNumb.push(arrNumb[i]);
    }
}

console.log(arrNumb);
console.log(evenNumb);

// Задание 15. Создайте массив, состоящий из 6 элементов.
// Элементы массива необходимо сгенерировать с помощью Math.random() 
// в диапазоне от 1 до 10.Требуется найти среднее арифметическое этих цифр, 
// результат программы вывести в консоль.

function random() {
    return Math.floor(Math.random() * 10);
}
const arrayNumb = [];
for (let i = 0; i < 6; i++){
    arrayNumb.push(random());
}
console.log(arrayNumb);
console.log(arrayNumb.reduce((a,b) => a + b) / arrayNumb.length);

*/

/*
//HOMEWORK 7

//Задание 1. Преобразовать строку 'js'в верхний регистр.

let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2. Создать функцию, которая принимает массив строк и строку.
// Функция должна вернуть новый массив, содержащий только те элементы
// первого массива, которые начинаются со второй строки. Регистр 
// символов не влияет на результат.

function filter(arr, str) {
   const lowerStr = str.toLowerCase();
return arr.filter(item => item.toLowerCase().startsWith(lowerStr));    
}
console.log(filter(['Hello', 'Hi','Goodbay'], 'good'));

//Задание 3. Округлить число 32.58884: До меньшего целого. 
// До большего целого. До ближайшего целого.

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4. Найти минимальное и максимальное значения из чисел
//  52, 53, 49, 77, 21, 32 и вывести их в консоль.

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


//Задание 5. Создать функцию, которая выводит в консоль случайное 
// число от 1 до 10.

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomNumber());

//Задание 6. Написать функцию, которая принимает целое число и 
// возвращает массив случайных чисел от 0 до этого числа. 
// Длина массива должна быть в два раза меньше переданного числа.

function getRandomNumber(num) {
 return Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}
console.log(getRandomNumber(8));

//Задание 7. Создать функцию, которая принимает два целых числа и 
// возвращает случайное число в этом диапазоне.

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
 }
console.log(getRandomInt(4, 8));

//Задание 8. Вывести в консоль текущую дату.

let myDate = new Date();
console.log(myDate);


//Задание 9. Создать переменную currentDate, хранящую текущую дату. 
// Вывести дату, которая наступит через 73 дня после текущей.
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10.
//Написать функцию, которая принимает дату и возвращает ее в формате:
//  Дата: [число] [месяц на русском] 
// [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function formatDate(date) {
    const days = ["воскресенье","понедельник", "вторник", "среда", "четверг", "пятница","суббота"];
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `
    Дата: ${day} ${months[month]} ${year} - это ${dayWeek} 
    Время: ${hours}ч${minutes}м${seconds}с`; 
}
console.log(formatDate(new Date()));
*/

//HOMEWORK 8

//Задание 1. С помощью метода массива sort отсортируйте массив people
//  по возрастанию возраста и выведите результат в консоль.

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//Задание 2. Реализуйте функцию filter, которая должна работать 
// аналогично методу массива filter. Возьмите за основу функцию map, 
// которую мы реализовывали на уроке. Чтобы из функции map сделать 
// filter, нужно, в зависимости от результата вызова ruleFunction, 
// принимать решение о том, добавлять в результирующий массив 
// очередной элемент или нет.

function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
       if (ruleFunction(array[i])) {
        result.push(array[i])
       }        
    }
    return result;
}

function isPositive(num) {
return num > 0;
}
function isMale(person) {
return person.gender === 'male';
}

console.log(filter([5, -4, 1, 9], isPositive));

const peopl = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopl, isMale));

//Задание 3. Напишите программу, которая на протяжении 30 секунд 
// каждые 3 секунды будет выводить в консоль текущую дату. 
// Последней строкой должно выводиться сообщение «30 секунд прошло».

const intervalId = setInterval(() => {console.log(new Date())}, 3000);
setTimeout(() => {
    clearInterval(intervalId); 
    console.log('30 секунд прошло');
}, 30000);

//Задание 4. Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска. 
// Допишите функцию delayForSecond так, чтобы приветствие выводилось 
// в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.

function delayForSecond(callback) {
    setTimeout(callback, 1000);
   callback();
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//Задание 5. 
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));








