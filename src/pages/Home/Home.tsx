import { makeStyles } from '@material-ui/core';
import React from 'react';
import ProgamingLangIcons from '../../components/Home/ProgamingLangIcons'

const Home = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.welcomeMessage}>
        Welcome to the Worlds best Code Editor
      </div>
      <ProgamingLangIcons />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  welcomeMessage: {
    padding: '15px',
    fontSize: '30px',
    color: theme.font
  }
}))

export default Home
