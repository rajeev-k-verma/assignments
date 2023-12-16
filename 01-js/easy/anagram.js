/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;

  let str2Lower = str2.toLowerCase();
  let str1Lower = str1.toLowerCase();

  for(let i = 0; i < str1.length; i++) {
    //check if the character is present in str2 without case sensitivity
    if(str2Lower.indexOf(str1Lower[i]) === -1) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
