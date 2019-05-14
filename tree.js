const errors = require('errors.js');
const Node = require('node.js');
const Value = require('value.js');
const globals = require('globals');

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
  let tokens = expression.split(" ");
  let parenthesesDepth = 0;
  if (tokens.length < 3) {
    throw new Error('Please put spaces in between numbers and operators.');
  }


}