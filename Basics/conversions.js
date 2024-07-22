// *  Converstions
// * "33" -> 33 (string to Number)  Output = Number
// * "33xyz" -> NaN means (Not a Number)
// * True -> 1 (number); False -> 0 (number)

let score = "33";
console.log(typeof score);

const valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);



// * Number To Boolean Converstion
// * 1 Convert to true
// * 0 Convert to False
// * "" Empty Value Convert to False
// * "abc" Valed String Convert to True

let isLoggedIn = 1;
let logginStatus = Boolean(isLoggedIn);
console.log(logginStatus);
console.log(typeof logginStatus);



// ** Conversrtion to Strings

let someNumber = 123;
console.log(typeof someNumber);
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ********************* OPERATIONS **********************

let value = 3
let negValue = - value       // Convert Value into Negative
console.log(negValue);


//** Basic Arthemetic Operations

console.log(2+2);             // Addition
console.log(2-2);             // Substraction
console.log(2*2);             // Multiply
console.log(6/2);             // Divide
console.log(2**4);            //  2 Power raise to 4

