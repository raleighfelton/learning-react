import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
<div>
  <div className="Hero">
    <div className="HeroGroup">
      <h1 className="animate-fadeIn">Learn to<br />design and code React apps</h1>
      <p>Complete courses about the best tools and design system.</p>
      <Link to="/page-2/">Watch the video</Link>
    </div>
  </div>
</div>
)

export default IndexPage
