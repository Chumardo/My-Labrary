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
    showBooksInLibrary();
}

addBookToLibrary('title', 'author', 'pages', 'status') 
addBookToLibrary('The E-Myth', 'Michael E. Gerber', '226', 'read')
console.log(myLibrary)

function showBooksInLibrary() {
    const bookList = document.querySelector('#table-body');
    for (let i = 0; i < myLibrary.length; i += 1) {
        const bookRow = document.createElement('tr');
        bookList.appendChild(bookRow);

        // TITLE
        const title = document.createElement('td');
        title.textContent = myLibrary[i].title;
        bookRow.appendChild(title);
    }
}