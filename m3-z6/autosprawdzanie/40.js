const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(oldName);
    //     return this.potions.splice(potionIndex, 1, newName); ta niepoprawnie usuwa inne potencjalne dane
    return (this.potions[potionIndex] = newName);

    // Change code above this line
  },
};
