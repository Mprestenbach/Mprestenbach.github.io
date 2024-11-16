import random
random.seed()   #Prepare random number generator


# Prestenbach CTI110.0007
# Test cases
# 
# When you input the -999 guess it will tell you that you quit the game.
# 
# When you input a number if you or too high or low it tells you so, if guess the right number it tells you Congratulations! You guessed the correct number.
targetNumber = int(random.random() * 100)
print("Guess a number between 1 and 100 or enter -999 to quit: ")
guessedNumber = int(input())
while guessedNumber != targetNumber and guessedNumber != -999:
    if guessedNumber < targetNumber:
        print("Too Low")
    else:
        if guessedNumber > targetNumber:
            print("Too High")
    print("Guess a number between 1 and 100 or enter -999 to quit: ")
    guessedNumber = int(input())
if guessedNumber == targetNumber and guessedNumber != -999:
    print("Congratulations! You guessed the correct number.")
else:
    print("You quit the game.")
