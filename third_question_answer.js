const numbers = [1, 2, 8, 6, 9, 8];

const findBiggestSingleNum = (testNumber) => {
    if(!testNumber || !Array.isArray(testNumber)) return null;

    let nonRepeatedNum = [];

    for (let i = 0; i < testNumber.length; i++) {
        for (let j = i + 1; j < testNumber.length; j++) {
            if (testNumber[i] === testNumber[j]) {
                nonRepeatedNum += testNumber[i];
                continue;
            }
        }
        console.log({nonRepeatedNum})
        if (!nonRepeatedNum.includes(testNumber[i])) return i;
    }

}


console.log(findBiggestSingleNum(numbers))