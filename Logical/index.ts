// Palindrome
// Write a function called isPalindrome that it takes a string as a parameter and return boolean.
function isPalindrome(palin: string): boolean{
  let finalPalindrome = palin.split("").reverse().join("");
  return finalPalindrome === palin;
}
console.log("Checking Palindrome: ", isPalindrome("12321"));