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

const arrImg = [
  `/assets/img/I_love.jpg`,
  `/assets/img/After_LIKE.jpg`,
  `/assets/img/ANTIFRAGILE.jpg`,
];
// 확인을 하기 위해 배열형식으로 이미지의 src를 저장함.
const tempArr = [`1`, `2`, `3`];

function imgMake() {
  for (let i = 0; i < arrImg.length; i++) {
    document
      .getElementsByClassName(`slide-img`)
      [i].setAttribute(`src`, arrImg[i]);
  }
}

imgMake();

let arrSongName = [`Nxde`, `After LIKE`, `ANTIFRAGILE`];
let arrSingerName = [`(여자)아이들`, `IVE(아이브)`, `  LE SSERAFIM (르세라핌)`];

function nameMake() {
  for (let i = 0; i < arrSongName.length; i++) {
    document.getElementsByClassName(`chart-song-name`)[i].innerText =
      arrSongName[i];
    document.getElementsByClassName(`chart-singer-name`)[i].innerText =
      arrSingerName[i];
    console.log(`asd`);
  }

  console.log(`asdfg`);
}
