<<<<<<< HEAD
const Value = require('/value.js');
const one = new Value({
  value: 1,
  hasNegative: false
})
console.log(one);
=======
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
>>>>>>> 1558cb2ef03ccc8714ef77f63e2491145a75fb16
