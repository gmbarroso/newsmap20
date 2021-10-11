import React from 'react';

import {
  withRouter,
} from 'react-router-dom'

import git from '../../img/logos/github-logo.png'
import linkedin from '../../img/logos/linkedin-logo.png'
import './style.css'

const Header = () => {
  return (
    <div className="header">
      <h1 className="marginBtm">News Map 2.0</h1>
      <div className="marginBtm">
        <div className="logos">
          <a href="https://github.com/gmbarroso/wnewsmap20" target="_blank" rel="noopener noreferrer"><img className="git" src={git} alt="git"/></a>
          <a href="https://www.linkedin.com/in/guilherme-melo-barroso-msc-48a99722/" target="_blank" rel="noopener noreferrer"><img className="linkedIn" src={linkedin} alt="git"/></a>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header);