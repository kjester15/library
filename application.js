const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function openDialog() {
  const dialog = document.getElementById("dialog")
  dialog.showModal()
}

function closeDialog() {
  const closeDialog = document.getElementById("close")
  closeDialog.close()
}

function addBookToLibrary(book) {
  const newBook = new Book(book.title, book.author, book.pages, book.read)
  console.log(newBook)
  myLibrary.push(book);
}

function swapReadButton() {
  console.log(this);
  // if (this.innerHTML === "Read") {
  //   this.innerHTML = "Not Read";
  //   this.classList.add("not-read");
  //   this.classList.remove("read");
  // };
}

function displayLibrary(array) {
  array.forEach((element, i) => {
    const newDiv = document.createElement("div");
    document.getElementById("book-shelf").appendChild(newDiv);
    const newTitle = document.createElement("h3");
    newTitle.innerHTML = element.title;
    const newAuthor = document.createElement("h4");
    newAuthor.innerHTML = `by ${element.author}`;
    const newPages = document.createElement("h5");
    newPages.innerHTML = `${element.pages} pages`;
    const newRead = document.createElement("button");
    newRead.setAttribute("id", "read")
    if (element.read === true) {
      newRead.innerHTML = "Read";
      newRead.classList.add("read");
    } else {
      newRead.innerHTML = "Not Read";
      newRead.classList.add("not-read");
    }
    newDiv.append(newTitle, newAuthor, newPages, newRead);
    newDiv.classList.add("book-card");
    newDiv.setAttribute("id", `book-${i}`);
  });
}

const book1 = new Book("title 1", "author 1", 395, false);
addBookToLibrary(book1);
const book2 = new Book("title 2", "author 2", 395, true);
addBookToLibrary(book2);
const book3 = new Book("title 3", "author 3", 395, true);
addBookToLibrary(book3);
displayLibrary(myLibrary);
document.getElementById('add').addEventListener("click", openDialog);
document.getElementById('close').addEventListener("click", closeDialog);
// document.getElementById('read').addEventListener("click", swapReadButton);
const bookForm = document.querySelector("form");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(bookForm);
});
bookForm.addEventListener("formdata", (event) => {
  const book = {}
  const data = event.formData;
  data.forEach((value, key) => (book[`${key}`] = value))
  addBookToLibrary(book)
});


