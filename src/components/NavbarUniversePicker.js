import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import UniverseIcon from '@material-ui/icons/Language';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  }
});

class NavbarUniversePicker extends React.Component {
  state = {
    anchorEl: null,
  };

  openUniverseMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeUniverseMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    if (this.props.user === undefined || this.props.user.universes === []) {
      return(<span />);
    }

    const renderUniverseMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.closeUniverseMenu}
      >
        <MenuItem onClick={this.closeUniverseMenu}>
          <Icon color="inherit">
            <UniverseIcon />
            <Typography variant="srOnly">Alice</Typography>
          </Icon>
          <p>Universe 1</p>
        </MenuItem>
        <MenuItem onClick={this.closeUniverseMenu}>
          <Icon color="inherit">
            <UniverseIcon />
            <Typography variant="srOnly">Bob</Typography>
          </Icon>
          <p>Universe 2</p>
        </MenuItem>
        <MenuItem onClick={this.closeUniverseMenu}>
          <Icon color="inherit">
            <UniverseIcon />
            <Typography variant="srOnly">Carol</Typography>
          </Icon>
          <p>Universe 3</p>
        </MenuItem>
        <MenuItem onClick={this.closeUniverseMenu}>
          <Icon color="inherit">
            <UniverseIcon />
            <Typography variant="srOnly">David</Typography>
          </Icon>
          <p>Universe 4</p>
        </MenuItem>
      </Menu>
    );

    return(
      <div>
        <IconButton className={classes.menuButton} 
                    color={this.props.user.focused_universe !== undefined ? 'secondary' : 'inherit'} 
                    aria-label="Change universe"
                    onClick={this.openUniverseMenu}>
          <UniverseIcon />
        </IconButton>
        {renderUniverseMenu}
      </div>
    );
  }
}

NavbarUniversePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarUniversePicker);
