import React from 'react';

import { storiesOf } from '@storybook/react';
import { action }    from '@storybook/addon-actions';
import { linkTo }    from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Button from "../src/features/common/Button";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf("Button", module)
  .add("active with fill", () => (
    <Button label={`continue`} fill={true} active={true} />
  ))
  .add("active with no fill", () => (
    <Button label={`sign up`} fill={false} active={true} />
  ))
  .add("disabled", () => <Button label={`continue`} active={false} />);

storiesOf('Label', module).add('normal', () => <Label name={"Hello, World"} />);