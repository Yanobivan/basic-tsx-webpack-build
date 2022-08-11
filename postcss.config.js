import postcssPresetEnv from 'postcss-preset-env';

export const plugins = [
  postcssPresetEnv({
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
  }),
];
