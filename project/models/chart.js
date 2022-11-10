const Sequelize = require("sequelize");

module.exports = class Chart extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        albumImg: {
          type: Sequelize.STRING(100),
        },
        musicName: {
          type: Sequelize.STRING(100),
        },
        singer: {
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
        modelName: "Chart",
        tableName: "chart",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
