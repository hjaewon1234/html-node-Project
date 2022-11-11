const router = require("express").Router();

const { MusicList } = require(`../models/index.js`);

router.post(`/list/listin`, async (req, res) => {
  const listUp = await MusicList.findAll({
    where: {
      userId: req.body.userId,
      playList: req.body.playlistName,
    },
  });

  console.log(`리스트업정보` + listUp[0].userId);
  res.send({ data: listUp });
});

router.post(`/delete`, async (req, res) => {
  console.log(req.body);
  await MusicList.destroy({
    where: {
      singer: req.body.singer,
      musicName: req.body.musicName,
    },
  });

  res.send(`지웟다`);
});

module.exports = router;
