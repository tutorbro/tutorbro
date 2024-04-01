import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { initGA, logPageView, logEvent } from "../utils/analytics";

export default class chat extends React.Component {
  componentDidMount() {
    initGA();
    logPageView();
  }
  render() {
    return (
      <div>
        <Header title="TutorBro | Chat" pathname={this.props?.url?.pathname} />
        <main>
          <div className="tawk">
            <div className="title">Have a question?</div>
            <p>Click on below button to open in-browser chat window.</p>
            <a
              onClick={() => logEvent("chat", "tawk link is clicked")}
              target="_blank"
              href="https://tawk.to/tutorbro"
              className="link btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473 473">
                <g fill="#ffffff">
                  <path d="M403.6 69.3C359 24.6 299.6 0 236.4 0S114 24.6 69.2 69.3c-86.4 86.4-92.4 224.7-15 318-7.5 15.3-19.7 33-37.8 42-8.7 4.3-13.6 13.6-12 23.2s8.8 17 18.4 18.6c4.5 1 11 2 18.7 2 21 0 51.7-5 83.2-27.5 35 19 73.5 28 111.6 28 61.2 0 121.8-23.6 167.4-69.2 44.7-44.6 69.3-104 69.3-167s-24.7-123-69.4-167.7zm-19 315.3c-67.6 67.5-172 81-254.3 32.6-5.4-3.2-12-2.2-16.4 2-1 .3-1 .6-1.8 1-27 21-53.7 25.3-71.3 25.3 20.2-14.8 33-36.8 40.5-54 1-2.8 1.3-5.8.6-8.6-.2-3-1.3-6-3.2-8C6 292 10 166 88 88c81.6-81.7 214.5-81.7 296 0 81.8 82 81.8 214.6 0 296.3z" />
                  <circle cx="236.4" cy="236.5" r="16.6" />
                  <circle cx="322" cy="236.5" r="16.6" />
                  <circle cx="150.8" cy="236.5" r="16.6" />
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
              margin: 0 auto;
              min-height: calc(100vh - 252px);
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .tawk,
            .whatsapp {
              text-align: center;
            }
            .title {
              font-weight: bold;
              text-align: center;
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
    );
  }
}
// onClick={e => {
//   window.Tawk_API.toggle()
// }}
