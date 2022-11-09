const nextElem = document.getElementsByClassName(`carousel-item`)[2];
const prevElem = document.getElementsByClassName(`carousel-item`)[0];
const prev = document.getElementById(`prev-btn`);
const next = document.getElementById(`next-btn`);
const nextGenre = document.getElementsByClassName(`genre`)[2];
const prevGenre = document.getElementsByClassName(`genre`)[0];
const genrePrev = document.getElementById(`genre-prev-btn`);
const genreNext = document.getElementById(`genre-next-btn`);

let userprofileid = document.getElementById("userprofile-id");
let loginbox = document.getElementById("login-box");
let logoutbox = document.getElementById("logout-box");
let logincheck = document.cookie.split("=")[1].split(".")[1];
const playlisthide = document.getElementById("playlist-hide");
const todayhide = document.getElementById("today-hide");

const playController = document.getElementById("play-controller");
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const volumeControl = document.getElementById("volume-control");

let checkNum = 0;

if (logincheck) {
  logoutbox.classList.remove("on");
  loginbox.classList.add("on");
  todayhide.classList.add("on");
  playlisthide.classList.remove("on");

  const curuserName = JSON.parse(
    window.atob(document.cookie.split("=")[1].split(".")[1])
  ).id;

  userprofileid.innerText = curuserName;
}
document.getElementById("logout-btn").onclick = async function (e) {
  console.log("로그아웃");
  try {
    await axios.get("/api/user/logout");
  } catch (error) {
    console.error(error);
  }
  location.href = "http://localhost:8080/";
};

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
  } else {
    genreNext.classList.toggle(`off`);
  }
}

function genreNextBtn() {
  if (prevGenre.classList.value == `carousel-item genre`) {
    genreNext.classList.toggle(`off`);
  } else {
    genrePrev.classList.toggle(`off`);
  }
}

function musicMove() {
  const elemATitle = document.createElement("a");
  const elemASinger = document.createElement("a");
  const elemImg = document.createElement("img");
  const elemDiv = document.createElement("div");

  elemATitle.setAttribute("href", `../musicInfo`);
  elemASinger.setAttribute("href", `../musicInfo`);
  elemImg.setAttribute("src", `path`);

  // elemATitle.innerHTML = `${}`
  // elemASinger.innerHTML = `${}`

  elemDiv.append(elemATitle);
  elemDiv.append(elemASinger);
}

window.onload = () => {
  musicMove();
};

let musicList = [];

async function listUp() {
  const result = (await axios.get("/api/chart/list")).data;
  result?.data?.forEach((item) => {
    let typeCheck = /mp3|ogg|wma|wav|au|rm|mid/.test(item);
    if (typeCheck) musicList.push(item);
  });
  console.log(musicList);
}
listUp();

function musicPlay(idx) {
  playController.src = `../upload/${musicList[idx]}`;
  playController.play();
}

playBtn.onclick = () => {
  playController.play();
};
stopBtn.onclick = () => {
  playController.pause();
};

volumeControl.addEventListener("change", (e) => {
  playController.volume = this.value / 10;
});

// musicPlay();

const slideInnerImg = document.getElementsByClassName("slide-inner-img");
const slideInnerId = document.getElementsByClassName("slide-inner-id");
const slideInnerTitle = document.getElementsByClassName("slide-inner-title");
const slideInnerSinger = document.getElementsByClassName("slide-inner-singer");
const innerImg = document.getElementsByClassName("inner-img");
const slideInnerDiv = document.getElementsByClassName("slide-inner-div");

async function chartListUp() {
  const data = (await axios.get("/api/upload/upload")).data;

  data.list.forEach((item, index) => {
    innerImg[index].src = `../upload/${item.albumImg}`;

    slideInnerId[index].innerHTML = item.id;

    slideInnerTitle[index].innerHTML = item.musicName;
    slideInnerSinger[index].innerHTML = item.singer;

    slideInnerImg[index].append(innerImg[index]);
    console.log(item);
    console.log(Object.keys(item).length);
    [...slideInnerDiv].forEach((elem, idx) => {
      // console.log(elem);
      elem.onclick = (e) => {
        checkNum++;
        if (checkNum > 1) {
          musicPlay(idx);
          return;
        }
        // item = data.list
        // item.id = data.list.id
        // item[idx].musicName
        // item[idx].singer
        // console.log("ASd");
        console.log(e.target);
        console.log(idx);
        const imgDiv = document.createElement("div");
        const tempDiv = document.createElement("div");
        const tempImg = document.createElement("img");

        const innerDiv = document.createElement("div");
        const innerSecondDiv = document.createElement("div");

        tempImg.src = `../upload/${item.albumImg}`;
        tempImg.setAttribute("filter", "none");

        musicPlay(idx);

        innerDiv.innerText = item.musicName;
        innerSecondDiv.innerText = item.singer;

        tempDiv.append(innerDiv);
        tempDiv.append(innerSecondDiv);

        imgDiv.append(tempImg);

        document.getElementsByClassName("container")[0].append(imgDiv);
        document.getElementsByClassName("container")[0].append(tempDiv);
      };
    });
  });
}

chartListUp();
