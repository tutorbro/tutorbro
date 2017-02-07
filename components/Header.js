import NProgress from 'nprogress'
import Router from 'next/router'
import Headroom from 'react-headroom'

import Meta from './Meta'
import GlobalStyles from './GlobalStyles'
import Nav from './Nav'
import '../utils/offlineInstaller'

Router.onRouteChangeStart = () => NProgress.start()

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

export default props => (
  <Headroom>
    <header>
      <Meta title={props.title} />
      <GlobalStyles />
      <div className='header__container'>
        <Nav {...props} />
      </div>
      <style jsx>
        {`
          header {
            box-shadow: 0px 2px 4px #eee;
            padding: 10px;
            width: 100%;
            background: #fff;
          }
          .header__container {
            max-width: 1280px;
            margin: 0 auto;
          }
        `}
      </style>
    </header>
  </Headroom>
)
