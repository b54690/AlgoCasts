// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev,'');
    // the '' denotes the starting state of the return variable i.e. rev
}
reverse('hello');

// 1. Add a 'debugger' statement in your function
// 2. Call the function manually
// 3. Run 'node inspect index.js' in the relevant file
// 4. To execute file, press 'c' and then enter
// 5. To launch 'repl' session, type 'repl' and enter
// 6. To exit press control + c


// function reverse(str) {
//     let reversed = '';
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }
// reverse("hello");

// function reverse(str) {
//     return str.split('').reverse().join('');
// }
// reverse("hello");

module.exports = reverse;
