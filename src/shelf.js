function shelfBook(bookName, shelfName) {
  if (shelfName.length < 3) {
    shelfName.unshift(bookName);
  }
}

function unshelfBook(bookName, shelfName) {
  for (i = 0; i < shelfName.length; i++) {
    if (bookName === shelfName[i].title) {
      shelfName.splice(i, 1);
    }
  }
}

function listTitles(shelfName) {
  var titles = [];
  for (i = 0; i < shelfName.length; i++) {
    titles.push(shelfName[i].title);
  }
  return titles.join(", ");
};
function searchShelf(shelfName, bookName){
  for (i = 0; i < shelfName.length; i++){
    if (bookName === shelfName[i].title){
      return true
    }

  };
  return false
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
