const myLibrary = []

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status =  status;
}

function addBookToLibrary(title, author, pages, status) {
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', 'read');
addBookToLibrary('Harry Potter', 'J.K Rowling', '800', 'read');

const tableBody = document.querySelector('tbody');

function updateDisplay () {
    myLibrary.forEach(book => {
        const tr = document.createElement('tr');
        tableBody.appendChild(tr);
        Object.values(book).forEach(val => {
            const td = document.createElement('td');
            td.textContent = val;
            tr.appendChild(td);
        });
    });
};

updateDisplay();