const Sequelize = require('sequelize');
const { Game1, Game2 } = require("../../models");

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const game1 = async (req, res) => {
  try {
    const userId = req.params.userId;
    const score = req.params.score;
    const query = 'SELECT score FROM game1 WHERE user_id = userId';
    const result = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT
    });

    if (result[0] < score) {
      const updateQuery = 'UPDATE game1 SET score = :score WHERE user_id = userId';
      await sequelize.query(updateQuery, {
        type: Sequelize.QueryTypes.UPDATE
      });
      return res.status(200).send("update 성공");
    } else if (result[0] === undefined) {
      const insertQuery = 'INSERT INTO game1 VALUES (NULL, :userId, :score)';
      await sequelize.query(insertQuery, {
        replacements: {
          userId: userId,
          score: score
        },
        type: Sequelize.QueryTypes.INSERT
      });
      return res.status(200).send("insert 성공");
    } else {
      return res.status(200).send("변화 없음");
    }
  } catch (error) {
    return res.status(202).send(error);
  }
}

const game2 = async (req, res) => {
  try {
    const userId = req.params.userId;
    const score = req.params.score;
    const query = 'SELECT score FROM game2 WHERE user_id = userId';
    const result = await sequelize.query(query, {
      type: Sequelize.QueryTypes.SELECT
    });

    if (result[0] < score) {
      const updateQuery = 'UPDATE game2 SET score = :score WHERE user_id = userId';
      await sequelize.query(updateQuery, {
        type: Sequelize.QueryTypes.UPDATE
      });
      return res.status(200).send("update 성공");
    } else if (result[0] === undefined) {
      const insertQuery = 'INSERT INTO game2 VALUES (NULL, :userId, :score)';
      await sequelize.query(insertQuery, {
        replacements: {
          userId: userId,
          score: score
        },
        type: Sequelize.QueryTypes.INSERT
      });
      return res.status(200).send("insert 성공");
    } else {
      return res.status(200).send("변화 없음");
    }
  } catch (error) {
    return res.status(202).send(error);
  }
}

module.exports = {
  game1,
  game2,
}