import React from 'react'
import Link from 'next/link'

export default class Footer extends React.Component {
  componentDidMount () {
    global.Tawk_API = global.Tawk_API || {}
    global.Tawk_LoadStart = new Date();
    (function () {
      const s1 = document.createElement('script')
      s1.async = true
      s1.src = 'https://embed.tawk.to/58982bf385dc370a6b99b7fe/default'
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      document.body.appendChild(s1)
    })()
  }
  render () {
    return (
      <footer className='footer'>
        <div className='footer__container'>
          <div className='content'>
            <div className='copyrights'>
              © {new Date().getFullYear()} TutorBro Ltd. All Rights Reserved.
            </div>
            <div className='links'>
              <Link href='/careers'>
                <a>Careers</a>
              </Link>
              <Link href='/careers'>
                <a>Become A Tutor</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='credits'>
          Site Designed and Developed by{' '}
          <strong>
            <a
              rel='noopener'
              target='_blank'
              href='https://www.vinaypuppal.com'
            >
              @VinayPuppal
            </a>
          </strong>
        </div>
        <style jsx>
          {`
            .footer {
              background: #f9fbfd;
            }
            .footer__container {
              max-width: 1280px;
              margin: 0 auto;
              padding: 20px;
            }
            .content {
              display: flex;
              justify-content: space-around;
            }
            .copyrights {
              font-size: 14px;
            }
            .credits {
              text-align: right;
              font-size: 10px;
              height: 50px;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #fff;
            }
            strong a{
              font-size: 10px;
              color: #F44336;
            }
            a {
              margin: 0 10px;
              color: #444;
              font-size: 14px;
            }
            a:hover {
              text-decoration: underline;
            }
            @media (max-width: 800px) {
              .footer {
                background: #fff;
              }
              .content {
                flex-direction: column;
                align-items: center;
              }
              .copyrights {
                order: 2;
                margin-top: 20px;
                text-align: center;
              }
              .credits {
                background: #f9fbfb;
              }
            }
          `}
        </style>
      </footer>
    )
  }
}
