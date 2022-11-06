const Sequelize = require("sequelize");

module.exports = class Upload extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // 컬럼들을 작성한다, 설정 하는 객체
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Upload",
        tableName: "upload",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
