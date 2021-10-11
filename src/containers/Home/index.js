import React, { Fragment } from 'react';

import {
  withRouter,
} from 'react-router-dom'

import './style.css'

const Home = props => {

  return (
    <Fragment>
      <div className="topContainer">
        <div className="toggleDiv">
        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(Home)
