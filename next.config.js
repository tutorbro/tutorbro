const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {
      if (config.resolve.alias) {
        delete config.resolve.alias['react']
        delete config.resolve.alias['react-dom']
      }
      // Service Worker
      config.plugins.push(new SWPrecacheWebpackPlugin({
        filename: 'sw.js',
        minify: true,
        staticFileGlobsIgnorePatterns: [ /\.next\// ],
        staticFileGlobs: [
          // Precache all static files by default
          '/static/**/*'
        ],
        forceDelete: true,
        runtimeCaching: [
          {
            handler: 'fastest',
            urlPattern: /[.](png|jpg|svg)/
          },
          {
            handler: 'cacheFirst',
            urlPattern: /\/_next\/.*/,
            options: {
              cache: {
                name: 'nextjs-cache'
              }
            }
          },
          {
            handler: 'networkFirst',
            urlPattern: /^http.*/ // cache all files
          }
        ]
      }))
    }

    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/careers': { page: '/careers' },
      '/chat': { page: '/chat' }
    }
  }
}
