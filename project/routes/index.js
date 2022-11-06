const router = require("express").Router();

const user = require("./user.js");
const upload = require("./upload.js");

// router.use("/", (req, res, next) => {
//   console.log(req.body, req.query);
//   next();
// });

router.use("/user", user);
router.use("/upload", upload);

module.exports = router;
