import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import Navbar from "../src/components/Navbar";
import ImageButton from "../src/components/ImageButton";
import PageLinkChip from "../src/components/PageLinkChip";
import TagList from "../src/components/TagList";
import Button from '@material-ui/core/Button';
import PageContentExpander from '../src/components/PageContentExpander';
import PrivacySwitch from '../src/components/PrivacySwitch';
import PageCountLimitBar from '../src/components/PageCountLimitBar';

import WordDefinitionCard from "../src/components/WordDefinitionCard";
import PageCard from "../src/components/PageCard";

const universe = {
  id: 1,
  name: "My Super Universe"
};

const universe2 = {
  id: 2,
  name: "My Other Universe"
}

const character = {
  id: 1,
  name: "Alice Quinn",
  private: true,
  universe: universe,

  categories: {
    'General': {
      icon: '{someIcon}',
      fields: {
        'Role': 'Protagonist',
        'Gender': 'Female',
        'Age': 23
      }
    },
    'Appearance': {
      icon: '{someIcon}',
      fields: {
        'Hair color': 'red',
        'Hair length': 'long'
      }
    }
  },

  description: "Some descriptive text here maybe? Role?"
};

const user = {
  id: 1,
  name: "Andrew",

  universes: [universe, universe2],
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
  .add("normal styles", () => (
    <div>
      <Button color="primary" variant="contained">
        button
      </Button>
      <br /><br />
      <Button color="secondary" variant="contained">
        button
      </Button>
      <br /><br />
      <Button color="accent" variant="contained">
        button
      </Button>
      <br /><br />
      <Button color="primary" variant="outlined">
        button
      </Button>
      <br /><br />
      <Button color="secondary" variant="outlined">
        button
      </Button>
      <br /><br />
      <Button color="accent" variant="outlined">
        button
      </Button>
      <br /><br />
      
      <Button disabled="true" variant="contained">Button</Button>
    </div>
  ))
  .add("rich image buttons", () => (
    <ImageButton />
  ));

storiesOf("Cards", module)
  .addDecorator(muiTheme())
  .add("word definition", () => (
    <WordDefinitionCard word={"to be used lol"} />
  ))
  .add("page", () => (
    <PageCard page={character} />
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
  .add("page content expander", () => (
    <PageContentExpander page={character} />
  ))
  .add("page link chip", () => (
    <div>
      <PageLinkChip page={character} />
      <PageLinkChip page={character} editable={true} />
    </div>
  ))
  .add("page count limit bar", () => (
    <PageCountLimitBar pageType={"Buildings"} created={3} limit={5} />
  ));

storiesOf("Switches", module)
  .addDecorator(muiTheme())
  .add("privacy switch", () => (
    <PrivacySwitch page={character} />
  ))

  storiesOf("Tags", module)
  .addDecorator(muiTheme())
  .add("tag list display", () => (
    <div>
      <TagList />
      <br />
      <TagList editable={true} />
    </div>
  ));