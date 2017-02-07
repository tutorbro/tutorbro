import LinkScroll from './LinkScroll'

export default () => (
  <ul className='nav__list'>
    <li className='nav__listItem'>
      <LinkScroll href='/#home'>
        <a className='link'>Home</a>
      </LinkScroll>
    </li>
    <li className='nav__listItem'>
      <LinkScroll href='/#subjects'>
        <a className='link'>subjects</a>
      </LinkScroll>
    </li>
    <li className='nav__listItem'>
      <LinkScroll href='/#services'>
        <a className='link'>Services</a>
      </LinkScroll>
    </li>
    <style jsx>
      {`
        .link {
          text-decoration: none;
          text-transform: uppercase;
          color: #999;
          transition: all 0.3s ease-in-out;
          position: relative;
          font-size: 15px;
        }
        .link::after {
          content: '';
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
        @media (max-width: 950px) {
          .nav__list {
            flex-direction: column;
            position: absolute;
            width: 100%;
            top: 70px;
            left: 0;
            background: #fff;
            box-shadow: 0px 2px 4px #eee;
            display: none;
          }
          .nav__listItem {
            margin: 0;
            padding: 15px 0;
            width: 100%;
            text-align: center;
          }
        }
      `}
    </style>
  </ul>
)
