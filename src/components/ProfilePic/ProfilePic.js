import React, { PropTypes, Component } from 'react';
import styles from './ProfilePic.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ProfilePic extends Component {
  render() {
    return (
      <span className="ProfilePic">
        <img src={'https://graph.facebook.com/' + this.props.username + '/picture'} />
      </span>
    )
  }
}

export default ProfilePic
