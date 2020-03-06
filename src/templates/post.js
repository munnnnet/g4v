import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout'
import UserInfo from '../components/UserInfo'
import PostTags from '../components/PostTags'
import NewsletterForm from '../components/NewsletterForm'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import { formatDate, editOnGithub } from '../utils/global'
import Comments from '../components/Comments'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class PostTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      comments: [],
    }
  }

  async componentDidMount() {
    const { slug } = this.props.pageContext

    try {
      const response = await fetch(`${config.commentsApi}${slug}`)
      const comments = await response.json()

      this.setState({ comments })
    } catch (error) {
      this.setState({ error: true })
    }
  }

  render() {
    const { comments, error } = this.state
    const { slug } = this.props.pageContext
    const commentSlug = slug.replace(/\\|\//g, '')
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    let thumbnail

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed
    }

    const date = formatDate(post.date)
    const githubLink = editOnGithub(post)
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${
      config.siteUrl
    }/${post.slug}/&via=gtagdev`

    const commentTitle = commentLength => {
      if (commentLength < 1) {
        return 'Comments'
      } else if (commentLength === 1) {
        return '1 comment'
      } else {
        return `${commentLength} comments`
      }
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container">
          <header className={`single-header ${!thumbnail ? 'no-thumbnail' : ''}`}>
            {thumbnail ? <Img fixed={post.thumbnail.childImageSharp.fixed} /> : null}
            
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
              <span class="time-publish"> This post published on <time className="date">{date}</time></span>
                {!error && (
                  <span>
                    <a className="comment-link" href="#comments">
                      {commentTitle(comments.length)}
                    </a>
                    /
                  </span>
                )}

              </div>
              <PostTags tags={post.tags} />
            </div>
          </header>

          <div className="fixed-cta">
            <p>Help me here!</p>
            <a
              href="https://ko-fi.com/fattul"
              className="donate-button"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img src={kofi} className="coffee-icon" alt="Coffee icon" />
            Ko-Fi
            </a>
            <a
              className="patreon-button"
              href="https://www.patreon.com/fattul"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img src={patreon} className="patreon-icon" /> Patreon
            </a>
          </div>

          <div class="sharethis-inline-share-buttons"></div>

          <div className="post" dangerouslySetInnerHTML={{ __html: postNode.html }} />
          
          <div class="sharethis-inline-reaction-buttons"></div>
        </article>

        <UserInfo config={config} />

        <div className="container newletter-form">
          {!error && <Comments commentsList={comments} slug={commentSlug} />}

          <h3>NEED MORE TRAFFICS AND SALES REVENUE?</h3>
          <p>
            Learn how we get traffics through creative content marketing, run and track SEO campaign, and convert it become sales using conversion strategy. <b>Never any spam, ads, or affiliate links. Unsubscribe whenever.</b>
          </p>
          <NewsletterForm />
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`
