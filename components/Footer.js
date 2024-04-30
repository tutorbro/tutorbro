import React from "react";
import Logo from "./Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default class Footer extends React.Component {
  componentDidMount() {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    (function () {
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/58982bf385dc370a6b99b7fe/default";
      s1.charSet = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.body.appendChild(s1);
    })();
  }
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="content">
            <div className="links">
              <ul className="logo-footer">
                <li>
                  <a href="/">
                    <Logo />
                  </a>
                </li>
              </ul>
            </div>
            <div className="links">
              <ul className="social">
                <li>
                  <a href="/facebook">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="/instagram">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="/instagram">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content">
            <div className="links">
              <div>
                <h3>Contact Us</h3>
                <ul>
                  <li>
                    <a href={`tel:+91-9958156558`}>
                      <span>+91-9958156558</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${"homework@tutorbro.com"}`}>
                      <span>homework@tutorbro.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="/careers/">
                    <span>Careers</span>
                  </a>
                </li>
                <li>
                  <a href="/careers/">
                    <span>Become A Tutor</span>
                  </a>
                </li>
                <li>
                  <a href="/privacy">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="/refund">
                    <span>Refund Policy</span>
                  </a>
                </li>
                <li>
                  <a href="/terms">
                    <span>Terms of Use</span>
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <span>About Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyrights">
          © {new Date().getFullYear()} TutorBro Ltd. All Rights Reserved.
        </div>
        <style jsx>
          {`
            .link {
              text-decoration: none;
            }
            .footer {
              background: #2f2f2f;
              color: #fff;
            }
            .footer__container {
              max-width: 1280px;
              margin: 0 auto;
            }
            li {
              list-style: none;
            }
            .content {
              display: flex;
              justify-content: space-around;
              border-top: 1px solid #3e4143;
            }
            h3 {
              margin-left: 40px;
              margin-bottom: 0px;
            }
            .links {
              margin: 10px;
              justify-content: center;
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
            .social {
              display: flex;
            }
            .social li {
              margin: 0px 5px;
              color: white;
              font-size: 30px;
            }
            .links a {
              color: white;
              text-decoration: none;
              font-size: 14px;
            }
            .links a:hover {
              cursor: pointer;
              color: #2ca5ce;
            }
            @media (min-width: 1000px) {
              .logo-footer {
                padding-left: 0px;
              }
            }
            @media (max-width: 800px) {
              .links {
                display: content;
                padding: 0 7px;
                width: 100%;
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
