$(function () {


  // 开始的时候隐藏编程按钮 
  $('.btnEdit').css("display", "none")
  //获取所有数据分类初始化
  init()

  //全选全不选
  $('.checkAll').on('click', function () {
    //获取复选框的属性
    var status = $(this).prop('checked')
    //为所有tbody中的复选框设置checked属性
    $('tbody .chekone').prop('checked', status)
    //获取tbody中的被选中复选框，当数量>1的时候，批量删除按钮显示
    var allck = $('tbody .chekone:checked')
    if (allck.length > 1) {
      $('.btn-dels').fadeIn(500)
    } else {
      $('.btn-dels').fadeOut(500)
    }
  })

  //单击数据对应的复选框
  $('tbody').on('click', '.chekone', function () {
    //得出下面的复选框的总数
    var anyone = $('tbody .chekone').length
    //被选中的复选框
    var allck = $('tbody .chekone:checked')
    if (allck.length > 1) {
      $('.btn-dels').fadeIn(500)
    } else {
      $('.btn-dels').fadeOut(500)
    }
    if (allck.length == anyone) {
      $('.checkAll').prop('checked', true)
    } else {
      $('.checkAll').prop('checked', false)
    }
  })

  //获取数据
  $('tbody').on('click', '.btn-edit', function () {
    var data = $(this).data()
    $('#name').val(data.name)
    $('#slug').val(data.slug)
    $('#id').val(data.id)
    $('.btnEdit').css('display', 'block')
    $('.add-tip').text('编辑')
    $('.btnAdd').css('display', 'none')
  })

  //实现编辑提交
  $('.btnEdit').on('click', function () {
    var data = $('form').serialize()
    $.ajax({
      type: 'post',
      url: '/updateCategories',
      data: data,
      dataType: 'json',
      success: function (result) {
        if (result.code == 200) {
          $('.alert-danger span').text(result.msg)
          $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
          //刷新
          init()
          //重置表单元素的数据
          $('.btnEdit').css('display', 'none')
          $('.btnAdd').css('display', 'block')
          $('.add-tip').text('添加')
          $('#name').val('')
          $('#slug').val('')
          $('#id').val('')

        } else {
          $('.alert-danger span').text(result.msg)
          $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
        }
      }
    })
  })
  //实现添加数据
  $('.btnAdd').on('click', function () {
    var data = $('form').serialize()
    $.ajax({
      type: 'post',
      url: '/addCategories',
      data: data,
      dataType: 'json',
      success: function (result) {
        if (result.code == 200) {
          $('.alert-danger span').text(result.msg)
          $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
          $('#name').val('')
          $('#slug').val('')
          $('#id').val('')
          //刷新
          init()
        } else {
          $('.alert-danger span').text(result.msg)
          $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
        }
      }
    })
  })
  // 实现批量删除
  $('.btn-dels').on('click', function () {
    // 获取所有被选择的复选框所对应的id
    var allChk = $('tbody .chekone:checked')
    var ids = []
    for (var i = 0; i < allChk.length; i++) {
      ids.push(allChk[i].dataset['id'])
    }
   
    // 发起请求
    $.ajax({
      type: 'post',
      url: '/delAllCategoryById',
      data: { ids:ids.join(',') },
      dataType: 'json',
      success: function (result) {
        if (result.code == 200) {
          $('.alert-danger span').text(result.msg)
          $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
          $('.btn-dels').css('display','none')
          // 刷新
          init()
      } else {
          $('.alert-danger span').text(result.msg)
          $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
      }
      }
    })
  })



})

function init() {
  $.ajax({
    type: 'get',
    url: '/getCategories',
    dataType: 'json',
    success: function (result) {
      var html = template('cateListTemp', {
        list: result
      })
      $('tbody').html(html)
    }
  })
}
//删除单条数据分类
function delCate(id) {
  if (confirm('请问真的需要删除吗？')) {
    $.ajax({
      type: 'get',
      url: '/delCategoryById',
      data: {
        id
      },
      dataType: 'json',
      success: function (result) {
        if (result.code == 200) {
          $('.alert-danger span').text(result.msg)
          $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
          // 刷新
          init()
        } else {
          $('.alert-danger span').text(result.msg)
          $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
        }
      }
    })
  }
}