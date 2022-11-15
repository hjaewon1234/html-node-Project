let logoutbox = document.getElementById("logout-box");
const playlisthide = document.getElementById("playlist-hide");
const todayhide = document.getElementById("today-hide");
const musicuploadthide = document.getElementById("musicUpload-hide");
const momhide = document.getElementById("mom-hide");

const album = `BORN_PINK`;
const userprofileid = document.getElementById("userprofile-id");
const playController = document.getElementById("play-controller");

const curuserName = JSON.parse(
  window.atob(document.cookie.split("=")[1].split(".")[1])
).id;
if (document.cookie) {
  let logincheck = document.cookie.split("=")[1].split(".")[1];

  if (logincheck) {
    logoutbox.classList.remove("on");

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
}

async function makePlayInList() {
  try {
    const listData = (
      await axios.post(`/api/musiclist/list`, {
        userId: curuserName,
        playlistName: window.location.search.split("?")[1],
      })
    ).data;
    const container = document.getElementById(`play-list-container`);

    for (let i = 0; i < listData.data.length; i++) {
      let addList = document.createElement(`div`);
      addList.innerHTML = `<div class="play-list-contents-outter"><div class="play-list-contents-add">
      <div class="play-list-inner-contents"><div><input type="checkbox"></div><div>
          <img src = "/assets/img/${listData.data[i].albumImg}" class="play-List-img-file" ></div><div class="music-name">${listData.data[i].musicName}</div></div>
      <div class="singer-name">${listData.data[i].singer}</div>
      <div class="album-name">${listData.data[i].albumName}</div>
      <div ><button class="del-btn">삭제</button></div></div></div>`;
      container.append(addList);
      console.log(`${i}번 굴럿어`);
    }

    console.log(document.getElementsByClassName(`play-List-img-file`)[0].src);
  } catch (err) {
    console.error(err);
  }
  const test1 = document.getElementsByClassName(`del-btn`);

  function delFunc() {
    for (let i = 0; i < test1.length; i++) {
      test1[i].onclick = () => {
        axios.post(`/api/musiclist/delete`, {
          singer: document.getElementsByClassName(`singer-name`)[i].innerText,
          musicName: document.getElementsByClassName(`music-name`)[i].innerText,
        }).data;
        document
          .getElementsByClassName(`play-list-contents-outter`)
          [i].remove();
        delFunc();
      };
    }
  }
  delFunc();
}
makePlayInList();

async function playListInfo() {
  const data = await axios.post(`/api/playlist/list`, {
    userId: curuserName,
    playlistName: window.location.search.split("?")[1],
  });
  const playListPage = document.getElementsByClassName(`play-list-page`)[0];
  const playListHeader = document.createElement(`div`);
  const playListHeaderImg = document.createElement(`div`);
  const playListInfo = document.createElement(`div`);
  const playListInfoDiv = document.createElement(`div`);
  const playListName = document.createElement(`h1`);
  const playListContents = document.createElement(`h4`);
  const playListBtnBox = document.createElement(`div`);
  const playListPlayBtn = document.createElement(`button`);
  const playListRandomPlayBtn = document.createElement(`button`);

  console.log(data.data.playlistName);

  playListPage.prepend(playListHeader);
  playListHeader.append(playListHeaderImg);
  playListHeader.append(playListInfo);
  playListInfo.append(playListInfoDiv);
  playListInfoDiv.append(playListName);
  playListInfoDiv.append(playListContents);
  playListInfo.append(playListBtnBox);
  playListBtnBox.append(playListPlayBtn);
  playListBtnBox.append(playListRandomPlayBtn);
  playListHeader.classList.add(`play-list-header`);
  playListHeaderImg.innerHTML = `<img src="${
    document.getElementsByClassName(`play-List-img-file`)[0].src
  }" alt="" style="width: 240px" />`;
  playListInfo.classList.add(`play-list-info`);
  playListName.innerText = `${data.data.playlistName}`;
  playListContents.innerText = `${data.data.playlistInfo}`;
  playListPlayBtn.classList.add(`start-btn`);
  playListRandomPlayBtn.classList.add(`random-start-btn`);
  playListPlayBtn.innerText = `재생`;
  playListRandomPlayBtn.innerText = `랜덤 재생`;
}

playListInfo();
function musicPlay(idx) {
  playController.src = `../upload/${musicList[idx]}`;

  playController.play();
}
