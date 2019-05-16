const Tree = require('./tree.js');
module.exports = {
  version: require('./package.json')
    .version,
  solve: (exp) => new Tree(exp)
    ._value
}