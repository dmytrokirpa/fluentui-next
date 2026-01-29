import { withGriffelCSSExtraction } from '@griffel/next-extraction-plugin';
import path from 'path';

const nextConfig = withGriffelCSSExtraction()({
  webpack(config) {
    config.module.rules.unshift({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: '@griffel/webpack-loader',
        },
      ],
    });

    // If your project uses TypeScript
    config.module.rules.unshift({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: '@griffel/webpack-loader',
          options: {
            babelOptions: {
              presets: ['next/babel'],
            },
          },
        },
      ],
    });

    config.resolve.alias = {
      '@griffel/core': path.resolve(__dirname, '../griffel/dist/packages/core'),
      '@griffel/react': path.resolve(__dirname, '../griffel/dist/packages/react'),
      'webpack': path.resolve(__dirname, './node_modules/webpack'),
    };

    return config;
  },
});

export default nextConfig;
