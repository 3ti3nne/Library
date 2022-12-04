let d = document;
let library = [];

let modal = d.querySelector("#modalBooksAdd");
let title = d.querySelector("#title");
let author = d.querySelector("#author");
let pages = d.querySelector("#pages");
let finito = d.querySelector("#read");
let submitBtn = d.querySelector("#submitBtn");
let placeToAppendCars = d.querySelector(".receptacle");

//BOOOOOKS

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      read ? "not read yet" : "read"
    }`;
  };
}

function addBook(book) {
  library.push(book);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBook(new Book(title.value, author.value, pages.value, finito.checked));
  d.querySelector(".btn-close").click();
  console.log(library);

  let newCardBook = d.createElement("div");
  if (library.length > 0) {
    library.forEach((book) => {
      newCardBook.className +=
        "w-full max-w-sm h-32 bg-white border border-gray-200 rounded-lg shadow-md bg-gray-500";
    });
    placeToAppendCars.appendChild(newCardBook);
  }
});
