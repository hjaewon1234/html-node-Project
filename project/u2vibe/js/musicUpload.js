const musicTitle = document.getElementById("music-title");
const fileUpload = document.getElementById("file-upload");
const previewImg = document.getElementById("preview-img");
const imgUpload = document.getElementById("img-upload");
const formSelect = document.getElementsByClassName("form-select");
const singerName = document.getElementById("singer-name");
const albumTitle = document.getElementById("album-title");

const uploadContent = document.getElementById("upload-content");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

const playController = document.getElementById("play-controller");
const volumeControl = document.getElementById("volume-control");
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");

// 이미지 미리보기 함수
function setImg(input) {
  if (input.files && input.files[0]) {
    let readImg = new FileReader();

    readImg.onload = (e) => {
      previewImg.setAttribute("src", e.target.result);
      previewImg.style.width = "150px";
      previewImg.style.height = "150px";
    };
    readImg.readAsDataURL(input.files[0]);
  }
}

// 파일 선택 후 변화하면
imgUpload.addEventListener("change", (e) => {
  setImg(e.target);
});

playBtn.onclick = () => {
  playController.play();
};
stopBtn.onclick = () => {
  playController.pause();
};

volumeControl.addEventListener("change", (e) => {
  playController.volume = this.value / 10;
});

uploadContent.onsubmit = async (e) => {
  e.preventDefault();

  if (
    !musicTitle.value ||
    !fileUpload.value ||
    !imgUpload.value ||
    !formSelect[0].value ||
    !singerName.value ||
    !albumTitle.value
  )
    return;

  try {
    const { file, img } = e.target;
    // const img = e.target.img;
    // const file = e.target.file;
    let formData = new FormData();
    formData.append("file", file.files[0]);
    formData.append("img", img.files[0]);
    formData.append("musicTitle", musicTitle.value);
    formData.append("formSelect", formSelect[0].value);
    formData.append("singerName", singerName.value);
    formData.append("albumTitle", albumTitle.value);

    const data = await axios.post("/api/upload/upload", formData);
  } catch (err) {
    console.error(err);
  }
  musicTitle.value = "";
};

async function listUp() {
  const result = (await axios.get("/api/upload/upload")).data;
  // result?.list?.forEach((item) => {
  //   const firstDivBox = document.createElement("div");
  //   const secondDivBox = document.createElement("div");
  //   const thirdDivBox = document.createElement("div");

  //   const tempAudio = document.createElement("audio");

  //   const slideInnerDiv = document.createElement("div");
  //   const imgElem = document.createElement("img");
  //   const divElem = document.createElement("div");
  //   const titleDivElem = document.createElement("div");
  //   const musicDivElem = document.createElement("div");

  //   const slideDiv = document.createElement("div");

  // imgElem.src = `../upload/${item.albumImg}`;
  //   imgElem.setAttribute("width", "100px");

  //   divElem.innerHTML = `${item.id}`;

  //   tempAudio.src = `../upload/${item.musicFile}`;
  //   tempAudio.setAttribute("width", "100px");

  //   titleDivElem.innerHTML = `${item.musicName}`;
  //   musicDivElem.innerHTML = `${item.singer}`;
  //   imgElem.after(tempAudio);

  //   firstDivBox.append(imgElem);

  //   secondDivBox.append(divElem);
  //   thirdDivBox.append(titleDivElem);
  //   thirdDivBox.append(musicDivElem);

  //   slideInnerDiv.append(firstDivBox);
  //   slideInnerDiv.append(secondDivBox);
  //   slideInnerDiv.append(thirdDivBox);

  //   slideDiv.append(slideInnerDiv);

  //   document.getElementsByClassName("footer-box")[0].before(slideDiv);

  // imgElem.onclick = () => {
  //   const imgDiv = document.createElement("div");
  //   const tempDiv = document.createElement("div");
  //   const tempImg = document.createElement("img");

  //   const innerDiv = document.createElement("div");
  //   const innerSecondDiv = document.createElement("div");

  //   tempImg.src = `../upload/${item.albumImg}`;
  //   tempImg.setAttribute("filter", "none");

  //   innerDiv.innerText = item.musicName;
  //   innerSecondDiv.innerText = item.singer;

  //   tempDiv.append(innerDiv);
  //   tempDiv.append(innerSecondDiv);

  //   imgDiv.append(tempImg);

  //   document.getElementsByClassName("container")[0].append(imgDiv);
  //   document.getElementsByClassName("container")[0].append(tempDiv);
  // };
  // });
  console.log("result");
  console.log(result.data);
  console.log(result.list);
}

listUp();

// onclick = ()=>{ 노래제목, 가수이름
// server 측
// db에 const musicPlay = MusicUpload.findAll ({ where :
// {musicName:req.body.musicName,
//  singer : req.body.singer}})
// fs.readdir("./upload", (err, data)=>{
// res.send({play : musicPlay, data : data})
//
//})}

// client
// const result = await axios.post("router", (req,res)=>{

//})
// result.play.albumImg && result.play.musicName && result.play.singer
// \

/// for(let i = 0  ; i< arr.length ; i++ ){
// const tempElem = arr[i]
// let `tempImg${i}` = document.createElemnet("img");
//}
