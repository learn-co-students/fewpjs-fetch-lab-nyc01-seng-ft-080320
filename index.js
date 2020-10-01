
document.addEventListener('DOMContentLoaded', function() {  
  fetchBooks()
})


function fetchBooks() {
  return fetch(`https://anapioficeandfire.com/api/books`)
    .then(response => response.json())
    .then(thronesObj => renderBooks(thronesObj))
} 

function renderBooks(thronesObj){

  const main = document.querySelector(`main`)
  thronesObj.forEach(thronesBook => {
    const headerTwo = document.createElement(`h2`)
    headerTwo.innerHTML = thronesBook.name
    main.appendChild(headerTwo)
  })

}