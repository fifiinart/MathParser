const errors = require('./errors.js');
const Node = require('./node.js');
const Value = require('./value.js');
const globals = require('./globals');

const operatorLevel = [
  ['+', '-'],
  ['*', '/'],
  ['^']
]

module.exports = class Tree {
  constructor(exp) {
    if (exp.length === 0) throw new Error('Please input an expression.')
    this._exp = exp;
    this._value = null;
    this.parse();
  }
  toString() {
    return "" + this._value;
  }
  get exp() {
    return this._exp;
  }
  get value() {
    return this._value;
  }
  get tokens() {
    return this._exp.split(' ');
  }
  parse() {
    let parsedExpression = parseExpression(this._exp);
    return this._value = parsedExpression;
  }
}

function parseExpression(expression) {
  if (!Number.isNaN(Number(expression))) {
    return Number(expression);
  }
  let tokens = expression.split(' ')

  for (i in tokens) {
    let v = tokens[i];
    if (!Number.isNaN(parseFloat(v))) {
      tokens[i] = parseFloat(v);
    }
  }

  obj = {
    hasNegative: false,
    left: new Value({
      value: tokens[0],
      hasNegative: tokens[0] < 0
    }),
    operator: tokens[1],
    right: new Value({
      value: tokens[2],
      hasNegative: tokens[2] < 0
    }),
  }
  return new Node(obj)
    .eval()
    ._value;
}