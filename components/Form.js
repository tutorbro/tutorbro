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
      .get('https://ip-info.now.sh/')
      .then(({ data }) => {
        this.setState({ countryCode: data.country_code })
      })
      .catch(err => console.log(err))
  }
  fileUploaded (files) {
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
      })
      .catch(e => {
        this.setState({ submitting: false })
        msg.show(`Error while submitting form, ${e.message && e.message}`, {
          type: 'error'
        })
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
                    <img
                      className='tick__icon'
                      src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'
                      />
                    {file.filename}
                  </span>
                    uploaded successfully
                    <img
                      onClick={this.deleteUploadedFile.bind(this, file)}
                      className='trash__icon'
                      src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDc3NC4yNjYgNzc0LjI2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzc0LjI2NiA3NzQuMjY2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTY0MC4zNSw5MS4xNjlINTM2Ljk3MVYyMy45OTFDNTM2Ljk3MSwxMC40NjksNTI2LjA2NCwwLDUxMi41NDMsMGMtMS4zMTIsMC0yLjE4NywwLjQzOC0yLjYxNCwwLjg3NSAgICBDNTA5LjQ5MSwwLjQzOCw1MDguNjE2LDAsNTA4LjE3OSwwSDI2NS4yMTJoLTEuNzRoLTEuNzVjLTEzLjUyMSwwLTIzLjk5LDEwLjQ2OS0yMy45OSwyMy45OTF2NjcuMTc5SDEzMy45MTYgICAgYy0yOS42NjcsMC01Mi43ODMsMjMuMTE2LTUyLjc4Myw1Mi43ODN2MzguMzg3djQ3Ljk4MWg0NS44MDN2NDkxLjZjMCwyOS42NjgsMjIuNjc5LDUyLjM0Niw1Mi4zNDYsNTIuMzQ2aDQxNS43MDMgICAgYzI5LjY2NywwLDUyLjc4Mi0yMi42NzgsNTIuNzgyLTUyLjM0NnYtNDkxLjZoNDUuMzY2di00Ny45ODF2LTM4LjM4N0M2OTMuMTMzLDExNC4yODYsNjcwLjAwOCw5MS4xNjksNjQwLjM1LDkxLjE2OXogICAgIE0yODUuNzEzLDQ3Ljk4MWgyMDIuODR2NDMuMTg4aC0yMDIuODRWNDcuOTgxeiBNNTk5LjM0OSw3MjEuOTIyYzAsMy4wNjEtMS4zMTIsNC4zNjMtNC4zNjQsNC4zNjNIMTc5LjI4MiAgICBjLTMuMDUyLDAtNC4zNjQtMS4zMDMtNC4zNjQtNC4zNjNWMjMwLjMyaDQyNC40MzFWNzIxLjkyMnogTTY0NC43MTUsMTgyLjMzOUgxMjkuNTUxdi0zOC4zODdjMC0zLjA1MywxLjMxMi00LjgwMiw0LjM2NC00LjgwMiAgICBINjQwLjM1YzMuMDUzLDAsNC4zNjUsMS43NDksNC4zNjUsNC44MDJWMTgyLjMzOXoiIGZpbGw9IiNEODAwMjciLz4KCQk8cmVjdCB4PSI0NzUuMDMxIiB5PSIyODYuNTkzIiB3aWR0aD0iNDguNDE4IiBoZWlnaHQ9IjM5Ni45NDIiIGZpbGw9IiNEODAwMjciLz4KCQk8cmVjdCB4PSIzNjMuMzYxIiB5PSIyODYuNTkzIiB3aWR0aD0iNDguNDE4IiBoZWlnaHQ9IjM5Ni45NDIiIGZpbGw9IiNEODAwMjciLz4KCQk8cmVjdCB4PSIyNTEuNjkiIHk9IjI4Ni41OTMiIHdpZHRoPSI0OC40MTgiIGhlaWdodD0iMzk2Ljk0MiIgZmlsbD0iI0Q4MDAyNyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='
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
              <img
                src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMzNC41IDMzNC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzQuNSAzMzQuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8cGF0aCBkPSJNMzMyLjc5NywxMy42OTljLTEuNDg5LTEuMzA2LTMuNjA4LTEuNjA5LTUuNDA0LTAuNzc2TDIuODkzLDE2My42OTVjLTEuNzQ3LDAuODEyLTIuODcyLDIuNTU1LTIuODkzLDQuNDgxICBzMS4wNjcsMy42OTMsMi43OTcsNC41NDJsOTEuODMzLDQ1LjA2OGMxLjY4NCwwLjgyNywzLjY5MiwwLjY0LDUuMTk2LTAuNDg0bDg5LjI4Ny02Ni43MzRsLTcwLjA5NCw3Mi4xICBjLTEsMS4wMjktMS41MSwyLjQzOC0xLjQsMy44NjhsNi45NzksOTAuODg5YzAuMTU1LDIuMDE0LDEuNTA1LDMuNzM2LDMuNDI0LDQuMzY3YzAuNTEzLDAuMTY4LDEuMDQsMC4yNSwxLjU2MSwwLjI1ICBjMS40MjksMCwyLjgxOS0wLjYxMywzLjc4Ni0xLjczM2w0OC43NDItNTYuNDgybDYwLjI1NSwyOC43OWMxLjMwOCwwLjYyNSwyLjgyMiwwLjY1MSw0LjE1MSwwLjA3MyAgYzEuMzI5LTAuNTc5LDIuMzQxLTEuNzA1LDIuNzc1LTMuMDg3TDMzNC4yNywxOC45NTZDMzM0Ljg2NCwxNy4wNjYsMzM0LjI4NSwxNS4wMDUsMzMyLjc5NywxMy42OTl6IiBmaWxsPSIjRkZGRkZGIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='
              />
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
            }
            .form__title {
              text-align: center;
              font-weight: bold;
              padding: 5px;
            }
            .form__subTitle {
              text-align: center;
              padding: 5px;
              font-size: 13px;
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
              color: #eee;
            }
            ::-moz-placeholder { /* Firefox 19+ */
              color: #eee;
            }
            :-ms-input-placeholder { /* IE 10+ */
              color: #eee;
            }
            :-moz-placeholder { /* Firefox 18- */
              color: #eee;
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
              margin: 5px auto;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .filename {
              color: teal;
              margin-right: 10px;
              display: flex;
              align-items: center;
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
              padding: 6px 20px;
              border-radius: 17px;
              color: #fff;
              line-height: 24px;
              font-weight: 600;
              font-size: 14px;
              transition: all 0.2s ease;
            }
            .btn img {
              margin: 0 5px;
            }
            .btn:hover {
              background: teal;
            }
            .trash__icon {
              float: right;
              margin-left: 18px;
              color: red;
              cursor: pointer;
            }
            .tick__icon {
              width: 16px;
              height: 16px;
              margin-right: 10px;
            }
          `}
        </style>
      </form>
    )
  }
}
