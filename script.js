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

// addBookToLibrary('title', 'author', 'pages', 'status') 
// addBookToLibrary('The E-Myth', 'Michael E. Gerber', '226', 'read')
// console.log(myLibrary)

function showBooksInLibrary() {
    const bookList = document.querySelector('#table-body');
    bookList.textContent = ''
    for (let i = 0; i < myLibrary.length; i += 1) {
        const bookRow = document.createElement('tr');
        bookList.appendChild(bookRow);

        // TITLE
        const title = document.createElement('td');
        title.textContent = myLibrary[i].title;
        bookRow.appendChild(title);

        // AUTHOR
        const author = document.createElement('td');
        author.textContent = myLibrary[i].author;
        bookRow.appendChild(author);

        // PAGES
        const pages = document.createElement('td');
        pages.textContent = myLibrary[i].pages;
        bookRow.appendChild(pages);

        // SATUS
        const status = document.createElement('td');
        status.textContent = myLibrary[i].status;
        bookRow.appendChild(status);
    }
}


function listenClicks() {
    document.addEventListener('click', (event) => {
      const { target } = event;
      if (target.id === 'add-book') {
        console.log('Form validation')
      }
    });
  }

listenClicks();