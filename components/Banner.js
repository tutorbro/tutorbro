import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import TimelineIcon from "@mui/icons-material/Timeline";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__container">
          <div className="content">
            <div className="links">
              <ul className="logo-banner">
                <li>
                  <a href="/">
                    <img src="../static/images/since2017.png" height={150} />
                    <h1>Since 2017</h1>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content">
            <div className="links">
              <ul className="social">
                <li>
                  <HowToRegIcon />
                </li>
                <li>
                  <a href="/facebook">
                    <span>Verified Tutor</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="links">
              <ul className="social">
                <li>
                  <TimelineIcon />
                </li>
                <li>
                  <span>More that 8+ years in the industry</span>
                </li>
              </ul>
            </div>
            <div className="links">
              <ul className="social">
                <li>
                  <GroupsIcon />
                </li>
                <li>
                  <span>2.1+ million students</span>
                </li>
              </ul>
            </div>
            <div className="links">
              <ul className="social">
                <li>
                  <PriceCheckIcon />
                </li>
                <li>
                  <span>100% money back guarantee</span>
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
              background: linear-gradient(
                -180deg,
                #fff 20%,
                rgba(0, 0, 0, 0) 100%
              );
              background-color: #2ca5ce;
              color: #fff;
              font-size: 14px;
              padding-top: 5px;
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
            }
            .links {
              margin: 10px;
              justify-content: center;
            }
            .social {
              display: flex;
            }
            .social li {
              margin: 0px 5px;
              color: white;
            }
            .links a {
              color: white;
              text-decoration: none;
            }
            .links a:hover {
              cursor: pointer;
              color: #2ca5ce;
            }
            @media (min-width: 1000px) {
              .logo-banner {
                padding-left: 0px;
              }
            }
            @media (max-width: 800px) {
              .links {
                display: flex;
                padding: 0 7px;
                width: 100%;
                justify-content: center;
              }
              .links ul {
                padding-left: 0px;
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
            }
          `}
        </style>
      </div>
    );
  }
}
