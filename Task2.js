const numbers = [1, 2, 3, 4, 5];

const isEven = (num) => {return num % 2 === 0;}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);