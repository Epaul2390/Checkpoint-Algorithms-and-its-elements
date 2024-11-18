function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;  // To count the number of characters (excluding the period)
    let wordCount = 0;  // To count the number of words
    let vowelCount = 0;  // To count the number of vowels

    // Define vowels
    const vowels = "aeiouAEIOU";
    
    // Loop through each character in the sentence
    let isInWord = false;  // To track if we are inside a word
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        // Check if the character is a period (end of sentence)
        if (char === '.') {
            break;  // Stop processing when we encounter the period
        }

        // Increment the length counter
        length++;

        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Check if the character is part of a word
        if (char !== ' ' && !isInWord) {
            wordCount++;  // We encountered a new word
            isInWord = true;  // We are now inside a word
        } else if (char === ' ') {
            isInWord = false;  // Space means we are outside of a word
        }
    }

    // Return the results
    return {
        length: length,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}

// Example usage:
let sentence = "Hello world.";
let result = analyzeSentence(sentence);
console.log(result);  // { length: 10, wordCount: 2, vowelCount: 3 }
