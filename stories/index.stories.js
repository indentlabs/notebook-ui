import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Navbar from "../src/components/Navbar";
import Button from '@material-ui/core/Button';

const universe = {
  id: 1,
  name: "My Super Sweet Universe"
};

const user = {
  id: 1,
  name: "Andrew",

  universes: [{
    id: 1,
    name: "My Super Great Universe"
  }],
  focused_universe: 1
};

storiesOf("Button", module)
  .addDecorator(muiTheme())
  .add("primary button", () => (
    <Button color="primary" variant="contained">
      Cool button
    </Button>
  ))
  .add("disabled", () => <Button disabled="true" variant="contained">Disabled stuff</Button>);

storiesOf("Navbar", module)
  .addDecorator(muiTheme())
  .add("logged out user", () => (
    <Navbar />
  ))
  .add("logged in user", () => (
    <Navbar user="User object" />
  ))
  .add("filtered to universe", () => (
    <Navbar user={user} universe={universe} />
  ))