const router = require("express").Router();

const { MusicList } = require(`../models/index.js`);

router.post(`/list`, async (req, res) => {
  console.log(MusicList[0].userId + `디비에 뭐잇냐`);
  console.log(req.body.userId + `플레이리스트 받은 내용`);
  const listUp = await MusicList.findAll();
  //   where: {
  //     userId: req.body.userId,
  //     playList: req.body.playlistName,
  //   },
  console.log(`리스트업정보` + listUp.userId);
  res.send(listUp);
});

module.exports = router;
