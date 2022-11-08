const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const db = require("./models/index.js");
const routes = require("./routes/index.js");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

// Client 폴더명 : u2vibe
app.use("/", express.static(path.join(__dirname, "u2vibe")));

// fs 라이브러리 사용시
// 클라이언트에서 서버쪽에 있는 static 파일들을 처리하려고 사용한 미들웨어
app.use("/upload", express.static("upload"));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "u2vibe-session",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("디비 연결해따");
  })
  .catch((error) => {
    console.error(error);
  });

// db.Chart.create({
//   albumImg: "fileName",
//   musicName: "byebyebye",
//   singer: "jeonghyunjjang",
//   count: null,
//   genre: "ballad",
// });

// db.PlayList.create({
//   userId: "kawon",
//   playlistName: "이것이 음악이다.",
//   playlistInfo: "저의 정성과 혼을 담은 플레이리스트입니다. 많관부",
// });

// db.MusicList.create({
//   albumImg: "filename",
//   musicName: "예성아...",
//   singer: "장정현",
//   albumName: "어디서 뭐하니 형이 그렇게 가르쳤니",
//   genre: "hiphop",
// });

// db.MusicUpload.create({
//   userId: "hjw",
//   musicName: "와우할때 듣기 좋은 브금",
//   musicFile: "wow.mp3",
//   albumImg: "filename",
//   singer: "와우",
//   albumName: "wowBGM",
//   genre: "dance",
// });
app.use("/api", routes); // /api로 들어오는 통신은 routes로 보내겠다

app.listen(app.get("port"), () => {
  console.log("팀플 두가자~");
});
