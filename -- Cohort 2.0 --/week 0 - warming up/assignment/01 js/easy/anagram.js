/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) return false;

  const map = new Map(); // Built-in methods like .set(), .get(), .has(), .delete()

  /*  const str1 = "hello";
      str1.split('').forEach(ch => {
        console.log(ch);
      }); 
  */

  for (let ch of str1) {
    if (!map.has(ch)) {
      map.set(ch, 1);
    } else {
      const freq = map.get(ch);
      map.set(ch, freq + 1);
    }
  }

  for (let ch of str2) {
    if (map.has(ch)) {
      const freq = map.get(ch);
      map.set(ch, freq - 1);
    } else {
      return false;
    }

    if (map.get(ch) === 0) {
      map.delete(ch);
    }
  }

  return map.size == 0;
}

module.exports = isAnagram;
