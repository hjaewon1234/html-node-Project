const router = require("express").Router();

const fs = require("fs");

const { Chart, MusicInfo, MusicList } = require("../models/index.js");

let tempImg = "";
let tempmusicName = "";
let tempSinger = "";
let tempalbumName = "";
let tempmusicFile = "";
let tempuserId = "";

router.post("/musicadd", (req, res) => {
  tempuserId = req.body.userId;
  Chart.findOne({
    where: { musicName: req.body.musicName, singer: req.body.singer },
  }).then((data) => {
    tempImg = data.albumImg;
    tempmusicName = data.musicName;
    tempSinger = data.singer;
    tempalbumName = data.albumName;
    tempmusicFile = data.musicFile;
    // console.log(
    //   tempImg,
    //   tempmusicName,
    //   tempSinger,
    //   tempalbumName,
    //   tempmusicFile
    // );
    MusicList.create({
      userId: tempuserId,
      playList: "Now Playlist",
      albumImg: tempImg,
      musicName: tempmusicName,
      singer: tempSinger,
      albumName: tempalbumName,
      musicFile: tempmusicFile,
      genre: "1",
    });
  });
});

router.get("/play", async (req, res) => {
  const listUp = await Chart.findAll();
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
  }).then((data) => {
    res.send({ status: "정상적으로 받아서 보냈음", data: req.body.comment });
  });
});

router.get("/", (req, res) => {
  MusicInfo.findAll({
    order: [["id", "DESC"]], // 정렬
  }).then((data) => {
    console.log(data);
    res.send({ list: data });
  });
});

router.post("/delete", (req, res) => {
  MusicInfo.destroy({
    where: {
      userId: req.body.userId,
      userComment: req.body.comment,
    },
  }).then((data) => {
    res.send("잘 삭제해따!!넌 나가라!");
  });
});

module.exports = router;
