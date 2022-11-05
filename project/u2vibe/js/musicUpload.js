const previewImg = document.getElementById("preview-img");
const imgUpload = document.getElementById("img-upload");
const uploadContent = document.getElementById("upload-content");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

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

uploadContent.onsubmit = (e) => {
  e.preventDefault();
  submitBtn.onclick = () => {
    console.log(document.getElementById("music-title").value);
    console.log(document.getElementById("file-upload").value);
    console.log(document.getElementById("img-upload").value);
  };
};
