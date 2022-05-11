const Sequelize = require('sequelize');
const User = require('./user'); // 추가된 코드
const Game1 = require('./game1'); // 추가된 코드
const Game2 = require('./game2'); // 추가된 코드

const env = process.env.NODE_ENV || 'production';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User; // 추가된 코드
db.Game1 = Game1; // 추가된 코드
db.Game2 = Game2; // 추가된 코드

User.init(sequelize); // init으로 sequelize와 연결, 추가된 코드
Game1.init(sequelize); // 추가된 코드
Game2.init(sequelize); // 추가된 코드

User.associate(db); // 관계설정
Game1.associate(db); // 관계설정
Game2.associate(db); // 관계설정

module.exports = db;