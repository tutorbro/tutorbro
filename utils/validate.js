/* global msg */
const phoneUtil = require(
  'google-libphonenumber'
).PhoneNumberUtil.getInstance()

export default (mobilenumber, email, fullname, countryCode) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!mobilenumber) {
    msg.show('Mobile number is required', { type: 'error' })
    return false
  }
  if (!email) {
    msg.show('Email is required', { type: 'error' })
    return false
  }
  if (!fullname) {
    msg.show('Your name is required', { type: 'error' })
    return false
  }
  if (countryCode) {
    let phoneNumber
    try {
      phoneNumber = phoneUtil.parse(mobilenumber, countryCode)
    } catch (e) {
      console.log(e)
      msg.show('Enter a valid mobile number', { type: 'error' })
      return false
    }
    if (!phoneUtil.isValidNumber(phoneNumber)) {
      msg.show('Enter a valid mobile number', { type: 'error' })
      return false
    }
  }
  if (!emailRegex.test(email)) {
    msg.show('Enter A Valid Email', { type: 'error' })
    return false
  }
  if (fullname.length < 3) {
    msg.show('Enter a valid full name', { type: 'error' })
    return false
  }
  return true
}
