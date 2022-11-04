const nextElem = document.getElementsByClassName(`carousel-item`)[2];
const prevElem = document.getElementsByClassName(`carousel-item`)[0];
const prev = document.getElementById(`prev-btn`);
const next = document.getElementById(`next-btn`);
const nextGenre = document.getElementsByClassName(`genre`)[2];
const prevGenre = document.getElementsByClassName(`genre`)[0];
const genrePrev = document.getElementById(`genre-prev-btn`);
const genreNext = document.getElementById(`genre-next-btn`);

console.log(nextElem.classList.value);
console.log(prevElem.classList.value);
console.log(nextGenre.classList.value);
console.log(prevElem.classList.value == `carousel-item active`);

function prevBtn() {
  if (nextElem.classList.value == `carousel-item`) {
    prev.classList.toggle(`off`);
  } else {
    next.classList.toggle(`off`);
  }
}

function nextBtn() {
  if (prevElem.classList.value == `carousel-item`) {
    next.classList.toggle(`off`);
  } else {
    prev.classList.toggle(`off`);
  }
}

function genrePrevBtn() {
  if (nextGenre.classList.value == `carousel-item genre`) {
    genrePrev.classList.toggle(`off`);
    console.log(`나 눌렷어`);
  } else {
    genreNext.classList.toggle(`off`);
  }
}

function genreNextBtn() {
  if (prevGenre.classList.value == `carousel-item genre`) {
    genreNext.classList.toggle(`off`);
    console.log(prevGenre.classList.value);
  } else {
    genrePrev.classList.toggle(`off`);
    console.log(prevGenre.classList.value);
  }
}
