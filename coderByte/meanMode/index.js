/**
 * @return {number}
 */
function MeanMode(arr) {
    let modeObject = {};
    let mode = 0;
    let count = 0;
    const meanAverage: number = arr.reduce((a,b) => {return a+b}, 0) / arr.length;

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        if (!modeObject[number]) {
            modeObject[number] = 1
        } else {
            modeObject[number] += 1
        }
    }

    for (let n in modeObject) {
        if (modeObject[n] > count) {
            count = modeObject[n];
            mode = n;
        }
    }

    return (mode == meanAverage) ? 1 : 0;
}

MeanMode([4, 4, 4, 6, 2]);
