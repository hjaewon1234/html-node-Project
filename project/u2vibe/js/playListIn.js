if (document.cookie) {
  let logincheck = document.cookie.split("=")[1].split(".")[1];

  if (logincheck) {
    logoutbox.classList.remove("on");
    loginbox.classList.add("on");
    todayhide.classList.add("on");
    playlisthide.classList.remove("on");
    musicuploadthide.classList.remove("on");
    momhide.classList.add("on");

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

const album = `BORN_PINK`;
if (document.cookie) {
  let logincheck = document.cookie.split("=")[1].split(".")[1];

  if (logincheck) {
    logoutbox.classList.remove("on");
    loginbox.classList.add("on");
    todayhide.classList.add("on");
    playlisthide.classList.remove("on");
    musicuploadthide.classList.remove("on");
    momhide.classList.add("on");

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

async function playListInfo() {
  const data = await axios.post(`/api/playlist/list`, {
    userId: `wodnjs`,
    playlistName: `아니제발`,
  });
  // 유저 id랑 리스트 명으로 찾아서 플레이 리스트를 가져옴
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
  // 위에는 모양에 맞게 구성 시켜줬음.
  playListHeader.classList.add(`play-list-header`);
  playListHeaderImg.innerHTML = `<img src="${
    document.getElementsByClassName(`play-List-img-file`)[0].src
  }" alt="" style="width: 240px" />`;
  // 엘범명으로 가져오는 플레이리스트 사진
  // 플레이리스트를 만들 때 따로 설정하는게 없으면 가장 위에 노래에 앨범 사진이
  //
  playListInfo.classList.add(`play-list-info`);
  playListName.innerText = `${data.data.playlistName}`;
  // 플레이 리스트의 이름을 가져온다.
  playListContents.innerText = `${data.data.playlistInfo}`;
  playListPlayBtn.classList.add(`start-btn`);
  playListRandomPlayBtn.classList.add(`random-start-btn`);
  playListPlayBtn.innerText = `재생`;
  playListRandomPlayBtn.innerText = `랜덤 재생`;
}

async function makePlayInList() {
  try {
    const listData = (
      await axios.post(`/api/musiclist/list`, {
        userId: `wodnjs`,
        playlistName: `아니제발`,
      })
    ).data;
    // 유저 id랑 리스트 명으로 플레이리스를 찾아서 리스트에 노래를 가져옴
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

playListInfo();
function musicPlay(idx) {
  playController.src = `../upload/${musicList[idx]}`;

  playController.play();
}
