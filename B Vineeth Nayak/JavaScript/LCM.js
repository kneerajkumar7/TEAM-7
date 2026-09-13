const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the first number: ", (input1) => {
    const num1 = Number(input1);
    rl.question("Enter the second number: ", (input2) => {
        const num2 = Number(input2);
        let lcm = Math.max(num1, num2);
        while (lcm % num1 !== 0 || lcm % num2 !== 0) {
            lcm++;
        }
        console.log("LCM:", lcm);
    });
});