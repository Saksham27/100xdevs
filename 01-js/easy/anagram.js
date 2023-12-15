/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length)
    return false;
  if(typeof str1 !== typeof str2){
    return false;
  }
  if(typeof str1 === "string" && typeof str2 === "string"){
    for (let i = 0; i < str1.length; i++) {
      if(str2.toLowerCase().indexOf(str1[i].toLowerCase()) === -1){
        return false;
      }
    }
    return true;
  }else{
    return false;
  }
}

module.exports = isAnagram;
