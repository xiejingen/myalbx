var express = require('express')

// 引入页面管理控制器
var pagesController = require('./controllers/pagesController')
//引用用户管理控制器
var usersController = require('./controllers/usersController')
//引入分类管理控制器
var cateController = require('./controllers/cateController')
//引入文章管理控制器
var postController = require('./controllers/postController')
// 创建路由模块对象
var router = express.Router()
// 挂载路由配置


// 约定：/admin
// 返回前台页面
router.get('/',pagesController.getIndexPage)
      .get('/detail',pagesController.getDetailPage)
      .get('/list',pagesController.getListPage)


// 返回后台管理页面
      .get('/admin',pagesController.getAdminPage)
      .get('/admin/categories',pagesController.getCategoriesPage)
      .get('/admin/comments',pagesController.getCommentsPage)
      .get('/admin/login',pagesController.getLoginPage)
      .get('/admin/nav-menus',pagesController.getNavMenusPage)
      .get('/admin/password-reset',pagesController.getPasswordResetPage)
      .get('/admin/post-add',pagesController.getPostAddPage)
      .get('/admin/posts',pagesController.getPostsPage)
      .get('/admin/profile',pagesController.getProfilePage)
      .get('/admin/settings',pagesController.getSettingsPage)
      .get('/admin/slides',pagesController.getSlidesPage)
      .get('/admin/users',pagesController.getUsersPage)
//后台业务处理
      //登录
      .post('/login', usersController.login)
      //分类
      .get('/getCategories', cateController.getAllcateList)
      .post('/updateCategories', cateController.updateCategories)
      .post('/addCategories', cateController.addCategories)
      .get('/delCategoryById',cateController.delCategoryById)
      .post('/delAllCategoryById', cateController.delAllCategoryById)
      //文章
      .get('/getAllPostList',postController.getAllPostList)
      

module.exports = router