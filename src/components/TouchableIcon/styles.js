import { StyleSheet } from 'react-native';

import { horizontalUnits } from '../../utils/scaling';
import colors from '../../utils/colors';

export default StyleSheet.create({
  iconImage: {
    tintColor: colors.white,
    width: horizontalUnits(25),
    height: horizontalUnits(25),
  },

  iconContainer: {
    width: horizontalUnits(54),
    height: horizontalUnits(54),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
