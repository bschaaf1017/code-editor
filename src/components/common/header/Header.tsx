import { useAuth0 } from '@auth0/auth0-react'
import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { toggleDarkMode } from '../../../store/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(state => state.darkMode);

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const classes = useStyles();
  return (
    <AppBar position='relative'>
      <Toolbar>

      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(() => ({
  title: {
    flex: 1
  }
}))

export default Header
