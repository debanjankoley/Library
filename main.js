const myLibrary = []

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status =  status;
}

function addBookToLibrary(title, author, pages, status) {
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', 'read');
addBookToLibrary('Harry Potter', 'J.K Rowling', '800', 'not read');

const tableBody = document.querySelector("tbody");

function deleteBook (bookName) {
    myLibrary.forEach(book => {
        if (book.title === bookName) {
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
        };
    });
};

function updateDisplay () {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
    };

    myLibrary.forEach(book => {
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);
        Object.values(book).forEach(val => {
            const td = document.createElement("td");
            td.textContent = val;
            tr.appendChild(td);
        });

        const td = document.createElement("td");
        const btn = document.createElement("button");
        tr.appendChild(td);
        td.appendChild(btn);
        btn.textContent = "Delete";
        btn.classList.add("deleteBtn");
    });
};

deleteBtn = document.querySelector(".deleteBtn");
deleteBtn.addEventListener("click", (e) => {
    console.log(e.target)
    deleteBook(e.target.parentElement.parentElement.firstChild.textContent);
    updateDisplay();
});

const showButton = document.getElementById("showDialog");
const dialog = document.querySelector("dialog");
const titleBox = document.getElementById("title");
const authorBox = document.getElementById("author");
const pagesBox = document.getElementById("pages");
const statusBox = document.getElementById("status");
const form = document.querySelector("form");

showButton.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

dialog.addEventListener("close", () => {
    statusBox.value = statusBox.checked ? "read" : "not read" ;

    if (dialog.returnValue === "cancel") {
        return;
    } else if (dialog.returnValue === "confirm") {
        addBookToLibrary(titleBox.value, authorBox.value, pagesBox.value, statusBox.value);
        updateDisplay();
    };
});

updateDisplay();