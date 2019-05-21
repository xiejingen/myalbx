var cateModule = require('../dataModules/cateModule')
var common=require('./common')
//获取所有分类数据
exports.getAllcateList = (req, res) => {
 cateModule.getAllList((err, data) => {
    if (err) {
      res.end('404')
    } else {
      res.json(data)
    }
  })
}
//实现编辑的提交
exports.updateCategories = (req, res) => {
  var obj = req.body
  console.log(obj)
 cateModule.updateCategories(obj, (err) => {
    if (err) {
      res.json({
        code: 201,
        msg: '编辑失败'
      })
    } else { 
      res.json({
        code: 200,
        msg:'编辑成功'
      })
    }
  })
}
//实现添加的提交
exports.addCategories = (req, res) => {
  var obj = req.body
 cateModule.addCategories(obj, (err) => {
    if (err) {
      res.json({
        code: 201,
        msg: '添加失败'
      })
    } else { 
      res.json({
        code: 200,
        msg:'添加成功'
      })
    }
  })
}
 //根据id删除分类数据
exports.delCategoryById = (req, res) => { 
  var id = common.getParameter(req.url).id
  console.log(id)
 cateModule.delCategoryById(id, (err) => { 
    if (err) {
      res.json({
        code: 201,
        msg: '删除失败'
      })
    } else { 
      res.json({
        code: 200,
        msg:'删除成功'
      })
    }
  })
}
//根据id批量删除分类数据
exports.delAllCategoryById = (req, res) => { 
  var ids = req.body.ids   
  console.log(ids)

 cateModule.delCategoryById(ids, (err) => { 
    if (err) {
      res.json({
        code: 201,
        msg: '删除失败'
      })
    } else { 
      res.json({
        code: 200,
        msg:'删除成功'
      })
    }
  })
}