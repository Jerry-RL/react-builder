// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob-all');

// eslint-disable-next-line no-undef
describe('Checking generated html files', () => {
  // eslint-disable-next-line no-undef
  it('should generate html files', (done) => {
    const files = glob.sync([
      './dist/index_*.js',
      './dist/index_*.css',
      './dist/chat_*.js',
      './dist/chat_*.css',
    ]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error('no html files generated');
    }
  });
});
