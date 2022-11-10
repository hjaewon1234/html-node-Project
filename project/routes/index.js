// 여기는 /api로 들어왔을 때 도착하는 파일 경로입니다.

const router = require("express").Router();

const user = require("./user.js");
const musicUpload = require("./musicUpload.js");
const chart = require("./chart.js");
const musicInfo = require("./musicInfo.js");
const playList = require("./playList.js");

router.use("/user", user);
router.use("/upload", musicUpload);
router.use("/chart", chart);
router.use("/musicInfo", musicInfo);
router.use("/playList", playList);

module.exports = router;
