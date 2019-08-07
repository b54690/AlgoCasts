// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("");
}

// function anagrams(stringA, stringB) {
//     const stringMapA = {};
//     const stringMapB = {};
//
//     const stringASplit = cleanString(stringA).split("");
//     const stringBSplit = cleanString(stringB).split("");
//
//     const cleanObjectA = convertStringObject(stringASplit, stringMapA);
//     const cleanObjectB = convertStringObject(stringBSplit, stringMapB);
//
//     console.log(cleanObjectB, cleanObjectA);
//
//     if (Object.keys(cleanObjectA).length !== Object.keys(cleanObjectB).length) {
//         return false;
//     }
//
//     for (let char in cleanObjectA) {
//         if (cleanObjectA[char] !== cleanObjectB[char]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// function convertStringObject(str, obj) {
//     for (let char of str) {
//         if (!obj[char]) {
//             obj[char] = 1;
//         }
//         obj[char]++
//     }
//     return obj;
// }
//
// function cleanString(str) {
//     return str
//         .replace(/[^\w]/g, '')
//         .toLowerCase();
// }
//
// anagrams("hello", "llohe");

module.exports = anagrams;
