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
    //if (guessNumber === null) {
      //      return;
       // } 
}

