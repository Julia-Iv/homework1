function miniGames1() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    while (true) {
        let guessNumber = prompt ("Угадай число от 1 до 100");
        guessNumber = Number(guessNumber);
        if (guessNumber === randomNumber) {
            alert ("Молодец! Ты угадал числою");
            break;
        } else if (guessNumber > randomNumber) {
            alert ("Твое число больше загаданного, попробуй еще угадать!");
        } else {
            alert ("Твое число меньше загаданного, попробуй еще угадать!");
        }

    }
}