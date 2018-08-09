import React from 'react'
import Link from 'gatsby-link'

import Fullscreen from '../fullscreen'
import Wrapper from '../wrapper'

import styles from './styles.module.css'

const Menu = ({ active, onNavClick }) => {
  const linkProps = {
    onClick: onNavClick
  }

  return (
    <Fullscreen className={active ? styles.menu : styles.disable}>
      <Wrapper>
        <nav>
          <ul>
            <li className={styles.item}>
              <Link {...linkProps} to='/'>Home</Link>
            </li>
            <li className={styles.item}>
              <Link {...linkProps} to='/about'>About</Link>
            </li>
            <li className={styles.item}>
              <Link {...linkProps} to='/work'>Projects</Link>
            </li>
            <li className={styles.item}>
              <a href='https://steemit.com/@lino' target='_blank'>Blog</a>
            </li>
            <li className={styles.item}>
              <Link {...linkProps} to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </Fullscreen>
  )
}

export default Menu
