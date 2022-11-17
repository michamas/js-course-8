// Change code below this line
function findMatches(arr, ...args) {
    const matches = []; // Don't change this line


  for (const arg of args) {
    if (arr.includes(arg)) {
      matches.push(arg)
    }
  }
    // Change code above this line
    return matches;
  }
  
  console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));