const router = require("express").Router();

// router.use("/", (req, res, next) => {
//   console.log(req.body, req.query);
//   next();
// });

const user = require("./user.js");

router.use("/user", user);

module.exports = router;
