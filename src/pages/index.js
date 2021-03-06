import React from 'react'
import Link from 'gatsby-link'

import Fullscreen from '../components/fullscreen'
import Wrapper from '../components/wrapper'
import Social from '../components/social'
import Meta from '../components/meta'

import styles from './styles.module.css'

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          Hello. I’m Pasqualino Sorice.
          <br />
          <br />
          I'm a Computer Engineer and a Full Stack Developer.
          <br />
          <br />
          Check out my <Link className={styles.link} to='/work'>projects</Link>.
        </h1>
      </Wrapper>
      <div className={styles.social}>
        <Social />
      </div>
    </Fullscreen>
  </div>
)

export default Index
