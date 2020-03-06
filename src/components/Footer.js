import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <a href="https://ko-fi.com/fattul" target="_blank" rel="noopener noreferrer">
          Ko-Fi
        </a>
        <a href="https://patreon.com/fattul" target="_blank" rel="noopener noreferrer">
          Patreon
        </a>
        <a href="https://twitter.com/ptsovaka" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="/contact" rel="noopener noreferrer">
          Contact
        </a>
      </footer>
    )
  }
}
