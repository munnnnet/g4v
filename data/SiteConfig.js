const config = {
  siteTitle: 'gTAG.DEV',
  siteTitleShort: 'gTAG.DEV',
  siteTitleAlt: 'gTAG.DEV',
  siteLogo: '/logos/tania.jpg',
  siteUrl: 'https://gtag.dev',
  repo: 'https://github.com/KontenaIndonesia/gtgdv',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Combining organic search and technical web development',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-122456606-3',
  postDefaultCategoryID: 'SEO',
  commentsApi: ' ',
  userName: ' ',
  userEmail: ' ',
  userTwitter: 'gtagdev',
  menuLinks: [
    {
      name: 'Articles',
      link: '/',
    }
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
