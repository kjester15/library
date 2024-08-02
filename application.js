// const myLibrary = []
// var bookCounter = -1;

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.shelf = [];
  }
}

class GamePlay {
  openDialog() {
    const dialog = document.getElementById("dialog")
    dialog.showModal()
  }

  closeDialog() {
    const closeDialog = document.getElementById("dialog")
    closeDialog.close()
  }

  verifyBookName(library) {
    let valid = true;
    let name = document.forms["form"]["title"].value;
    library.shelf.forEach((book) => {
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

  addBookToLibrary(library, book) {
    const newBook = new Book(book.title, book.author, book.pages, book.read)
    library.shelf.push(newBook);
    clearLibrary();
    displayLibrary(library.shelf);
    closeDialog();
  }

  removeBookFromLibrary(book) {
    const title = book.firstChild.innerHTML;
    var index = -1;
    shelf.forEach((element) => {
      if (element.title != title) {
        index += 1;
      } else {
        return;
      };
    });
    shelf.splice(index, 1);
    clearLibrary();
    displayLibrary(shelf);
  }

  swapReadButton(targetButton) {
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

  updateReadStatus(book) {
    const title = book.firstChild.innerHTML;
    shelf.forEach((element) => {
      if (element.title == title) {
        if (element.read == "Yes") {
          element.read = "No";
        } else {
          element.read = "Yes";
        };
      };
    });
  }

  clearLibrary() {
    document.getElementById("book-shelf").innerHTML = "";
  }

  displayLibrary(array) {
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
}

// function openDialog() {
//   const dialog = document.getElementById("dialog")
//   dialog.showModal()
// }

// function closeDialog() {
//   const closeDialog = document.getElementById("dialog")
//   closeDialog.close()
// }

// function verifyBookName(library) {
//   let valid = true;
//   let name = document.forms["form"]["title"].value;
//   library.myLibrary.forEach((book) => {
//     if (name == book.title) {
//       alert("That book is already in your library!");
//       valid = false;
//     }
//   });
//   if (valid === false) {
//     return false;
//   } else {
//     return true;
//   };
// }

// function addBookToLibrary(library, book) {
//   const newBook = new Book(book.title, book.author, book.pages, book.read)
//   library.myLibrary.push(newBook);
//   clearLibrary();
//   displayLibrary(library.myLibrary);
//   closeDialog();
// }

// function removeBookFromLibrary(book) {
//   const title = book.firstChild.innerHTML;
//   var index = -1;
//   myLibrary.forEach((element) => {
//     if (element.title != title) {
//       index += 1;
//     } else {
//       return;
//     };
//   });
//   myLibrary.splice(index, 1);
//   clearLibrary();
//   displayLibrary(myLibrary);
// }

// function swapReadButton(targetButton) {
//   if (targetButton.innerHTML === "Read") {
//     targetButton.innerHTML = "Not Read";
//     targetButton.classList.add("not-read");
//     targetButton.classList.remove("read");
//   } else {
//     targetButton.innerHTML = "Read";
//     targetButton.classList.add("read");
//     targetButton.classList.remove("not-read");
//   };
// }

// function updateReadStatus(book) {
//   const title = book.firstChild.innerHTML;
//   myLibrary.forEach((element) => {
//     if (element.title == title) {
//       if (element.read == "Yes") {
//         element.read = "No";
//       } else {
//         element.read = "Yes";
//       };
//     };
//   });
// }

// function clearLibrary() {
//   document.getElementById("book-shelf").innerHTML = "";
// }

// function displayLibrary(array) {
//   array.forEach((element, i) => {
//     const newDiv = document.createElement("div");
//     document.getElementById("book-shelf").appendChild(newDiv);
//     const newTitle = document.createElement("h3");
//     newTitle.innerHTML = element.title;
//     const newAuthor = document.createElement("h4");
//     newAuthor.innerHTML = `by ${element.author}`;
//     const newPages = document.createElement("h5");
//     newPages.innerHTML = `${element.pages} pages`;
//     const newRead = document.createElement("button");
//     newRead.setAttribute("id", "read-book")
//     if (element.read === "Yes") {
//       newRead.innerHTML = "Read";
//       newRead.classList.add("read");
//     } else {
//       newRead.innerHTML = "Not Read";
//       newRead.classList.add("not-read");
//     }
//     // add event listener to button
//     newRead.addEventListener("click", (event) => {
//       swapReadButton(event.target);
//       updateReadStatus(event.target.parentElement);
//     });
//     const newDelete = document.createElement("button");
//     newDelete.innerHTML = "Remove";
//     newDelete.setAttribute("id", "delete")
//     // add event listener to button
//     newDelete.addEventListener("click", (event) => {
//       removeBookFromLibrary(event.target.parentElement);
//     });
//     // add all the children to the parent div
//     newDiv.append(newTitle, newAuthor, newPages, newRead, newDelete);
//     newDiv.classList.add("book-card");
//     newDiv.setAttribute("id", `book-${i}`);
//   });
// }

const library = new Library();
const game = new GamePlay();
displayLibrary(library.shelf);
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
  if (verifyBookName(library)) {
    addBookToLibrary(book)
  };
  bookForm.reset();
});


