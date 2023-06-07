// 1.Multiple Args Exercise

// In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  
//  It's generally not a good roll.  Please write a function called isSnakeEyes, 
//  which accepts two numbers as inputs, representing two dice.  
//  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

// function isSnakeEyes(input1, input2) {
//     if (input1 === 1 && input2 === 1) {
//         console.log('Snake Eyes');
//     } else {
//         console.log('Not Snake Eyes');
//     }
// }
// isSnakeEyes(1, 1);


// 2. isShortsWeather Function

//I often struggle to know whether I should wear shorts or pants on a given day. Please help me decide by writing me a function called isShortsWeather.
//It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course).
//If temperature is greater than or equal to 75, return true.
//Otherwise, return false.  

// function isShortsWeather(temperature) {
//     if (temperature >= 75) {
//         return true;
//     } else {
//         return false;
//     }
// }
// isShortsWeather(78);



// 3. Capitalize Exercise

// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).

// function capitalize(string) {
//     return (string[0].toUpperCase() + string.slice(1));
// }
// capitalize('petko')


// 4. Sum Array Exercise

//Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

// function sumArray(arrOfNum) {
//     let total = 0;
//     for (let i = 0; i < arrOfNum.length; i++) {
//         total += arrOfNum[i];
//     }
//     return total;
// }
// sumArray([2, 3, 5, 6]);


// 5. Days Of The Week Exercise

// Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.) 
//  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

// function returnDay(num) {

//     const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     if (num < 1 || num > 7) {
//         return null;
//     } else {
//         return weekDays[num - 1];
//     }

// }
// returnDay(2);



// forEach method.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// })


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     },
// ]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// })


// map Method. - Creates a new array with the results of calling a callback on every element in the array.

// const texts = ['rofl', 'lol', 'omg', 'ttyl']
// const caps = texts.map(function (t) {
//     return t.toUpperCase();
// })
// console.log(texts);
// console.log(caps);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })



// Map Practice

//It's time to get practice with the map method!
//Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.

// DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
// const firstNames = fullNames.map(function (n) {
//     return n.first;
// })
// console.log(firstNames);


// setTimeout and setInterval

// console.log("Hello..");
// setTimeout(() => {
//     console.log((".. are u still there ?"));
// }, 3000);

// console.log("GoodBye");


// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// clearInterval(id)  // - stops



// reduce Method.

const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total);   // - without reduce

// const total = prices.reduce((total, price) => {
//     return total + price;
// })

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })