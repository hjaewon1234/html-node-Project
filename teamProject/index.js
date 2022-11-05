const express = require(`express`);
const session = require(`express-session`);
const morgan = require(`morgan`);
const dotenv = require(`dotenv`);
const cookieParser = require(`cookie-parser`);
const path = require(`path`);

dotenv.config();

const app = express();

app.set(`port`, process.env.PORT || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV) morgan(`combined`)(req, res, next);
  else morgan(`dev`)(req, res, next);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`/`, express.static(path.join(__dirname, "u2vibe")));
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
    name: `sid`,
  })
);

app.listen(app.get(`port`), () => {
  console.log(`server start`);
});
