import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default ({ children, noFooter = false }) => {
  const router = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <nav className='navbar has-shadow'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link href='/'>
              <a className='navbar-item'>
                <strong>Macau IoT</strong>
              </a>
            </Link>

            <a
              className={`navbar-burger burger ${isOpenMenu ? 'is-active' : ''}`}
              onClick={() => {
                if (isOpenMenu) {
                  setIsOpenMenu(false)
                } else {
                  setIsOpenMenu(true)
                }
              }}
            >
              <span />
              <span />
              <span />
            </a>
          </div>

          <div className={`navbar-menu ${isOpenMenu ? 'is-active' : ''}`}>
            <div className='navbar-start'>
              <Link href='/'><a className='navbar-item'>Home</a></Link>
              <Link href='/air'><a className={`navbar-item ${router.pathname === '/air' ? 'is-active' : ''}`}>Air Quality Monitoring</a></Link>
            </div>

            <div className='navbar-end'>
              <div className='navbar-item'>
                <a className='button is-dark' href='https://github.com/MacauIoT'>
                  <span className='icon'>
                    <i className='fab fa-github' />
                  </span>
                  <span>Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {children}

      {!noFooter && (
        <footer className='footer'>
          <div className='content has-text-centered'>
            <p>
              <strong>MacauIoT</strong> by <a href='https://comus.dev'>Chris Leong</a>. The source code is licensed <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>.
            </p>
          </div>
        </footer>
      )}
    </>
  )
}
