let errors = require("./errors.js");
const Float = require("./float.js");
const globals = require('./globals.js')
module.exports = class LogicNode() {
  constructor(nodeObj = null, operator = null, left = null, right = null, hasNegative = false) {
    this.add, this.sub = 0;
    this.mult, this.div = 1;
    this.pow = 2;
    this.operators = [[this.add]]
  }
}
