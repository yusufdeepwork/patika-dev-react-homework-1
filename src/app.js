const {getData} = require('./lib/service')

getData(1).then(({userPostInfo, userInfo})=> console.log(userInfo.data,userPostInfo.data))
