/* global alert */
import phoneUtil from "google-libphonenumber";

const phoneUtils = phoneUtil.PhoneNumberUtil.getInstance();

export default (mobilenumber, email, fullname, countryCode) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!mobilenumber) {
    alert("Mobile number is required");
    return false;
  }
  if (!email) {
    alert("Email is required");
    return false;
  }
  if (!fullname) {
    alert("Your name is required");
    return false;
  }
  if (countryCode) {
    let phoneNumber;
    try {
      phoneNumber = phoneUtils.parse(mobilenumber, countryCode);
    } catch (e) {
      console.log(e);
      alert("Enter a valid mobile number");
      return false;
    }
    if (!phoneUtils.isValidNumber(phoneNumber)) {
      alert("Enter a valid mobile number");
      return false;
    }
  }
  if (!emailRegex.test(email)) {
    alert("Enter A Valid Email");
    return false;
  }
  if (fullname.length < 3) {
    alert("Enter a valid full name");
    return false;
  }
  return true;
};
