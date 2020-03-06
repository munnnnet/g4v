const config = {
  siteTitle: 'gTAG.DEV',
  siteTitleShort: 'gTAG.DEV',
  siteTitleAlt: 'gTAG.DEV',
  siteLogo: '/logos/gtagdev.png',
  siteUrl: 'https://gtag.dev',
  repo: 'https://github.com/KontenaIndonesia/g4v',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Combining organic search and technical web development',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-122456606-3',
  postDefaultCategoryID: 'SEO',
  newsletter: ' ',
  newsletterEmbed: ' ',
  userName: ' ',
  userEmail: ' ',
  userTwitter: '',
  menuLinks: [
    {
      name: 'About me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
