const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  let productPrice = [];
  for (const product of products) {
    if (productName === product.name) {
      productPrice.push(product.price);
      return productPrice[0];
      //   console.log(product.price);
    }
}
return null;

  // Change code above this line
}
console.log(getProductPrice("Grip"));
