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
    showLibraryStatistic();
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

        // EDIT
        const bookEdit = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.classList.add('edit-book');
        editButton.textContent = 'Edit';
        bookEdit.appendChild(editButton);
        bookRow.appendChild(bookEdit);


        // DELETE
        const bookDelete = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-book');
        deleteButton.textContent = 'Delete';
        bookDelete.appendChild(deleteButton);
        bookRow.appendChild(bookDelete);
    }
}


function listenClicks() {
    document.addEventListener('click', (event) => {
      const { target } = event;
      const tr = target.parentNode.parentNode.rowIndex - 1;
      if (target.id === 'add-book') {
        validateForm();
      } else if (target.classList.contains('delete-book')) {
        myLibrary.splice(tr, 1);
        console.log("Delete");
      }
      showBooksInLibrary();
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

function showLibraryStatistic() {
    const booksRead = document.querySelector('#books-read');
    const booksUnread = document.querySelector('#books-unread');
    const totalBooks = document.querySelector('#total-books');
    const totalPages = document.querySelector('#total-pages');
    booksRead.textContent = 0;
    booksUnread.textContent = 0;
    totalPages.textContent = 0;
    totalBooks.textContent = myLibrary.length;

    let readCounter = 0;
    let unreadCounter = 0;
    let pagesCounter = 0;

    for (let i = 0; i < myLibrary.length; i += 1) {
        if (myLibrary[i].status === 'read') {
          readCounter += 1;
          pagesCounter += parseInt(myLibrary[i].pages);
          booksRead.textContent = readCounter;
          totalPages.textContent = pagesCounter;
        } else if (myLibrary[i].status === 'unread') {
          unreadCounter += 1;
          booksUnread.textContent = unreadCounter;
        }
      }
}

showBooksInLibrary();
listenClicks();