function matchFinder(string1, string2){
    let maxLength = 0;
    let endingIndex = 0;
    let currentLength = 0;

    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            currentLength = 0;

            while (i + currentLength < string1.length && j + currentLength < string2.length 
                   && string1[i + currentLength] === string2[j + currentLength]) {
                currentLength++;
            }

            if (currentLength > maxLength) {
                maxLength = currentLength;
                endingIndex = i + currentLength;
            }
        }
    }

    return string1.substring(endingIndex - maxLength, endingIndex);
}

let str1 = "Peter Parker";
let str2 = "er";
console.log(matchFinder(str1, str2)); 