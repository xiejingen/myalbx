var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'baixiu'
})

//根据邮箱查询数据
exports.getUserByEmail = (email, callbcak) => {
  var sql = 'select*from users where email= ?'
  connection.query(sql, [email], (err, result) => { 
    if (err) {
      callbcak(err)
    } else { 
      callbcak(null,result[0])
    }
  })
}