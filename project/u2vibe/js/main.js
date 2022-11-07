const playController = document.getElementById("play-controller");
const volumeControl = document.getElementById("volume-control");
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");

playBtn.onclick = () => {
  playController.play();
};
stopBtn.onclick = () => {
  playController.pause();
};

volumeControl.addEventListener("change", (e) => {
  playController.volume = this.value / 10;
});

// async function listUp(){
//   const result = (await axios.get("/api/upload")).data;
//   result?.list?.forEach((item)=>{
//     const firstDivBox = document.createElement("div");
//     const secondDivBox = document.createElement("div");
//     const thirdDivBox = document.createElement("div");

//     const slideInnerDiv = document.createElement("div");
//     const imgElem = document.createElement("img");
//     const divElem = document.createElement("div");
//     const titleDivElem = document.createElement("div");
//     const musicDivElem = document.createElement("div");

//     const slideDiv = document.createElement("div")

//     imgElem.src = `./upload/${filename}`;
//     imgElem.src = `./upload/${__filename}`;

//     divElem.innerHTML = `${item.idx}`;

//     titleDivElem.innerHTML = `${item.title}`;
//     musicDivElem.innerHTML = `${item.music}`;

//     firstDivBox.append(imgElem);
//     secondDivBox.append(divElem);
//     thirdDivBox.append(titleDivElem)
//     thirdDivBox.append(musicDivElem)

//     slideInnerDiv.append(firstDivBox)
//     slideInnerDiv.append(secondDivBox)
//     slideInnerDiv.append(thirdDivBox)

//     slideDiv.append(slideInnerDiv);

//     document.getElementsByClassName("slide-div")[0].append(slideDiv);

//   })
// }
