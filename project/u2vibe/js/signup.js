//////////////////// 회원가입 경고창 /////////////////////////

let inputid = document.getElementById("input-id");
let warnid = document.getElementById("warn-id");
let inputpw = document.getElementById("input-pw");
let warnpw = document.getElementById("warn-pw");
let inputpwrepeat = document.getElementById("input-pwrepeat");
let warnpwrepeat = document.getElementById("warn-pwrepeat");
let inputyyyy = document.getElementById("input-yyyy");
let inputdd = document.getElementById("input-dd");
let warnbirthday = document.getElementById("warn-birthday");
let selmm = document.getElementById("sel-mm");
let inputemail = document.getElementById("input-email");
let warnemail = document.getElementById("warn-email");
let inputphone = document.getElementById("input-phone");
let warnphone = document.getElementById("warn-phone");
let inputname = document.getElementById("input-name");
let selgender = document.getElementById("sel-gender");

function signupcheck() {
  const idcheck = /^[a-z0-9_-]{5,20}$/g;
  const idresult = idcheck.test(inputid.value);
  const pwcheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  const pwresult = pwcheck.test(inputpw.value);
  const emailcheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const emailresult = emailcheck.test(inputemail.value);
  const phonecheck = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
  const phoneresult = phonecheck.test(inputphone.value);
  if (!idresult) return;
  if (!pwresult) return;
  if (inputpw.value != inputpwrepeat.value) return;
  if (inputyyyy.value <= 1922 || inputyyyy.value >= 2008) return;
  if (selmm.value == "") return;
  if (inputdd.value >= 32 || inputdd.value <= 0) return;
  if (inputemail.value != "" && !emailresult) return;
  if (!phoneresult) return;
  if (selgender.value == "") return;
  return 1;
}

// 중복 가입된 아이디 체크 미구현
inputid.addEventListener("focusout", (event) => {
  const idcheck = /^[a-z0-9_-]{5,20}$/g;
  const idresult = idcheck.test(inputid.value);
  if (idresult) {
    warnid.classList.add("green");
    warnid.innerText = "멋진 아이디네요!";
  } else {
    warnid.classList.remove("green");
    warnid.innerText =
      "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
  }
});

inputpw.addEventListener("focusout", (event) => {
  const pwcheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  const pwresult = pwcheck.test(inputpw.value);
  if (pwresult) {
    warnpw.classList.add("green");
    warnpw.innerText = "비밀스러워";
  } else {
    warnpw.classList.remove("green");
    warnpw.innerText = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
  }
  if (inputpwrepeat.value && inputpw.value != inputpwrepeat.value) {
    warnpwrepeat.classList.remove("green");
    warnpwrepeat.innerText = "비밀번호가 일치하지 않습니다.";
  }
});

inputpwrepeat.addEventListener("focusout", (event) => {
  if (inputpw.value == inputpwrepeat.value) {
    warnpwrepeat.classList.add("green");
    warnpwrepeat.innerText = "비밀번호가 일치합니다.";
  } else {
    warnpwrepeat.classList.remove("green");
    warnpwrepeat.innerText = "비밀번호가 일치하지 않습니다.";
  }
});

inputyyyy.addEventListener("focusout", (event) => {
  const yyyycheck = /^[0-9]{1,4}$/;
  const ddcheck = /^[0-9]{1,2}$/;

  const yyyyresult = yyyycheck.test(inputyyyy.value);
  const ddresult = ddcheck.test(inputdd.value);

  if (inputyyyy.value.length >= 4) {
    if (selmm.value > 0) {
      if (!inputdd.value) {
        warnbirthday.innerText = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
      } else {
        if (
          yyyyresult &&
          ddresult &&
          inputyyyy.value > 1922 &&
          inputyyyy.value < 2008 &&
          inputdd.value > 0 &&
          inputdd.value < 32
        ) {
          warnbirthday.innerText = "";
        } else {
          warnbirthday.innerText = "생년월일을 다시 확인해주세요.";
        }
      }
    } else {
      warnbirthday.innerText = "태어난 월을 선택하세요";
    }
  } else {
    warnbirthday.classList.remove("green");
    warnbirthday.innerText = "태어난 년도 4자리를 정확하게 입력하세요.";
  }
});

