let userprofileid = document.getElementById("userprofile-id");
let logincheck = document.cookie.split("=")[1].split(".")[1];
let mordaladdptn = document.getElementById("mordal-add-btn");
let inputtitle = document.getElementById("mordal-input-title");
let inputcontents = document.getElementById("mordal-input-contents");
const addbtn = document.getElementById("mordal-add-btn");
const canclebtn = document.getElementById("mordal-cancle-btn");
const mordalroot = document.getElementById("mordal-root");
const addplaylist = document.getElementById("add-playlist");
const listboard = document.getElementById("list-board");
const mordalinputtitle = document.getElementById("mordal-input-title");
const mordalinputcontents = document.getElementById("mordal-input-contents");

if (logincheck) {
  // logoutbox.classList.remove("on");
  // loginbox.classList.add("on");
  // todayhide.classList.add("on");
  // playlisthide.classList.remove("on");
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

inputtitle.oninput = function () {
  addbtn.classList.add("on");
  if (inputtitle.value == "") addbtn.classList.remove("on");
};

canclebtn.addEventListener("click", () => {
  mordalroot.classList.add("on");
});

// addplaylist.addEventListener("click", () => {
//   });
addplaylist.onclick = () => {
  mordalroot.classList.toggle("on");
  console.log("addplay?");
};
window.addEventListener("click", (e) => {
  console.log(e.target);
});

function makePlaylist() {
  const tempElem = document.createElement("div");
  tempElem.classList.add("list-post");
  tempElem.innerHTML = `<div class="list-click">
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
     <div class="list-contents">0곡</div>`;
  listboard.appendChild(tempElem);
  console.log("들어오냐");
  mordalroot.classList.add("on");
}
