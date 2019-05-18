import React from 'react';

import { storiesOf } from '@storybook/react';
import { action }    from '@storybook/addon-actions';
import { linkTo }    from '@storybook/addon-links';

import {muiTheme} from 'storybook-addon-material-ui';

import { Welcome } from '@storybook/react/demo';
// import Button from "../src/features/common/Button";
import Button from '@material-ui/core/Button';

storiesOf("Button", module)
  .addDecorator(muiTheme())
  .add("primary button", () => (
    <Button color="primary" variant="contained">
      Link
    </Button>
  ))
  .add("disabled", () => <Button disabled="true" variant="contained">Disabled stuff</Button>);

storiesOf('Label', module).add('normal', () => <Label name={"Hello, World"} />);
