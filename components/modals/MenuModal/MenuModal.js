import React from "react";
import LinkScroll from "../../LinkScroll";

const MenuModal = () => {
  return (
    <div className="menu-modal">
      <div className="menu">
        <ul>
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
        </ul>
      </div>
      <style jsx>
        {`
          .menu-modal {
            position: relative;
          }
          .menu {
            width: 125px;
            margin-top: 120px;
            position: absolute;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .menu ul {
            list-style-type: none;
            padding: 0;
          }

          .menu li {
            padding: 10px 0;
            border-bottom: 1px solid #ccc;
          }

          .menu li:last-child {
            border-bottom: none;
          }

          .menu button {
            margin-top: 10px;
            padding: 5px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .menu button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default MenuModal;
