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

function chatMake() {
  const tempSlideOutterDiv = document.createElement(`div`);
  const slideDiv = document.createElement(`div`);
  const slideInnerDiv = document.createElement(`div`);
  const imgOutterDiv = document.createElement(`div`);
  const imgSlot = document.createElement(`img`);
  const rankoutterDiv = document.createElement(`div`);
  const rankDiv = document.createElement(`div`);
  const songInfoOutterDiv = document.createElement(`div`);
  const songName = document.createElement(`div`);
  const singerName = document.createElement(`div`);

  slideDiv.classList.add(`slide-div`);
  slideInnerDiv.classList.add(`slide-inner-div`);

  document.getElementsByClassName(`genre-div`)[0].append(slideDiv);
  slideDiv.append(tempSlideOutterDiv);
  tempSlideOutterDiv.append(slideInnerDiv);
  slideInnerDiv.append(imgOutterDiv);
  imgOutterDiv.append(imgSlot);
  slideInnerDiv.append(rankoutterDiv);
  rankoutterDiv.append(rankDiv);
  slideInnerDiv.append(songInfoOutterDiv);
  songInfoOutterDiv.append(songName);
  songInfoOutterDiv.append(singerName);

  rankDiv.innerText = `1`;
  songName.innerText = `Nxde`;
  singerName.innerText = `여자아이들`;
  // 슬라이드 한칸? 이 15개
  // 15개  5개  5개  5개
  // 5개는 1개 1개 1개 1개 1개
}
chatMake();

// <img src="../assets/img/I_love.jpg" alt="" />
// 첫번째 사진
// <img src="../assets/img/After_LIKE.jpg" alt="" />
// 두번째 사진

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
//   // append(
//   //   (document.createElement(`img`).setAttribute = (src, arrImg[i]))
//   // );
// document
//   .getElementsByClassName(`slide-img`)[1]
//   .setAttribute(`src`, arrImg[1]);
// `
// <div class="slide-inner-div">
//   <div>
//     <img src="../assets/img/${ANTIFRAGILE}.jpg" alt="" />
//   </div>
//   <div><div>3</div></div>
//   <div>
//     <div>${ANTIFRAGILE}</div>
//     <div>${ANTIFRAGILE}</div>
//   </div>
// </div>
// `
// 이런식으로 하나를 통으로 만들어서 innerHTML로 넣어주는 방식을 교수님이 추천하기도 했음.
// 이런식으로 넣는다면
// 한페이지(15개)를 한번에 넣고 거기에 대한 변수를 어떻게 바꿀지를 설정해주면 될 것 같음

// document.getElementsByClassName(`slide-img`)[0].append(img0);
// img0.src = arrImg[0];
// src는 배열의 형식으로 이미지가 정렬 된 것 중에 0번째 씩 차례차례 넣어줄 예정임
// 앞에 img도 for문으로 arrImg 로 만들고 똑같이 넣어주면 될 것 같음 대신에
// 들어가는 곳 마다 class를 줘서 이렇게 넣어주려고함.
// 한번에 들어가는걸 정해주면 넣어주는게 쉽게 넣어줄 수 있을것 같음.
// 어차피 순위는 고정이고(굳이 인덱스를 불러올 필요가 없고) 앨범커버, 노래, 가수명
// 세개만 변하기 때문에 조금만 더 생각하면 될 것 같다.

// document.getElementsByClassName(`slide-img`)[1].append(img1);
// img1.src = arrImg[1];

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
nameMake();
nameMake();
nameMake();
nameMake();

function img(i) {
  document.getElementsByClassName()[i];
}
