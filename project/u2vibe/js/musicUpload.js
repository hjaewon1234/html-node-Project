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

let userprofileid = document.getElementById("userprofile-id");
let logincheck = document.cookie.split("=")[1].split(".")[1];

// 로그인 정보 불러오기

const curuserName = JSON.parse(
  window.atob(document.cookie.split("=")[1].split(".")[1])
).id;
if (logincheck) {
  userprofileid.innerText = curuserName;
}

// 로그아웃 버튼
document.getElementById("logout-btn").onclick = async function (e) {
  console.log("로그아웃");
  try {
    await axios.get("/api/user/logout");
  } catch (error) {
    console.error(error);
  }
  location.href = "http://localhost:8080/";
};

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

// playBtn.onclick = () => {
//   playController.play();
// };
// stopBtn.onclick = () => {
//   playController.pause();
// };

// volumeControl.addEventListener("change", (e) => {
//   playController.volume = this.value / 10;
// });

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
    formData.append("id", curuserName);
    formData.append("file", file.files[0]);
    formData.append("img", img.files[0]);
    formData.append("musicTitle", musicTitle.value);
    formData.append("formSelect", formSelect[0].value);
    formData.append("singerName", singerName.value);
    formData.append("albumTitle", albumTitle.value);

    const data = await axios.post("/api/musicUpload/upload", formData);
    alert(
      "선택하신" +
        data.data.fileName +
        " & " +
        data.data.imgName +
        "가 업로드 되었습니다."
    );
  } catch (err) {
    console.error(err);
  }
  musicTitle.value = "";
};
