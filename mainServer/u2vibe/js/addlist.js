let addplaylist = document.getElementById("add-playlist");
let inputtitle = document.getElementById("input-title");
let inputcontents = document.getElementById("input-contents");
const addbtn = document.getElementById("add-btn");

let userprofileid = document.getElementById("userprofile-id");

let logincheck = document.cookie.split("=")[1].split(".")[1];

if (logincheck) {
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

function dropdown() {
  console.log("dot작동");
}

function removelist() {
  console.log("dot작동");
}

inputtitle.oninput = function () {
  addbtn.classList.add("on");
  if (inputtitle.value == "") addbtn.classList.remove("on");
};
