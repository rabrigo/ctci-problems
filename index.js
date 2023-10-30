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

console.log(uniqueOnly('a'));
console.log(uniqueOnly('ab'));
console.log(uniqueOnly('abb'));
console.log(uniqueOnly('ababab'));