import React, { PropTypes } from 'react'
import { prefixLink } from 'gatsby-helpers'


const Icon = ({ icon }) =>
  <span className='social-icon' style={{ backgroundImage: `url(${prefixLink(`/assets/${icon}.svg`)})` }} />;

Icon.propTypes = {
  icon: PropTypes.string
};


export default class SocialIcons extends React.Component {
	render() {
		return(
			<div>
				<ul>
					<li><a target='_blank' href='twitter.com/bbear500'>
					<Icon icon='twitter' />
					</a>
					</li>
				</ul>
			</div>
		);
	}
}