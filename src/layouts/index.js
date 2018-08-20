import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css';
import '../site.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <div className="content-wrapper">
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
