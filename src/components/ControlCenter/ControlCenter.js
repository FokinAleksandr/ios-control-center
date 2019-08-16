import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';

import Controls from '../Controls/Controls';
import backgroundImage from '../../images/backgroundImage.png';

import styles from './styles';

export default function ControlCenter() {
  return (
    <React.Fragment>
      <StatusBar hidden={true} />
      <ImageBackground
        blurRadius={60}
        source={backgroundImage}
        style={styles.imageBackground}
      >
        <Controls />
      </ImageBackground>
    </React.Fragment>
  );
}
