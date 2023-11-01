// 1.1

function uniqueOnly(input) {
    const letters = input.split('').sort();
    // letters = letters.sort();
    // console.log(letters);
    if (letters.length == 1) {
        return true
    };
    for (let i = 0; i < letters.length; i++) {
        // console.log(i);
        if (i > 0) {
            if (letters[i] == letters[i-1]) {
                // console.log(letters[i]);
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
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] != string2[i]) {
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
    for (let i = 0; i < input.length; i++) {
        if (char.hasOwnProperty(input[i])) {
            char[input[i]] += 1;
        } else {
            char[input[i]] = 1;
        }
    }
    if (input.length % 2 == 0) {
        for (const i in char) {
            if (char[i] === 1) {
                return false;
            }
        }
    } else {
        let middle = 0;
        for (const i in char) {
            if (char[i] === 1) {
                middle++;
            }
        }
        if (middle > 1) {return false};
    }
    console.log(char);
    return true;
}

// function palCheck(input) {
//     for (let i = 0; i < input.length / 2; i++) {
//         // if (input.length % 2 == 0) {
//         //     if (input[i] != input[(input.length - 1) - i]) {
//         //         return false;
//         //     } 
//         // } else {

//         // }
//         if (input[i] != input[(input.length - 1) - i]) {
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
        for (const i in string2) {
            if (string1[i] != string2[i]) {
                edits++;
            }
        }
    } else {
        for (const i in string1) {
            if (string1[i] != string2[i]) {
                edits++;
            }
        }
    }
    if (edits <= 1) {
        return true;
    } else { return false };
}

console.log(oneEdit('abc', 'abcd')); // true
console.log(oneEdit('abc', 'abc')); // true
console.log(oneEdit('abcd', 'abc')); // true
console.log(oneEdit('abcdd', 'abc')); // false