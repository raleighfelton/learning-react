import React from 'react'
import Link from 'gatsby-link'
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header-group">
    <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
    <Link to="/corses">Course</Link>
    <Link to="/downloads">Downloads</Link>
    <Link to="/workshop">Workshops</Link>
    <Link to="/buy"><button className="animate-fadeIn">Buy</button></Link>
    </div>
  </div>
)

export default Header
