var connection = require('./connModule')
//获取所有数据
exports.getAllList = (callback) => {
  var sql = 'select*from categories where id!=1'
  connection.query(sql, (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })
}
//根据id实现编辑
exports.updateCategories = (obj, callback) => {
  var sql = "update categories set slug = ?,name = ? where id = ?"
  connection.query(sql, [obj.slug, obj.name, obj.id], (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null)
    }
  })
}
//实现添加
exports.addCategories = (obj, callback) => { 
  var sql = 'insert categories value(null,?,?)'
  connection.query(sql, [obj.slug, obj.name], (err, results) => {
    if (err) {
      callback(err)
    } else { 
      callback(null)
    }
  })
}

// 实现根据id删除分类数据
exports.delCategoryById = (id,callback) => {
  var sql = "delete from categories where id = ?"
  connection.query(sql,[id],(err,results) => {
      if(err){
          callback(err)
      }else{
          callback(null)
      }
  })
}

//实现批量删除数据
exports.delCategoryById = (ids, callback) => { 
  var sql = `delete from  categories where id in (${ids})`
  connection.query(sql, (err, results) => { 
    console.log(ids,sql)
    if (err) {
      callback(err)
      console.log(err)
    } else { 
      callback(null)
    }
  })
}
