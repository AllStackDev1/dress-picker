import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import Layout from '../containers/Layout'
import history from '../history'
import Dashboard from '../pages/dashboard'

const Routes = () => {
  return (
    <Router history={history}>
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default Routes
