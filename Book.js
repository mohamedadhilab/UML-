const BookCopy = require("./BookCopy");
class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.copies = [];
  }

  addCopy(copyId) {
    const copy = new BookCopy(copyId, this);
    this.copies.push(copy);
    return copy;
  }

  findAvailableCopies() {
    return this.copies.filter(copy => copy.status === "available");
  }
}

module.exports = Book;