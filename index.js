function fetchBooks() {
   fetch('https://anapioficeandfire.com/api/books')
    .then(resp => return resp.json())
    .then(json => console.log(json));
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  let books = fetchBooks();
  debugger
})
