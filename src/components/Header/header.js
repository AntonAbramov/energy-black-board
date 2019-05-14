import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import { withStyles } from '@material-ui/core';
import React from 'react';

const Header = ({ classes }) => {
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.header__bar}>
        <div className={classes.header__toggle}>
          <IconButton aria-label="Menu">
            <MenuIcon className={classes.header__icon} />
          </IconButton>

          <Link to="/dashboard" className={classes.header__logo}>
            Tenant consumption
          </Link>
        </div>
        <ul className={classes['header__nav-list']}>
          <li>
            <IconButton>
              <LanguageIcon className={classes.header__icon} />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <PersonIcon className={classes.header__icon} />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <SearchIcon className={classes.header__icon} />
            </IconButton>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

const styles = theme => ({
  header: {
    background: 'white',
    fontSize: '16px',
    'box-shadow': 'none',
  },
  header__bar: {
    display: 'flex',
    'justify-content': 'space-between',
  },
  header__toggle: {
    display: 'flex',
    'align-items': 'center',
  },
  header__icon: {
    width: '35px',
    height: '35px',
    color: 'black',
  },
  header__logo: {
    color: '#9f1d22',
    'font-size': '24px',
    'text-decoration': 'none',
    'margin-left': '1rem',
  },
  'header__nav-list': {
    'list-style': 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
});

export default withStyles(styles)(Header);
