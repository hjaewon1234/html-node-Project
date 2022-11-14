const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");

const { MusicUpload } = require("../models/index.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploader = multer({ storage: storage });

// delete 테이블
// router.post("/delete", (req, res) => {
//   MusicUpload.destroy({
//     truncate: true,
//     restartIdentity: true,
//     cascade: false,
//   });
// });

router.get("/upload", async (req, res) => {
  const listUp = await MusicUpload.findAll();
  console.log("listUp");
  console.log(listUp);

  fs.readdir("./upload", (err, data) => {
    console.log("data : ", data);
    res.send({ list: listUp, data: data });
  });
});

// multer로 한개의 파일만 업로드 할 때
// router.post("/upload", uploader.single("img"), (req, res) => {
//   console.log(req.file);
//   console.log("파일 업로드");
//   console.log(req.body);

//   res.send("post ok! ");
// });

// multer로 서로 다른 name input객체의 파일을 업로드할 때
router.post(
  "/upload",
  uploader.fields([{ name: "file" }, { name: "img" }]),
  async (req, res) => {
    try {
      const tempUpload = await MusicUpload.create({
        userId: req.body.id,
        musicName: req.body.musicTitle,
        musicFile: req.files.file[0].filename,
        albumImg: req.files.img[0].filename,
        singer: req.body.singerName,
        albumName: req.body.albumTitle,
        count: 0,
        genre: req.body.formSelect,
        count: 0,
      });
      console.log(tempUpload);
      res.send({
        userId: "jjh",
        musicName: req.body.musicTitle,
        musicFile: req.files.file[0].filename,
        albumImg: req.files.img[0].filename,
        singer: req.body.singerName,
        albumName: req.body.albumTitle,
        genre: req.body.formSelec,
      });
    } catch (err) {
      console.log(err);
    }
  }
);

router.post("/addedlist", async (req, res) => {
  try {
    const tempUpload = await MusicUpload.findAll({
      where: { userId: req.body.id },
    });
    res.send({ info: tempUpload });
  } catch (error) {
    console.log(err);
  }
});

router.post("/deletelist", async (req, res) => {
  console.log(req.body.name);
  console.log(req.body.singer);
  const tempDelete = await MusicUpload.destroy({
    where: {
      userId: req.body.id,
      musicName: req.body.name,
      singer: req.body.singer,
    },
  });
  res.send("삭제완료");
});

module.exports = router;
