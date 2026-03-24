function miniGames1() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    //if (randomNumber === null) {
      //      return;
        //}
    while (true) {
        let guessNumber = prompt ("Угадай число от 1 до 100");
        if (guessNumber === null) {
            return;
        }
        guessNumber = Number(guessNumber);
        if (guessNumber === randomNumber) {
            alert ("Молодец! Ты угадал числою");
            break;
        } else if (guessNumber > randomNumber) {
            alert ("Твое число больше загаданного, попробуй еще угадать!");
        } else if (guessNumber < randomNumber) {
            alert ("Твое число меньше загаданного, попробуй еще угадать!");
        }
    }
}

 // Функция генерации случайного числа в заданном диапазоне
 function getRandomInt(min, max) {
 return Math.Floor(Math.Random() * (max - min + 1)) + min;
}

 // Функция создания примера
 function miniGames2() {
 const ops = ['+', '-', '*', '/'];
 const op = ops[getRandomInt(0, 3)];
 let a, b;
 let userAnswer = prompt(`Сколько будет ${op}?`);
 

 switch (op) {
 case '+':
 a = getRandomInt(1, 50);
 b = getRandomInt(1, 50);
 break;
 case '-':
 a = getRandomInt(10, 100);
 b = getRandomInt(1, a - 1);
 break;
 case '*':
 a = getRandomInt(2, 10);
 b = getRandomInt(2, 10);
 break;
 case '/':
 // Чтобы результат был целым числом
 a = getRandomInt(2, 20);
 b = getRandomInt(2, 10);
 while (a% b!== 0) {
 a = getRandomInt(2, 20);
}
 break;
}

 const question = `${a} ${op} ${b}`;
 const correctAnswer = eval(question);
 
 return {
 question: question,
 answer: correctAnswer
}
if (question === correctAnswer){
    alert ('Ответ верный');
 } else {
    alert ('Не верно');
 }

}
/*
 // Основная функция проверки ответа
 function checkAnswer() {
 const userInput = document.GetElementById('userAnswer').Value;
 const {question, answer} = createQuestion();

 // Обновляем пример
 document.GetElementById('question').TextContent = `Решите пример: ${question}`;

 if (userInput === '') {
 document.GetElementById('result').TextContent ='jjjjk';
 }
}
//const sign = ['+', '-', '*', '/'];
//const minNumber = 1;
//const maxNumber = 50;
//генерация случайной задачи
//function miniGames2() {
//const sign1 = sign[Math.floor(Math.Random() * sign.Length)];
//let a, b, result;
 //if (sign1 === '+') {
 //a = Math.Floor(Math.Random() * (maxNumber - (minNumber + 1))) + minNum;
 //b = Math.Floor(Math.Random() * (maxNum - (minNum + 1))) + minNum;
 /*result = a + b;
} else if (sign1 === '-') {
 a = Math.Floor(Math.Random() * (maxNum - (minNum + 1))) + minNum;
 b = Math.Floor(Math.Random() * (a - (minNum + 1)) + minNum ) ; // b ≤ a
 result = a - b;
} else if (sign1 === '*') {
 a = Math.Floor(Math.Random() * (maxNum - (minNum + 1))) + minNum;
 b = Math.Floor(Math.Random() * (maxNum - (minNum + 1))) + minNum;
 result = a * b;
} else if (sign1 === '/') {
 // Чтобы результат был целым
 a = Math.Floor(Math.Random() * (maxNum - (minNum + 1))) + minNum;
 b = Math.Floor(Math.Random() * (a / minNum)) + 1; // b ≥ 1, a делится на b
 result = a / b;
}
let result = 
}

//function getRandomElement(array) {
//const randomIndex = Math.floor(Math.random() * array.length);
//return array[randomIndex];
//}
for (let i = 0; i < sign.length; i++){
    sign.push(miniGames2());
}
console.log(miniGames2(sign));

//const fruits = ["🍎", "🍌", "🍊", "🍇", "🍓"];
//console.log(getRandomElement(fruits)); // Может вернуть любой фрукт*/
