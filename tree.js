const errors = require('errors.js');
const Node = require('node.js');
const globals = require('globals');

const operatorLevel = [
  ['+', '-'],
  ['*', '/'],
  ['^']
]

module.exports = class Tree {
  constructor(exp) {
    this._exp = exp;
    this._values = [];
    this._root = null;
    this.parse();
  }
  toString() {
    return "" + this.root;
  }
  get exp() {
    return this._exp;
  }
  get values() {
    return this._values;
  }
  get tokens() {
    return this._exp.split(' ');
  }
  parse() {
    let expOriginal = parseExpression(this._exp);
    let exp = expOriginal.exp;
    let values = expOriginal.values;
    this._root = new Node(exp);
    this._values = values;
    this._exp = "" + this.root;
  }
}

function parseExpression(expression) {
  return;
}