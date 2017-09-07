import React from "react";
import Link from 'gatsby-link';

import Fullscreen from '../components/fullscreen';
import Wrapper from '../components/wrapper';
import Social from '../components/social';
import Meta from '../components/meta';

import styles from './styles.module.css';

export default () =>
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          Hello. I’m Pasqualino Sorice.
          <br />
          <br />
          I'm your next technological partner.
          <br />
          <br />
          Check out my <Link className={styles.link} to="/work">work</Link>.
        </h1>
      </Wrapper>
      <div className={styles.social}>
        <Social />
      </div>
    </Fullscreen>
  </div>