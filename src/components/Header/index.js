// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const websiteLogo =
  'https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <Link to="/">
        <img src={websiteLogo} alt="website logo" className="website-logo" />
      </Link>
      <div>
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="ham-icon" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="content-container">
              <button
                type="button"
                className="cl-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose className="cl-icon" />
              </button>
              <ul className="popup-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={() => close()}>
                    <AiFillHome className="size-home" />
                    <p className="nav-heading">Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    onClick={() => close()}
                  >
                    <BsInfoCircleFill className="icon" />
                    <p className="nav-heading">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </div>
  </nav>
)
export default Header
