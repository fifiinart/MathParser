let errors = require('./errors.js')
module.exports = class Float {
  constructor(floatObj = null, value = null, hasNegative = false) {
    // Check if value is null and floatObj is null
    if (value == null && floatObj == null) {
      throw new logicErrors.MissingValue("Required variable for Float. Must use either value or floatObj.");
    }
    // Check if value is not null
    else if (value) {
      this.value = value;
      this.hasNegative = hasNegative;
    }
    // Check if floatObj is not null
    else if (floatObj) {

      // Try to load value
      if (!("value" in floatObj)) {
        throw new logicErrors.MissingValue("Required key for Float. Must have \"value\" key in floatObj.");
      } else {
        this.value = floatObj["value"];
      }

      // Try to load hasNegative
      if (!("hasNegative" in floatObj)) {
        this.hasNegative = hasNegative;
      } else {
        this.hasNegative = floatObj["hasNegative"];
      }
    }
  }
  // toString serialization
  toString() {
    return this.value + "";
  }
  // custom compare func
  compare(value) {
    if (!(value instanceof Float)) {
      return false;
    } else {
      return (
        this.getValue() == value.getValue() &&
        this.getHasNegative() == value.getHasNegative()
      )
    }
  }
  // ___Getters___
  getValue() {
    return this.value;
  }

  getHasNegative() {
    return this.hasNegative;
  }
}
