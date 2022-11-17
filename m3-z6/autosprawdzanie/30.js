function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
let defObj = {
    completed: completed,
    category: category,
    priority: priority,
}

return {...defObj, ...data}


  // Change code above this line
}



// TESTY
console.log(makeTask({ category: "Finance", text: "Take interest" }));
//{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }