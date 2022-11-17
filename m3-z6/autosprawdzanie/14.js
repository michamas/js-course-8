function countProps(object) {
    // Change code below this line
    let propCount = 0;
    const keys = Object.keys(object);
  
    for (const key of keys) {
    //   console.log(key);
    //   console.log(object[key]);
      propCount += 1;
    }
   
    return propCount;
    // Change code above this line
  }
  
console.log(countProps({ name: "Mango", age: 2 }));
