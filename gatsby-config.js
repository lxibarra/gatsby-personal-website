module.exports = {
  siteMetadata: {
    title: '@ricardoibarrai Fullstack web developer',
    description: 'Hi im Ricardo frontend engineer using Angular & React to develop scalable web applications'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "dir": "ltr",
        "lang": "English",
        "name": "@ricardoibarrai Fullstack web developer",
        "scope": "/",
        "display": "browser",
        "start_url": "https://doitfy.com/",
        "short_name": "doitfy",
        "theme_color": "transparent",
        "description": "Hi im Ricardo frontend engineer using Angular & React to develop scalable web applications",
        "orientation": "any",
        "background_color": "transparent",
        "related_applications": [],
        "prefer_related_applications": false,
        "icon": "src/images/cup.png"
      },
  },
    'gatsby-plugin-offline'
  ],
};
