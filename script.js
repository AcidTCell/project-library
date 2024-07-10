const myLibrary = [ ];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const libraryContainer = document.querySelector('.libraryContainer');
  libraryContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    bookCard.innerHTML = `
    <div class="card">
      <div class="cardHeader">${book.name}</div>
      <div class="cardDescription">
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? 'Yes' : 'No'}</p>
    </div>
        <div class="cardIconContainer">
            <div><img src="imgs/star-plus-outline.svg" alt="" class="cardIcon"></div>
            <div><img src="imgs/eye-plus-outline.svg" alt=""class="cardIcon"></div>
            <div><img src="imgs/source-fork.svg" alt=""class="cardIcon"></div>
        </div>
    </div>
    `;
    
    libraryContainer.appendChild(bookCard);
  });
}

const newBookBtn = document.querySelector('#newBookBtn');
const bookFormDialog = document.querySelector('#bookFormDialog');
const bookForm = document.querySelector('#bookForm');
const cancelBtn = document.querySelector('#cancelBtn');
const dialogOverlay = document.querySelector('.dialog-overlay');

newBookBtn.addEventListener('click', () => {
  bookFormDialog.showModal();
  dialogOverlay.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
  bookFormDialog.close();
  dialogOverlay.style.display = 'none';
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  const newBook = new Book(name, author, pages, read);
  addBookToLibrary(newBook);

  bookForm.reset();
  bookFormDialog.close();
  dialogOverlay.style.display = 'none';
});

