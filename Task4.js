function vowelCount(str) {
    const vowels = "aeiou";
    const result = {};

    str.toLowerCase().split('').forEach(char => {
        if (vowels.includes(char)) {
            result[char] = (result[char] || 0) + 1;
        }
    });

    return result;
}

console.log(vowelCount("Hello World And Universe"));
