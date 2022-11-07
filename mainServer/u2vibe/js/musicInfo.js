const lyrics = document.getElementsByClassName("lyrics-text");
const lyricsBtn = document.getElementsByClassName("lyrics-btn");
const lyricsoffBtn = document.getElementsByClassName("lyricsoff-btn");
const albumList = document.getElementsByClassName("album-list");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const playleftBtn = document.getElementById("playleft-btn");
const playrightBtn = document.getElementById("playright-btn");
const playList = document.getElementsByClassName("playList-line");
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
  albumList[0].style.transform = "translateX(-68.5vw)";
  // albumList[0].style.overflow = "visible";
});

leftBtn.addEventListener("click", function () {
  albumList[0].style.transform = "translateX(0vw)";
});

playrightBtn.onclick = () => {
  playList[0].style.transform = "translateX(-68.5vw)";
};

playleftBtn.onclick = () => {
  playList[0].style.transform = "translateX(0vw)";
};
