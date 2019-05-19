import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';

import SearchIcon from '@material-ui/icons/Search';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import CharacterPageIcon from '@material-ui/icons/Group';


const styles = theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class NavbarIcons extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    if (this.props.user === undefined) {
      return(<span />)
    }

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <RecentActorsIcon />
            <Typography variant="srOnly">My recent pages</Typography>
          </IconButton>
          <p>My recent pages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <PersonIcon />
            <Typography variant="srOnly">My profile</Typography>
          </IconButton>
          <p>My profile</p>
        </MenuItem>
      </Menu>
    );

    const renderRecentPagesMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
      
        <MenuItem onClick={this.handleMenuClose}>
          <Icon color="inherit">
            <CharacterPageIcon />
            <Typography variant="srOnly">Alice</Typography>
          </Icon>
          <p>Alice</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <Icon color="inherit">
            <CharacterPageIcon />
            <Typography variant="srOnly">Bob</Typography>
          </Icon>
          <p>Bob</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <Icon color="inherit">
            <CharacterPageIcon />
            <Typography variant="srOnly">Carol</Typography>
          </Icon>
          <p>Carol</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <Icon color="inherit">
            <CharacterPageIcon />
            <Typography variant="srOnly">David</Typography>
          </Icon>
          <p>David</p>
        </MenuItem>
      </Menu>
    );

    return(
      <div>
        <div className={classes.sectionDesktop}>
          <IconButton color="inherit" onClick={this.handleProfileMenuOpen}>
            <RecentActorsIcon />
            <Typography variant="srOnly">Recently-edited pages</Typography>
          </IconButton>
          <IconButton
            aria-owns={isMenuOpen ? 'material-appbar' : undefined}
            aria-haspopup="true"
            color="inherit"
          >
            <PersonIcon />
            <Typography variant="srOnly">My profile</Typography>
          </IconButton>
        </div>

        <div className={classes.sectionMobile}>
          <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
            <MoreVertIcon />
            <Typography variant="srOnly">More...</Typography>
          </IconButton>
        </div>

        {renderRecentPagesMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

NavbarIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarIcons);
