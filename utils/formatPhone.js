// Require `PhoneNumberFormat`.
import formate from "google-libphonenumber";

var PNF = formate.PhoneNumberFormat;

// Get an instance of `PhoneNumberUtil`.
import phoneUtil from "google-libphonenumber";

const phoneUtils = phoneUtil.PhoneNumberUtil.getInstance();

export default (mobilenumber, countryCode) => {
  // Parse number with country code.
  var phoneNumber = phoneUtils.parse(mobilenumber, countryCode);

  // return number in the international format.
  return phoneUtils.format(phoneNumber, PNF.INTERNATIONAL);
  // => +1 202-456-1414
};
