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


let input = prompt('Hey say something..');
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop copying me') break;
}
console.log('OK YOU WIN!');