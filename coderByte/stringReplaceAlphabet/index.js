// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

/**
 * @return {string}
 */
function LetterChanges(str) {

    // we will replace every letter in the string with the letter following it
    // by first getting the charCode number of the letter, adding 1 to it, then
    // converting this new charCode number to a letter using the fromCharCode function
    // we also check to see if the character is z and if so we simply convert the z to an a
    const converted = str.replace(/[a-z]/gi, function (char) {
        return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
    });

    // we have now successfully converted each letter to the letter following it
    // in the alphabet, and all we need to do now is capitalize the vowels
    // return the final string
    return converted.replace(/[aeiou]/gi, function (vowel) {
        return vowel.toUpperCase();
    });

}

LetterChanges("fun times!");
