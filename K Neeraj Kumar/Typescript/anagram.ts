import * as readline from "readline";
function anagram(s1: string, s2: string): void {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    let result = false;
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                arr2[j] = "";
                result = true;
                break;
            }
        }
            if(!result){
                console.log("The strings are not anagrams.");
            }
        }
                console.log("The strings are  anagrams.");
            
           
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input: string) => {
    rl.question("Enter another string: ", (input2: string) => {
        anagram(input, input2);
        rl.close();
    });
});