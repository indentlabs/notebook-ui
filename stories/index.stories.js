import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Navbar from "../src/features/common/Navbar";
import Button from '@material-ui/core/Button';

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
  .add("logged in user", () => (
    <Navbar />
  ))