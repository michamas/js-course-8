function getEvenNumbers(start, end) {
  // Change code below this line
  let evenArray = [];

  for (i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenArray.push(i);
    }
  }
  return evenArray;

  // Change code above this line
}

console.log(getEvenNumbers(1, 9));
