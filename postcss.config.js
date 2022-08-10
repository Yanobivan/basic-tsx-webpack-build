const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
    }),
  ],
};
