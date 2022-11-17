const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let propValues = [];

  for (let product of products) {
    let check = Object.keys(product);
    if (check.includes(propName)) {
      propValues.push(product[propName]);
    } else {
      return null;
    }
  }
  return propValues;
  // Change code above this line
}
console.log(getAllPropValues("name"));
