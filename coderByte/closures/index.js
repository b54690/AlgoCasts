// A closure is the combination of a function and the lexical environment within which that function was declared.

function init() {
    const name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert(name); // use variable declared in the parent function
    }
    displayName();
}
init();

// init() creates a local variable called name and a function called displayName().
// The displayName() function is an inner function that is defined inside init()
// and is only available within the body of the init() function.
// Note that the displayName() function has no local variables of its own.
// However, since inner functions have access to the variables of outer functions,
// displayName() can access the variable name declared in the parent function, init().
// If displayName() were to have its own name local variable, it would use this.name instead.

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
