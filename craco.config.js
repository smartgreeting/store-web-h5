/*
 * @Author: lihuan
 * @Date: 2021-10-04 08:41:05
 * @LastEditTime: 2021-11-13 23:49:42
 * @Email: 17719495105@163.com
 */

const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8009/v1/',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
  style: { postcss: { mode: 'file' } },
  babel: {
    plugins: [
      [
        'styled-components-px2vw',
        {
          unitToConvert: 'px',
          viewportWidth: 375,
          unitPrecision: 6,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: true,
          exclude: [],
          landscape: false,
        },
      ],
    ],
  },
};
