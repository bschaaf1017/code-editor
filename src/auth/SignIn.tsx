import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles, Button } from '@material-ui/core';
import React from 'react'
import { commonColors } from '../theme/colors';

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const onLogin = (): void => {
    loginWithRedirect();
  }
  const classes = useStyles();
  return (
    <Button className={classes.button}>
      
    </Button>
  )
}

const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white
  }
}));
export default SignIn
