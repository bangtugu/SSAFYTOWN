const Sequelize = require('sequelize');
const User = require('./user'); // 추가된 코드
const Score = require('./score'); // 추가된 코드

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User; // 추가된 코드
db.Score = Score; // 추가된 코드

User.init(sequelize); // init으로 sequelize와 연결, 추가된 코드
Score.init(sequelize); // 추가된 코드

User.associate(db); // 관계설정
Score.associate(db); // 관계설정

module.exports = db;