import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import { config } from 'config'
import '../css/main-style'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        {/*<Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#2E353B',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: 30
              }}
            >
              &#123;{config.yourInitials}&#125;
            </Link>
            <ul className='navigation'>
              <li><Link to={prefixLink('/about/')}>about</Link></li>
              <li><Link to={prefixLink('/contact/')}>contact</Link></li>
            </ul>
          </Container>
        </Headroom>
        <Container
           style={{
             maxWidth: 960,
             padding: `${rhythm(1)} ${rhythm(3/4)}`,
             paddingTop: 0
           }}
         >
           {this.props.children}
         </Container> */}
         <Link to={prefixLink('/')}><h1 className='yourInitials'>&#123;{config.yourInitials}&#125;</h1></Link>
      </div>
    )
  },
})
