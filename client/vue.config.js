module.exports = {
    devServer:{
        port:80
    },
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
}
//配置根目录
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    }
}
