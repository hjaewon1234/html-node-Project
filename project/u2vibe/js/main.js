const playController = document.getElementById("play-controller");
const volumeControl = document.getElementById("volume-control");
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
let userprofileid = document.getElementById("userprofile-id");
let logoutbtn = document.getElementById("logout-btn");

let logincheck = document.cookie.split("=")[1].split(".")[1];

let loginbox = document.getElementById("login-box");
let logoutbox = document.getElementById("logout-box");

const playlisthide = document.getElementById("playlist-hide");
const todayhide = document.getElementById("today-hide");

if (logincheck && window.location.href == "http://localhost:8080/") {
  location.href = "http://localhost:8080/signedin/";
}
if (logincheck) {
  const curuserName = JSON.parse(
    window.atob(document.cookie.split("=")[1].split(".")[1])
  ).id;

  userprofileid.innerText = curuserName;
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

document.getElementById("logout-btn").onclick = async function (e) {
  console.log("로그아웃");
  try {
    await axios.get("/api/user/logout");
  } catch (error) {
    console.error(error);
  }
  location.href = "http://localhost:8080/";
};

async function listUp() {
  const result = (await axios.get("/api/upload/upload")).data;
  console.log(result);
  // result?.list?.forEach((item) => {

  // });
  console.log("result");
  console.log(result.data);
  console.log(result.list);
}

// listUp();

// const firstDivBox = document.createElement("div");
// const secondDivBox = document.createElement("div");
// const thirdDivBox = document.createElement("div");

// const tempAudio = document.createElement("audio");

// const slideInnerDiv = document.createElement("div");
// const imgElem = document.createElement("img");
// const divElem = document.createElement("div");
// const titleDivElem = document.createElement("div");
// const musicDivElem = document.createElement("div");

// const slideDiv = document.createElement("div");

// imgElem.src = `../upload/${item.albumImg}`;
// imgElem.setAttribute("width", "100px");

// divElem.innerHTML = `${item.id}`;

// tempAudio.src = `../upload/${item.musicFile}`;
// tempAudio.setAttribute("width", "100px");

// titleDivElem.innerHTML = `${item.musicName}`;
// musicDivElem.innerHTML = `${item.singer}`;
// imgElem.after(tempAudio);

// firstDivBox.append(imgElem);

// secondDivBox.append(divElem);
// thirdDivBox.append(titleDivElem);
// thirdDivBox.append(musicDivElem);

// slideInnerDiv.append(firstDivBox);
// slideInnerDiv.append(secondDivBox);
// slideInnerDiv.append(thirdDivBox);

// slideDiv.append(slideInnerDiv);

// document.getElementsByClassName("footer-box")[0].before(slideDiv);

// imgTag[1].onclick = () => {
//   checkMusic++;
//   if (checkMusic > 1) return;
//   const imgDiv = document.createElement("div");
//   const tempDiv = document.createElement("div");
//   const tempImg = document.createElement("img");

//   const innerDiv = document.createElement("div");
//   const innerSecondDiv = document.createElement("div");
//   playController.src = `./upload/${item.musicFile}`;

//   playController.play();

//   tempImg.src = `../upload/${item.albumImg}`;
//   tempImg.setAttribute("filter", "none");

//   innerDiv.innerText = item.musicName;
//   innerSecondDiv.innerText = item.singer;

//   tempDiv.append(innerDiv);
//   tempDiv.append(innerSecondDiv);

//   imgDiv.append(tempImg);

//   document.getElementsByClassName("container")[0].append(imgDiv);
//   document.getElementsByClassName("container")[0].append(tempDiv);

//   // tempImg.src = `../upload/${item.albumImg}`;
// };
