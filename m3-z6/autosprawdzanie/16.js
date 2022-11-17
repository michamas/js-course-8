function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  for (const value of values) {
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({ mango: 10, poly: 150, alfred: 80 }));
