function Reversestr(str: string): string {
    let reverse: string = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse;
}

let input: string = "Hi Niranjan";

console.log("Original String:", input);
console.log("Reverse String:", Reversestr(input));
