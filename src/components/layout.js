/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header/header';
import Footer from './Footer/footer';
import Container from './Container/container';
import SEO from './seo';
import './normalize.css';

const Layout = () => (
	<StaticQuery
		query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
		render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
          	<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        	<Container/>
          <Footer />
      </>
		)}
	/>
);

export default Layout;
