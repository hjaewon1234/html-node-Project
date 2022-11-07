const Sequelize = require("sequelize");

module.exports = class PlayList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(100),
          unique: true,
        },
        playlistName: {
          type: Sequelize.STRING(100),
        },
        playlistInfo: {
          type: Sequelize.TEXT,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "PlayList",
        tableName: "playlist",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
