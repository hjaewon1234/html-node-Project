"use strict";

const Sequelize = require("sequelize");

const Chart = require("./chart.js");
const PlayList = require("./playList.js");
const MusicList = require("./musicList.js");
const User = require("./user.js");
const MusicUpload = require("./musicUpload.js");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { User, MusicUpload, Chart, PlayList, MusicList };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Chart.init(sequelize);
PlayList.init(sequelize);
MusicList.init(sequelize);
User.init(sequelize);
MusicUpload.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
