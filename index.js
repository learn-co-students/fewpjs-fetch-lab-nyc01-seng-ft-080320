
function getCharacterByNum(num, json) {
  let characterCounter = 0
  let indexHash = {};

  
  for (let [index, book] of json.entries()) {
    
    characterCounter += book.characters.length;
    console.log(characterCounter, book.characters.length, num)
    
    if (characterCounter >= num) {
      indexHash.greater = index;
      console.log('leaves on index', indexHash.greater)
      indexHash.lesser = num - (characterCounter - book.characters.length + 1);
      break;
    }
  };

  
  if (indexHash.greater || indexHash.greater === 0) {

    return `link for char ${num} ${json[indexHash.greater].characters[indexHash.lesser]}`
  }
  
  return null;

}

function fetchBooks() {

  return fetch('https://anapioficeandfire.com/api/books').then(response => response.json())
  .then(jsonObj => {

    renderBooks(jsonObj);
    console.log(jsonObj)

    console.log('Test 1: ', getCharacterByNum(1200, jsonObj))
    console.log('Test 2: ',getCharacterByNum(12, jsonObj))
    console.log('Test 3(null): ',getCharacterByNum(4657, jsonObj))
  });
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
  fetchBooks()
})

