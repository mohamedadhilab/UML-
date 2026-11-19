class Librarian {
  constructor(staffId, name) {
    this.staffId = staffId;
    this.name = name;
  }

  addBook(library, book) {
    library.addBook(book);
    return `"${book.title}" added to the library.`;
  }
  addCopy(book, copyId) {
  return book.addCopy(copyId);
 }

  recordReturn(loan) {
    return loan.markReturned();
  }
  checkOverdueLoans(library, today = new Date()) {
  return library.getOverdueLoans(today);
}
}

module.exports = Librarian;