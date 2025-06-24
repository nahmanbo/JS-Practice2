function getEvenNumbers(numbers) {
    const isEven = (num) => {
        return num % 2 === 0;
    };

    const evenNumbers = numbers.filter(isEven);
    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5];
console.log(getEvenNumbers(numbers)); 
