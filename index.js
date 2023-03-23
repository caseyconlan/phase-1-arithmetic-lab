let num1 = 31
let num2 = 2
var multiply = num1*num2


function randomInt() {
  return Math.floor(Math.random()) + 1;
}
const random = randomInt();
console.log(random); // prints a random integer greater than 0

// function mod(num3, num4) {
//   let remainder = num3 % num4;
//   if (remainder === 4) {
//     return remainder;
//   } else {
//     return null;
//   }
// }

// const remainder = mod(14, 5);

// console.log(remainder);

let num3 = 14
let num4 = 5
var mod = num3%num4

let num5 = 10;
let num6 = 20;

let min = Math.min(num5, num6);
console.log(`Min of ${num5} and ${num6} is ${min}`);

let max = Math.max(num5, num6);
console.log(`Max of ${num5} and ${num6} is ${max}`);