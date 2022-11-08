const lyrics = document.getElementsByClassName("lyrics-text");
const lyricsBtn = document.getElementsByClassName("lyrics-btn");
const lyricsoffBtn = document.getElementsByClassName("lyricsoff-btn");
const albumList = document.getElementsByClassName("album-list");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
lyricsBtn[0].onclick = () => {
  lyrics[0].classList.toggle("on");
  lyricsBtn[0].classList.toggle("on");
  lyricsoffBtn[0].classList.toggle("on");
};

lyricsoffBtn[0].onclick = () => {
  lyrics[0].classList.toggle("on");
  lyricsBtn[0].classList.toggle("on");
  lyricsoffBtn[0].classList.toggle("on");
};

rightBtn.addEventListener("click", function () {
  albumList[0].style.transform = "translateX(-100vw)";
  // albumList[0].style.overflow = "visible";
});
