const playController = document.getElementById("play-controller");
const volumeControl = document.getElementById("volume-control");
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");

playBtn.onclick = () => {
  playController.play();
};
stopBtn.onclick = () => {
  playController.pause();
};

volumeControl.addEventListener("change", (e) => {
  playController.volume = this.value / 10;
});

const prevPlay = document.getElementById(`prev-play`);

prevPlay.onclick = async () => {
  const data = await axios.post(`/api/playList`, { idx: 1 });
  console.log(data.data.idx);
  console.log(data.data.text);

  // if (data.data.idx == `0`) {
  //   // 가장 뒤에 노래를 가져온다.
  //   // return 함
  //   console.log(`if 안으로 감`);
  //   return;
  // 지금은 예외를 생각 안하고 처리하는걸 생각해보기로함.
  // }
  console.log(data.data.idx);
  console.log(`if 밖으로 감`);
  data.data.idx--;
  console.log(data.data.idx);

  // data.idx-- 한 데이터를 가져온다.
};
