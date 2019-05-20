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

const isTest = process.env.VUE_APP_TITLE === 'test'

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: isTest,
  parallel: require('os').cpus().length > 1,
  pages: entries(),
  assetsDir: 'assets',
  publicPath: '/',

  css: {
    sourceMap: isTest
  },

  devServer: {
    overlay: {
      errors: true
    },
    historyApiFallback: {
      rewrites: [
        { from: /\/orders$/, to: '/orders.html' },
        {
          from: /\/transfer$/,
          to: '/transfer.html'
        }
      ]
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
