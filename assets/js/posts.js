$(function () { 
    var pageNum = 1
    var pageSize=4
    function initData() {
        $.ajax({
            type: 'get',
            url: '/getAllPostList',
            data: {
                pageNum,
                pageSize
            },
            dataType: 'json',
            success: function (result) { 
                var html = template('postListTemp', result.data)
                $('tbody').html(html)
                //生成分页结构
                setPage(Math.ceil(result.data.total/pageSize))
            }
        })
    }
    initData()

    function setPage(pageSum) { 
        $('.pagination').bootstrapPaginator({
            bootstrapMajorVersion: 3,
            currentPage: pageNum,
            totalPages: pageSum,
            onPageClicked: function (event, originalEvent, type, page) { 
                pageNum = page
                initData()
            }
        })
    }
})