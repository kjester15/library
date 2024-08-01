const myLibrary = []
var bookCounter = -1;

function Book(title, author, pages, read, id) {
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

function verifyBookName() {
  let valid = true;
  let name = document.forms["form"]["title"].value;
  myLibrary.forEach((book) => {
    if (name == book.title) {
      alert("That book is already in your library!");
      valid = false;
    }
  });
  if (valid === false) {
    return false;
  } else {
    return true;
  };
}

function addBookToLibrary(book) {
  const newBook = new Book(book.title, book.author, book.pages, book.read)
  myLibrary.push(newBook);
  clearLibrary();
  displayLibrary(myLibrary);
  closeDialog();
}

function removeBookFromLibrary(book) {
  const title = book.firstChild.innerHTML;
  var index = -1;
  myLibrary.forEach((element) => {
    if (element.title != title) {
      index += 1;
    } else {
      return;
    };
  });
  myLibrary.splice(index, 1);
  clearLibrary();
  displayLibrary(myLibrary);
}

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

function updateReadStatus(book) {
  const title = book.firstChild.innerHTML;
  myLibrary.forEach((element) => {
    if (element.title == title) {
      if (element.read == "Yes") {
        element.read = "No";
      } else {
        element.read = "Yes";
      };
    };
  });
}

function clearLibrary() {
  document.getElementById("book-shelf").innerHTML = "";
}

function displayLibrary(array) {
  array.forEach((element, i) => {
    const newRow = document.createElement("div");
    document.getElementById("board").appendChild(newDiv);
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
    // add event listener to button
    newRead.addEventListener("click", (event) => {
      swapReadButton(event.target);
      updateReadStatus(event.target.parentElement);
    });
    const newDelete = document.createElement("button");
    newDelete.innerHTML = "Remove";
    newDelete.setAttribute("id", "delete")
    // add event listener to button
    newDelete.addEventListener("click", (event) => {
      removeBookFromLibrary(event.target.parentElement);
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
  if (verifyBookName()) {
    addBookToLibrary(book)
  };
  bookForm.reset();
});


