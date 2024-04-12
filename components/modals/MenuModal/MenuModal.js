import React from "react";

const MenuModal = (props) => {
  return (
    <div className="menu-modal">
      <div className="menu">
        <ul>
          <li className="nav__listItem">
            <a href="/#home" onClick={() => props.setVisibileMenuIcon(true)}>
              Home
            </a>
          </li>
          <li className="nav__listItem">
            <a
              href="/#subjects"
              onClick={() => props.setVisibileMenuIcon(true)}
            >
              subjects
            </a>
          </li>
          <li className="nav__listItem">
            <a
              href="/#services"
              onClick={() => props.setVisibileMenuIcon(true)}
            >
              Services
            </a>
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
            margin-top: 80px;
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
            margin: 0;
          }
          .menu li {
            padding: 5px;
          }

          .menu a:hover {
            color: #1976d2;
          }
          a {
            text-decoration: none;
            color: #888;
          }

          .menu li:last-child {
            border-bottom: none;
          }
        `}
      </style>
    </div>
  );
};

export default MenuModal;
