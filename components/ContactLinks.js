import Link from "next/link";
import { logEvent } from "../utils/analytics";

export default (props) => (
  <div className="contact">
    <ul className="contact__list">
      <li className="contact__listItem hide--s">
        <a
          onClick={() => logEvent("contact", "Email link is clicked")}
          className="link"
          href="mailto:support@tutorbro.com"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 518.1 418.1">
            <rect width="100%" height="100%" fill="none" />
            <path
              fill="#F44336"
              d="M511.7 126.6c0-14.4-11.8-26.2-26.3-26.2l-459.2.7c-7 0-13.6 3-18.5 8-5 5-7.7 12-7.7 19l.4 258c0 7 2.6 13 7.6 18s11.6 7.8 18.6 7.8l459.2-.7c14.5 0 26.2-12 26.2-27l-.3-258zm-55 0L256 266.3l-201-139 401.6-.5zM341 292.6l118.7 92-408 .7 119.8-92.8c5.7-4.5 6.7-12.7 2.3-18.4-4.6-5-12.8-6-18.5-2l-129 100-.3-232 223 153c2.2 1.5 4.8 2.3 7.4 2.3 2.8 0 5.4-.8 7.6-2.3l222-155 .3 233-129-100c-5.6-4.5-14-3.4-18.3 2.3-4.4 5.7-3.4 14 2.4 18.4z"
            />
          </svg>
          <span>homework@tutorbro.com</span>
        </a>
      </li>
      <li className="contact__listItem hide--l">
        {props.pathname === "/chat" ? (
          <Link href="/">
            <a className="link btn">Back</a>
          </Link>
        ) : (
          <a
            onClick={() => logEvent("chat", "tawk link is clicked")}
            target="_blank"
            href="https://tawk.to/tutorbro"
            className="link btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473 473">
              <g fill="#2ca5ce">
                <path d="M403.6 69.3C359 24.6 299.6 0 236.4 0S114 24.6 69.2 69.3c-86.4 86.4-92.4 224.7-15 318-7.5 15.3-19.7 33-37.8 42-8.7 4.3-13.6 13.6-12 23.2s8.8 17 18.4 18.6c4.5 1 11 2 18.7 2 21 0 51.7-5 83.2-27.5 35 19 73.5 28 111.6 28 61.2 0 121.8-23.6 167.4-69.2 44.7-44.6 69.3-104 69.3-167s-24.7-123-69.4-167.7zm-19 315.3c-67.6 67.5-172 81-254.3 32.6-5.4-3.2-12-2.2-16.4 2-1 .3-1 .6-1.8 1-27 21-53.7 25.3-71.3 25.3 20.2-14.8 33-36.8 40.5-54 1-2.8 1.3-5.8.6-8.6-.2-3-1.3-6-3.2-8C6 292 10 166 88 88c81.6-81.7 214.5-81.7 296 0 81.8 82 81.8 214.6 0 296.3z" />
                <circle cx="236.4" cy="236.5" r="16.6" />
                <circle cx="322" cy="236.5" r="16.6" />
                <circle cx="150.8" cy="236.5" r="16.6" />
              </g>
            </svg>
            Click to Chat
          </a>
        )}
      </li>
    </ul>
    <style jsx>
      {`
        svg {
          width: 16px;
          margin: 0 10px;
        }
        .link {
          text-decoration: none;
          display: flex;
          align-items: center;
          color: #2ca5ce;
          font-size: 13px;
          transition: all 0.2s ease;
        }
        .link:hover {
          color: #607d8b;
        }
        .contact__list {
          display: flex;
          justify-content: flex-end;
          list-style-type: none;
          padding: 10px;
          margin: 0;
        }
        .contact__listItem {
          display: flex;
          align-items: center;
        }
        .contact__listItem span {
          margin: 0 8px 0 0;
        }
        .contact__listItem:nth-child(2n) {
          border-left: 2px solid #eee;
        }
        .hide--l {
          display: none;
        }
        .btn {
          font-size: 12px;
          align-items: baseline;
          text-decoration: underline;
        }
        .contact__listItem.hide--l {
          border-left: none;
        }
        @media (max-width: 650px) {
          .hide--s {
            display: none;
          }
          .contact__list {
            justify-content: center;
          }
          svg {
            margin: 0 5px;
          }
          .hide--l {
            display: flex;
          }
        }
      `}
    </style>
  </div>
);
