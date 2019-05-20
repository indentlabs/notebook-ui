import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  question: {
    flexBasis: '33.33%',
    textAlign: 'right',
    marginRight: '10px',
    color: theme.palette.text.secondary
  },
  answer: {
    paddingTop: '3px'
  },
  fields_container: {
    flexDirection: 'row',
    display: 'flex'
  },
  details: {
    flexDirection: 'column'
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

class PageContentExpander extends React.Component {

  render() {
    const { classes } = this.props;
    const categories = this.props.page.categories;

    return (
      <div className={classes.root}>
        {Object.keys(categories).map(function (category_key) {
          var category = categories[category_key];
          var number_of_fields = Object.keys(category.fields).length;
          var number_of_answers = Object.values(category.fields).length; // todo filter blank

          return(
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column}>
                  <Typography className={classes.heading}>{category_key}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>
                    { number_of_answers }/{ number_of_fields } answers
                  </Typography>
                  <LinearProgress variant="determinate" value={number_of_answers / number_of_fields * 100} />
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                {Object.keys(category.fields).map(function (field_key) {
                  return (
                    <div className={classes.fields_container}>
                      <Typography variant="overline" className={classes.question}>
                        <strong>{field_key}</strong>
                      </Typography>
                      <Typography variant="body1" className={classes.answer} gutterBottom>
                        {category.fields[field_key]}
                      </Typography>
                    </div>
                  )
                })}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="accent">
            Expand all categories
          </Button>
        </ExpansionPanelActions>
      </div>
    );
  }
}

PageContentExpander.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageContentExpander);
