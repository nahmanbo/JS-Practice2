function capitalize(str) {
    return str.toUpperCase();
}

function swapCase(str) {

    const words = str.split(' ');

    const result = words.map((word, index) => {
        if (index % 2 === 1) {
            return capitalize(word);
        }
        return word;
    });

    return result.join(' ');
}


console.log(swapCase("hello world this is great"));
