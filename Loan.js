class Loan {
  constructor(member, bookCopy, loanDays = 14) {
    this.member = member;
    this.bookCopy = bookCopy;
    this.checkoutDate = new Date();

    this.dueDate = new Date(this.checkoutDate);
    this.dueDate.setDate(this.dueDate.getDate() + loanDays);

    this.returnDate = null;
  }

  markReturned() {
    if (this.returnDate !== null) {
      return "This loan has already been returned.";
    }

    this.returnDate = new Date();
    this.bookCopy.markAvailable();
    return "Loan returned successfully.";
  }

  isOverdue(today = new Date()) {
    return this.returnDate === null && today > this.dueDate;
  }
}

module.exports = Loan;