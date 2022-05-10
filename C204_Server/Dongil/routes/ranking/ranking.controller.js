const Sequelize = require('sequelize');
const { Game1, Game2 } = require("../../models");

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const game1 = async (req, res) => {
  try {
    const query = 'SELECT *, RANK() OVER(ORDER BY score DESC) AS RANKING FROM game1';
    const result = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT
    });
    console.log(result[0]);

    if (result[0] !== undefined) {
      return res.status(200).send(result);
    } else {
      return res.status(201).send("기록이 없습니다");
    }
  } catch (error) {
    return res.status(202).send(error);
  }
}

const game2 = async (req, res) => {
  try {
    const query = 'SELECT *, RANK() OVER(ORDER BY score DESC) AS RANKING FROM game2';
    const result = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT
    });
    console.log(result[0]);

    if (result[0] !== undefined) {
      return res.status(200).send(result);
    } else {
      return res.status(201).send("기록이 없습니다");
    }
  } catch (error) {
    return res.status(202).send(error);
  }
}

module.exports = {
  game1,
  game2,
}