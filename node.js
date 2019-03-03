let errors = require("./errors.js");
const Float = require("./float.js");
const globals = require('./globals.js')
module.exports = class Node {
  constructor(nodeObj = null, operator = null, left = null, right = null, hasNegative = false) {
    [this.pow, this.div, this.mult, this.sub, this.add] = globals.range(0, 5);
    this.operators = ['^', '/', '*', '-', '+'];
    // Check if operator, left, right, and nodeObj are all null
    if (operator == null && left == null && right == null && nodeObj == null) {
      throw new errors.MissingValue("Required variable(s) for Nodthis. Must use either operator, left, and right or nodeObj.");
    }
    // Check if operator, left, and right exist
    else if (operator && left && right) {
      this.operator = operator;
      this.left = left;
      this.right = right;
      this.hasNegative = hasNegative;
    } else if (nodeObj) {

      // Try loading operator
      if (!("operator" in nodeObj)) {
        throw new errors.MissingValue("Required key for Nodthis. Must have \"operator\" in nodeObj.");
      } else {
        this.operator = nodeObj["operator"];
      }

      // Try loading left
      if (!("left" in nodeObj)) {
        throw new errors.MissingValue("Required key for Nodthis. Must have \"left\" in nodeObj.");
      } else {
        this.left = nodeObj["left"];
      }

      // Try loading right
      if (!("right" in nodeObj)) {
        throw new errors.MissingValue("Required key for Node. Must have \"right\" in nodeObj.");
      } else {
        this.right = nodeObj["right"];
      }

      // Try loading hasNegative
      if (!("hasNegative" in nodeObj)) {
        this.hasNegative = hasNegative;
      } else {
        this.hasNegative = nodeObj["hasNegative"];
      }
    }

    // Load left and right values as they should (Node | Float)
    if (this.left instanceof Object) {
      if ("value" in this.left) {
        this.left = new Float(this.left);
      } else {
        this.left = new Node(this.left);
      }
    }
    if (this.right instanceof Object) {
      if ("value" in this.right) {
        this.right = new Float(this.right);
      } else {
        this.right = new Node(this.right);
      }
    }
  }

  toString() {
    let left = "" + this.getLeft();
    let right = "" + this.getRight();

    if (this.getLeft() instanceof Node && !this.getLeft()
      .hasNegative()) {
      left = "(" + left + ")";
    }
    if (this.getRight() instanceof Node && !this.getRight()
      .hasNegative()) {
      right = "(" + right + ")";
    }

    let operator = this.getOperator();

    if (this.hasNegative()) {
      return `-(${left} ${operator} ${right})`;
    }

    return `${left} ${operator} ${right}`;
  }

  compare(value) {
    if (!(value instanceof LogicNode)) {
      return false;
    }

    return (
      this.getLeft()
      .compare(valuthis.getLeft()) &&
      this.getRight()
      .compare(valuthis.getRight()) &&
      this.getHasNegative() == valuthis.getHasNegative()
    );
  }

  getOperator() {
    return this.operators[this.operator];
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.left;
  }

  getHasNegative() {
    return this.hasNegative;
  }

  rearrangeNodeObj() {
    if (this.left instanceof Object) {
      return {
        left: this.left.left,
        operator: this.left.operator,
        right: {
          left: this.left.right,
          operator: this.operator,
          right: this.right
        }
      }
    } else if (this.right instanceof Object) {
      return {
        left: {
          left: this.left,
          operator: this.operator,
          right: this.right.left
        },
        operator: this.right.operator,
        right: this.right.right
      }
    }
  }

  evaluate() {
    if (this.left instanceof Node) {
      this.left = this.left.evaluate();
    }
    if (this.right instanceof Node) {
      this.right = this.right.evaluate();
    }
    let left = this.left;
    let right = this.right;
    /*************/
    switch (this.getOperator()) {
      case '^':
        if (this.hasNegative) {
          return -(left ** right);
        }
        return left ** right;
        break;
      case '/':
        if (this.hasNegative) {
          return -(left / right);
        }
        return left / right;
        break;
      case '*':
        if (this.hasNegative) {
          return -(left * right);
        }
        return left * right;
        break;
      case '-':
        if (this.hasNegative) {
          return -(left - right);
        }
        return left - right;
        break;
      case '+':
        if (this.hasNegative) {
          return -(left + right);
        }
        return left + right;
        break;
      default:
        throw new errors.operatorMismatch("Operators are invalid");
    }
  }
}