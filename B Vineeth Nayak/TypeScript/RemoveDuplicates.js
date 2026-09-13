import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter numbers separated by spaces: ", (input) => {
    let numbers = input.split(" ").map(Number);
    let uniqueNumbers = [];
    for (let number of numbers) {
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    }
    console.log("Array without duplicates:", uniqueNumbers);
});
