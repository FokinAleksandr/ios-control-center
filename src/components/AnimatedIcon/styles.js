import { StyleSheet } from 'react-native';

import { columnsWidth } from '../../utils/scaling';

export default StyleSheet.create({
  iconBlock: {
    width: columnsWidth(1),
    height: columnsWidth(1),
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
