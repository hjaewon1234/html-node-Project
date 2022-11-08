let userprofileid = document.getElementById("userprofile-id");

let logincheck = document.cookie.split("=")[1].split(".")[1];
console.log(logincheck);
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
