import React from 'react'
import classNames from 'classnames'

import Wrapper from '../../wrapper'
import OutboundLink from '../../outbound-link'
import Icon from '../../icon'

import themeStyles from '../themes.module.css'
import styles from './styles.module.css'

const ProjectPanel = ({ project }) => (
  <OutboundLink
    to={project.links.website}
    className={classNames(styles.panel, themeStyles[project.theme.light ? 'light' : 'dark'], styles[project.className])}
    style={{ background: `${project.theme.background}` }}
  >
    <Wrapper>
      <div className={styles.inner} style={{ backgroundImage: `url(${project.cover})` }}>
        <div className={styles.content}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.github
            ? <OutboundLink to={project.github}>
              <Icon name='github' />
            </OutboundLink>
            : null
          }
        </div>
      </div>
    </Wrapper>
  </OutboundLink>
)

export default ProjectPanel
