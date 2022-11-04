const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const db = require("./models/index.js"); // 디비 설정 파일을 가져옴
const routes = require("./routes/index.js"); // 라우터 설정 파일을 가져옴

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(express.static(path.join(__dirname, "u2vibe")));

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

app.use("/api", routes); // /api로 들어오는 통신은 routes로 보내겠다

app.listen(app.get("port"), () => {
  console.log("팀플 두가자~");
});
