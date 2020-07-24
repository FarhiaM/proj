module.exports = {
	 siteMetadata: {
	    title: `Farhia Muse`,
	    author: `Farhia Muse`,
	    description: `Farhia Muse's personal blog site.`,
	    siteUrl: `https://farhia-proj-site.netlify.app`,
	    alternateSite: `https://farhia.netlify.app`,
	    social: [
	      {
	        name: `Twitter`,
	        url: `https://twitter.com/Farhia_MM`,
	      },
	      {
	        name: `GitHub`,
	        url: `https://github.com/farhiam`,
	      },
	    ],
	  },
	plugins: [
		`gatsby-plugin-mdx`,
		{
			resolve: `gatsby-theme-blog`,
			options: {
				basePath: `/blog`,
				mdxOtherwiseConfigured: true
			}
		}
	]
}