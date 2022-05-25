
/* ------------------- Using Functions ---------------------------*/
/* 
    Using a quick console.log function at the start of a javascript file
    is a good way to perform a sanity check (just to make sure there is
        not a problem with the link to the javascript file)
*/ 

// calling a built-in function
console.log("hello world!");

// declaring a function: you can call it before or after its declaration
myFunc();

function myFunc() {
    console.log("hello from my Func!");
}

myFunc();
/*
    The parentheses in a function's declaration are used to declare parameters 
    The parentheses in a function call are used to provide arguments

    Parameters : Placeholders for values you want to use in a function
    Arguments : the values you pass into a function when invoked
*/

// creating a function that takes in input
function takeInput(input) {
    // console log a string with the input included
    console.log("My parameter's value " + input);
    // create a local variable
    let information = "locally scoped variable inside of function.";
    // access local variable
    console.log(information);
}

// call takeInput
takeInput("Bob");
takeInput(5);

// try to access local variable: issue with scope. We will talk about scope in another lecture.
// console.log(input);
// console.log(information);

/*
    A function can return a value. This means that the function
    can be used as an expression that can be assigned or used in an
    operation
*/

// create function that returns value
function returnTwenty() {
    return 20;
}

// create a variable and assign it was is returned from function call
let myValue = returnTwenty();
let myOtherValue = 50 - returnTwenty();
// use variable
console.log(myValue);
console.log(myOtherValue);


