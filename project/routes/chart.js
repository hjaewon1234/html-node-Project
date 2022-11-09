const router = require("express").Router();

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
