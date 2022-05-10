const Sequelize = require('sequelize');

module.exports = class Game1 extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // init에 column들을 정의해 넣을 수 있다
      score: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      }
    }, {
      // model에 대한 설정
      sequelize,
      timestamps: false, // createdAt, updateAt 여부
      underscored: false, // sequelize에서 자동으로 만들어주는 것들에 대한 이름설정
      paranoid: false, // deleteAt(제거날짜) 여부, true일 때 soft delete
      modelName: "Game1", // 보통 단수형
      tableName: "Game1", // 모델이름의 복수형
      charset: "utf8", // utf8mb4, utf8
      collate: "utf8_general_ci", // utf8mb4_general_ci, utf8_general_ci
    });
  }


  // 관계 column(foreignKey, pk)
  // foreignKey가 targetKey를 참조할 것이다
  // belongsTo인 Table쪽에 foreignKey가 생성된다
  static associate(db) {
    db.Game1.belongsTo(db.User, { foreignKey: "user_id", targetKey: "user_id" });
  }
}