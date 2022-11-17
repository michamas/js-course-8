const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line

    for (const book of this.books) {
      if (book === oldName) {
        const bookIndex = this.books.indexOf(oldName);
        this.books.splice(bookIndex, 1, newName);
      }
    }
    console.log(this.books)
    return this.books;

    // Change code above this line
  },
};
bookShelf.updateBook("Haze", "Dungeon chronicles");
console.log("juz")
