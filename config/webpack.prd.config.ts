import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import config from './webpack.config';

config.optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      },
    }),
  ],
};

config.plugins?.push(new BundleAnalyzerPlugin({
  analyzerMode: 'static',
}));

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].[fullhash].css',
  chunkFilename: '[id].[fullhash].css',
});

config.plugins?.push(MiniCssExtractPluginConfig);

export default config;
