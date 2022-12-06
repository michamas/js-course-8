
//Uzupełnij drugie wywołanie funkcji makePizza(pizzaName, callback), 
// przekazując jako drugi argument inline funkcję callback eatPizza(pizzaName), 
// która loguje łańcuch "Eating pizza <nazwa pizzy>".

function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }
  
  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  // Change code below this line
  
  makePizza("Ultracheese", function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}.`);
  });
  