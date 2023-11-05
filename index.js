// 1.1

function uniqueOnly(input) {
    const letters = input.split('').sort();
    // letters = letters.sort();
    // console.log(letters);
    if (letters.length == 1) {
        return true
    };
    for (let j = 0; j < letters.length; j++) {
        // console.log(j);
        if (j > 0) {
            if (letters[j] == letters[j-1]) {
                // console.log(letters[j]);
                return false;
            }
        }
    }
    return true;
}

// console.log(uniqueOnly('a'));
// console.log(uniqueOnly('ab'));
// console.log(uniqueOnly('abb'));
// console.log(uniqueOnly('ababab'));

// 1.2

function perMutations(string1, string2) {
    if (string1.length != string2.length) {
        return false;
    }
    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');
    for (let j = 0; j < string1.length; j++) {
        if (string1[j] != string2[j]) {
            return false;
        }
    }
    return true;
}

// console.log(perMutations('abc', 'cab'));
// console.log(perMutations('abc', 'cabb'));
// console.log(perMutations('ab c', 'cab '));

// 1.3 

function urlify (input, count) {
    input = input.split(' ');
    // console.log(input);
    return(input.join('%20').slice(0, count));
}

// console.log(urlify('space dogzzzz', 8))

// 1.4

function permOfPal(input) {
    // if string length is even each char must repeat
    // if odd then all char but one must repeat

    // for loop taking each character and putting into hashtable
    // add to key if already exists
    // if string length is even make sure each key is > 1
    // if odd then one character is 1
    const char = {};
    for (let j = 0; j < input.length; j++) {
        if (char.hasOwnProperty(input[j])) {
            char[input[j]] += 1;
        } else {
            char[input[j]] = 1;
        }
    }
    if (input.length % 2 == 0) {
        for (const j in char) {
            if (char[j] === 1) {
                return false;
            }
        }
    } else {
        let middle = 0;
        for (const j in char) {
            if (char[j] === 1) {
                middle++;
            }
        }
        if (middle > 1) {return false};
    }
    console.log(char);
    return true;
}

// function palCheck(input) {
//     for (let j = 0; j < input.length / 2; j++) {
//         // if (input.length % 2 == 0) {
//         //     if (input[j] != input[(input.length - 1) - j]) {
//         //         return false;
//         //     } 
//         // } else {

//         // }
//         if (input[j] != input[(input.length - 1) - j]) {
//             return false;
//         } 
//     }
//     return true;
// }

// console.log(permOfPal('tact coa'));
// console.log(palCheck('baaaab'));
// console.log(palCheck('tacocat'));
// console.log(permOfPal('abcacd')); // false
// console.log(permOfPal('abcabc')); // true
// console.log(permOfPal('abbddbac')); // true
// console.log(permOfPal('tcao act')); // true

// 1.5

// check if two inputs are within 1 edit of each other
// 'edits' include removing character, changing, or adding

function oneEdit(string1, string2) {
    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');
    let edits = 0;
    if (string2.length > string1.length) {    
        for (const j in string2) {
            if (string1[j] != string2[j]) {
                edits++;
            }
        }
    } else {
        for (const j in string1) {
            if (string1[j] != string2[j]) {
                edits++;
            }
        }
    }
    if (edits <= 1) {
        return true;
    } else { return false };
}

// console.log(oneEdit('abc', 'abcd')); // true
// console.log(oneEdit('abc', 'abc')); // true
// console.log(oneEdit('abcd', 'abc')); // true
// console.log(oneEdit('abcdd', 'abc')); // false

// 1.6

function hashString(input) {
    const letterCount = {};
    for (let j = 0; j < input.length; j++) {
        if (letterCount.hasOwnProperty(input[j])) {
            letterCount[input[j]] += 1;
        } else {
            letterCount[input[j]] = 1;
        }
    }
    // return letterCount;
    return mapConvert(letterCount, input)
}

function mapConvert(hashMap, string) {
    let output = '';
    // console.log(hashMap);
    for (let char in hashMap) {
        output = output.concat(`${char}${hashMap[char]}`)
    }
    // console.log(output);
    if (output.length > string.length) {
        return string
    } else { return output };
}

// console.log(hashString('aaabcccc')); // returns compressed string
// console.log(hashString('abc')); // returns original

// 1.7
// an image is a matrix N x N
// each pixel is 4 bites (ex: 0110)
// write a method that rotates it by 90 degrees
// can you rotate in place?

// 0001
// 0110
// 1111
// 1101
// 0000
// 1011

// rotated 90 degrees CW:

// 101100
// 001110
// 100110
// 101101

// confirm that inputs can only be arrays with 1s and 0s
// also indices can only be strings 4 numbers long

// go through indices' first value and then add that to first row
// do the same for the second row and so on

function rotatePic(pic) {
    const rotated = [];
    // take the bottom left corner and place it into the top left
    // take the first bit of the middle array and put it into the second index of first array
    for (let i = 0; i < pic[0].length; i++) {
        // start with first column of pixels
        const row = [];
        for (let j = pic.length - 1; j >= 0; j--) {
            // start with bottom pixel
            row.push(pic[j][i]);
        }
        // after a row of pixels have been mapped
        // add it to our output
        rotated.push(row);
    }
    return rotated;
}

const image = 
[
    [1, 1, 0, 1],
    [0, 0, 0, 0],
    [1, 1, 1, 1]
]

// rotated should look like
// 1, 0, 1
// 1, 0, 1
// 1, 0, 0
// 1, 0, 1

console.log(rotatePic(image));

