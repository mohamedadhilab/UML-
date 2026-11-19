class BookCopy {
  constructor(copyId, book) {
    this.copyId = copyId;
    this.book = book;
    this.status = "available";
  }

  markBorrowed() {
    if (this.status === "borrowed") {
      return "This copy is already borrowed.";
    }

    this.status = "borrowed";
    return "Copy borrowed successfully.";
  }

  markAvailable() {
    this.status = "available";
    return "Copy returned successfully.";
  }
}

module.exports = BookCopy;