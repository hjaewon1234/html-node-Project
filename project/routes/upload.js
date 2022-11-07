const router = require("express").Router();
const multer = require("multer");

const { Upload } = require("../models/index.js");
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
// router.post("/input", (req, res) => {
//   console.log(req.body);
//   res.send("gdgd")
// });
router.post(
  "/upload",
  uploader.fields([{ name: "file" }, { name: "img" }]),
  async (req, res) => {
    try {
      // console.log(req.files);
      // console.log(req.body);

      console.log("jj");
      console.log(req.body.musicTitle);
      console.log(req.body.formSelect);
      console.log(req.body.singerName);
      console.log(req.body.albumTitle);
      console.log("노래제목, 장르, 가수이름, 앨범명");

      console.log(req.files.file[0].filename);
      console.log(req.files.img[0].filename);
      console.log("음원파일, 앨범이미지");
      // let imgPath = [];
      // imgPath.push(req.files.img[0].path);

      const tempUpload = await Upload.create({
        user_id: "jj",
        musicTitle: req.body.musicTitle,
        formSelect: req.body.formSelect,
        singerName: req.body.singerName,
        albumTitle: req.body.albumTitle,
      });
    } catch (err) {
      console.log(err);
    }

    res.send({
      fileName: req.files.file[0].filename,
      imgName: req.files.img[0].filename,
    });
  }
);
module.exports = router;
