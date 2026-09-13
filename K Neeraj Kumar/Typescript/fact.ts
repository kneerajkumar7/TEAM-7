import * as readline from "readline";
function fact(factorial : number){
    let r = 1;
    for(let i = 1; i<=factorial;i++){
        r = r * i;
    }
    console.log(`Factorial of ${factorial}: ${r}`);
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input: string) => {
    let num = Number(input);
    fact(num);
    rl.close();
});

