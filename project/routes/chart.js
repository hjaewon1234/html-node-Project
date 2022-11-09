const router = require("express").Router();

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

module.exports = router;
