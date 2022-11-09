const router = require("express").Router();
const fs = require("fs");

// 음원을 담기 위해 fs으로 폴더 접근해서 data 전송
router.get("/list", async (req, res) => {
  fs.readdir("./upload", (err, data) => {
    console.log("data : ", data);
    res.send({ data: data });
  });
});

module.exports = router;
