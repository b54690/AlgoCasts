/**
 * @return {boolean}
 */
function PowersofTwo(num) {

    let power = 0;
    let counter = 1;

    while (power < num) {
        power = Math.pow(2, counter);
        counter++;
    }
    return (num === power);
}
