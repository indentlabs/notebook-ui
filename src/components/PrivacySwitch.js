import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import Link from '@material-ui/core/Link';

class PrivacySwitch extends React.Component {
  state = {
    private: !!this.props.page.private
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    // todo update label to Public/Private and show sharing URL if public

    this.props.page.private = event.target.checked;
    // todo save change to model
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Privacy</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.private}
                onChange={this.handleChange('private')}
                value="privacy"
              />
            }
            label="Private"
          />
        </FormGroup>
        <FormHelperText>
          By default, only you can view the pages you create.&nbsp;
          <Link
            onClick={() => {
              alert("I'm a button.");
            }}
          >
            Learn more.
          </Link>
        </FormHelperText>
      </FormControl>
    );
  }
}

export default PrivacySwitch;