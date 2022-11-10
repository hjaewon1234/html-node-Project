const Sequelize = require("sequelize");

module.exports = class MusicList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(100),
        },
        playList: {
          type: Sequelize.STRING(255),
        },

        albumImg: {
          type: Sequelize.STRING(100),
        },
        musicName: {
          type: Sequelize.STRING(100),
        },
        singer: {
          type: Sequelize.STRING(100),
        },
        albumName: {
          type: Sequelize.STRING(100),
        },
        genre: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "MusicList",
        tableName: "musiclist",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
