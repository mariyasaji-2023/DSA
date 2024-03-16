function longestRepeatingChar(str) {
    let charCount = {}; // Hash table to store character counts
    let maxChar = '';
    let maxCount = 0;

    // Iterate through the string and count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        
        } else {
            charCount[char] = 1;
        }
        // Update maxChar and maxCount if necessary
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    return { char: maxChar, count: maxCount };
}

// Test the function
let str = "aaghkbhbbbb";
console.log( longestRepeatingChar(str));

