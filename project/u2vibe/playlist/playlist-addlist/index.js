let inputtitle = document.getElementById("input-title");
let inputcontents = document.getElementById("input-contents");
const addbtn = document.getElementById("add-btn");

inputtitle.oninput = function () {
  addbtn.classList.add("on");
  if (inputtitle.value == "") addbtn.classList.remove("on");
};
