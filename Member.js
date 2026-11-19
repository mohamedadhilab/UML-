class Member {
  constructor(memberId, name) {
    this.memberId = memberId;
    this.name = name;
    this.loans = [];
  }

  searchBook(library, searchText) {
    return library.searchBooks(searchText);
  }

  borrowCopy(library, copyId) {
    return library.borrowCopy(this, copyId);
  }
}

module.exports = Member;