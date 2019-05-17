var itcast = {
  getRouterName(UrlStr) { 
    var index = UrlStr.indexOf('?')
    var routername
    if (index == -1) {
      routername = UrlStr.substring(UrlStr.lastIndexOf('/')+1)
    } else { 
      routername=UrlStr.substring(UrlStr.lastIndexOf('/')+1,index)
    }
    return routername
  }
}