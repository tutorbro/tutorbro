import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { logPageView } from '../utils/analytics'

export default class chat extends React.Component {
  componentDidMount () {
    logPageView()
  }
  render () {
    return (
      <div>
        <Header title='TutorBro | Careers' />
        <main>
          <div className='carrers__container'>
            <section className='carrers'>
              <h1>Job Description</h1>
              <div className='profile'>
                <h4>Profile:</h4>
                <p>
                  <strong>Subject Matter Expert </strong>
                  – Mechanical / Electrical / Civil / Matlab / Mathematics / Chemistry / Physics / Accounts / Economics / Finance
                </p>
              </div>
              <div className='roles'>
                <h4>Roles & Responsibility:</h4>
                <ul>
                  <li>
                    Answering quarries & providing solutions on liveQuestion and Answer Portal.
                  </li>
                  <li>Quality Review of solutions from pear tutors/SME. </li>
                  <li>Making step by step solution of US Textbooks. </li>
                  <li>Checking solutions/answers for Plagiarism. </li>
                  <li>Live/online tutoring if required.</li>
                </ul>
              </div>
              <div className='candidate'>
                <h4>Desired Candidate:</h4>
                <ul>
                  <li>
                    Having bachelors or masters in Mechanical / Electrical / Civil / Matlab / Mathematics / Chemistry / Physics / Accounts / Economics / Finance with grade more than 60%.
                    {' '}
                  </li>
                  <li>Having good rank in GATE/IES or NET-JRF/IIT- JAM</li>
                  {' '}(Preferred rank under AIR 3000).
                  <li>
                    Willing to learn new concepts & skills over a period of time.
                  </li>
                  <li>Having Sound and diversified subject knowledge. </li>
                  <li>Proficient with Computer & use of Internet. </li>
                  <li>Willing to work in rotational shifts.</li>
                </ul>
              </div>
              <div className='industry'>
                <h4>Industry: <span>E-Learning</span></h4>
              </div>
              <div>
                <h4>
                  Employment type: <span>Part time (4 to 6 hrs/day)</span>
                </h4>
              </div>
              <div>
                <h4>Experience: <span>Fresher </span></h4>
              </div>
              <div>
                <h4>Location: <span>Delhi</span></h4>
              </div>
              <div className='cta'>
                <a
                  className='btn'
                  href='                      https://docs.google.com/a/tutorbro.com/forms/d/e/1FAIpQLSdxFNjOUrrZejqP5u_KSzvTSto5uWw-HACF3Y-hLqwnKvFZgg/viewform'
                >
                  Apply Here
                </a>
              </div>
            </section>
          </div>
          <Footer />
        </main>
        <style jsx>
          {`
        main {
          padding-top: 10px;
        }
        .carrers__container {
          max-width: 600px;
          margin: 0 auto;
        }
        .carrers {
          padding: 20px;
          padding-bottom: 50px;
        }
        h1 {
          text-align: center;
          font-size: 3.1875rem;
          margin: 0;
        }
        ul {
          list-style-type: circle;
          padding: 10px;
          padding-left: 25px;
          margin: 0;
        }
        h4 {
          color: #4183C4;
          margin-bottom: 0;
          font-size: 1.3125rem;
        }
        h4 span {
          font-size: 1.125rem;
          color: #888;
          letter-spacing: 2px;
          line-height: 1.8;
        }
        p {
          margin: 0;
          margin-top: 10px;
        }
        .cta {
          display: flex;
          justify-content: center;
          padding: 20px;
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
          margin: 10px 0;
          text-align: center;
          text-decoration: none;
        }
        .btn:hover {
          background: teal;
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 32px;
          }
        }
      `}
        </style>
      </div>
    )
  }
}
