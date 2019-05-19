import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
});

class NavbarSidenavToggler extends React.Component {
  render() {
    const { classes } = this.props;

    if (this.props.user === undefined) {
      return(<span />);
    }

    return(
      <IconButton className={classes.menuButton} color="inherit" aria-label="Open navigation">
        <MenuIcon />
      </IconButton>
    );
  }
}

NavbarSidenavToggler.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarSidenavToggler);
