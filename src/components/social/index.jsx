import React, { Component } from 'react'

import OutboundLink from '../outbound-link'
import Icon from '../icon'

import styles from './styles.module.css'

export default class Social extends Component {
  render () {
    return (
      <ul className={styles.social}>
        <li>
          <OutboundLink to='https://github.com/linosorice'>
            <Icon name='github' />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to='https://twitter.com/lino_sorice'>
            <Icon name='twitter' />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to='https://steemit.com/@lino'>
            <Icon name='steemit' />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to='https://www.instagram.com/linosorice'>
            <Icon name='instagram' />
          </OutboundLink>
        </li>
        <li>
          <OutboundLink to='https://www.linkedin.com/in/pasqualinosorice/'>
            <Icon name='linkedin' />
          </OutboundLink>
        </li>
      </ul>
    )
  }
}
