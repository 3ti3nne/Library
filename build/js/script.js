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
  this.readStatus = function () {
    this.read = this.read ? false : true;
  };
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

  if (library.length > 0) {
    let card = "";
    library.forEach((book) => {
      card = `
      <div class="w-40 h-56 p-3 bg-slate-100 rounded-lg shadow-md grid grid-flow-row gap-2 place-content-center content-center justify-center hover:scale-105 duration-300 ease-in-out">
      <h5 class="font-bold mb-1">${book.title}</h5>
      <p class="text-gray-700 text-base justify-self-center">${book.author}</p>
      <p class="text-gray-700 text-base justify-self-center">${
        book.pages
      } pages</p>
      <button id="readBtn" class="${
        book.read ? "bg-emerald-300" : "bg-red-500"
      } text-white w-14 px-3 font-bold rounded-full justify-self-center">${
        book.read ? "Fini" : "En cours"
      }</button>
      <button id="deleteBtn" data-book-title="${
        book.title
      }" class="bg-black hover:bg-red-700 text-white w-10 font-bold rounded-full justify-self-center">X</button>
      
      </div>`;
    });
    placeToAppendCars.innerHTML += card;
  }
});

d.addEventListener("click", (e) => {
  const target = e.target.closest("#readBtn");
  if (target) {
  }
});

d.addEventListener("click", (e) => {
  const target = e.target.closest("#deleteBtn");
  if (target) {
    if (target.parentNode) {
      console.log(target.parentNode);
      target.parentNode.parentNode.removeChild(target.parentNode);
    }
    const findIttarget = target.dataset.bookTitle;

    function removeBookByTitle(value, index, arr) {
      // If the value at the current array index matches the specified value (2)
      if (value.title === findIttarget) {
        // Removes the value from the original array
        arr.splice(index, 1);
        return true;
      }
      return false;
    }

    library.filter(removeBookByTitle);
  }
});
