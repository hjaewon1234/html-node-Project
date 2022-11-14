const Sequelize = require("sequelize");

module.exports = class Music extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        musicName: {
          type: Sequelize.STRING(100),
        },
        musicFile: {
          type: Sequelize.STRING(100),
        },
        albumImg: {
          type: Sequelize.STRING(100),
        },
        singer: {
          type: Sequelize.STRING(100),
        },

        albumName: {
          type: Sequelize.STRING(100),
        },
        count: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
        },
        genre: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: true,
        modelName: "Music",
        tableName: "music",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
