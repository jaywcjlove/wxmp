import webpack, { Configuration } from 'webpack';
import lessModules from '@kkt/less-modules';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import { disableScopePlugin } from '@kkt/scope-plugin-options';
import { LoaderConfOptions } from 'kkt';
import raw from '@kkt/raw-modules';
import pkg from './package.json';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  conf = mdCodeModulesLoader(conf);
  conf = raw(conf, env, {
    ...options,
    test: /\.(md.css)$/i,
  });
  conf = disableScopePlugin(conf);
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );

  /** https://github.com/kktjs/kkt/issues/446 */
  conf.ignoreWarnings = [{ module: /node_modules[\\/]parse5[\\/]/ }];
  conf.module!.exprContextCritical = false;
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
          refractor: {
            test: /[\\/]node_modules[\\/](refractor)[\\/]/,
            name: 'refractor-prismjs-vendor',
            chunks: 'all',
          },
        },
      },
    };
  }

  return conf;
};
