function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}
function buildMainCharacter(mainName, mainAge, mainPronouns) {
  return {
    name: mainName,
    age: mainAge,
    pronouns: mainPronouns,
  };
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review);
  }
  return {
    reviews,
  };
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;

}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: bookGenre,
    pageCount: calculatePageCount(bookTitle)
  }
}

function editBook(ghoulBook) {
  return ghoulBook.pageCount = ghoulBook.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};
