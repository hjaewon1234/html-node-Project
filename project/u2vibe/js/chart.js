const nextElem = document.getElementsByClassName(`carousel-item`)[2];
const prevElem = document.getElementsByClassName(`carousel-item`)[0];
const prev = document.getElementById(`prev-btn`);
const next = document.getElementById(`next-btn`);
const nextGenre = document.getElementsByClassName(`genre`)[2];
const prevGenre = document.getElementsByClassName(`genre`)[0];
const genrePrev = document.getElementById(`genre-prev-btn`);
const genreNext = document.getElementById(`genre-next-btn`);

const userprofileid = document.getElementById("userprofile-id");
const loginbox = document.getElementById("login-box");
const logoutbox = document.getElementById("logout-box");
// const logincheck = document.cookie.split("=")[1].split(".")[1];

const playlisthide = document.getElementById("playlist-hide");
const todayhide = document.getElementById("today-hide");
const musicuploadthide = document.getElementById("musicUpload-hide");
const momhide = document.getElementById("mom-hide");
// const curuserName = JSON.parse(
//   window.atob(document.cookie.split("=")[1].split(".")[1])
// ).id;

const playController = document.getElementById("play-controller");
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const volumeControl = document.getElementById("volume-control");

let checkNum = 0;
const curuserName = JSON.parse(
  window.atob(document.cookie.split("=")[1].split(".")[1])
).id;

let logincheck = document.cookie.split("=")[1].split(".")[1];

if (logincheck) {
  logoutbox.classList.remove("on");
  loginbox.classList.add("on");
  todayhide.classList.add("on");
  playlisthide.classList.remove("on");
  musicuploadthide.classList.remove("on");
  momhide.classList.add("on");

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

// function prevBtn() {\chart\
//   if (nextElem.classList.value == `carousel-item`) {
//     prev.classList.toggle(`off`);
//   } else {
//     next.classList.toggle(`off`);
//   }
// }

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
// const tempDb = [
//   { idx: 1, tempFile: "I_love", music: "Nxde", singer: "(여자)아이들" },
//   {
//     idx: 2,
//     tempFile: "After_LIKE",
//     music: "After LIKE",
//     singer: "IVE(아이브)",
//   },
// ];
// console.log(tempDb);
// console.log(tempDb[0].tempFile);
async function chartOn() {
  const data = (await axios.post("/api/chart/list")).data;

  console.log(data.data.length);

  console.log(data.data[0].tempFile);
  const innerImg = document.getElementsByClassName(`slide-inner-img`);
  const innerTitle = document.getElementsByClassName(`slide-inner-title`);
  const innerSinger = document.getElementsByClassName(`slide-inner-singer`);
  const innerIdx = document.getElementsByClassName(`slide-inner-id`);

  for (let i = 0; i < data.data.length; i++) {
    innerImg[
      i
    ].innerHTML = `<img src="/assets/img/${data.data[i].albumImg}" alt="" class="inner-img" />`;
    innerTitle[i].innerText = data.data[i].musicName;
    innerSinger[i].innerText = data.data[i].singer;
    innerIdx[i].innerText = data.data[i].id;
    console.log(`${i}번 돌앗어`);
  }

  console.log(document.getElementsByClassName(`inner-img`)[0]);
}
chartOn();

// function musicOn() {
//   const container = document.getElementsByClassName(`container`)[0];

//   container.innerHTML =
//     document.getElementsByClassName(`slide-inner-img`)[0].innerHTML +
//     document.getElementsByClassName("slide-music-info")[0].innerHTML;
//   // document.getElementsByClassName(`slid-inner-title`)[0].value +
//   // document.getElementsByClassName(`slid-inner-singer`)[0].value;
//   console.log(
//     document.getElementsByClassName("slide-music-info")[0],
//     document.getElementsByClassName(`slide-inner-singer`)[0]
//   );
//   console.log(`나 눌렷어 `);
// }
