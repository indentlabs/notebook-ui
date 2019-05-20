import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

class PageLinkChip extends React.Component {
  render() {
    const { classes } = this.props;

    if (!!this.props.editable) {
      return (
        <div className={classes.root}>
          <Chip
            icon={<FaceIcon />}
            label={this.props.page.name}
            onClick={handleClick}
            onDelete={handleDelete}
            color="primary"
            variant="outlined"
            className={classes.chip}
          />
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <Chip
            icon={<FaceIcon />}
            label={this.props.page.name}
            onClick={handleClick}
            color="primary"
            variant="outlined"
            className={classes.chip}
          />
        </div>
      );
    }
  }
}

PageLinkChip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageLinkChip);
