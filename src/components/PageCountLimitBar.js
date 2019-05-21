import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  root: {
    flexGrow: 1,
    minHeight: 20
  },
};

class PageCountLimitBar extends React.Component {
  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0, buffer: 10 });
    } else {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Tooltip title={"You've created " + this.props.created + " " + this.props.pageType + ". Your current plan allows " + this.props.limit + "."}>
        <div className={classes.root}>
          <LinearProgress variant="buffer" value={this.props.created / this.props.limit * 100} valueBuffer={(this.props.created + 1) / this.props.limit * 100} />
        </div>
      </Tooltip>
    );
  }
}

PageCountLimitBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageCountLimitBar);