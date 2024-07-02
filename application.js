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
  const closeDialog = document.getElementById("dialog")
  closeDialog.close()
}

function addBookToLibrary(book) {
  const newBook = new Book(book.title, book.author, book.pages, book.read)
  myLibrary.push(newBook);
  clearLibrary();
  displayLibrary(myLibrary);
  closeDialog();
}

// TODO: instead of swapping the button text, swap the value of the book object
function swapReadButton(targetButton) {
  if (targetButton.innerHTML === "Read") {
    targetButton.innerHTML = "Not Read";
    targetButton.classList.add("not-read");
    targetButton.classList.remove("read");
  } else {
    targetButton.innerHTML = "Read";
    targetButton.classList.add("read");
    targetButton.classList.remove("not-read");
  };
}

function clearLibrary() {
  document.getElementById("book-shelf").innerHTML = "";
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
    newRead.setAttribute("id", "read-book")
    if (element.read === "Yes") {
      newRead.innerHTML = "Read";
      newRead.classList.add("read");
    } else {
      newRead.innerHTML = "Not Read";
      newRead.classList.add("not-read");
    }
    const newDelete = document.createElement("button");
    newDelete.innerHTML = "Remove";
    newDelete.setAttribute("id", "delete")
    // add event listener to button
    newRead.addEventListener("click", (event) => {
      swapReadButton(event.target);
    });
    // add all the children to the parent div
    newDiv.append(newTitle, newAuthor, newPages, newRead, newDelete);
    newDiv.classList.add("book-card");
    newDiv.setAttribute("id", `book-${i}`);
  });
}

displayLibrary(myLibrary);
document.getElementById('add').addEventListener("click", openDialog);
document.getElementById('close').addEventListener("click", closeDialog);

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
  bookForm.reset();
});


