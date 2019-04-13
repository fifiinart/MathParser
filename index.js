const Value = require('./value');
console.log(new Value({
  value: 2,
  hasNegative: false
}), new Value({
  value: 2,
  hasNegative: false
}) + "");

const Node = require('./node');

console.log(new Node({
    left: new Value({
      value: 2,
      hasNegative: false
    }),
    operator: '+',
    right: new Value({
      value: 2,
      hasNegative: false
    }),
    hasNegative: false
  })
  .eval());