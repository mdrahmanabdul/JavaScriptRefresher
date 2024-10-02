// Episode 1 of Javascript : 

/*
var ->	Declares a variable
let	-> Declares a block variable
const -> Declares a block constant
if -> Marks a block of statements to be executed on a condition
switch -> Marks a block of statements to be executed in different cases
for -> Marks a block of statements to be executed in a loop
function -> Declares a function
return -> Exits a function
try -> Implements error handling to a block of statements
*/

function exploreVAR(){
    console.log('-----------------------------------Exploring Var variable----------------------------------------');

    var name = "Mohammed";
    console.log(name);

    var name = "Rahman";
    console.log(name);
    
}
/*
    - Declared inside the block, and they are accessible inside the block only[function scope].
    - They can be re-declared any number of times as we did above.
*/

exploreVAR();

function exploreLET(){
    console.log('-----------------------------------Exploring Let variable----------------------------------------');

    let name = "Rahman";
    console.log(name);

    name = "Abdul";
    console.log(name);

    let age;
    console.log(age); // undefined
    
    
    
}

exploreLET();

/*
    - Same as VAR, they are also block scoped
    - Should be declared before use
    - Cannot be re-declared
    - We can re-assign as we did above
    - Introduced in ES6
*/

function exploreCONST(){
    console.log('-----------------------------------Exploring Const variables----------------------------------------');
    const phoneNo = "6300481313";
    console.log(phoneNo);

    //const PI; This statement will give error, because const variable must be assigned when declaring itself
    // phoneNo = "9494730859"; This statement will give an error as we are trying to re-assign values to the const variable
    // This also introduced in ES6
    
}

exploreCONST();


/*
    var: While less commonly used nowadays, var can still be useful in certain legacy code or when you need function-scoped variables.
    
    let: let is the preferred method for most modern JavaScript development. It provides better control over variable scope and avoids common pitfalls like hoisting.
    
    const: Use const when you want to declare variables that should remain constant throughout their lifetime. This helps prevent accidental modifications and improves code readability.

*/

function undeclaredVariables(){
    console.log('-----------------------------------Exploring Undeclared variables----------------------------------------');
    x = 10;
    console.log(x);
    
}
undeclaredVariables();

console.log(x);

/*
    - These are the variables that are not being declared with any of the three keywords : let, const, var
    - They can be accessed outside of the function [Global scope].
    - Not recommended to use undeclared variables
*/

// LITERAL ANS VARIABLES

/*
    Literals : 
        - These are fixed values that are written directly into the code.
        - These cannot be changed once they are assigned.
        - Numbers, Strings, Booleans, NULL come unders Literals

    Variables :   
        - These are for storing values
        - These values can be changed during the execution
*/

function exploreDataTyes(){

    console.log('-----------------------------------Exploring Data types----------------------------------------');
    

    //Strings
    let name = "Mohammed AbdulRahman";
    let fatherName = 'Mohammed Akramuddin';
    let age = 23;

    /*
        - Represents textual data.
        - Enclosed in single quotes ('), double quotes ("), or backticks (\).
        - Can contain various characters, including letters, numbers, symbols, and escape sequences.
    */

    //Numbers
    let salary = 60000;
    let weight = 63.4;
    let increment = salary * 0.10;

    /*
        - Represents numerical values.
        - Can be integers or floating-point numbers.
        - Supports various mathematical operations.
    */

    //Bigint
    let largeNumber = 12345678901234567890n;
    let result = largeNumber * 2n;

    /*
        - Represents arbitrarily large integers.
        - Used for calculations involving very large numbers.
        - Created by appending n to a number literal.
    */

    //Boolean
    let ranbirFan = true;

    //Undefined
    let moreBeautifulThanAlia;

    console.log(moreBeautifulThanAlia); //undefined

    /*
        - Represents a variable that has been declared but not assigned a value.
        - Its value is undefined.
    */

    //NULL

    let gf = null;

    /*
        - Represents an empty value or the absence of a value.
        - Its value is null.

    */

    //Symbols
    let myUniqueSymbol = Symbol("pan card number");
    let personalDetails = {
        [myUniqueSymbol] : 'DIGPA8376E'
    }

    console.log(personalDetails);
    
    
    //Objects 
        let idealLaptop = {
            ram : '16gb',
            processor : 'intel i7',
            displayType : 'OLED'
        }

        let idealLaptop2 = new Object();
        idealLaptop2.company = 'Dell India';
        idealLaptop2.price = 89999;

        console.log(idealLaptop2);
        


    /*
        - represents a collection of key-value pairs.
        - Can store data of various types.
        - Created using object literals or constructors.
    */

}

exploreDataTyes();