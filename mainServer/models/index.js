"use strict";

const Sequelize = require("sequelize");
const Chart = require("./chart");
const PlayList = require("./playList");
const MusicList = require("./musicList");
const MusicUpload = require("./musicUpload");
<<<<<<< HEAD
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { Chart, PlayList, MusicList, MusicUpload };
=======
const MusicInfo = require("./musicInfo.js");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { Chart, PlayList, MusicList, MusicUpload, MusicInfo };
>>>>>>> 5a2a81ff9220ae8926bf6cc68dd5743b1504b3d4

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Chart.init(sequelize);
PlayList.init(sequelize);
MusicList.init(sequelize);
MusicUpload.init(sequelize);
<<<<<<< HEAD
=======
MusicInfo.init(sequelize);
>>>>>>> 5a2a81ff9220ae8926bf6cc68dd5743b1504b3d4

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
