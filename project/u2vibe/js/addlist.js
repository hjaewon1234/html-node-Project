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

async function addedlist() {
  const data = await axios.post("/api/upload/addedlist", {
    id: curuserName,
  });
  console.log(data.data.info);
  console.log(data.data.info.musicName);

  listtitle.innerHTML = data.data.info.musicName;
  listcontents.innerHTML = data.data.info.singer;
  listimg.innerHTML = `
  <img src="../../../upload/${data.data.info.albumImg}" alt="imsi" id="list-img" />
  `;
}

addedlist();

function makePlaylist() {
  listpost.innerHTML = `
   <div class="list-click">
    <div class="list-img">
      <img src="../../assets/img/newplaylist.png" alt="newplaylist" />
      <a href="#">
        <div class="list-hidden">
          <div class="icon-box">
            <img src="../../assets/img/playbtn.png" alt="play" />
            <img
              src="../../assets/img/delbtn.png"
              alt="dot"
              onclick="removelist()"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="list-title">${mordalinputtitle.value}</div>
  </div>
  <div class="list-contents">0곡</div>
`;
}

inputtitle.oninput = function () {
  addbtn.classList.add("on");
  if (inputtitle.value == "") addbtn.classList.remove("on");
};
