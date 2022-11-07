let logininputid = document.getElementById("login-input-id");
let logininputpw = document.getElementById("login-input-pw");
let iddelbtn = document.getElementById("iddelbtn");
let pwdelbtn = document.getElementById("pwdelbtn");

iddelbtn.addEventListener("click", function () {
  logininputid.value = "";
});

pwdelbtn.addEventListener("click", function () {
  logininputpw.value = "";
});
