/* eslint-disable global-require */
const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

// eslint-disable-next-line no-undef
describe('react-webpack test case', () => {
  require('./unit/webpack-base-test');
});
