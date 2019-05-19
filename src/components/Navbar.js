import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import NavbarSearch from './NavbarSearch';
import NavbarIcons from './NavbarIcons';
import NavbarUniversePicker from './NavbarUniversePicker';
import NavbarSidenavToggler from './NavbarSidenavToggler';

// import "./Navbar.css";
const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
});

class Navbar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <NavbarSidenavToggler {...this.props} />
            <NavbarUniversePicker {...this.props} />

            <Typography className={classes.title} variant="h5" color="inherit" noWrap>
              { 
                this.props.user && this.props.user.focused_universe !== null 
                ? this.props.user.focused_universe.name
                : "Notebook.ai" 
              }
            </Typography>

            <NavbarSearch {...this.props} />
            <div className={classes.grow} />
            <NavbarIcons {...this.props} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
