function findLongestWord(string) {
  // Change code below this line

  let longestWord = '';
  let singleWord = string.split(" ");
  
for (i = 0; i < singleWord.length; i ++) {
   if (singleWord[i].length > longestWord.length) {
    longestWord = singleWord[i];
  }
  }
  return longestWord;


  // Change code above this line
}

console.log(findLongestWord("hello 55566hi good morning"))