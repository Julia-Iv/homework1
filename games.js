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

