$(function () { 
  //在路由满足#menu-posts的时候添加样式和属性
  //在满足#menu-settings的时候做出同样的处理
  //判断是否有参数
  var routername=itcast.getRouterName(location.href)
  //获取当前元素对元素进行属性设置
  var menu_posts = $('#menu-posts')
  if (routername == 'posts' || routername == 'post-add' || routername == 'categories') {
    menu_posts.addClass('in')
    menu_posts.attr('aria-expanded',true)
  }
  
  //菜单设置
  var menu_settings = $('#menu-settings')
  if (routername == 'nav-menus' || routername == 'slides' || routername == 'settings') { 
    menu_settings.addClass('in')
    menu_settings.attr('aria-expanded',true)
  }
    // 为当前li元素添加样式
    $('li').removeClass('active')
    $('#'+routername).addClass('active')
})
