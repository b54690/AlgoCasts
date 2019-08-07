// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i ++) {
        console.log(str[i - 1]);
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

// function capitalize(str) {
//     const words = [];
//     const splitString = str.split(' ');
//
//     for (let word of splitString) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(" ");
// }

module.exports = capitalize;
