import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagsIcon from '@material-ui/icons/Label';

const styles = theme => ({
  root: {
    display: 'inline-block',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class TagList extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'Main characters' },
      { key: 1, label: 'Dead' },
      { key: 2, label: 'Secretly evil' },
    ],
  };

  handleDelete = data => () => {
    if (data.label === 'React') {
      alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
      return;
    }

    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  handleClick = data => () => {
    alert('redirect or something');
  };
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.state.chipData.map(data => {
          let icon = <TagsIcon />;
          if (!!this.props.editable) {
            return (
              <Chip
                key={data.key}
                icon={icon}
                label={data.label}
                onDelete={this.handleDelete(data)}
                onClick={this.handleClick(data)}
                className={classes.chip}
                variant="outlined"
              />
            );
          } else {
            return (
              <Chip
                key={data.key}
                icon={icon}
                label={data.label}
                onClick={this.handleClick(data)}
                className={classes.chip}
                variant="outlined"
              />
            );
          }
        })}
      </div>
    );
  }
}

TagList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TagList);
