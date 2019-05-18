import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

// import Button from "../src/features/common/Button";
import Button from '@material-ui/core/Button';

storiesOf("Button", module)
  .addDecorator(muiTheme())
  .add("primary button", () => (
    <Button color="primary" variant="contained">
      Cool button
    </Button>
  ))
  .add("disabled", () => <Button disabled="true" variant="contained">Disabled stuff</Button>);

storiesOf('Label', module).add('normal', () => <Label name={"Hello, World"} />);
