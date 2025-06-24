function getFirstAndLastStrings(arr) {
    const firstAndLast = [arr[0], arr[arr.length - 1]];

    const isString = (item) => {
        return typeof item === "string";
    };

    const filterRes = firstAndLast.filter(isString);
    return filterRes;
}

const numbers = [1, 2, 3, 4, "5"];
console.log(getFirstAndLastStrings(numbers)); 
