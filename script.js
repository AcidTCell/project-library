const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  while (true) {
    let bookName = prompt("Enter a book name (type 'exit' to stop):");
    if (bookName === "exit") {
      break;
    }
    let bookAuthor = prompt("Enter the book's author:");
    let bookPages = prompt("Enter the number of pages:");
    let bookRead = prompt("Has the book been read? (yes/no):") === "yes";

    let newBook = new Book(bookName, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
  }

  displayBooks();
}

function displayBooks() {
  const libraryContainer = document.getElementById('library-container');
  libraryContainer.innerHTML = ''; // Clear previous content

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    bookCard.innerHTML = `
      <h3>${book.name}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
    `;
    
    libraryContainer.appendChild(bookCard);
  });
}

addBookToLibrary();