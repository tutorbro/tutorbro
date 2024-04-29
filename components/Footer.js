import React from "react";
import Link from "next/link";
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
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="links social">
              <div className="social-icon">
                <FacebookIcon />
              </div>
              <div className="social-icon">
                <InstagramIcon />
              </div>
              <div className="social-icon">
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="links">
              <h3>Contact Us</h3>
              <ul>
                <li className="contact-li">
                  <a href={`tel:+91-9958156558`}>
                    <span>+91-9958156558</span>
                  </a>
                </li>
                <li className="contact-li">
                  <a href={`mailto:${"homework@tutorbro.com"}`}>
                    <span>homework@tutorbro.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="links">
              <ul>
                <li>
                  <Link href="/careers" style={style.link}>
                    <span className="link">Careers</span>
                  </Link>
                </li>
                <li>
                  <Link href="/careers" style={style.link}>
                    <span className="link">Become A Tutor</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" style={style.link}>
                    <span className="link">Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/refund" style={style.link}>
                    <span className="link">Refund Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" style={style.link}>
                    <span className="link">Terms of Use</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" style={style.link}>
                    <span className="link">About Us</span>
                  </Link>
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
            .link {
              margin: 0 10px;
              color: white;
              font-size: 14px;
            }
            .social {
              display: flex;
            }
            .social-icon {
              margin: 0 10px;
              color: white;
              font-size: 30px;
            }
            .social-icon:hover {
              color: #2ca5ce;
              cursor: pointer;
            }
            .contact-li a {
              color: white;
              text-decoration: none;
            }
            .contact-li a:hover {
              cursor: pointer;
              text-decoration: underline;
            }
            .contact-li {
              padding: 5px;
            }
            @media (max-width: 800px) {
              .links {
                display: content;
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

const style = {
  link: {
    textDecoration: "none",
    color: "white",
  },
};
