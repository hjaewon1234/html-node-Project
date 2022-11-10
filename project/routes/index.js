const router = require("express").Router();

// 명칭 고정이다.
const user = require("./user.js");
const musicUpload = require("./musicUpload.js");
const chart = require("./chart.js");
const playList = require("./playList.js");
const musicList = require(`./musicList.js`);
const musicInfo = require("./musicInfo.js");

// router.use("/", (req, res, next) => {
//   console.log(req.body, req.query);
//   next();
// });

// 여기도 고정이다. 정신차리자. 수정하면 백엔드 탈주한다.
router.use("/user", user);
router.use("/musicUpload", musicUpload);
router.use("/chart", chart);
router.use("/playList", playList);
router.use("/musicList", musicList);
router.use("/musicInfo", musicInfo);

module.exports = router;
