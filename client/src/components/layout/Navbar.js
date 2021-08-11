import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactsIcon from '@material-ui/icons/Contacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  Box,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contactIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  const onLogout = () => {
    logout();
  };
  const authLinks = (
    <Fragment>
      <Typography style={{ marginRight: '0.5rem' }}>
        Hello {user ? user.name : 'null'}
      </Typography>
      <Box pr={1}>
        <IconButton
          component={Link}
          to='/login'
          variant='contained'
          color='inherit'
          onClick={onLogout}
        >
          <ExitToAppIcon />
        </IconButton>
      </Box>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Box pr={2}>
        <Button
          component={Link}
          to='/register'
          variant='outlined'
          color='inherit'
          size='small'
        >
          Register
        </Button>
      </Box>

      <Button
        component={Link}
        to='/about'
        variant='outlined'
        color='inherit'
        size='small'
      >
        About
      </Button>
    </Fragment>
  );

  const classes = useStyles();
  return (
    <AppBar position='sticky' color='primary' className={classes.root}>
      <Toolbar>
        <IconButton
          component={Link}
          to='/'
          edge='start'
          className={classes.contactIcon}
          color='inherit'
        >
          <ContactsIcon fontSize='medium' />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          {title}
        </Typography>
        {isAuthenticated ? authLinks : guestLinks}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'InfoMinder',
};

export default Navbar;
