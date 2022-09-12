const postcssPresetEnv = require('postcss-preset-env');
const yourConfig = {
  plugins: [
    postcssPresetEnv({
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
    }),
  ],
};
