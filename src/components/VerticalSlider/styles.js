import { StyleSheet } from 'react-native';
import {
  columnsWidth,
  horizontalUnits,
  verticalUnits,
} from '../../utils/scaling';
import colors from '../../utils/colors';

export default StyleSheet.create({
  icon: {
    zIndex: 1,
    marginBottom: verticalUnits(15),
    tintColor: colors.grey,
    width: horizontalUnits(35),
    height: horizontalUnits(35),
  },

  sliderBlock: {
    overflow: 'hidden',
    width: columnsWidth(1),
    height: columnsWidth(2),
    backgroundColor: colors.blackBackground,
    borderRadius: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  slider: {
    position: 'absolute',
    top: 50,
    height: 999999,
    width: '100%',
    backgroundColor: colors.white,
  },
});
