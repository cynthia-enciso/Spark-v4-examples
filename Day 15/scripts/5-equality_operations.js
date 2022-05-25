console.log(":::: EQUALITY OPERATORS ::::");
/*
    'Type Conversion/Coersion' attempts to change two expressions
    to the same datatype BEFORE checking if they have the same value or performing some operation on them.

    using == or arithmetic operations: numeric type coercion occurs
        - values will be converted into a number (or NaN)
*/

// Compare the number 1 to the string '1' with '=='
console.log("::: == OPERATION :::");
console.log(1 == "1");      // Results in the boolean value true. When we convert 1 to a string or '1' to a number, they are the same
console.log(1 == 1);        // true. These are the same value and type
console.log("ten" == 10);   // false. Type conversion only applies to the actual expression, not our "human understanding"

/*
    When we use the '===' we will compare the value of two expressions but NOT allow
    javascript to utilize 'type conversion'. This way, when we compare two expressions
    they must have the same value AND must be the same datatype
*/
// Comparing with '===' is called a strict comparison
console.log("::: === OPERATION :::");
console.log(1 === "1");     // false. We do NOT convert 1 to a string or '1' to a number here
console.log(1 === 1);       // true. These are the same value and type

/*
When using the '==' Comparison operation, datatypes will be converted to numbers or NaN
    -The boolean true will convert to a 1
    -The boolean false will convert to a 0
*/
console.log(":::: NUMERIC TYPE CONVERSION WITH BOOLEAN TRUE ::::");
console.log(1 == "1");          // This will print true
console.log(true == 1);         // This will print true
console.log(true == "1");       // This will print true
console.log(true == "true");    // This will print false
console.log(true == true);      // This will print true
console.log(true == 5);         // This will print false

console.log(":::: NUMERIC TYPE CONVERSION WITH BOOLEAN FALSE ::::");
console.log(0 == "0");          // This will print true
console.log(false == 0);        // This will print true
console.log(false == "0");      // This will print true
console.log(false == "false");  // This will print false
console.log(false == false);    // This will print true
console.log(false == 5);        // This will print false


/* 
    Remember the script comparison operator '===' prevents type conversion...
*/
console.log(":::: BOOLEANS WITH STRICT COMPARISONS ::::");
console.log(true === 1);        // No type conversion. This will print false
console.log(true === true);     // No type conversion. This will print true
console.log(false === 0);       // No type conversion. This will print false
console.log(false === false);   // No type conversion. This will print true

/*
    NaN is a special and specific type of data. It is never equal to any other value, even another instance of NaN
*/
console.log(NaN == NaN);

// comparing other values
console.log(undefined === undefined); // true
console.log(null === null); // true

console.log(":::: STRING COERCION ::::");
/*
    If one of the operands is a string and you are using the + operator,
    the non-string value is coerced to a string and appended
*/
console.log("Hello: " + 5);
console.log("Hello: " + 5 + 5);
console.log("Hello: " + (5 + 5)); // use parenthesis to change the precedence!
