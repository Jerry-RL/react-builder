/* eslint-disable no-console */
const path = require('path');
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const rimraf = require('rimraf');
// eslint-disable-next-line import/no-extraneous-dependencies
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000s',
});

process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
  // eslint-disable-next-line global-require
  const prodConfig = require('../../lib/webpack.prod.js');

  webpack(prodConfig, (err, stats) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(2);
    }
    // eslint-disable-next-line no-console
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }));
    console.log('webpack build success, begin run test.');
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
