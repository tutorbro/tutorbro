export default () => (
  <div className='contact'>
    <ul className='contact__list'>
      <li className='contact__listItem'>
        <a className='link' href='tel:+919958156558'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 418.1 418.1'>
            <g fill='#7AD06D'>
              <path
                d='M199 .2C88.4 5.5 1.3 97.5 1.6 208c0 33.7 8.2 65.5 22.6 93.6l-22 106.8c-1.2 5.8 4 11 9.7 9.5l104-25c27 13 57 21 89 21 113 2 207-88 210-201C420 93 320-6 199 0zm125 322c-30.8 30.7-71.6 47.6-115 47.6-25.3 0-49.6-5.7-72.2-17l-14.6-7.2L58 360.8l13.5-65.6-7.2-14c-11.7-23-17.6-47.8-17.6-73.8 0-43.4 17-84.2 47.5-114.8 30.4-30.4 72-47.6 115-47.6 43.2 0 84 17 114.7 47.6 30 30.6 47 71.4 47 114.8 0 43-17 84.4-48 114.8z'
              />
              <path
                d='M309.7 252.4l-40.2-11.6c-5.2-1.5-11 0-14.8 4l-9.8 10c-5 4-11 5.5-16 3.3-19-7-59-43-70-61-3-5-3-11 1-16l8-11c3-4 4-10 2-15l-16-38c-4-9-16-11-24-5-11 10-24.6 24-26 40-3 28 9 64 55 106 53 49 95 55 122.2 49 15-4 28-19 36-32 5-8 1-19-9-22z'
              />
            </g>
          </svg>
          <span>+91-9958156558</span>
        </a>
      </li>
      <li className='contact__listItem hide--s'>
        <a className='link' href='mailto:support@tutorbro.com'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 518.1 418.1'>
            <rect width='100%' height='100%' fill='none' />
            <path
              fill='#F44336'
              d='M511.7 126.6c0-14.4-11.8-26.2-26.3-26.2l-459.2.7c-7 0-13.6 3-18.5 8-5 5-7.7 12-7.7 19l.4 258c0 7 2.6 13 7.6 18s11.6 7.8 18.6 7.8l459.2-.7c14.5 0 26.2-12 26.2-27l-.3-258zm-55 0L256 266.3l-201-139 401.6-.5zM341 292.6l118.7 92-408 .7 119.8-92.8c5.7-4.5 6.7-12.7 2.3-18.4-4.6-5-12.8-6-18.5-2l-129 100-.3-232 223 153c2.2 1.5 4.8 2.3 7.4 2.3 2.8 0 5.4-.8 7.6-2.3l222-155 .3 233-129-100c-5.6-4.5-14-3.4-18.3 2.3-4.4 5.7-3.4 14 2.4 18.4z'
            />
          </svg>
          <span>homework@tutorbro.com</span>
        </a>
      </li>
    </ul>
    <style jsx>
      {`
        svg {
          width: 16px;
          margin: 0 10px
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
          color: #607D8B;
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
        @media (max-width: 650px) {
          .hide--s {
            display: none;
          }
          .contact__list {
            justify-content: center;
          }
          svg {
            margin: 0 5px
          }
        }
      `}
    </style>
  </div>
)
