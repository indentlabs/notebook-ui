import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Navbar from "../src/components/Navbar";
import ImageButton from "../src/components/ImageButton";
import PageLinkChip from "../src/components/PageLinkChip";
import Button from '@material-ui/core/Button';

const universe = {
  id: 1,
  name: "My Super Universe"
};

const character = {
  id: 1,
  name: "Alice Quinn"
};

const user = {
  id: 1,
  name: "Andrew",

  universes: [universe],
  focused_universe: null
};

const focused_user = {
  id: 2,
  name: "Bob",

  universes: [universe],
  focused_universe: universe
};

storiesOf("Button", module)
  .addDecorator(muiTheme())
  .add("primary button", () => (
    <Button color="primary" variant="contained">
      Cool button
    </Button>
  ))
  .add("disabled", () => <Button disabled="true" variant="contained">Disabled stuff</Button>)
  .add("rich image buttons", () => (
    <ImageButton />
  ));

  storiesOf("Navbar", module)
  .addDecorator(muiTheme())
  .add("logged out user", () => (
    <Navbar />
  ))
  .add("logged in user", () => (
    <Navbar user={user} />
  ))
  .add("filtered to universe", () => (
    <Navbar user={focused_user} />
  ));

storiesOf("Pages", module)
  .addDecorator(muiTheme())
  .add("page link chip", () => (
    <PageLinkChip page={character} />
  ));
