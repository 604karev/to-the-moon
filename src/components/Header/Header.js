import React from "react";
import "./Header.scss";
import logo from "assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container ">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Company Logo" />
          </Link>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link href="/" className="header__nav-link gradient-text">
                  Home
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  href="/products"
                  className="header__nav-link gradient-text"
                >
                  Products
                </Link>
              </li>
              <li className="header__nav-item header__cart">
                <Link href="/products" className="header__nav-link ">
                  <svg
                  className="icon-gradient"
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="iconGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stop-color="#fff"
                        />
                        <stop
                          offset="100%"
                          stop-color="#fff"
                        />
                      </linearGradient>
                      <linearGradient
                        id="iconGradientHover"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stop-color="#ebff00"
                          
                        />
                        <stop
                          offset="100%"
                          stop-color="#ff70d9"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
                      fill="url(#iconGradient)"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          <label class="hamburger-menu">
            <input type="checkbox" />
          </label>
          <aside class="sidebar">
            <nav className="sidebar__nav">
              <ul className="sidebar__nav-list">
                <li className="sidebar__nav-item ">
                  <Link href="/" className="sidebar__nav-link gradient-text">
                    Home
                  </Link>
                </li>
                <li className="sidebar__nav-item">
                  <Link href="/products" className="sidebar__nav-link gradient-text">
                    Products
                  </Link>
                </li>
                <li className="sidebar__nav-item sidebar__cart">
                  <Link href="/products" className="sidebar__nav-link">
                  <svg
                  className="icon-gradient"
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="iconGradient-sidebar"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stop-color="#fff"
                        />
                        <stop
                          offset="100%"
                          stop-color="#fff"
                        />
                      </linearGradient>
                      <linearGradient
                        id="iconGradientHover-sidebar"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stop-color="#ebff00"
                          
                        />
                        <stop
                          offset="100%"
                          stop-color="#ff70d9"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
                      fill="url(#iconGradient-sidebar)"
                    />
                  </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Header;
