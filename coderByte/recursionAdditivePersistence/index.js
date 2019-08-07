/**
 * @return {number}
 */
function AdditivePersistence(num) {
    const numArr = num.toString().split('');

    while (numArr.length > 1) {
        let added = 0;

        for (let i = 0; i < numArr.length; i++) {
            added += parseInt(numArr[i]);
        }
        return 1 + AdditivePersistence(added);
    }
    return 0;
}
/**
 * @return {number}
 */
function MultiplicativePersistence(num) {
    const numArr = num.toString().split('');

    while (numArr.length > 1) {
        let multiplied = 1;

        for (let i = 0; i < numArr.length; i++) {
            multiplied *= parseInt(numArr[i]);
        }

        return 1 + MultiplicativePersistence(multiplied)
    }

    return 0;
}
