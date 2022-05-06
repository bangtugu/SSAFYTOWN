const { User } = require("../../models");

const test = async (req, res) => {
  if (true) {
    return res.send("사용가능한 ID입니다.");
  } else {
    return res.send("중복된 ID가 존재합니다.");
  }
}

const idcheck = async (req, res) => {
  // const userid = req.params.userid;

  // const result = await sequelize.query("SELECT * FROM USER");

  // const result = await User.findOne({
  //   where: { user_id: userid }
  // })

  if (result == null) {
    return res.send("사용가능한 ID입니다.");
  } else {
    return res.send("중복된 ID입니다.");
  }
}

const signup = async (req, res) => {
  const user_id = req.body.user_id;
  const password = req.body.password;
  const name = req.body.name;
  const gender = req.body.gender;

  await User.create({
    user_id, password, name, gender
  });

  res.status(202).send("회원가입 성공")
}

const login = async (req, res) => {
  const userid = req.body.userid;
  const userpw = req.body.userpw;

  const result = await User.findOne({
    where: { userid, userpw }
  });

  if (result == null) {
    res.status(404).send("로그인 실패");
  } else {
    res.status(202).send("아이디/비밀번호를 확인해주세요");
  }
}

module.exports = {
  test,
  idcheck,
  signup,
  login,
}