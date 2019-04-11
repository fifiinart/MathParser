const errors = require('errors.js');
const globals = require('globals.js');
const Value = require('value.js');

const operators = ['^', '*', '/', '+', '-']
class Node {
  constructor(nodeObj, hasNegative, left, operator, right) {
    if (hasNegative && left && operator && right) {
      this._hasNegative = hasNegative;
      this._left = left;
      this._operator = operator;
      this._right = right;
      if (nodeObj) {
        this._nodeObj = nodeObj;
      } else {
        this._nodeObj = {
          left: this._left,
          operator: this._operator,
          right: this._right
        }
      }
    } else if (nodeObj) {
      this._nodeObj = nodeObj;
      if (typeof nodeObj.hasNegative === 'boolean') {
        this._hasNegative = nodeObj.hasNegative;
      } else {
        throw new errors.MissingValue("`hasNegative` property in a Node is missing.");
      }
      if (nodeObj.left instanceof Value || nodeObj.left instanceof Node) {
        this._left = nodeObj.left;
      } else {
        throw new errors.MissingValue("`left` property in a Node is missing.");
      }
      if (nodeObj.operator) {
        this._operator = nodeObj.operator;
      } else {
        throw new errors.MissingValue("`operator` property in a Node is missing.");
      }
      if (nodeObj.right instanceof Value || nodeObj.right instanceof Node) {
        this._right = nodeObj.right;
      } else {
        throw new errors.MissingValue("`right` property in a Node is missing.");
      }
    } else {
      throw new errors.MissingValue("No properties specified in a Value.");
    }
  }
}