import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';

import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage className={styles.page}>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hello world.</h1>
          <p>
          I'm a startupper, computer engineer, cryptocurrency fan, amateur photographer and dog lover. I love to bring out the best in people, making them a part of a big picture. I also love my job and I'm steadily improving my technical and business skills.
          </p>
          <p>
          I got a Computer Engineer degree at Università degli studi La Sapienza with 110/110. The title of my master thesis was "A voice based user interface for Smart Homes".
          </p>
          <p>
          After the degree I worked in a lot of projects as you can see in my <Link className={styles.link} to="/work">work</Link> section of this site.
          </p>

          <p>Now I'm the CEO of <OutboundLink className={styles.link} to="http://hubern.com">Hubern</OutboundLink> a startup that helps other startups making the technological problems affordable also for a low budget company. If you have a project in mind, <Link className={styles.link} to="/contact">get in touch</Link>.</p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Presentation</h4>
            <p>Bootstrap, Css, Html, React, jQuery, javascript</p>
            <h4>Mobile Apps</h4>
            <p>React Native, Swift, Java</p>
            <h4>Server</h4>
            <p>Mongo, Node, SQL, Ruby, Python, php</p>
            <h4>Frameworks</h4>
            <p>Express, Sails, Ruby on Rails, Django, Laravel</p>
            <h4>Server Administration</h4>
            <p>Apache, Nginx, Mysql, Nagios, Firewall</p>
            <h4>Other</h4>
            <p>C, Ansible, Git, Svn, Bash</p>
          </div>

        </aside>
      </div>
    </Wrapper>
  </ContentPage>
);

export default About;
