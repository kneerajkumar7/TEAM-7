const readline = require('readline');
function number_type(num) {
    num = Number(num); 
    if (Number.isInteger(num)) {
        return "Integer";
    }
    else {
        return "Float";
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", (num) => {
    console.log("The number type is: " + number_type(num));
    rl.close();
});