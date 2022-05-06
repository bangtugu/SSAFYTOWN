const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // init에 column들을 정의해 넣을 수 있다
      user_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: false,
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: false,
      },
      gender: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: false,
      },
    }, {
      // model에 대한 설정
      sequelize,
      timestamps: false, // createdAt, updateAt 여부
      underscored: false, // sequelize에서 자동으로 만들어주는 것들에 대한 이름설정
      paranoid: false, // deleteAt(제거날짜) 여부, true일 때 soft delete
      modelName: "User", // 보통 단수형
      tableName: "users", // 모델이름의 복수형
      charset: "utf8", // utf8mb4, utf8
      collate: "utf8_general_ci", // utf8mb4_general_ci, utf8_general_ci
    });
  }


  // 관계 column(foreignKey, pk)
  // foreignKey가 sourceKey를 참조하고 있다
  static associate(db) {
    db.User.hasMany(db.Score, { foreignKey: "id", sourceKey: "id" });
  }
}