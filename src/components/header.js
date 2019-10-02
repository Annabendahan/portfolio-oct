import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import picHome from "../images/dmitriy-ilkevich-449331.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      margin: `0 auto`,
        justifyContent: 'space-between',
        fontFamily: 'Work Sans',
        fontWeight: '100',
        display:'flex',
        padding: `0.45rem 1.0875rem`,
        position: 'fixed'
    }}
  >

      <h1 style={{ margin: 0 }}>
        AB.
      </h1>
      <div>
        <h3> <Link> Work </Link> <Link>  Contact </Link> </h3>
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
