function main() {
    // Prestenbach CTI110.0007
    // Test cases
    // 
    // When you input the -999 guess it will tell you that you quit the game.
    // 
    // When you input a number if you or too high or low it tells you so, if guess the right number it tells you Congratulations! You guessed the correct number.
    var targetNumber;
    var guessedNumber;

    targetNumber = Math.floor(Math.random() * 100);
    window.alert("Guess a number between 1 and 100 or enter -999 to quit: ");
    guessedNumber = Number(window.prompt('Enter a value for guessedNumber'));
    while (guessedNumber != targetNumber && guessedNumber != -999) {
        if (guessedNumber < targetNumber) {
            window.alert("Too Low");
        } else {
            if (guessedNumber > targetNumber) {
                window.alert("Too High");
            }
        }
        window.alert("Guess a number between 1 and 100 or enter -999 to quit: ");
        guessedNumber = Number(window.prompt('Enter a value for guessedNumber'));
    }
    if (guessedNumber == targetNumber && guessedNumber != -999) {
        window.alert("Congratulations! You guessed the correct number.");
    } else {
        window.alert("You quit the game.");
    }
}
