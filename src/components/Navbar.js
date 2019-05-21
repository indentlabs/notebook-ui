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
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Collapse from '@material-ui/core/Collapse';

import WorldbuildingCategoryIcon from '@material-ui/icons/Book';
import UniversePageIcon from '@material-ui/icons/Language';
import CharacterPageIcon from '@material-ui/icons/Group';
import LocationPageIcon from '@material-ui/icons/Terrain';
import ItemPageIcon from '@material-ui/icons/BeachAccess';
import BuildingPageIcon from '@material-ui/icons/Business';
import ConditionPageIcon from '@material-ui/icons/BubbleChart';
import CountryPageIcon from '@material-ui/icons/Explore';
import CreaturePageIcon from '@material-ui/icons/Pets';
import DeityPageIcon from '@material-ui/icons/AcUnit';
import FloraPageIcon from '@material-ui/icons/LocalFlorist';
import GovernmentPageIcon from '@material-ui/icons/AccountBalance';
import GroupPageIcon from '@material-ui/icons/Wc';
import JobPageIcon from '@material-ui/icons/Work';
import LandmarkPageIcon from '@material-ui/icons/LocationOn';
import LanguagePageIcon from '@material-ui/icons/Forum';
import MagicPageIcon from '@material-ui/icons/FlashOn';
import PlanetPageIcon from '@material-ui/icons/Public';
import RacePageIcon from '@material-ui/icons/Face';
import ReligionPageIcon from '@material-ui/icons/Brightness7';
import ScenePageIcon from '@material-ui/icons/LocalMovies';
import TechnologyPageIcon from '@material-ui/icons/Router';
import TownPageIcon from '@material-ui/icons/LocationCity';
import TraditionPageIcon from '@material-ui/icons/Today';
import VehiclePageIcon from '@material-ui/icons/DriveEta';
import CustomizePagesIcon from '@material-ui/icons/Add';

import WritingCategoryIcon from '@material-ui/icons/Book';
import DocumentPageIcon from '@material-ui/icons/Description';
import DiscussionPageIcon from '@material-ui/icons/Forum';
import PromptPageIcon from '@material-ui/icons/Pets';

import MyAccountCategoryIcon from '@material-ui/icons/Book';
import ProfilePageIcon from '@material-ui/icons/Description';
import BillingPageIcon from '@material-ui/icons/Forum';
import DataExportPageIcon from '@material-ui/icons/Pets';
import RecycleBinPageIcon from '@material-ui/icons/Description';
import SettingsPageIcon from '@material-ui/icons/Forum';
import SignOutPageIcon from '@material-ui/icons/Pets';

import HelpCategoryIcon from '@material-ui/icons/Help';
import HelpLinkIcon from '@material-ui/icons/ExitToApp';
import PrivacyPolicyIcon from '@material-ui/icons/VerifiedUser';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import NavbarSearch from './NavbarSearch';
import NavbarIcons from './NavbarIcons';
import NavbarUniversePicker from './NavbarUniversePicker';

const drawerWidth = 300;

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
                <WorldbuildingCategoryIcon />
              </ListItemIcon>
              <ListItemText inset primary="Worldbuilding" />
              {this.state.worldbuildingOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.worldbuildingOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <UniversePageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Universes" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CharacterPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Characters" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocationPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Locations" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ItemPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Items" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <CustomizePagesIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Add more..." />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={this.toggleWriting}>
              <ListItemIcon>
                <WritingCategoryIcon />
              </ListItemIcon>
              <ListItemText inset primary="Writing" />
              {this.state.writingOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.writingOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <DocumentPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Documents" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <DiscussionPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Discussions" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <PromptPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Prompts" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={this.toggleMyAccount}>
              <ListItemIcon>
                <MyAccountCategoryIcon />
              </ListItemIcon>
              <ListItemText inset primary="My Account" />
              {this.state.myAccountOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.myAccountOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ProfilePageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Profile" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <BillingPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Billing" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <DataExportPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Data Exports" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <RecycleBinPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Recycle Bin" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <SettingsPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Settings" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <SignOutPageIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Sign out" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={this.toggleHelp}>
              <ListItemIcon>
                <HelpCategoryIcon />
              </ListItemIcon>
              <ListItemText inset primary="Help" />
              {this.state.helpOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.helpOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <HelpLinkIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Help 1" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <HelpLinkIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Help 2" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <HelpLinkIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Help 3" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <PrivacyPolicyIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Privacy policy" />
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
