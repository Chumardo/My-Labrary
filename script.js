let myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.status = status;
    }
}

if (localStorage.getItem('books') === null) {
    myLibrary = [];
} else {
    const booksFromStorage = JSON.parse(localStorage.getItem('books'));
    myLibrary = booksFromStorage;
}

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
    showBooksInLibrary();
}

function showBooksInLibrary() {
    localStorage.setItem('books', JSON.stringify(myLibrary));
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
        validateForm();
      }
    });
  }

function validateForm() {
    const form = document.querySelector('form');
    const formTitle = document.querySelector('#title')
    const formName = document.querySelector('#name')
    const formPage = document.querySelector('#number')
    const checkboxForm = document.querySelector('input[name="checkbox"]');

    if (checkboxForm.checked) {
        addBookToLibrary(formTitle.value, formName.value, formPage.value, 'read');
    } else {
        addBookToLibrary(formTitle.value, formName.value, formPage.value, 'unread');
    }
    form.reset();
}

showBooksInLibrary();
listenClicks();