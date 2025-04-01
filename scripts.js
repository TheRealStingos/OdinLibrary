const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBooktoLibrary(Book){
    myLibrary.push(Book)
}

function removeBook(bookId){
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);

    if (bookIndex !== -1){
        myLibrary.splice(bookIndex, 1);
        outputLibrary();
    }
}

function outputLibrary(){
    libDisplay.innerHTML = ""

    myLibrary.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add('book-card');
        bookElement.dataset.id = book.id;

        const bookInfo = document.createElement("div")
        bookInfo.classList.add('book-info')
        bookElement.innerText = 
        `Title: ${book.title}
        Author: ${book.author}
        Page Count: ${book.pages}
        Status: ${book.read}
        `;

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = function() {
            removeBook(book.id);
        }

        bookElement.appendChild(bookInfo);
        bookElement.appendChild(removeButton);
        libDisplay.append(bookElement)
    })
}

function openForm() {
    document.querySelector(".form-popup").style.display = "block";
    document.getElementById("overlay").classList.add("active");
}

function closeForm(){
    document.querySelector(".form-popup").style.display = "none";
    document.getElementById("overlay").classList.remove("active");
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not yet read");

const catch22 = new Book("Catch-22", "Joseph Heller", 452, "read");

addBooktoLibrary(theHobbit);

addBooktoLibrary(catch22);

const libDisplay = document.getElementById("libDisplay")
outputLibrary();

function submitBook(event){
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("status").value;

    const newBook = new Book(title, author, pages, read);

    addBooktoLibrary(newBook)
    libDisplay.innerHTML = "";
    outputLibrary();

    closeForm();
}