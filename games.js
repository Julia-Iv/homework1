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
function miniGames2() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 const ops = ['+', '-', '*', '/'];
 const op = ops[getRandomInt(0, 3)];
 let a, b;
 

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
 b = getRandomInt(2, 2);
}
 break;
}
let userAnswer = prompt(`Сколько будет ${a} ${op} ${b} = ?`);
if (userAnswer === null) {
            return;
        }
userAnswer = Number(userAnswer);
        
 const question = `${a} ${op} ${b}`;
 const correctAnswer = eval(question);
 if (userAnswer === correctAnswer){
    alert ('Ответ верный');
 } else {
    alert ('Не верно');
 }
 
}
function miniGames3() {
  let input = prompt('Введите текст');
   
 // Проверяем, что текст не пустой
 if (input.trim() === '') {
 prompt ('Пожалуйста, введите текст!');
 return;
}
 // Переворачиваем текст по буквам
 input = input.split('');
 input.reverse();
 input = input.join('');
 input.toUpperCase();
  
//input.toUpperCase() === word.toUpperCase().split('').reverse().join('');
   alert (`Перевертыш ${input}`);
 }


function miniGames5() {
          const quiz = [
           {
               question: "Какой цвет неба?",
               options: ["1. Красный", 
                         "2. Синий", 
                         "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];
       let score = 0;
    function startQuiz() {    
    quiz.forEach((item, index) => {
    // const questionText = prompt(`${index + 1}. ${item.question}`)
    let questionText = `Вопрос ${index + 1}: ${item.question}\n` + item.options.join('\n');
   //questionText += ` ${item.options.b}\n`;
   // questionText += ` ${item.options.b}\n`;
   // questionText += ` ${item.options.b}`;

    let userAnswer = prompt(questionText);
        if (parseInt(userAnswer) === item.correctAnswer) {
      score++;
        }
    if (userAnswer && userAnswer.toLowerCase() === item.correctAnswer) {
      score++;
    }
    });
    
    alert(`Викторина окончена!\nПравильных ответов: ${score} из ${quiz.length}`);
}

   startQuiz();
 
    }

function miniGames4() {
    const option = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * 3);
    return  option[randomIndex];
        
}
function game() {
    const userPlay = prompt("Камень, ножницы, бумага");
    const computerPlay = miniGames4();
    alert (`Компьютер: ${computerPlay}`);
  if (userPlay === computerPlay) {
    alert("Ничья!");
}
  else if ((userPlay === "камень" && computerPlay === "ножницы") ||
      (userPlay === "бумага" && computerPlay === "камень") ||
      (userPlay === "камень" && computerPlay === "бумага") ||
      (userPlay === "ножницы" && computerPlay === "бумага")) {
    alert("Вы выиграли!");
  }
  else {
    alert ("Компьютер выиграл!")
  }
 }
    