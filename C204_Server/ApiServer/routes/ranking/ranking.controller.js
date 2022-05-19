const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'production';
const config = require('../../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const game1 = async (req, res) => {
  try {
    const query = 'SELECT *, RANK() OVER(ORDER BY score DESC) AS RANKING FROM game1 LIMIT 3';
    const result = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT
    });

    if (result[0] !== undefined) {
      return res.status(200).send(JSON.stringify(result));
    } else {
      return res.status(204).send(result);
    }
  } catch (error) {
    return res.status(202).send(error);
  }
}

const game2 = async (req, res) => {
  try {
    const query = 'SELECT *, RANK() OVER(ORDER BY score DESC) AS RANKING FROM game2 LIMIT 3';
    const result = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT
    });

    if (result[0] !== undefined) {
      return res.status(200).send(result);
    } else {
      return res.status(204).send(null);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
}

module.exports = {
  game1,
  game2,
}