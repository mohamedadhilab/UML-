const Book = require("./Book");
const Member = require("./Member");
const Librarian = require("./Librarian");
const Library = require("./Library");
const library = new Library();
const librarian = new Librarian(1, "Sara");

const book = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "9780547928227"
);

console.log(librarian.addBook(library, book));
librarian.addCopy(book, "C001");
librarian.addCopy(book, "C002");

const member = new Member(1, "Adhil");

// Search for the book
const results = member.searchBook(library, "Hobbit");
console.log("Search results:", results.map(book => book.title));

// Borrow a copy
const loan = member.borrowCopy(library, "C001");

if (typeof loan === "string") {
  console.log(loan);
} else {
  console.log(`${member.name} borrowed ${loan.bookCopy.book.title}`);
  console.log("Due date:", loan.dueDate.toDateString());
  // Demonstrate checking after the due date
const dayAfterDueDate = new Date(loan.dueDate);
dayAfterDueDate.setDate(dayAfterDueDate.getDate() + 1);

const overdueLoans = librarian.checkOverdueLoans(
  library,
  dayAfterDueDate
);

console.log("Overdue loans:", overdueLoans.length);

  // Try to borrow the same copy again
  console.log(member.borrowCopy(library, "C001"));

  // Return the copy
  console.log(librarian.recordReturn(loan));
  console.log("Copy status:", loan.bookCopy.status);
}
