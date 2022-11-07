addplaylist = document.getElementById("add-playlist");
let inputtitle = document.getElementById("input-title");
let inputcontents = document.getElementById("input-contents");
const addbtn = document.getElementById("add-btn");

addplaylist.onclick = function () {
  console.log("hi");
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