function change() {
  const yyyycheck = /^[0-9]{1,4}$/;
  const ddcheck = /^[0-9]{1,2}$/;

  const yyyyresult = yyyycheck.test(inputyyyy.value);
  const ddresult = ddcheck.test(inputdd.value);

  if (inputyyyy.value.length >= 4) {
    if (selmm.value > 0) {
      if (!inputdd.value) {
        warnbirthday.innerText = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
      } else {
        if (
          yyyyresult &&
          ddresult &&
          inputyyyy.value > 1922 &&
          inputyyyy.value < 2008 &&
          inputdd.value > 0 &&
          inputdd.value < 32
        ) {
          warnbirthday.innerText = "";
        } else {
          warnbirthday.innerText = "생년월일을 다시 확인해주세요.";
        }
      }
    } else {
      warnbirthday.innerText = "태어난 월을 선택하세요";
    }
  } else {
    warnbirthday.classList.remove("green");
    warnbirthday.innerText = "태어난 년도 4자리를 정확하게 입력하세요.";
  }
}

inputdd.addEventListener("focusout", (event) => {
  const yyyycheck = /^[0-9]{1,4}$/;
  const ddcheck = /^[0-9]{1,2}$/;

  const yyyyresult = yyyycheck.test(inputyyyy.value);
  const ddresult = ddcheck.test(inputdd.value);

  if (inputyyyy.value.length >= 4) {
    if (selmm.value > 0) {
      if (!inputdd.value) {
        warnbirthday.innerText = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
      } else {
        if (
          yyyyresult &&
          ddresult &&
          inputyyyy.value > 1922 &&
          inputyyyy.value < 2008 &&
          inputdd.value > 0 &&
          inputdd.value < 32
        ) {
          warnbirthday.innerText = "";
        } else {
          warnbirthday.innerText = "생년월일을 다시 확인해주세요.";
        }
      }
    } else {
      warnbirthday.innerText = "태어난 월을 선택하세요";
    }
  } else {
    warnbirthday.classList.remove("green");
    warnbirthday.innerText = "태어난 년도 4자리를 정확하게 입력하세요.";
  }
});

inputemail.addEventListener("focusout", (event) => {
  const emailcheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const emailresult = emailcheck.test(inputemail.value);
  if (emailresult || !inputemail.value) {
    warnemail.innerText = "";
  } else {
    warnemail.innerText = "이메일 주소를 다시 확인해주세요.";
  }
});

inputphone.addEventListener("focusout", (event) => {
  const barcheck = /\-/g;

  const barresult = inputphone.value.replace(barcheck, "");
  inputphone.value = barresult;
  const phonecheck = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
  const phoneresult = phonecheck.test(inputphone.value);

  if (phoneresult) {
    warnphone.innerText = "";
  } else {
    warnphone.innerText = "형식에 맞지 않는 번호입니다.";
  }
});

//////////////////// 회원가입 경고창 /////////////////////////

document.forms["signup-form"].onsubmit = async function (e) {
  let checkcount = signupcheck();
  e.preventDefault();
  if (checkcount != 1) {
    alert("정확한 정보를 입력해주세요");
  }
  try {
    const data = await axios.post("/api/user/regist", {
      id: e.target["input-id"].value || null,
      pw: e.target["input-pw"].value || null,
      name: e.target["input-name"].value || null,
      yyyy: e.target["input-yyyy"].value || null,
      mm: e.target["sel-mm"].value || null,
      dd: e.target["input-dd"].value || null,
      gender: e.target["sel-gender"].value || null,
      email: e.target["input-email"].value || null,
      phone: e.target["input-phone"].value || null,
    });
    if (data.data.overlap == 1) {
      warnid.innerText = "";
      warnid.innerText = "이미 사용중이거나 탈퇴한 아이디입니다.";
      warnid.classList.remove("green");
    }

    if (data.data.signupcom == 1) {
      alert("회원가입이 완료되었습니다. 로그인 화면으로 이동합니다.");
      location.href = "http://localhost:8080/signin";
    }
  } catch (error) {
    console.error(error);
  }
};
