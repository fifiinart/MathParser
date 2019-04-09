const errors = require('./errors.js');
class Value {
  constructor(valueObj, value, hasNegative) {
    if (value && hasNegative) {
      this._value = value;
      this._hasNegative = hasNegative;
      if (valueObj) {
        this._valueObj = valueObj;
      } else {
        this._valueObj = {
          value: this._value,
          hasNegative: this._hasNegative
        }
      }
    } else if (valueObj) {
      this._valueObj = valueObj;
      if (this._valueObj.value) {
        this._value = this._valueObj.value;
      } else {
        throw new errors.MissingValue("`value` property in a Value is missing.");
      }
      if (this._valueObj.hasNegative) {
        this._hasNegative = this._valueObj.hasNegative;
      } else {
        throw new errors.MissingValue("`hasNegative` property in a Value is missing.");
      }
    } else {
      throw new errors.MissingValue("No properties specified in a Value.")
    }
  }
  get value() {
    return this._value;
  }
  get hasNegative() {
    return this._hasNegative;
  }
}