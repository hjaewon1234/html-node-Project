const router = require("express").Router();

const data = [1, 2, 3];

router.post(`/prev`, (req, res) => {
  console.log(data);
  console.log(req.body.idx--);

  // 여기 data에서 원하는 idx값의 데이터를 얶떢게 받아올 수 있는지
  //   const getIdx = data.findIndex((obj) => obj.text === `두번째에요`);
  console.log(data[req.body.idx]);
  //   console.log(getIdx);

  res.send(data);
});

module.exports = router;
