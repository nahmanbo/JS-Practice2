function doubleNumbersArray(numbers) {
    const multiply2 = (num) => {
        return num * 2;
    };

    const doubleNumbers = numbers.map(multiply2);
    return doubleNumbers;
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbersArray(numbers)); 
