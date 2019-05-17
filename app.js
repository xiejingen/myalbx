//引入express
var express = require('express')
//引入路由模块
var router = require('./router.js')
//引入ejs
var ejs = require('ejs')
//引入bodyParse
var bodyParser = require('body-parser')
//引入express-session
var session=require('express-session')
//创建app应用程序服务器
var app = express()
//监听端口
app.listen('3006', () => console.log('http://127.0.0.1:3006'))
//静态资源托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))

//配置模块引擎为ejs
app.set('view engine', 'ejs')
//配置ejs的模板文件夹,ejs会自动的在指定的目录下寻找文件
app.set('views', __dirname + '/views')
//配置session
app.use(session({
  secret: 'myalbx',//加盐
  resave: false, //重新保存：强制会话保存即使是未修改的。
  saveUninitialized: true,   //强制“未初始化”的会话保存到存储。 

}))
app.use((req, res, next) => { 
  //判断是否需要再次登录
  if (req.session.isLogin && req.session.isLogin == 'true' || req.url.indexOf('/admin') == -1 || req.url == '/admin/login') {
    next()
  } else { 
    res.redirect('/admin/login')
  }
})
//添加bodyParser处理
app.use(bodyParser.urlencoded({extended:false}))
//使用中间件在当前应用上挂载路由
app.use(router)


