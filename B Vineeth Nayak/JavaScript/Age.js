const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter your date of birth (YYYY-MM-DD): ", (dobString) => {
    const birthDate = new Date(dobString);
    const tdy = new Date();
    let age = tdy.getFullYear() - birthDate.getFullYear();
    if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
     today.getDate() < birthDate.getDate())
) {
    age--;
}
    console.log("Age:", age);
});
