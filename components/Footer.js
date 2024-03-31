import React from "react";
import Link from "next/link";
import { logEvent } from "../utils/analytics";

export default class Footer extends React.Component {
  componentDidMount() {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    (function () {
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/58982bf385dc370a6b99b7fe/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.body.appendChild(s1);
    })();
  }
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="content">
            <div className="footer__contact">
              <h3>Contact Us</h3>
              <ul>
                <li>+91 9958156558</li>
                <li>homework@tutorbro.com</li>
              </ul>
            </div>

            <div className="links">
              <Link href="/payment">
                <a>Payments</a>
              </Link>
              <Link href="/careers">
                <a>Careers</a>
              </Link>
              <Link href="/careers">
                <a>Become A Tutor</a>
              </Link>
              <Link href="/privacy">
                <a>Privacy Policy</a>
              </Link>
              <Link href="/refund">
                <a>Refund Policy</a>
              </Link>
              <Link href="/terms">
                <a>Terms of Use</a>
              </Link>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="copyrights">
          © {new Date().getFullYear()} TutorBro Ltd. All Rights Reserved.
        </div>

        <style jsx>
          {`
            .footer {
              background: #2f2f2f;
              color: #fff;
            }
            .footer__container {
              max-width: 1280px;
              height: 140px;
              margin: 0 auto;
            }
            li {
              list-style: none;
            }
            .content {
              display: flex;
              justify-content: space-around;
            }
            h3 {
              margin-left: 40px;
            }
            .links {
              margin-top: 40px;
            }
            button {
              background: deepskyblue;
              border: 2px solid greenyellow;
              padding: 5px 10px;
              color: white;
              cursor: pointer;
              transition: all 0.3s ease-in-out;
            }
            .copyrights {
              background: #090909;
              font-size: 14px;
              width: 100%;
              text-align: center;
              padding: 5px 5px;
            }
            .credits {
              text-align: right;
              font-size: 10px;
              height: 50px;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #1f1f1f;
            }
            strong a {
              font-size: 12px;
              color: #f44336;
            }
            a {
              margin: 0 10px;
              color: #fff;
              font-size: 14px;
            }
            a:hover {
              text-decoration: underline;
            }
            @media (max-width: 800px) {
              .footer__container {
                height: 312px;
              }
              .links {
                display: content;
                margin-top: 0px;
                padding: 0 7px;
              }
              .content {
                flex-direction: column;
                align-items: center;
              }
              .copyrights {
                order: 2;
                margin-top: 20px;
                text-align: center;
                padding: 20px 20px;
                height: 120px;
              }
            }
            @media (max-width: 380px) {
              .credits {
                font-size: 9px;
              }
              .links {
                display: content;
              }
              strong a {
                font-size: 12px;
              }
            }
          `}
        </style>
      </footer>
    );
  }
}
