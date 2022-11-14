"use strict";

const Sequelize = require("sequelize");

const PlayList = require("./playList.js");
const MusicList = require("./musicList.js");
const Music = require("./music.js");
const Comment = require("./comment.js");
const User = require("./user.js");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { User, PlayList, MusicList, Music, Comment };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

PlayList.init(sequelize);
MusicList.init(sequelize);
Music.init(sequelize);
Comment.init(sequelize);
User.init(sequelize);

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
