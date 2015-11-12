import React, { PropTypes, Component } from 'react';
import styles from './ProfileName.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ProfileName extends Component {
  render() {
    return (
      <a href={'http://www.facebook.com/' + this.props.username} className="ProfileName" >{this.props.username}</a>
    )
  }
}

export default ProfileName;
