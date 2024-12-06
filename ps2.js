let str = "hello worled";
let result = "";

function repeatCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}
console.log(repeatCharacter(str))

// Question:
// Write a JavaScript function that takes
// a string as input and returns a new
// string where each character from the
// original string is repeated twice.