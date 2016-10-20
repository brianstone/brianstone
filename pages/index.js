import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import '../css/main-style.css'
import SocialIcons from '../components/social-icons'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <div className='introduction'>
          <h1>
            {/*Hi, I'm {config.yourName}.*/}
          </h1>
          <SocialIcons />
        </div>
      </div>
    )
  }
}
