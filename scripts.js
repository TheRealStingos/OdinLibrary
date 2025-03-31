const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

function addBooktoLibrary(Book){
    myLibrary.push(Book)
}

function outputLibrary(){
    for (let i = 0; i <= myLibrary.length; i++){
        return myLibrary[i]
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not yet read");

console.log(theHobbit.info());

addBooktoLibrary(theHobbit);

console.log(outputLibrary());