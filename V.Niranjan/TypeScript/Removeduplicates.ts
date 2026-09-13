function Removeduplicates(str: string): string {
    let result: string = "";
    let seen = new Set<string>();

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

let input: string = "programming";

console.log("Original String:", input);
console.log("After removing duplicates:", Removeduplicates(input));
