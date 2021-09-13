import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import Header from '../components/common/header/Header';
import Loading from '../components/common/loading/Loading';
import Home from '../pages/Home/Home';
import routeEndpoints from './routeEndpoints';

const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0()
  const classes = useStyles();

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute exact path={routeEndpoints.codeEditor}>
            {() => <div>code edit</div>}
          </ProtectedRoute>
          <Route exact path={routeEndpoints.home}>
            { isAuthenticated ? <Redirect to={routeEndpoints.codeEditor}/> : <Home />} 
          </Route>
        </Switch>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  }
}));

export default Routes
