/*
global msg
 */
import React from 'react'
import FilePicker from 'react-filepicker'
import axios from 'axios'
import ReactSpinner from 'react-spinjs'

// TODO: replace fa icons with svg icons
import validate from '../utils/validate'
import submitForm from '../utils/submitForm'
import { logEvent, logException } from '../utils/analytics'

export default class SupportForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mobilenumber: '',
      email: '',
      fullname: '',
      subject: '',
      message: '',
      countryCode: '',
      submitting: false,
      files: []
    }
  }
  componentDidMount () {
    axios
      .get('/api/ip')
      .then(({ data }) => {
        this.setState({ countryCode: data.country_code })
      })
      .catch(err => console.log(err))
  }
  fileUploaded (files) {
    logEvent('Files', 'File/s uploaded')
    if (files instanceof Array) {
      files = files.map(({ filename, url }) => {
        return { filename, url }
      })
    } else {
      files = [ { filename: files.filename, url: files.url } ]
    }
    files = [ ...files, ...this.state.files ]
    this.setState({ files })
  }
  deleteUploadedFile (f) {
    const files = this.state.files.filter(file => file.url !== f.url)
    this.setState({ files })
  }
  handelSubmit (e) {
    e.preventDefault()
    logEvent('CTA', 'Query Submit btn is clicked')
    const {
      mobilenumber,
      email,
      fullname,
      countryCode,
      subject,
      message,
      files
    } = this.state
    if (!validate(mobilenumber, email, fullname, countryCode)) return
    this.setState({ submitting: true })
    const phoneNumber = mobilenumber
    submitForm(
      phoneNumber,
      email,
      fullname,
      subject,
      message,
      files,
      countryCode
    )
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`status ${response.status} recieved from server`)
        }
        this.setState({
          mobilenumber: '',
          email: '',
          fullname: '',
          subject: '',
          message: '',
          countryCode: '',
          submitting: false,
          files: []
        })
        msg.show('Submitted successfully', { type: 'success' })
        logEvent('QueryForm', 'QueryForm successfully Submitted')
      })
      .catch(e => {
        this.setState({ submitting: false })
        msg.show(`Error while submitting form, ${e.message && e.message}`, {
          type: 'error'
        })
        logException(`QueryForm Submission failed`, true)
      })
  }
  render () {
    const filePickerOpts = {
      buttonText: 'Attach Files',
      multiple: true,
      mimetype: 'image/*, application/*'
    }
    return (
      <form
        id='form'
        className='form'
        autoComplete='off'
        onSubmit={this.handelSubmit.bind(this)}
      >
        <div className='form__title'>
          Got A Query ?
        </div>
        <div className='form__subTitle'>
          Fill this form you will hear from our tutor in 5 mins or less with a quote
        </div>
        <fieldset>
          <div className='form__field'>
            <label htmlFor='mobilenumber'>Mobile Number<sup>*</sup></label>
            <span>
              <input
                ref={node => {
                  global.firstInput = node
                }}
                className='js-mobilenumber'
                type='tel'
                name='mobilenumber'
                id='mobilenumber'
                placeholder='+91-9999988888'
                autoComplete='off'
                onChange={e => this.setState({ mobilenumber: e.target.value })}
                value={this.state.mobilenumber}
              />
            </span>
          </div>
          <div className='form__field'>
            <label htmlFor='email'>Email<sup>*</sup></label>
            <span>
              <input
                className='js-email'
                type='email'
                name='email'
                id='email'
                placeholder='name@example.com'
                autoComplete='off'
                onChange={e => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
            </span>
          </div>
          <div className='form__field'>
            <label htmlFor='fullname'>Full Name<sup>*</sup></label>
            <span>
              <input
                className='js-fullname'
                type='text'
                name='fullname'
                id='fullname'
                placeholder='your name'
                autoComplete='off'
                onChange={e => this.setState({ fullname: e.target.value })}
                value={this.state.fullname}
              />
            </span>
          </div>
          <div className='form__field'>
            <label htmlFor='subject'>Subject</label>
            <span>
              <input
                className='js-subject'
                type='text'
                name='subject'
                id='subject'
                placeholder='Regarding ...'
                autoComplete='off'
                onChange={e => this.setState({ subject: e.target.value })}
                value={this.state.subject}
              />
            </span>
          </div>
          <div className='form__field'>
            <label htmlFor='message'>Message</label>
            <span>
              <textarea
                id='message'
                className='js-message'
                name='message'
                placeholder='your message'
                onChange={e => this.setState({ message: e.target.value })}
                value={this.state.message}
              />
            </span>
          </div>
        </fieldset>
        <footer>
          <div className='attachment__info'>
            {this.state.files.map(file => {
              return (
                <div key={file.filename} className='uploaded__file'>
                  <span className='filename'>
                    <i className='fa fa-check-circle' />
                    {file.filename}
                  </span>
                    uploaded successfully
                    <i
                      onClick={this.deleteUploadedFile.bind(this, file)}
                      className='fa fa-trash'
                    />
                </div>
              )
            })}
          </div>
          <div className='btns'>
            <FilePicker
              apikey='ApX0B6asXSMiQ7QgsGEmNz'
              options={filePickerOpts}
              onSuccess={this.fileUploaded.bind(this)}
            />
            <button className='btn' type='submit'>
              <i className='fa fa-send-o' />
              Submit
            </button>
          </div>
        </footer>
        {
          this.state.submitting &&
            (
              <div
                className={`overlay ${this.state.submitting && 'submitting'}`}
              />
            )
        }
        {this.state.submitting && <ReactSpinner className='spinner' />}
        <style jsx>
          {`
            .overlay {
              background: #f9f9f9;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              opacity: 0.5;
              z-index: 999999999;
              display: none;
            }
            .submitting {
              display: block;
            }
            .form {
              position: relative;
              margin: 0 auto;
              max-width: 540px;
            }
            .form__title {
              color: #607d8b;
              font-size: 20px;
              text-align: center;
              font-weight: bold;
            }
            .form__subTitle {
              text-align: center;
              padding: 5px;
              font-size: 16px;
            }
            fieldset {
              margin: 0;
              border: none;
              position: relative;
            }
            .form__field {
              cursor: pointer;
              width: 100%;
              overflow: auto;
              position: relative;
              padding: 6px 24px;
              color: #444;
              border: 1px solid rgba(0, 0, 0, 0.15)
            }
            .form__field:nth-child(2n) {
              border-top: none;
              border-bottom: none;
            }
            label {
              cursor: pointer;
              display: block;
              line-height: 24px;
              color: #888;
              font-size: 14px;
            }
            input {
              height: 24px;
              display: block;
              border: none;
              width: 100%;
              border-radius: 0;
              font-size: 16px;
              outline: none;
              background: transparent;
            }
            textarea {
              display: block;
              width: 100%;
              border: none;
              outline: none;
              height: 50px;
              font-size: 16px;
              background: transparent;
            }
            ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
              color: #e0e0e0;
            }
            ::-moz-placeholder { /* Firefox 19+ */
              color: #e0e0e0;
            }
            :-ms-input-placeholder { /* IE 10+ */
              color: #e0e0e0;
            }
            :-moz-placeholder { /* Firefox 18- */
              color: #e0e0e0;
            }
            footer {
              padding: 5px;
            }
            .uploaded__file {
              font-size: 12px;
              color: #888;
              border: 1px solid teal;
              border-radius: 17px;
              padding: 10px;
              text-align: center;
              max-width: 300px;
              margin: 5px auto;
            }
            .filename {
              color: teal;
              margin-right: 10px;
            }
            .btns {
              display: flex;
              justify-content: space-around;
              padding: 10px 5px;
            }
            .btn {
              -webkit-appearance: none;
              cursor: pointer;
              background: #2bc186;
              border: none;
              outline: none;
              padding: 6px 24px;
              border-radius: 17px;
              color: #fff;
              line-height: 24px;
              font-weight: 600;
              font-size: 14px;
              transition: all 0.2s ease;
            }
            .btn:hover {
              background: teal;
            }
            .fa {
              margin-right: 10px;
              font-size: 16px;
            }
            .fa-trash {
              float: right;
              font-size: 18px;
              color: red;
            }
            @media(max-width: 1200px) {
              .form {
                max-width: 600px;
                margin: 0 auto;
              }
            }
          `}
        </style>
      </form>
    )
  }
}
