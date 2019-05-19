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

import UniverseIcon from '@material-ui/icons/Language';

import SearchIcon from '@material-ui/icons/Search';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import CharacterPageIcon from '@material-ui/icons/Group';


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

  render() {
    const { classes } = this.props;

    if (this.props.user === undefined || this.props.user.universes === []) {
      return(<span />);
    }

    return(
      <IconButton className={classes.menuButton} 
                  color={this.props.user.focused_universe !== undefined ? 'secondary' : 'inherit'} 
                  aria-label="Change universe">
        <UniverseIcon />
      </IconButton>
    );
  }
}

NavbarUniversePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarUniversePicker);
