// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }



// print me even numbers
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// print me odd numbers
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }


// print from 100 to 0. Decrement by 10 
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }




// I've provided you with an array of strings called people. Loop over the people array with a for loop, printing out each name in uppercase letters.  Your result should look something like:

//SCOOBY
//VELMA
//DAPHNE
//SHAGGY
//FRED
//Hint: use i from your loop as an array index!


// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }



// NESTED LOOPS 

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`    j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }


// WHILE loop 

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }   // BASIC


// const SECRET = 'BabyHippo';

// let guess = prompt('enter the secret code...');
// while (guess !== SECRET) {
//     guess = prompt('enter the secret code...');
// }
// console.log("CONGRATS YOU GOT THE SECRET!!");


// let input = prompt('Hey say something..');
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop copying me') break;
// }
// console.log('OK YOU WIN!');


// for... 0f - LOOP. Mostly used for arrays 

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`);
// }


// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char);
// }  




// For...Of Practice
// Let's practice using for...of. I've provided you with an array called numbers.  Please use a for...of loop to loop over it, and print out the square of each value (the number multiplied by itself).

// NOTES:

// 1. Udemy's coding exercise platform does NOT support the ** operator.
// 2. You could accomplish this by using a while loop or a for loop, but please use a for...of loop! Unfortunately, I can't enforce the type of loop you use, but please I'm begging you to use a for...of.  I will hunt you down if you don't.  Thank you and have a great day!

// Your output should look like this:
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let num of numbers) {
//     let b = num * num;
//     console.log(b);
// }


// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     diedre: 81,
//     vonnie: 60
// }

// for (let person in testScores) {
//     console.log(`${person} scored: ${testScores[person]}`);
// }

// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length)