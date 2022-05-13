const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'production';
const config = require('../../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const crypto = require("crypto");
require('dotenv').config();
const privateKey = process.env.RSA_PRIVATE_KEY.replace(/\\n/g, '\n');
const publicKey = process.env.RSA_PUBLIC_KEY.replace(/\\n/g, '\n');

encodeRSA = (text) => {
  const buffer = Buffer.from(text);
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString("hex");
}

decodeRSA = (text) => {
  const buffer = Buffer.from(text, "hex");
  const decrypted = crypto.privateDecrypt(privateKey, buffer);
  return decrypted.toString("utf8");
}

const idValidation = async (req, res) => {
  try {
    const userId = req.params.userId;
    const query = 'SELECT * FROM users WHERE user_id = :userId';
    const result = await sequelize.query(query, {
      replacements: {
        userId: userId
      },
      type: Sequelize.QueryTypes.SELECT
    });

    if (result[0] === undefined) {
      return res.status(200).send("사용가능한 ID입니다.");
    } else {
      return res.status(409).send("중복된 ID입니다.");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
}

const signup = async (req, res) => {
  try {
    const userId = req.body.userId;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const name = req.body.name;
    const gender = req.body.gender;

    if (password !== confirmPassword) {
      return res.status(400).send("Not Validated Password");
    }

    if (userId && password && name && gender) {
      const encryptedPassword = encodeRSA(password); //public key를 사용해 암호화한 값을 서버로 전송한다

      const query = 'INSERT INTO users VALUES(NULL, :userId, :encryptedPassword, :name, :gender)';
      const result = await sequelize.query(query, {
        replacements: {
          userId: userId,
          encryptedPassword: encryptedPassword,
          name: name,
          gender: gender
        },
        type: Sequelize.QueryTypes.INSERT
      });

      console.log(result);
      return res.status(201).send("회원가입 성공");
    } else {
      return res.status(400).send("Not Validated Value");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
}

const login = async (req, res) => {
  try {
    const userId = req.body.userId;
    const password = req.body.password;
    const query = 'SELECT password, id FROM users WHERE user_id = :userId';
    const result = await sequelize.query(query, {
      replacements: {
        userId: userId
      },
      type: Sequelize.QueryTypes.SELECT
    });

    const sqlPassword = result[0].password;
    const decryptedPassword = decodeRSA(sqlPassword); //서버에서 값을 private key를 이용해 복호화한다.
    const id = result[0].id;

    if (decryptedPassword === password) {
      return res.status(200).send({ id: id });
    } else {
      return res.status(400).send("ID/PW를 확인해주세요");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
}

module.exports = {
  idValidation,
  signup,
  login,
}