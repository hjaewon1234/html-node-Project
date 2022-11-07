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
      console.log(e.target);
    };
    readImg.readAsDataURL(input.files[0]);
  }
}

// 파일 선택 후 변화하면
imgUpload.addEventListener("change", (e) => {
  setImg(e.target);
  console.log(e.target);
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
    console.log(e);

    const formData = new FormData();
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
};
