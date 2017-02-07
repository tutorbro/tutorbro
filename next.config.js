const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {
      // Service Worker
      config.plugins.push(new SWPrecacheWebpackPlugin({
        filename: 'sw.js',
        staticFileGlobsIgnorePatterns: [ /\.next\// ],
        staticFileGlobs: [
          // Precache all static files by default
          '/static/**/*'
        ],
        forceDelete: true,
        runtimeCaching: [
          // Example with different handlers
          { handler: 'fastest', urlPattern: /[.](png|jpg|css)/ },
          {
            handler: 'networkFirst',
            // cache all files
            urlPattern: /.*/
          }
        ]
      }))
    }

    return config
  }
}
