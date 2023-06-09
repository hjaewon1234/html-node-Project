const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    // 테이블 생성
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(64),
          unique: true,
          allowNull: false,
        },

        userPw: {
          type: Sequelize.STRING(64),
          allowNull: false,
        },
        userName: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        userYyyy: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        userMm: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        userDd: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        userGender: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
        userEmail: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        userPhonenum: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
      },
      {
        // 테이블에 대한 기본 설정
        sequelize,
        timestamps: true, // created_at, updated_at을 자동으로 추가한다
        underscored: true, // 카멜을 스네이크로 바꾼다 < createdAt -> created_at
        paranoid: false, // deleted_at을 추가할지 안할지 설정 한다, 데이터를 삭제했을 때 DB에서 아예없앨지 남길껀지
        // true 라면 데이터의 삭제 기록을 남긴다, false면 남기지 않는다
        modelName: "User", // JavaScript에서 사용하는 이름
        tableName: "user", // DB에 생성되는 테이블 이름
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
