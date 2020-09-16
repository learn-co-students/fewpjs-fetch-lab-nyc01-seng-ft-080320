// https://anapioficeandfire.com/api/characters/1909 -- char 400 
function getCharacterByNum(num, json) {
  let characterCounter = 0;
  let query = null;
  let foundBook = null;
  
  for (let [index, book] of json.entries()) {

    characterCounter += book.characters.length;
  
    if (characterCounter >= num) {
        foundBook = index;
        break;
    }
  };

  console.log(foundBook)
  characterCounter = 0;
  // console.log(indexHash.greater, indexHash.lesser, characterCounter)

  console

if (foundBook || foundBook === 0) {

  json[foundBook].characters.forEach((charLink) => {
    characterCounter += 1;
    //console.log(characterCounter, charLink)
    if (characterCounter === num) query = charLink;
  });
}
  

  if (query) return `This is the link for the ${num}th character ${query}`;

  else return query;

}




function fetchBooks() {

  return fetch('https://anapioficeandfire.com/api/books').then(response => response.json())
  .then(jsonObj => {

    renderBooks(jsonObj);
    console.log(jsonObj)

    console.log(getCharacterByNum(600, jsonObj))
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

