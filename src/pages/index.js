import React, { Fragment } from 'react'

import Header from '../containers/Header'
import Home from '../containers/Home'

import {
  Route,
  HashRouter,
  withRouter,
} from 'react-router-dom'

const Root = () => {

  return (
    <Fragment>
      <Header />
      <HashRouter>
        <Route exact path="/" component={() => <Home/>} />
      </HashRouter>
    </Fragment>
  )
}

export default withRouter(Root)
