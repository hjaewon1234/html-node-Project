"use strict";

const Sequelize = require("sequelize");
const Chart = require("./chart");
const PlayList = require("./playList");
const MusicList = require("./musicList");
const MusicUpload = require("./musicUpload");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { Chart, PlayList, MusicList, MusicUpload };

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

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
