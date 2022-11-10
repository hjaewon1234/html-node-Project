const router = require("express").Router();

const { PlayList } = require(`../models/index.js`);

router.post(`/list`, async (req, res) => {
  console.log(req.body);
  const playlistData = await PlayList.findOne({
    where: {
      userId: req.body.userId,
      playlistName: req.body.playlistName,
    },
  });

  //   const checkUser = await User.findOne({ where: { userId: req.body.id } });
  console.log(playlistData + `플레이인포`);

  // 일단 하나만 찾아올건데 req로 어떤것 받을지 생각하고있음.
  // playlist에서 유저를 구분 할 수 있는건 유저의 ID랑 플레이리스트의 이름이라고 생각함.
  // 그래서 요청으로 받은 userId와 playlistInfo 가 맞는거로 하나를 찾아서 내보낼 예정임

  res.send(playlistData);
});

module.exports = router;
