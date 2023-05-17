// console.log("Hello World")
// let total = 3 + 1
// console.log("GOODBYE ")


// CONDITIONALS
// console.log("Before conditional")
// let random = Math.random()
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random)
// }
// if (random >= 0.5) {
//     console.log("Your number is greater than 0.5")
//     console.log(random)
// }


// const age = 6;

// if (age < 5) {
//     console.log('You are a baby. You get in for free!')
// }
// else if (age < 10) {
//     console.log('You are a child. You pay $10')
// }
// else if (age < 65) {
//     console.log('You are an adult. You pay $20')
// }



// let random = Math.random()
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
// }
// else {
//     console.log("Your number is greater than 0.5")
// }
// console.log(random)



// Nesting Conditionals

// const password = prompt('please enter a new password');

// // Password must be 6+ characters
// if (password.length >= 6) {
//     // Password cannot include space
//     if (password.indexOf(' ') === -1) {
//         console.log('Valid password');
//     } else {
//         console.log('Password cannot contain spaces!');
//     }
// } else {
//     console.log('Password too short! Must be 6+ characters')
// }

// const num = 102;

// // DO NOT TOUCH ANYTHING BELOW (please)
// if (num <= 100) {
//     if (num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if (num % 2 === 0) {
//             console.log("YOU GOT ME!");
//         }
//     }
// }




// LOGICAL OPERATORS (&&)-AND, (II)-OR, (!)-NOT.


// && - AND

// const password = prompt('Enter your password');
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Valid password');
// }
// else {
//     console.log('Incorect format for password');
// }


// const mystery = 'Puta7even'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// // LEAVE THIS CODE ALONE! (pretty please)
// if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
//     console.log("YOU GOT IT!!!");
// }


//  || - OR 

// const age = -10;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log('FREE');
// }
// else if (age >= 5 && age < 10) {
//     console.log('$10');
// }
// else if (age >= 10 && age < 65) {
//     console.log('$20');
// }
// else {
//     console.log('INVALID AGE!');
// }


// ! - NOT 

// let firstName = prompt('Enter your first name');
// if (!firstName) {
//     firstName = prompt('TRY AGAIN!')
// }


// const age = 8;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log('YOU ARE NOT A BABY OR A SENIOR!');
// }


// THE SWITCH STATEMENT..

const day = 7;
switch (day) {
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
    case 6:
    case 7:
        console.log('WEEKEND');
        break;
    default:
        console.log('I DONT KNOW THIS');
}   