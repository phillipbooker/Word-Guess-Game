# Word Guess Game

This is a simple Hangman game. The theme is basketball!

The user tries to guess what the displayed word is by guessing letters using the keyboard. The user input is gathered by adding an event listener to the document for the `keyup` event. The answers are chosen from an array of basketball themed words that is shuffled using the Fisher-Yates algorithm.

As the user guesses letters, JavaScript is used to update panels to display the status of the game including current score, attempted letters, and the number of guesses remaining before the player uses.

Once the user guesses the word correctly a picture relating to the answer is shown as the player is prompted to press another key to continue playing. Once all of the words have been guessed, the user must refresh the page to start over.

## Instructions

Press any letter key to guess and start the game.

You have 15 guesses to find the correct answer.

When you run out of guesses you lose the game.

Try to guess them all!

*Hint: Remember... Think Basketball!!!*

### Technologies
HTML, JavaScript, CSS, Bootstrap 4.3.1

#### Notes

*Not mobile friendly.*