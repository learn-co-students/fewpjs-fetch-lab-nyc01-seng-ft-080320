
function getCharacterByNum(num, json) {
  let characterCounter = 0;
  let indexHash = {};
  let query = null;

  for (let [index, book] of json.entries()) {
    characterCounter += book.characters.length;
    // console.log(characterCounter, index);

    if (characterCounter >= num) {
      indexHash.greater = index;
      indexHash.lesser = Math.abs(index - 1);
      break;
    }
  };
  characterCounter = 0;
  

  

if (indexHash.greater || indexHash.greater === 0) {
  json[indexHash.lesser].characters.forEach((charLink) => {
    
 
    if (characterCounter === num) query = charLink;
    characterCounter += 1;
  });

  json[indexHash.greater].characters.forEach((charLink) => {
    

    if (characterCounter === num) query = charLink;
    characterCounter += 1;
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

    console.log('Test 1: ', getCharacterByNum(1798, jsonObj))
    console.log('Test 2: ',getCharacterByNum(12, jsonObj))
    console.log('Test 3(null): ',getCharacterByNum(1799, jsonObj))
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

