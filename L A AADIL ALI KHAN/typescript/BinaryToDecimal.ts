let binary: number = 1011;
let decimal: number = 0;
let power: number = 0;
while (binary > 0) {
    let digit = binary % 10;
    decimal = decimal + digit * Math.pow(2, power);
    binary = Math.floor(binary / 10);
    power++;
}
console.log("Decimal number:", decimal);
