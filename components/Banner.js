import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__container">
          <div className="content">
            <div className="links">
              <ul className="logo-banner">
                <li className="contact-li">
                  <Link href="/">
                    <Logo />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <ul className="social">
                <li className="social-icon">
                  <Link href="/facebook" style={style.link}>
                    <FacebookIcon />
                  </Link>
                </li>
                <li className="social-icon">
                  <Link href="/instagram" style={style.link}>
                    <InstagramIcon />
                  </Link>
                </li>
                <li className="social-icon">
                  <Link href="/linkedin" style={style.link}>
                    <LinkedInIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .link {
              text-decoration: none;
            }
            .banner {
              background: #2f2f2f;
              color: #fff;
            }
            .banner__container {
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
              margin: 0px 5px;
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
            @media (min-width: 1000px) {
              .logo-banner {
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
            }
            @media (max-width: 380px) {
              .links {
                display: content;
              }
              strong a {
                font-size: 12px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

const style = {
  link: {
    textDecoration: "none",
    color: "white",
  },
};
