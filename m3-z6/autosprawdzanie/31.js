// Change code below this line
function add(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    console.log(`${args.join(" + ")} = ${total}`);
    return total;
    // Change code above this line
  }

  add(15, 27);