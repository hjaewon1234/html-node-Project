const router = require("express").Router();
const fs = require("fs");

// 음원을 담기 위해 fs으로 폴더 접근해서 data 전송
router.get("/list", async (req, res) => {
  fs.readdir("./upload", (err, data) => {
    console.log("data : ", data);
    res.send({ data: data });
  });
});
const tempFile = [`I_love`, `After_LIKE`, `ANTIFRAGILE`];
const musicName = [`Nxde`, `After LIKE`, `ANTIFRAGILE`];
const singerName = [`(여자)아이들`, `IVE(아이브)`, `LE SSERAFIM (르세라핌)`];

// 배열로 하면 쉽게 가져올 수 있음 근데 db는 배열이 아니니까, 어떻게 가져올지 생각을 해보자.
// 배열로 들어오는데 안에 요소들이 객체로 들어감
// 배열에 n번째에서 어떤 객체에서  원하는 요소를 찾는게 필요할 것 같다.

const tempDb = [
  { idx: 1, tempFile: "I_love", music: "Nxde", singer: "(여자)아이들" },
  {
    idx: 2,
    tempFile: "After_LIKE",
    music: "After LIKE",
    singer: "IVE(아이브)",
  },
];
router.post(`/100chart`, (req, res) => {
  console.log(req.body);

  console.log(tempDb[1].tempFile);
  res.send({ data: tempDb });
});

const { Chart } = require("../models/index.js");

router.post(`/list`, async (req, res) => {
  const chartUp = await Chart.findAll();
  // 차트에 줄 정보(사용자랑 상관없는것)을 받아오기위해
  // 차트 db에서 모든걸 다 찾아서 chartUp 변수를 만들어준다.
  res.send({ data: chartUp });
  // 차트 db에서 찾은것을 프론트 쪽 js로 쏴준다. 형식은
  // 배열형식으로 오되 안에 내용물은 객체로
});

const { Chart } = require("../models/index.js");

router.post(`/list`, async (req, res) => {
  const chartUp = await Chart.findAll();
  // 차트에 줄 정보(사용자랑 상관없는것)을 받아오기위해
  // 차트 db에서 모든걸 다 찾아서 chartUp 변수를 만들어준다.
  res.send({ data: chartUp });
  // 차트 db에서 찾은것을 프론트 쪽 js로 쏴준다. 형식은
  // 배열형식으로 오되 안에 내용물은 객체로
});

module.exports = router;
