module.exports = {
  getParameter(str) { 
    var obj = {}
    var str = str.substring(str.lastIndexOf('?') + 1)  
    var arr = str.split('&')     
    for (var i = 0; i < arr.length; i++) { 
      var temp = arr[i].split('=')
      obj[temp[0]]=temp[1]
    }
    return obj
  }
}