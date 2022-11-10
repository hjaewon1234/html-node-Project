let logininputid = document.getElementById("login-input-id");
let logininputpw = document.getElementById("login-input-pw");
let iddelbtn = document.getElementById("iddelbtn");
let pwdelbtn = document.getElementById("pwdelbtn");
let warnmsg = document.getElementById("warn-msg");

iddelbtn.addEventListener("click", function () {
  logininputid.value = "";
});

pwdelbtn.addEventListener("click", function () {
  logininputpw.value = "";
});
document.getElementById("form-login").onsubmit = async function (e) {
  e.preventDefault();

  try {
    const data = await axios.post("/api/user/login", {
      id: e.target["login-input-id"].value || null,
      pw: e.target["login-input-pw"].value || null,
    });
    console.log(data.data.name);
    if (data.data.logincheck == 1) {
      location.href = "http://localhost:8080/signedin/";
    } else {
      warnmsg.innerHTML =
        "아이디 또는 비밀번호를 잘못 입력했습니다. </br> 입력하신 내용을 다시 확인해주세요.";
    }
  } catch (error) {
    console.error(error);
  }
};
