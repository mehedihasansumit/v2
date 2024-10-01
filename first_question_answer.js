// Question 1
const repeatChar = "asdfghjklL";


const handleFindReapChar = (testChar) => {
    if (!testChar || typeof testChar !== "string") return -1;

    for (let i = 0; i < testChar.length; i++) {
        for (let j = i + 1; j < testChar.length; j++) {
            if (testChar[i].toLowerCase() === testChar[j].toLowerCase()) return testChar[i];
        }
    }
    return -1
}

console.log(handleFindReapChar(repeatChar))

