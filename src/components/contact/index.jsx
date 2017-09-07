import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';
import Social from '../social';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'I like messages.'}</h1>
    <p className={styles.email}>
      Say hello and send an email:<br />
      <a href="mailto:lino.sorice@gmail.com?subject=Hello%20Pasqualino!" className={styles.link}>lino.sorice@gmail.com</a>
    </p>
    <div className={styles.lineBreak} />
    <Social />
  </div>
);

export default Contact;
