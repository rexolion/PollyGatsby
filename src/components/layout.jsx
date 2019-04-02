import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header/header';
import Footer from './Footer/footer';
import Container from './Container/container';
import SEO from './seo';
import PropTypes from 'prop-types';
import './normalize.css';

class LayoutComponent extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = { 
			cartCounter: 0,
			inCart: [],
		};
	}

  cartCounterInc = (item) => {
  	this.setState(prev => ({cartCounter: prev.cartCounter + 1,inCart: [...prev.inCart, item]}));
  };
  
  render() { 
  	return ( 
						<>
							<Header cartCounter={this.state.cartCounter} siteTitle={this.props.metaData.site.siteMetadata.title} />
									<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
								<Container cartCounter={this.cartCounterInc} />
								<Footer />
						</>
  	);
  }
}

LayoutComponent.propTypes = {
	metaData: PropTypes.object
};
 

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
			<LayoutComponent metaData={data}/>
		)}
	/>
);

export default Layout;
