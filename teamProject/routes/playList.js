const router = require("express").Router();

const data =
  ({ idx: 1, text: `첫번째에요` },
  { idx: 3, text: `세번째에요` },
  { idx: 2, text: `두번째에요` });

router.post(`/`, (req, res) => {
  console.log(data);
  console.log(data.idx);
  // 여기 data에서 원하는 idx값의 데이터를 얶떢게 받아올 수 있는지
  //   const getIdx = data.findIndex((obj) => obj.text === `두번째에요`);
  console.log(req.body.idx);
  //   console.log(getIdx);
  console.log(data.data);
  res.send(data);
});

module.exports = router;
