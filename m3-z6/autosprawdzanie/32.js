// Change code below this line
function addOverNum(firstNumb, ...args) {

  let total = 0;

  for (const arg of args) {
    if (arg > firstNumb) {
      total += arg;
    }
  }
  return total;

  // Change code above this line
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
