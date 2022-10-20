let myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.status = status;
    }
}

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

addBookToLibrary('title', 'author', 'pages', 'status') 
addBookToLibrary('The E-Myth', 'Michael E. Gerber', '226', 'read')
console.log(myLibrary)