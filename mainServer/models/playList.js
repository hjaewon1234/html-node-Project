const Sequelize = require("sequelize");

module.exports = class PlayList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(100),
<<<<<<< HEAD
          unique: true,
=======
>>>>>>> 5a2a81ff9220ae8926bf6cc68dd5743b1504b3d4
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
