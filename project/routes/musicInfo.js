const router = require("express").Router();

const fs = require("fs");

const { MusicUpload, MusicInfo } = require("../models/index.js");

router.get("/play", async (req, res) => {
  const listUp = await MusicUpload.findAll();
  console.log("listUp");
  console.log(listUp);

  fs.readdir("./upload", (err, data) => {
    console.log("data : ", data);
    res.send({ list: listUp, data: data });
  });
});

router.post("/comment", (req, res) => {
  MusicInfo.create({
    userId: req.body.userId,
    userComment: req.body.comment,
  });
  res.send("정상적으로 받아서 보냈음");
});

router.get("/", async (req, res) => {
  const tempBoard = await MusicInfo.findAll({
    order: [["id", "DESC"]], // 정렬
  });
  res.send({ list: tempBoard });
});

// router.delete("/delete", async (req, res) => {
//   const tempInfo = await MusicInfo.findOne({
//     where: {
//       user_id: req.body.userId,
//     },
//   });
//   if (tempInfo.user_id === global.userId) {
//     await MusicInfo.destroy({
//       where: {
//         user_id: req.body.userId,
//       },
//     });
//   }
//   res.end();
// });

module.exports = router;
