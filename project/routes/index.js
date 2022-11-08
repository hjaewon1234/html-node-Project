const router = require("express").Router();

const user = require("./user.js");
const musicUpload = require("./musicUpload.js");

// router.use("/", (req, res, next) => {
//   console.log(req.body, req.query);
//   next();
// });

router.use("/user", user);
router.use("/upload", musicUpload);

module.exports = router;
