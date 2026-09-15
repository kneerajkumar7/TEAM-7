let text = "madam";
let reverse = text.split("").reverse().join("");
if (text == reverse) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}
