module.exports = {
	pathPrefix: '/PollyGatsby',
	siteMetadata: {
		title: 'Polly',
		description: 'E-commerce',
		author: '@rexolion',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Polly website',
				short_name: 'Polly',
				start_url: '/PollyGatsby',
				background_color: '#fff',
				theme_color: '#FF4645',
				display: 'standalone',
				icon: 'src/images/polly.svg',
			},
		},
		'gatsby-plugin-offline',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
	
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/src/data`
			}
		}
	],
};
