// Require `PhoneNumberFormat`.
var PNF = require('google-libphonenumber').PhoneNumberFormat

// Get an instance of `PhoneNumberUtil`.
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()

export default (mobilenumber, countryCode) => {
  // Parse number with country code.
  var phoneNumber = phoneUtil.parse(mobilenumber, countryCode)

  // return number in the international format.
  return phoneUtil.format(phoneNumber, PNF.INTERNATIONAL)
  // => +1 202-456-1414
}
