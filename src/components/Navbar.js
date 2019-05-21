import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import ListSubheader from '@material-ui/core/ListSubheader';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CharacterPageIcon from '@material-ui/icons/Group';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import NavbarSearch from './NavbarSearch';
import NavbarIcons from './NavbarIcons';
import NavbarUniversePicker from './NavbarUniversePicker';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  sidenavToggler: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  recentContentListDrawer: {
    width: 400
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Navbar extends React.Component {
  state = {
    sidenavOpen: false,
    recentContentListOpen: false,
    worldbuildingOpen: true,
    writingOpen: false,
    myAccountOpen: false,
    helpOpen: false
  };

  handleDrawerOpen = () => {
    this.setState({ sidenavOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ sidenavOpen: false });
  };

  toggleRecentContent = (open) => () => {
    this.setState({ recentContentListOpen: open });
  };

  toggleWorldbuilding = () => {
    this.setState({worldbuildingOpen: !this.state.worldbuildingOpen });
  };

  toggleWriting = () => {
    this.setState({writingOpen: !this.state.writingOpen });
  };

  toggleMyAccount = () => {
    this.setState({myAccountOpen: !this.state.myAccountOpen });
  };

  toggleHelp = () => {
    this.setState({helpOpen: !this.state.helpOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const recentContentList = (
      <div className={classes.list}>
        <List>
          <ListSubheader component="div">Recently edited...</ListSubheader>
          {['Alice', 'Bob', 'Carol', 'David', 'Ethan', 'Frederick'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><CharacterPageIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button key="more">
            <ListItemIcon><RecentActorsIcon /></ListItemIcon>
            <ListItemText primary="More..." />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" 
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: this.state.sidenavOpen,
                })}
        >
          <Toolbar disableGutters={!this.state.sidenavOpen}>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.sidenavToggler, {
                  [classes.hide]: this.state.sidenavOpen,
                })}
              >
              <MenuIcon />
            </IconButton>
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
            <NavbarIcons {...this.props} recentContentListAction={this.toggleRecentContent} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.sidenavOpen,
            [classes.drawerClose]: !this.state.sidenavOpen,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.sidenavOpen,
              [classes.drawerClose]: !this.state.sidenavOpen,
            }),
          }}
          open={this.state.sidenavOpen}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={this.toggleWorldbuilding}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="Worldbuilding" />
              {this.state.worldbuildingOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.worldbuildingOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Universes" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Characters" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Locations" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Items" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={this.toggleWriting}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="Writing" />
              {this.state.writingOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.writingOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Universes" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Characters" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Locations" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Items" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={this.toggleMyAccount}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="My Account" />
              {this.state.myAccountOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.myAccountOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Universes" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Characters" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Locations" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Items" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={this.toggleHelp}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="My Account" />
              {this.state.helpOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.helpOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Universes" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Characters" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Locations" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Items" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
        <Drawer anchor="right" 
                open={this.state.recentContentListOpen} 
                onClose={this.toggleRecentContent(false)}
                className={classes.recentContentListDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleRecentContent(false)}
            onKeyDown={this.toggleRecentContent(false)}
          >
            {recentContentList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
