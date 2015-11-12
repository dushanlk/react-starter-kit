import React, { PropTypes, Component } from 'react';
import styles from './Avatar.css';
import withStyles from '../../decorators/withStyles';
import ProfilePic from '../ProfilePic'
import ProfileName from '../ProfileName'

@withStyles(styles)
class Avatar extends Component {
  render() {
    var fbUsername="VinDiesel";
    return (
    <span className="Avatar">
        <ProfilePic username={fbUsername}/>
        <ProfileName username={fbUsername}/>
      </span>
    )
  }
}

export default Avatar
