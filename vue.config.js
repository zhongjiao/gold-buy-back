const path = require('path')
const glob = require('glob')
const pagePath = path.resolve(__dirname, './src/pages')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const multiDirs = glob.sync(pagePath + '/*')
const entries = () => {
  let entryArr = {}
  multiDirs.forEach(dPath => {
    let dirDetails = dPath.split('/')
    let dirName = dirDetails[dirDetails.length - 1]
    if (dirName.indexOf('.') < 0) {
      entryArr[dirName] = {
        entry: `src/pages/${dirName}/index.js`,
        template: `public/index.html`,
        filename: `${dirName}.html`
      }
    }
  })
  return entryArr
}

module.exports = {
  // baseUrl:
  // process.env.NODE_ENV === 'production' ? 'https://www.mycdn.com/' : '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.npm_lifecycle_event.indexOf('map') > 0,
  parallel: require('os').cpus().length > 1,
  pages: entries(),
  assetsDir: 'assets',

  devServer: {
    overlay: {
      errors: true
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@a', resolve('src/assets'))
      .set('@c', resolve('src/components'))
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/style/variable.less')]
    }
  }
}
