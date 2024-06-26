import axios from 'axios'

export default (
  mobilenumber,
  email,
  fullname,
  subject,
  message,
  files,
  countryCode
) => {
  var data = {
    mobilenumber,
    email,
    fullname,
    subject,
    message,
    attachment1: files[0] && (files[0].url || ''),
    attachment2: files[1] && (files[1].url || ''),
    countryCode
  }
  return axios({
    method: 'post',
    url: 'https://formspree.io/f/xrgjqggl',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}