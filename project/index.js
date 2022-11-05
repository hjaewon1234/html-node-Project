const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");


const db = require("./models/index.js");
const routes = require("./routes/index.js");

dotenv.config();

const app = express();

app.set("port", process.env.PORT);

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
    name: "project",
  })
);

// 일단 force 초기값 false 설정
db.sequelize
  .sync({ force: false })

  .then(() => {
    console.log("DB System On");
  })
  .catch((err) => {
    console.log(err);
  });

// routes 폴더 라우터 /api
app.use("/api", routes);

// 포트번호 8080
app.listen(app.get("port"), () => {
  console.log("Server Open");
});
