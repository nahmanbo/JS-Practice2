const numbers = [1, 2, 3, 4, "5"];
const firstAndLast = [numbers[0], numbers[numbers.length - 1]];

const isString = (num) =>{return typeof num === "string"}

const filterRes = firstAndLast.filter(isString);

console.log(filterRes);
