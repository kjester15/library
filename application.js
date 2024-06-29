const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary(array) {
  array.forEach((element) => {
    const newDiv = document.createElement("div");
    document.getElementById("book-shelf").appendChild(newDiv);
    const newTitle = document.createElement("h3");
    newTitle.innerHTML = element.title;
    const newAuthor = document.createElement("h4");
    newAuthor.innerHTML = element.author;
    const newPages = document.createElement("h5");
    newPages.innerHTML = element.pages;
    const newRead = document.createElement("div");
    newRead.innerHTML = element.read;
    newDiv.append(newTitle, newAuthor, newPages, newRead);
    newDiv.classList.add("book-card");
  });
}

const book1 = new Book("title 1", "author 1", 395, true);
addBookToLibrary(book1);
const book2 = new Book("title 2", "author 2", 395, true);
addBookToLibrary(book2);
const book3 = new Book("title 3", "author 3", 395, true);
addBookToLibrary(book3);
displayLibrary(myLibrary);
document.getElementById('add').addEventListener("click", addBookToLibrary);
