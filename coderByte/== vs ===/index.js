// The difference is that == performs implicit type conversion to check if values are equal to each other.
// So it will convert the values to true or false boolean values and then compare them

"1" == 1 // true
true == 1 // true
    [] == false // true
"" == false // true
undefined == null // true


// This can really cause some problems when you're writing JavaScript,
// so the safe thing to do is use the triple equal operator instead,
// which checks that the two values are of the same type and does not perform type conversion.

"1" === 1 // false
true === 1 // false
    [] === false // false
"" === false // false
undefined === null // false
