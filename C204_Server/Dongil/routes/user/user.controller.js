const User = require("../../models/user");

const idValidation = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await User.findOne({ where: { user_id: userId } });
    if (result == null) {
      return res.status(200).send("사용가능한 ID입니다.");
    } else {
      return res.status(201).send("중복된 ID입니다.");
    }
  } catch (error) {
    return res.status(202).send(error);
  }
}

const signup = async (req, res) => {
  try {
    const userId = req.body.userId;
    const password = req.body.password;
    const name = req.body.name;
    const gender = req.body.gender;

    const result = await User.create({
      userId, password, name, gender
    });

    if (result == null) {
      return res.status(200).send("회원가입 성공");
    } else {
      return res.status(201).send("회원가입 실패");
    }
  } catch (error) {
    return res.status(202).send(error);
  }
}

const login = async (req, res) => {
  try {
    const userId = req.body.userId;
    const password = req.body.password;
    const result = await User.findOne({
      where: {
        user_id: userId, password: password
      }
    });
    if (result == null) {
      return res.status(200).send("로그인 성공");
    } else {
      return res.status(201).send("ID/PW를 확인해주세요");
    }
  } catch (error) {
    return res.status(202).send(error);
  }
}

// const test1 = async (req, res) => {

//   const tt = req.params.tt;
//   // const testtt = await sequelize.query("SELECT * FROM USER");

//   // const testtt = await User.create({
//   //   user_id: "hi",
//   //   password: "test",
//   //   name: "hi",
//   //   gender: "tt",
//   // });
//   await User.findOne({ where: { user_id: "heeh" } })
//     .then(function (data) {
//       console.log(data);
//       console.log("testtt");
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//   if (true) {
//     return res.send(tt);
//   } else {
//     return res.send(tt);
//   }
// }

module.exports = {
  idValidation,
  signup,
  login,
}