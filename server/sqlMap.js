// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)',
    all: 'select * from user'
  }
}

module.exports = sqlMap;