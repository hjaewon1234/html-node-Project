console.log(`장정현`);
const album = `i_love`;
const songName = `Nxde`;
const singerName = `(여자)아이들`;
const albumName = `I love`;
const ListName = `아이브가좋아요`;
const ListContents = `아이고야~~~~~`;

function playListInfo() {
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
  playListHeaderImg.innerHTML = `<img src="../assets/img/${album}.jpg" alt="" style="width: 240px" />`;
  // 엘범명으로 가져오는 플레이리스트 사진
  playListInfo.classList.add(`play-list-info`);
  playListName.innerText = `${ListName}`;
  // 플레이 리스트의 이름을 가져온다.
  playListContents.innerText = `${ListContents}`;
  playListPlayBtn.classList.add(`start-btn`);
  playListRandomPlayBtn.classList.add(`random-start-btn`);
  playListPlayBtn.innerText = `재생`;
  playListRandomPlayBtn.innerText = `랜덤 재생`;
}
playListInfo();
function makePlayList() {
  const container = document.getElementById(`play-list-container`);
  const contentsOutterDiv = document.createElement(`div`);
  const contentsAddDiv = document.createElement(`div`);
  const playListInnerContentsDiv = document.createElement(`div`);
  const checkBoxDiv = document.createElement(`div`);
  const albumImgDiv = document.createElement(`div`);
  const songNameDiv = document.createElement(`div`);
  const singerNameDiv = document.createElement(`div`);
  const albumNameDiv = document.createElement(`div`);
  const delBtnDiv = document.createElement(`div`);
  console.log(album);
  contentsOutterDiv.classList.add(`play-list-contents-outter`);
  contentsAddDiv.classList.add(`play-list-contents-add`);
  playListInnerContentsDiv.classList.add(`play-list-inner-contents`);
  // 바깥을 감싸주는 애들은 미리 클래스 리스트를 줫따.
  contentsOutterDiv.append(contentsAddDiv);
  contentsAddDiv.append(playListInnerContentsDiv);
  contentsAddDiv.append(singerNameDiv);
  contentsAddDiv.append(albumNameDiv);
  contentsAddDiv.append(delBtnDiv);
  playListInnerContentsDiv.append(checkBoxDiv);
  playListInnerContentsDiv.append(albumImgDiv);
  playListInnerContentsDiv.append(songNameDiv);
  container.append(contentsOutterDiv);
  // 구조가 이렇게 정상적으로 나오고 안에다 잘 넣음 될거같다.
  // 밑에는 요소들 클래스 넣어주는 것.
  singerNameDiv.classList.add(`singer-name`);
  albumNameDiv.classList.add(`album-name`);
  delBtnDiv.classList.add(`del-btn`);
  // 밑에 가수명//엘범명//삭제버튼에 다 클래스를 줬다.
  checkBoxDiv.innerHTML = `<input type="checkbox">`;
  // 체크박스의 이너HTML 로 안에 뭐가 들어가는지 적음.
  albumImgDiv.innerHTML = `<img src="../assets/img/${album}.jpg" alt=""/>`;
  // ${album}은 앨범에 사진(커버)에 대한 정보
  // (파일명을 받아오는데 만약에 그 파일명에 jpg가 포함이면 빼고 해도 될것)를 받아오면 된다.
  songNameDiv.innerText = `${songName}`;
  // 노래 제목을 받아오면된다.(데이터베이스나 통신으로)
  singerNameDiv.innerText = `${singerName}`;
  // 가수 이름을 받아오면된다.(데이터베이스나 통신으로)
  albumNameDiv.innerText = `${albumName}`;
  // 앨범의 이름을 받아오면된다.
  delBtnDiv.innerHTML = `<button>삭제123413213</button>`;
  // 여기는 삭제 버튼을 만들 곳인데 나중에 삭제 버튼을 바꿀때 바꿔주면 될 것 같음.
}

document.getElementsByClassName(`start-btn`)[0].onclick = () => {
  makePlayList();
};
