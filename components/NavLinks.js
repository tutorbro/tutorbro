import {Scrollspy} from 'react-scrollspy'
import LinkScroll from './LinkScroll'

// since styled jsx cant apply scoped styles to classname attached to HOC
const navListStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyleType: 'none'
}

export default () => (
  <Scrollspy style={navListStyle} items={['home', 'subjects', 'services']} currentClassName='is-current' offset={50}>

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
        @media (max-width: 1100px) {
          .nav__listItem {
            display: none;
          }
        }
      `}
    </style>
  </Scrollspy>
)
