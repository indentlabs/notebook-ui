import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';

import RecentActorsIcon from '@material-ui/icons/RecentActors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';

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
  menuButton: {
    marginRight: '10px'
  }
});

class NavbarIcons extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
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
          <IconButton color="inherit" onClick={this.props.recentContentListAction(true)}>
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

    return(
      <div>
        <div className={classes.sectionDesktop}>
          <IconButton color="inherit" 
                      onClick={this.props.recentContentListAction(true)} 
                      className={classes.menuButton}>
            <RecentActorsIcon />
            <Typography variant="srOnly">Recently-edited pages</Typography>
          </IconButton>
        </div>

        <div className={classes.sectionMobile}>
          <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
            <MoreVertIcon />
            <Typography variant="srOnly">More...</Typography>
          </IconButton>
        </div>

        {renderMobileMenu}
      </div>
    );
  }
}

NavbarIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarIcons);
