import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header class="Header-container">
    <div class="Header-items">
      <ul class="Bullet-container">
        <span class="Logo">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </span>
        <li class="Header_lh ">For man</li>
        <li class="Header_lh ">For woman</li>
        <li class="Header_lh ">For other</li>
        <li class="Header_lh ">FAQ</li>
        <li class="Header_lh ">Account</li>
        <li class="Header_lh ">Cracker</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
