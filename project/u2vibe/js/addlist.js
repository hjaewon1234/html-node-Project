let addplaylist = document.getElementById("add-playlist");
let inputtitle = document.getElementById("input-title");
let inputcontents = document.getElementById("input-contents");
let logincheck = document.cookie.split("=")[1].split(".")[1];
const userprofileid = document.getElementById("userprofile-id");
const curuserName = JSON.parse(
  window.atob(document.cookie.split("=")[1].split(".")[1])
).id;
const addbtn = document.getElementById("add-btn");
const listimg = document.getElementById("list-img");
const listtitle = document.getElementById("list-title");
const listcontents = document.getElementById("list-contents");
const listboard = document.getElementById("list-board");

if (document.cookie) {
  if (logincheck) {
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
}

function dropdown() {
  console.log("dot작동");
}

function removelist() {
  console.log("dot작동");
}

async function makeaddedlist() {
  const data = await axios.post("/api/musicUpload/addedlist", {
    id: curuserName,
  });

  for (let i = 0; i < data.data.info.length; i++) {
    const tempElem = document.createElement("div");
    tempElem.classList.add("addedlist-post");
    tempElem.innerHTML = `
    <div class="addedlist-click">
                <div class="addedlist-img">
                <img src="../../../upload/${data.data.info[i].albumImg}" alt="imsi"/>
                </div>
                <div class="addedlist-title">${data.data.info[i].musicName}</div>
              </div>
              <div class="addedlist-contents">${data.data.info[i].singer}</div>`;
    listboard.append(tempElem);
  }
}

makeaddedlist();

inputtitle.oninput = function () {
  addbtn.classList.add("on");
  if (inputtitle.value == "") addbtn.classList.remove("on");
};
