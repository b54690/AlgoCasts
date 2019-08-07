// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//** Base Case **//

// - If (row === n) then we've hit the end of the problem.
// - If the 'level' string has a length === 2 * n - 1 then we are at the end of the row

function pyramid(n, row = 0, level = '') {
    const midPoint = Math.floor((2 * n-1) / 2);
    let add;

    if (n === row) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add ='#'
    } else {
        add = ' '
    }
    pyramid(n, row, level + add);
}

pyramid(3);

// function pyramid(n) {
//     const midPoint = Math.floor((2 * n -1) / 2);
//
//     for (let row = 0; row < n; row++) {
//         let pyramid = '';
//         for (let col = 0; col < 2 * n -1; col++) {
//             if (midPoint - row <= col &&  midPoint + row >= col) {
//                 pyramid += '#';
//             } else {
//                 pyramid += ' '
//             }
//         }
//         console.log(pyramid);
//     }
// }

pyramid(3);
module.exports = pyramid;
