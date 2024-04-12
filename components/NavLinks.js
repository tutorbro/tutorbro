import LinkScroll from "./LinkScroll";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

// since styled jsx cant apply scoped styles to classname attached to HOC
const navListStyle = {
  display: "flex",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyleType: "none",
};

const NavLinks = () => {
  const [isVisibileMenuIcon, setVisibileMenuIcon] = useState(true);
  return (
    <div
      style={navListStyle}
      items={["home", "subjects", "services"]}
      offset={50}
    >
      <li className="web nav__listItem">
        <LinkScroll href="/#home">
          <a className="link">Home</a>
        </LinkScroll>
      </li>
      <li className="web nav__listItem">
        <LinkScroll href="/#subjects">
          <a className="link">subjects</a>
        </LinkScroll>
      </li>
      <li className="web nav__listItem">
        <LinkScroll href="/#services">
          <a className="link">Services</a>
        </LinkScroll>
      </li>
      <div id="menu_icon_li">
        <Button onClick={() => setVisibileMenuIcon(!isVisibileMenuIcon)}>
          {isVisibileMenuIcon ? <MenuIcon /> : <CloseIcon />}
        </Button>
        {!isVisibileMenuIcon && (
          <div>
            <li className="nav__listItem">
              <LinkScroll href="/#home">
                <a className="link">Home</a>
              </LinkScroll>
            </li>
            <li className="nav__listItem">
              <LinkScroll href="/#subjects">
                <a className="link">subjects</a>
              </LinkScroll>
            </li>
            <li className="nav__listItem">
              <LinkScroll href="/#services">
                <a className="link">Services</a>
              </LinkScroll>
            </li>
          </div>
        )}
      </div>
      <style jsx>
        {`
          @media screen and (max-width: 600px) {
            .web {
              display: none;
            }
          }

          @media screen and (min-width: 600px) {
            #menu_icon_li {
              display: none;
            }
          }
          .link {
            text-decoration: none;
            text-transform: uppercase;
            color: #999;
            transition: all 0.3s ease-in-out;
            position: relative;
            font-size: 15px;
          }
          .link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -10px;
            width: 0;
            height: 3px;
            background: #23a5cf;
            transition: all 0.3s ease-in-out;
          }
          .link:hover {
            color: #23a5cf;
          }
          .link:hover::after {
            width: 100%;
          }
          .is-current .link {
            color: #23a5cf;
          }
          .is-current .link::after {
            width: 100%;
          }
          .nav__list {
            display: flex;
            align-items: center;
            padding: 0;
            margin: 0;
            list-style-type: none;
          }
          .nav__listItem {
            margin: 0 20px;
          }
          .nav__listItem button {
            background: deepskyblue;
            border: 2px solid greenyellow;
            padding: 5px 10px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
          }
          button:hover {
            background: #23a5cf;
            border: 1px solid grey;
          }
          @media (max-width: 1100px) {
            .nav__listItem {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NavLinks;
