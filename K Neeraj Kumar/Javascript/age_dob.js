const readline = require('readline');
function age_dob(dofb){
    const [day, month, year] = dofb.split('-');
    const dob = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthdiff = today.getMonth() - dob.getMonth();
    if (monthdiff < 0 || (monthdiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter your date of birth in the format DD-MM-YYYY: ", (dofb) => {
    console.log("Your age is: " + age_dob(dofb));
    rl.close();
});