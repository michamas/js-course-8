const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    // ADD
    addPotion(newPotion) {
      for (i = 0; i < this.potions.length; i++) {
        if (this.potions[i].name === newPotion) {
          return `Error! Potion ${newPotion} is already in your inventory!`;
        }
        this.potions.push(newPotion);
      }
    },
     // REMOVE
    removePotion(potionName) {
      for (i = 0; i < this.potions.length; i++) {
        if (this.potions[i].name === potionName) {
          this.potions[i].splice(i, 1);
        }
      }
      return `Potion ${potionName} is not in inventory!`;
    },
  
    // UPDATE
    updatePotionName(oldName, newName) {
      for (i = 0; i < this.potions.length; i++) {
        if (this.potions[i].name === oldName) {
          this.potions[i].name = newName;
        }
      }
      return `Potion ${oldName} is not in inventory!`;
    },
    // Change code above this line
  };
  
//TESTY
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })

// //test addPotion
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });

// atTheOldToad.removePotion("Dragon breath");

//test getPotions
console.log(atTheOldToad.getPotions());
