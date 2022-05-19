const express = require('express');
const path = require('path');
const { sequelize } = require('./models');

const routes = require('./routes')  //index라는 이름은 경로에 안써도 지정이 자동으로 된다. 

const app = express();
app.set('port', process.env.PORT || 3001);

// sync를 통해서 node에서 database로 연결이 가능
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});