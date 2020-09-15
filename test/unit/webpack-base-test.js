/* eslint-disable no-shadow */
// const assert = require('assert');

/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');

  console.log(baseConfig);

  it('entry', () => {
    const assert = require('assert');

    describe('webpack.base.js test case', () => {
      const baseConfig = require('../../lib/webpack.base.js')

      it('entry', () => {
        assert.strictEqual(baseConfig.entry.chat, '/Users/lixun/Documents/self-library/react-builder/test/smoke/template/src/chat/index.js');
        assert.strictEqual(baseConfig.entry.index, '/Users/lixun/Documents/self-library/react-builder/test/smoke/template/src/index/index.js');
      });
    });
  });
});
