import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import rewindIcon from '../../images/rewind.png';
import playIcon from '../../images/play.png';
import forwardIcon from '../../images/forward.png';
import styles from './styles';

const propTypes = {
  icon: PropTypes.string.isRequired,
};

export default function MusicIcon(props) {
  const icon = {
    rewind: rewindIcon,
    play: playIcon,
    forward: forwardIcon,
  }[props.icon];

  return <Image resizeMode="contain" source={icon} style={styles.iconImage} />;
}

MusicIcon.propTypes = propTypes;
