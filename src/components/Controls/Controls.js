import React from 'react';
import {
  Animated,
  Easing,
  Image,
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import AnimatedIcon from '../AnimatedIcon/AnimatedIcon';
import VerticalSlider from '../VerticalSlider/VerticalSlider';
import MusicIcon from '../MusicIcon/MusicIcon';
import TouchableIcon from '../TouchableIcon/TouchableIcon';
import screenIcon from '../../images/screen.png';
import {
  columnsWidth,
  horizontalUnits,
  verticalUnits,
} from '../../utils/scaling';

import colors from '../../utils/colors';
import styles from './styles';

export default function Controls() {
  const [isPlaneToggled, setPlaneToggled] = React.useState(false);
  const [isCellularToggled, setCellularToggled] = React.useState(false);
  const [isWifiToggled, setWifiToggled] = React.useState(false);
  const [isBluetoothToggled, setBluetoothToggled] = React.useState(false);
  const [isAirDropToggled, setAirDropToggled] = React.useState(false);
  const [isHotspotToggled, setHotspotToggled] = React.useState(false);
  const [isOrientationToggled, setOrientationToggled] = React.useState(false);
  const [isNightModeToggled, setNightModeToggled] = React.useState(false);
  const [isLighterToggled, setLighterToggled] = React.useState(false);
  const [isTimerToggled, setTimerToggled] = React.useState(false);
  const [isCalculatorToggled, setCalculatorToggled] = React.useState(false);
  const [isCameraToggled, setCameraToggled] = React.useState(false);
  const [isExpanded, setExpanded] = React.useState(false);

  // background blocks opacity
  const [blocksOpacity] = React.useState(new Animated.Value(1));

  function animateBlocksOpacity(toValue) {
    Animated.timing(blocksOpacity, {
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: true,
      toValue,
    }).start();
  }
  //

  // networkBlockScale animation
  const [networkScaleAValue] = React.useState(new Animated.Value(0));

  function animateNetworkScale(toValue) {
    if (isExpanded) {
      return;
    }

    Animated.timing(networkScaleAValue, {
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
      toValue,
    }).start();
  }

  const scale = networkScaleAValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });
  //

  function handleExpandNetworkBlock(value) {
    animateBlocksOpacity(Number(!value));
    networkScaleAValue.setValue(0);
    LayoutAnimation.configureNext({
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
        duration: 50,
        delay: 150,
      },
      update: {
        type: LayoutAnimation.Types.linear,
        duration: 200,
      },
      delete: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
        duration: 50,
      },
    });
    setExpanded(value);
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleExpandNetworkBlock(false)}>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.placeholder} />
            <TouchableWithoutFeedback
              delayLongPress={500}
              onLongPress={() => handleExpandNetworkBlock(true)}
              onPressIn={() => animateNetworkScale(1)}
              onPressOut={() => animateNetworkScale(0)}
            >
              <Animated.View
                style={[
                  styles.block,
                  {
                    position: 'absolute',
                    justifyContent: 'space-evenly',
                    transform: [{ scale }],
                    ...(isExpanded && {
                      top: -verticalUnits(40),
                      width: columnsWidth(4),
                      height: verticalUnits(500),
                    }),
                  },
                ]}
              >
                <View
                  style={[
                    styles.networkRow,
                    isExpanded && {
                      justifyContent: 'space-between',
                    },
                  ]}
                >
                  <View style={styles.network}>
                    <TouchableIcon
                      icon="plane"
                      isToggled={isPlaneToggled}
                      onPress={setPlaneToggled}
                      delayLongPress={500}
                      onLongPress={() => handleExpandNetworkBlock(true)}
                      onPressIn={() => animateNetworkScale(1)}
                      onPressOut={() => animateNetworkScale(0)}
                      color={colors.orange}
                    />
                    {isExpanded && (
                      <Text style={styles.networkText}>
                        {'Авиарежим\n'}
                        <Text style={{ fontWeight: 'bold' }}>
                          {isPlaneToggled ? 'вкл' : 'выкл'}
                        </Text>
                      </Text>
                    )}
                  </View>
                  <View style={styles.network}>
                    <TouchableIcon
                      icon="cellular"
                      isToggled={isCellularToggled}
                      onPress={setCellularToggled}
                      delayLongPress={500}
                      onLongPress={() => handleExpandNetworkBlock(true)}
                      onPressIn={() => animateNetworkScale(1)}
                      onPressOut={() => animateNetworkScale(0)}
                      color={colors.green}
                    />
                    {isExpanded && (
                      <Text style={styles.networkText}>
                        {'Сотовые данные\n'}
                        <Text style={{ fontWeight: 'bold' }}>
                          {isCellularToggled ? 'вкл' : 'выкл'}
                        </Text>
                      </Text>
                    )}
                  </View>
                </View>
                <View
                  style={[
                    styles.networkRow,
                    isExpanded && {
                      justifyContent: 'space-between',
                    },
                  ]}
                >
                  <View style={styles.network}>
                    <TouchableIcon
                      icon="wifi"
                      isToggled={isWifiToggled}
                      onPress={setWifiToggled}
                      delayLongPress={500}
                      onLongPress={() => handleExpandNetworkBlock(true)}
                      onPressIn={() => animateNetworkScale(1)}
                      onPressOut={() => animateNetworkScale(0)}
                      color={colors.blue}
                    />
                    {isExpanded && (
                      <Text style={styles.networkText}>
                        {'Wi-Fi\n'}
                        <Text style={{ fontWeight: 'bold' }}>
                          {isWifiToggled ? 'вкл' : 'выкл'}
                        </Text>
                      </Text>
                    )}
                  </View>
                  <View style={styles.network}>
                    <TouchableIcon
                      icon="bluetooth"
                      isToggled={isBluetoothToggled}
                      onPress={setBluetoothToggled}
                      delayLongPress={500}
                      onLongPress={() => handleExpandNetworkBlock(true)}
                      onPressIn={() => animateNetworkScale(1)}
                      onPressOut={() => animateNetworkScale(0)}
                      color={colors.blue}
                    />
                    {isExpanded && (
                      <Text style={styles.networkText}>
                        {'Bluetooth\n'}
                        <Text style={{ fontWeight: 'bold' }}>
                          {isBluetoothToggled ? 'вкл' : 'выкл'}
                        </Text>
                      </Text>
                    )}
                  </View>
                </View>
                {isExpanded && (
                  <View
                    style={[
                      styles.networkRow,
                      {
                        justifyContent: 'space-between',
                      },
                    ]}
                  >
                    <View style={styles.network}>
                      <TouchableIcon
                        icon="airDrop"
                        isToggled={isAirDropToggled}
                        onPress={setAirDropToggled}
                        color={colors.blue}
                      />
                      <Text style={styles.networkText}>
                        {'AirDrop\n'}
                        <Text style={{ fontWeight: 'bold' }}>
                          {isAirDropToggled ? 'вкл' : 'выкл'}
                        </Text>
                      </Text>
                    </View>
                    <View style={styles.network}>
                      <TouchableIcon
                        icon="hotspot"
                        isToggled={isHotspotToggled}
                        onPress={setHotspotToggled}
                        color={colors.blue}
                      />
                      <Text style={styles.networkText}>
                        {'Режим модема\n'}
                        <Text style={{ fontWeight: 'bold' }}>
                          {isHotspotToggled ? 'вкл' : 'выкл'}
                        </Text>
                      </Text>
                    </View>
                  </View>
                )}
              </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View
              pointerEvents="none"
              style={[styles.block, { opacity: blocksOpacity }]}
            >
              <View style={styles.musicBlock}>
                <Text style={styles.whiteText}>Музыка</Text>
                <View style={styles.iconsRow}>
                  <MusicIcon icon="rewind" />
                  <MusicIcon icon="play" />
                  <MusicIcon icon="forward" />
                </View>
              </View>
            </Animated.View>
          </View>
          <Animated.View
            style={[styles.row, { opacity: blocksOpacity, zIndex: -1 }]}
          >
            <View style={[styles.phoneControlBlock]}>
              <View style={styles.iconsRow}>
                <AnimatedIcon
                  icon="orientation"
                  isToggled={isOrientationToggled}
                  onPress={setOrientationToggled}
                />
                <AnimatedIcon
                  icon="nightMode"
                  isToggled={isNightModeToggled}
                  onPress={setNightModeToggled}
                  size={horizontalUnits(25)}
                />
              </View>
              <View style={styles.horizontalBlock}>
                <Image
                  resizeMode="contain"
                  source={screenIcon}
                  style={styles.iconImage}
                />
                <Text style={[styles.screenText, styles.whiteText]}>
                  {'Повтор \nэкрана'}
                </Text>
              </View>
            </View>
            <VerticalSlider icon="brightness" />
            <VerticalSlider icon="volume" />
          </Animated.View>
          <Animated.View
            style={[styles.row, { opacity: blocksOpacity, zIndex: -1 }]}
          >
            <AnimatedIcon
              icon="lighter"
              isToggled={isLighterToggled}
              onPress={setLighterToggled}
            />
            <AnimatedIcon
              icon="timer"
              isToggled={isTimerToggled}
              onPress={setTimerToggled}
            />
            <AnimatedIcon
              icon="calculator"
              isToggled={isCalculatorToggled}
              onPress={setCalculatorToggled}
            />
            <AnimatedIcon
              icon="camera"
              isToggled={isCameraToggled}
              onPress={setCameraToggled}
            />
          </Animated.View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
