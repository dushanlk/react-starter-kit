import React, { PropTypes, Component } from 'react';
import styles from './LoginForm.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles) class LoginForm extends Component {
  render() {
    return (
      <span className="LoginForm">
        <label className="LoginForm-label">Username</label> <input type="text" className="LoginForm-textbox"/>
        <label className="LoginForm-label">Password</label> <input type="text" className="LoginForm-textbox"/>
        <input className="LoginForm-button" type="submit" value="Login"/>
      </span>
    )
  }
}

export default LoginForm
