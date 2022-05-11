const Sequelize = require('sequelize');
const { Game1, Game2 } = require("../../models");

const env = process.env.NODE_ENV || 'production';
const config = require('../../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const game1 = async (req, res) => {
  try {
    const userId = req.body.userId;
    const score = Number(req.body.score);
    console.log(1);
    const query = 'SELECT score FROM game1 WHERE user_id = :userId';
    const result = await sequelize.query(query, {
      replacements: {
        userId: userId,
      },
      type: Sequelize.QueryTypes.SELECT
    });

    const nowScore = result[0];

    if (nowScore === undefined) {
      const insertQuery = 'INSERT INTO game1 VALUES (NULL, :score, :userId)';
      await sequelize.query(insertQuery, {
        replacements: {
          score: score,
          userId: userId
        },
        type: Sequelize.QueryTypes.INSERT
      });
      return res.status(200).send("insert 성공");
    } else if (nowScore.score < score) {
      const updateQuery = 'UPDATE game1 SET score = :score WHERE user_id = :userId';
      await sequelize.query(updateQuery, {
        replacements: {
          score: score,
          userId: userId
        },
        type: Sequelize.QueryTypes.UPDATE
      });
      return res.status(200).send("update 성공");
    } else {
      return res.status(200).send("변화 없음");
    }
  } catch (error) {
    return res.status(202).send(error);
  }
}

const game2 = async (req, res) => {
  try {
    const userId = req.body.userId;
    const score = Number(req.body.score);
    console.log(1);
    const query = 'SELECT score FROM game2 WHERE user_id = :userId';
    const result = await sequelize.query(query, {
      replacements: {
        userId: userId,
      },
      type: Sequelize.QueryTypes.SELECT
    });

    const nowScore = result[0];

    if (nowScore === undefined) {
      const insertQuery = 'INSERT INTO game2 VALUES (NULL, :score, :userId)';
      await sequelize.query(insertQuery, {
        replacements: {
          score: score,
          userId: userId
        },
        type: Sequelize.QueryTypes.INSERT
      });
      return res.status(200).send("insert 성공");
    } else if (nowScore.score < score) {
      const updateQuery = 'UPDATE game2 SET score = :score WHERE user_id = :userId';
      await sequelize.query(updateQuery, {
        replacements: {
          score: score,
          userId: userId
        },
        type: Sequelize.QueryTypes.UPDATE
      });
      return res.status(200).send("update 성공");
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