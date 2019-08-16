import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import PropTypes from 'prop-types';

import planeIcon from '../../images/plane.png';
import cellularIcon from '../../images/cellular.png';
import wifiIcon from '../../images/wifi.png';
import bluetoothIcon from '../../images/bluetooth.png';
import airDropIcon from '../../images/airDrop.png';
import hotspotIcon from '../../images/hotspot.png';

import colors from '../../utils/colors';
import styles from './styles';

const propTypes = {
  icon: PropTypes.string.isRequired,
  isToggled: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  delayLongPress: PropTypes.number,
  onLongPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  color: PropTypes.string.isRequired,
};

export default function TouchableIcon(props) {
  const icon = {
    plane: planeIcon,
    cellular: cellularIcon,
    wifi: wifiIcon,
    bluetooth: bluetoothIcon,
    airDrop: airDropIcon,
    hotspot: hotspotIcon,
  }[props.icon];

  return (
    <TouchableWithoutFeedback
      delayLongPress={props?.delayLongPress}
      onPressIn={props?.onPressIn}
      onPressOut={props?.onPressOut}
      onPress={() => props.onPress(!props.isToggled)}
      onLongPress={props?.onLongPress}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: props.isToggled
              ? props.color
              : colors.greyBackground,
          },
        ]}
      >
        <Image resizeMode="contain" source={icon} style={styles.iconImage} />
      </View>
    </TouchableWithoutFeedback>
  );
}

TouchableIcon.propTypes = propTypes;
