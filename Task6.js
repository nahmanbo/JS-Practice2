function shiftLetters(str) {

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const shiftChar = (char) => {
        if (lower.includes(char)) {
            const index = lower.indexOf(char);
            return lower[(index - 1 + 26) % 26];
        }
        if (upper.includes(char)) {
            const index = upper.indexOf(char);
            return upper[(index - 1 + 26) % 26];
        }
        return char;
    };

    return str.split('').map(shiftChar).join('');
}

console.log(shiftLetters("abc")); 
