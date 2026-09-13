import * as readline from "readline";
function vowels(str: string): void {
        str = str.toLowerCase();
        let vowels = 0;
        let count = 0;
        
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
                vowels++;
            }
            else{
                count++;
            }
        }
        console.log(`Number of vowels: ${vowels}`);
        console.log(`Number of consonants: ${count}`);
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input: string) => {
    vowels(input);
    rl.close();
});

