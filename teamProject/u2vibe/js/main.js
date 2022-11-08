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
  const data = await axios.post(`/api/playList/prev`, { idx: 1 });
  console.log(data);
  console.log(data.data[1]);

  console.log(`if 밖으로 감`);
};
