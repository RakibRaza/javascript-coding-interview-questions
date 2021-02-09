function reverseString(string, separator) {
  return string.split(separator).reverse().join(separator);
}
const reverseSentenc = reverseString("hello and welcome", "");
console.log(reverseSentenc);
const reverseWord = reverseString(reverseSentenc, " ");
console.log(reverseWord);

let string = "hello and welcome";
let newString = "";
for (let i = 0; i < string.length; i++) {
  newString = string[i] + newString;
}
console.log(newString);
