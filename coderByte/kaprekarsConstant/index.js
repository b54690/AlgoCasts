/**
 * @return {number}
 */
function KaprekarsConstant(num) {
    let count = 0;

    while (num !== 6174) {
        const numArray = num.toString().split('').sort();
        const ascendingOrder = parseInt(numArray.join(''));
        let descendingOrder = parseInt(numArray.reverse().join(''));

        if (descendingOrder.toString().length < 4) {
            descendingOrder *= 10;
        }

        num = Math.abs(ascendingOrder - descendingOrder);

        count++;
        if (count > 999) break;
    }
    return count;
}

// keep this function call here
KaprekarsConstant(readline());
