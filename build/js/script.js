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

  let newCardBook = d.createElement("div");

  if (library.length > 0) {
    library.forEach((book) => {
      const card = `
      <div style="background-image: url('./css/book.jpg'); background-size: cover;" class="w-40 h-56 p-3 bg-white border border-gray-400 rounded-lg shadow-md grid grid-flow-row gap-2 place-content-center content-center justify-center hover:scale-105 duration-300 ease-in-out">
      <h5 class="font-bold mb-1">${book.title}</h5>
      <p class="text-gray-700 text-base justify-self-center">${book.author}</p>
      <p class="text-gray-700 text-base justify-self-center">${
        book.pages
      } pages</p>
      <p class="text-gray-700 text-base justify-self-center">${
        book.read ? "Fini" : "En cours"
      }</p>
      <button class="bg-black hover:bg-red-700 text-white w-10 font-bold rounded-full justify-self-center">X</button>
      </div>`;
      console.log(book);
      newCardBook.innerHTML = card;
    });
    placeToAppendCars.appendChild(newCardBook);
  }
});
