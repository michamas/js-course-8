function filterArray(numbers, value) {
  // Change code below this line

  const newNumbers = [];
 

 for (i = 0; i < numbers.length; i++) {
   if (numbers[i] > value ) {
    newNumbers.push(numbers[i])
   }
  }
  return newNumbers

 // Change code above this line
}

console.log(filterArray([1,2,3,4,5], 4))
