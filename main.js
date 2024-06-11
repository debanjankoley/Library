const myLibrary = []

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status =  status;
}

function addBookToLibrary(title, author, pages, status) {
    let book = new Book(title, author, pages, status)
    myLibrary.push(book)
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', 'read')