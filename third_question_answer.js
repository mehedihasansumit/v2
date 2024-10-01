const numbers = [1, 1,2];

const findBiggestSingleNum = (testNumber) => {
    if (!testNumber || !Array.isArray(testNumber)) return null;

    let repeatedNum = [];
    let nonRepeatedNum = [];

    for (let i = 0; i < testNumber.length; i++) {
        for (let j = i + 1; j < testNumber.length; j++) {
            if (testNumber[i] === testNumber[j])
                repeatedNum.push(testNumber[i]);
            continue;
        }
        if (!repeatedNum.includes(testNumber[i])) nonRepeatedNum.push(testNumber[i]);
        console.log({ repeatedNum, nonRepeatedNum });
    }
    if (nonRepeatedNum.length === 0) return null;

    let bigNUm = nonRepeatedNum[0];
    nonRepeatedNum.forEach(num => {
        if (num > bigNUm) bigNUm = num;
    })
    return bigNUm;
}


console.log(findBiggestSingleNum(numbers))