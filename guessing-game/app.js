let maximum = parseInt(prompt('Enter the maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

let guess = prompt("Enter your first guess (Type 'q' to quit)");  // with parseInt removed that allows the user to type 'q' and quit  on their first attempt.
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);  
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess');
        attempts++;
    }
    else if (guess < targetNum) {
        guess = prompt('Too low! Enter a new guess');
        attempts++;
    }
    else {
        guess = prompt("Invalid guess. please enter a number or type 'q' to quit.")
    }
}

if (guess === 'q') {
    console.log('OK, GAME OVER!');
}
else {
    console.log('CONGRATS YOU WIN!');
    console.log(`You got it! It took you ${attempts} guesses`);
}
