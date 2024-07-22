// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



//***  TWO TYPES OF DATA-TYPES

//* Primitive (Call by Values)
//* 7 Types:) String, Boolean, INT, BIGINT, NULL, Undefined, Symbol

const accountId = 123                 // Number
let accountName = "Anish"             // String
let accountPassword = "101010"        // String
let accountCity = "Haryana"
let accountState;                     // Undefined
let phoneNumber = null;               // Null
let isLoggedIn = true;                // Boolean 
let bigNumber = 45678909876545678n    //BigINT

//* Non-Primitive (Call by Reference)
//* Types:) Array, Object, Function

//* Arrays:)
const heros = ["Batman", "Shaktiman", "spiderman"];

//* Objects:)     // Store in Key:Value pairs and in these bractes {}

let myBio = {
    name: "Anish",
    age: 20,
}


//* Functions:)               // Syntax for Declaring Function:   function(){}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
