// Question 1
const nonRepeatChar = "aaaddc";


const handleFindNonReapChar = (testChar) => {
    if (!testChar || typeof testChar !== "string") return -1;

    let repeatedChar = '';

    for (let i = 0; i < testChar.length; i++) {
        for (let j = i + 1; j < testChar.length; j++) {
            if (testChar[i].toLowerCase() === testChar[j].toLowerCase()) {
                repeatedChar += testChar[i];
                continue;
            }
        }
        console.log({repeatedChar})
        if (!repeatedChar.includes(testChar[i])) return i;
    }
    return -1;
}

console.log(handleFindNonReapChar(nonRepeatChar))

