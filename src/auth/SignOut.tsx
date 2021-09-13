import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles, Button } from '@material-ui/core';
import React from 'react'
import { commonColors } from '../theme/colors';

const SignOut = () => {
  const { logout } = useAuth0();
  const onSignOut = (): void => {
    logout({returnTo: window.location.origin});
  }
  const classes = useStyles();
  return (
    <Button 
      className={classes.button}
      onClick={onSignOut}
    >
      Sign Out
    </Button>
  )
}

const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white
  }
}));
export default SignOut;