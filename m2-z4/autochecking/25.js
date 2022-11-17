function getCommonElements(array1, array2) {
    // Change code below this line
  let arrayConcat = array1.concat(array2);
    let newArray = [];
  
    for (i = 0; i < arrayConcat.length; i++){
      if (array2.includes(array1[i])){
        newArray.push(array1[i])
      }
    }
    return newArray;
  
  console.log(getCommonElements[1, 3, 5],[0, 8, 5, 3]);
   // Change code above this line
  }