const Validator = require("validator");
const isEmpty = require("./is-empty")

module.exports = function validateInputDate(data) {
  let errors = {};

 
    if (!Validator.isURL(data.lastUrl)) {
      errors.lastUrl = "Not a valid url";
    }
  
    if (Validator.isEmpty(data.name)) {
      errors.name = "Name is Empty";
    }
  

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
