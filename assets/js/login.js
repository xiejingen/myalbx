$(function () { 
  //登录前台业务处理
  $('.btn-primary').on('click', () => { 
    //收集用户数据
    var email = $('#email').val()
    var password = $('#password').val()
    
    //发起ajax请求
    $.ajax({
      type: 'post',
      url: '/login',
      data: {
        email,
        password
      },
      dataType: 'json',
      success: function (result) { 
        if (result.code == 201) {
          $('.alert-danger').css('display', 'block')
          $('.alert-danger span').text(result.msg)
        } else { 
          location.href='/admin'
        }
      }
    })
  })
})