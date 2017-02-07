import Link from 'next/link'
import Logo from './Logo'
import NavLinks from './NavLinks'
import ContactLinks from './ContactLinks'

export default props => (
  <nav className='nav'>
    <div className='nav__brand'>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
    </div>
    <div className='nav__links'>
      <NavLinks />
      <ContactLinks {...props} />
    </div>
    <style jsx>
      {`
        .nav {
          display: flex;
        }
        .nav__brandLogo{
          width: 250px;
        }
        .nav__links {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      `}
    </style>
  </nav>
)
