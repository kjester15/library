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
    console.log(library.shelf)
    this.clearLibrary();
    this.displayLibrary(library, library.shelf);
    this.closeDialog();
  }

  removeBookFromLibrary(library, book) {
    const title = book.firstChild.innerHTML;
    var index = 0;
    library.shelf.every(function(element) {
      if (element.title != title) {
        index += 1;
        return true;
      } else {
        return false;
      };
    });
    library.shelf.splice(index, 1);
    this.clearLibrary();
    this.displayLibrary(library, library.shelf);
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

  displayLibrary(library, array) {
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
        this.swapReadButton(event.target);
        this.updateReadStatus(event.target.parentElement);
      });
      const newDelete = document.createElement("button");
      newDelete.innerHTML = "Remove";
      newDelete.setAttribute("id", "delete")
      // add event listener to button
      newDelete.addEventListener("click", (event) => {
        this.removeBookFromLibrary(library, event.target.parentElement);
      });
      // add all the children to the parent div
      newDiv.append(newTitle, newAuthor, newPages, newRead, newDelete);
      newDiv.classList.add("book-card");
      newDiv.setAttribute("id", `book-${i}`);
    });
  }
}

const library = new Library();
const game = new GamePlay();
// game.displayLibrary(library, library.shelf);
document.getElementById('add').addEventListener("click", game.openDialog);
document.getElementById('close').addEventListener("click", game.closeDialog);

const bookForm = document.querySelector("form");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  new FormData(bookForm);
});

bookForm.addEventListener("formdata", (event) => {
  const book = {}
  const data = event.formData;
  data.forEach((value, key) => (book[`${key}`] = value))
  if (game.verifyBookName(library)) {
    game.addBookToLibrary(library, book)
  };
  bookForm.reset();
});


