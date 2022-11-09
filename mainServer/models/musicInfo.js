const Sequelize = require("sequelize");

module.exports = class MusicInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(100),
          unique: true,
        },
        userComment: {
          type: Sequelize.TEXT,
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
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: true,
        modelName: "MusicInfo",
        tableName: "musicinfo",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
