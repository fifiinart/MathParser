class UnbalancedParentheses extends Error {
  constructor(message, fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "UnbalancedParentheses";
  }
}
class OperatorMismatch extends Error {
  constructor(message, fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "OperatorMismatch";
  }
}
class MissingValue extends Error {
  constructor(message, fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "MissingValue";
  }
}
module.exports = {UnbalancedParentheses, OperatorMismatch, MissingValue}
