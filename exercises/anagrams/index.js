// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(str1, str2) { 
  return cleanStr(str1) === cleanStr(str2);
}

function cleanStr(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("");
} 

module.exports = anagrams;

// solution 1
// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);
  
//   if ( Object.keys(charMapA).length !== Object.keys(charMapB).length ){
//     return false;
//   }
  
//   for ( char in charMapA ){
//     if ( charMapA[char] !== charMapB[char]){
//       return false;
//     }
//   }
  
//   return true;
// }

// function buildCharMap(str) {
//   let charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase() ){
//     charMap[char] = charMap[char] + 1 || 1;  
//   }

//   return charMap;
// }

// solution 2
// function anagrams(str1, str2) { 
//   if ( cleanStr(str1) !== cleanStr(str2) ){	return false; }

//   return true;
// }

// function cleanStr(str) {
// 	return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("");
// }