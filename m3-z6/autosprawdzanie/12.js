function countProps(object) {
  let propCount = 0;
  // Change code below this line
  keys = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      // console.log(key);
      keys.push(key);
    }
  }
  // console.log(keys);
  propCount = keys.length;
  // Change code above this line
  console.log(propCount)
  return propCount;

}

countProps({ name: "Mango", age: 2, height: 100 });

