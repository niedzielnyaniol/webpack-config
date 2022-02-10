const webpack = require('webpack');
const config = require('../webpack.config');

function build() {
  const compiler = webpack(config);

  return new Promise((resolve) => {
    compiler.run((_, stats) => {
      // eslint-disable-next-line no-console
      console.log(stats);

      return resolve();
    });
  });
}

module.exports = build;
