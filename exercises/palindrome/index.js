// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// used to do a boolean test on every element in an array, if all tests are true then overall outcome if true
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}
palindrome('abba');

// function palindrome(str) {
//     const reversed = str.split('').reduce((reversed, char) => char + reversed, '');
//     return reversed === str;
// }

/**
 * @return {boolean}
 */
function Palindrome(str) {
    const reversed = str.replace(/ /g,'').split('').reduce((reversed, char) => char + reversed, '');
    return reversed === str.replace(/ /g,'');
}

module.exports = palindrome;
