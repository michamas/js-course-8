function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  for (i = min; i < max; i++) {
    numbers.push(i);
      }
  numbers.push(max)
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(5,9))