import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { initGA, logPageView, logEvent } from '../utils/analytics'

export default class chat extends React.Component {
  componentDidMount () {
    initGA()
    logPageView()
  }
  render () {
    return (
      <div>
        <Header title='TutorBro | Chat' pathname={this.props.url.pathname} />
        <main>
          <div className='whatsapp'>
            <div className='title'>Want to chat on whatsapp??</div>
            <p>
              Click on below button to open our mobile number directly in whatsapp or to add it to contacts and then chat.
            </p>
            <a
              onClick={() => logEvent('chat', 'mobilenumber link is clicked')}
              href='tel:+919958156558'
              className='btn'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 418.1 418.1'>
                <g fill='#7AD06D'>
                  <path
                    d='M199 .2C88.4 5.5 1.3 97.5 1.6 208c0 33.7 8.2 65.5 22.6 93.6l-22 106.8c-1.2 5.8 4 11 9.7 9.5l104-25c27 13 57 21 89 21 113 2 207-88 210-201C420 93 320-6 199 0zm125 322c-30.8 30.7-71.6 47.6-115 47.6-25.3 0-49.6-5.7-72.2-17l-14.6-7.2L58 360.8l13.5-65.6-7.2-14c-11.7-23-17.6-47.8-17.6-73.8 0-43.4 17-84.2 47.5-114.8 30.4-30.4 72-47.6 115-47.6 43.2 0 84 17 114.7 47.6 30 30.6 47 71.4 47 114.8 0 43-17 84.4-48 114.8z'
                  />
                  <path
                    d='M309.7 252.4l-40.2-11.6c-5.2-1.5-11 0-14.8 4l-9.8 10c-5 4-11 5.5-16 3.3-19-7-59-43-70-61-3-5-3-11 1-16l8-11c3-4 4-10 2-15l-16-38c-4-9-16-11-24-5-11 10-24.6 24-26 40-3 28 9 64 55 106 53 49 95 55 122.2 49 15-4 28-19 36-32 5-8 1-19-9-22z'
                  />
                </g>
              </svg>
              <span>+91-9958156558</span>
            </a>
          </div>
          <hr />
          <div className='tawk'>
            <div className='title'>Or</div>
            <p>
              Click on below button to open in-browser chat window.
            </p>
            <a
              onClick={() => logEvent('chat', 'tawk link is clicked')}
              target='_blank'
              href='https://tawk.to/tutorbro'
              className='link btn'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 473 473'>
                <g fill='#ffffff'>
                  <path
                    d='M403.6 69.3C359 24.6 299.6 0 236.4 0S114 24.6 69.2 69.3c-86.4 86.4-92.4 224.7-15 318-7.5 15.3-19.7 33-37.8 42-8.7 4.3-13.6 13.6-12 23.2s8.8 17 18.4 18.6c4.5 1 11 2 18.7 2 21 0 51.7-5 83.2-27.5 35 19 73.5 28 111.6 28 61.2 0 121.8-23.6 167.4-69.2 44.7-44.6 69.3-104 69.3-167s-24.7-123-69.4-167.7zm-19 315.3c-67.6 67.5-172 81-254.3 32.6-5.4-3.2-12-2.2-16.4 2-1 .3-1 .6-1.8 1-27 21-53.7 25.3-71.3 25.3 20.2-14.8 33-36.8 40.5-54 1-2.8 1.3-5.8.6-8.6-.2-3-1.3-6-3.2-8C6 292 10 166 88 88c81.6-81.7 214.5-81.7 296 0 81.8 82 81.8 214.6 0 296.3z'
                  />
                  <circle cx='236.4' cy='236.5' r='16.6' />
                  <circle cx='322' cy='236.5' r='16.6' />
                  <circle cx='150.8' cy='236.5' r='16.6' />
                </g>
              </svg>
              Chat with us
            </a>
          </div>
        </main>
        <Footer />
        <style jsx>
          {`
              main {
                padding: 50px 20px;
                max-width: 600px;
              }
              .tawk, .whatsapp {
                text-align: center;
              }
              .title {
                font-weight: bold;
                text-align:center;
                font-size: 16px;
              }
              p {
                text-align: center;
                font-size: 14px;
              }
              hr {
                margin: 30px;
              }
              svg {
                width: 16px;
                margin: -3px 10px;
              }
              .btn {
                text-decoration: none;
                background-color: #2ca5ce;
                border-radius: 10px;
                color: #fff;
                padding: 10px;
                line-height: 13px;
                font-size: 13px;
                transition: all 0.2s ease;
              }
          `}
        </style>
      </div>
    )
  }
}
// onClick={e => {
//   window.Tawk_API.toggle()
// }}
