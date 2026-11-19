const Loan = require("./Loan");

class Library {
  constructor() {
    this.books = [];
    this.loans = [];

  }

  addBook(book) {
    this.books.push(book);
  }

  searchBooks(searchText) {
    const query = searchText.toLowerCase();

    return this.books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.ISBN.toLowerCase().includes(query)
    );
  }

  findCopy(copyId) {
    for (const book of this.books) {
      const copy = book.copies.find(copy => copy.copyId === copyId);
      if (copy) return copy;
    }

    return null;
  }

  borrowCopy(member, copyId) {
    const copy = this.findCopy(copyId);

    if (!copy) {
      return "Copy not found.";
    }

    const result = copy.markBorrowed();

    if (copy.status !== "borrowed") {
      return result;
    }

    if (result !== "Copy borrowed successfully.") {
      return result;
    }

    const loan = new Loan(member, copy);
    member.loans.push(loan);
    this.loans.push(loan);
    return loan;
  }
  getOverdueLoans(today = new Date()) {
  return this.loans.filter(loan => loan.isOverdue(today));
 }
}

module.exports = Library;