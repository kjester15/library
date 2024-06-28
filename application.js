const myLibrary = ["hi", "bye"]

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function() {
    // return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  // };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary(array) {
  array.forEach((element) => console.log(element));
}

displayLibrary(myLibrary)
