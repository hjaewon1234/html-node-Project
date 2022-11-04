const router = require("express").Router();
const multer = require("multer");
const { MusicUpload } = require("../models");

// const { Upload } = require("../models/index.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploader = multer({ storage: storage });
router.get("/upload", (req, res) => {
  console.log("get");

  res.send("get으로 옴");
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
  (req, res) => {
    console.log(FormData);
    MusicUpload.create({
      userId: "jjh",
      musicName: req.body.musicTitle,
      musicFile: req.files.file[0].filename,
      albumImg: req.files.img[0].filename,
      singer: req.body.singerName,
      albumName: req.body.albumTitle,
      genre: req.body.formSelect,
    });

    res.send({
      fileName: req.files.file[0].filename,
      imgName: req.files.img[0].filename,
    });
  }
);

module.exports = router;
