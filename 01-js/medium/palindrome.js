/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let charArr = str.replaceAll(/[^a-zA-Z0-9]/g,"").toLowerCase().split('');
  let arrLength = charArr.length;
  for(i=0;i<arrLength/2;i++){
    if(charArr[i]!==charArr[arrLength-1-i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
