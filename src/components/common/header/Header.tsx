import { useAuth0 } from '@auth0/auth0-react'
import { AppBar, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { toggleDarkMode } from '../../../store/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import DarkModeIcon from '@material-ui/icons/Brightness2'

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
        <Typography variant='h6' className={classes.title}>
          Worlds Best Code Editor 
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} checked={darkMode}/>
        {isAuthenticated ? <div>Auth Buttons</div> : <div>Unauthenticated Buttons</div>}
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
