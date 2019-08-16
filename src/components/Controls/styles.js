import { StyleSheet } from 'react-native';

import {
  columnsWidth,
  horizontalUnits,
  DISTANCE_BETWEEN_COLUMNS,
  verticalUnits,
  CONTAINER_MARGIN,
} from '../../utils/scaling';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalUnits(131),
    marginHorizontal: CONTAINER_MARGIN,
    justifyContent: 'flex-start',
    marginBottom: verticalUnits(80),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: DISTANCE_BETWEEN_COLUMNS,
  },

  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  block: {
    width: columnsWidth(2),
    height: columnsWidth(2),
    backgroundColor: colors.blackBackground,
    borderRadius: 16,
  },

  placeholder: {
    width: columnsWidth(2),
    height: columnsWidth(2),
    opacity: 0,
  },

  iconBlock: {
    width: columnsWidth(1),
    height: columnsWidth(1),
    backgroundColor: colors.blackBackground,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  horizontalBlock: {
    width: columnsWidth(2),
    height: columnsWidth(1),
    backgroundColor: colors.blackBackground,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  networkRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  network: {
    alignItems: 'center',
  },

  networkText: {
    width: columnsWidth(2),
    textAlign: 'center',
    color: colors.white,
    marginTop: verticalUnits(5),
  },

  musicBlock: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: horizontalUnits(20),
    marginVertical: horizontalUnits(40),
  },

  phoneControlBlock: {
    height: columnsWidth(2),
    width: columnsWidth(2),
    justifyContent: 'space-between',
  },

  whiteText: {
    textAlign: 'center',
    color: colors.white,
  },

  screenText: {
    marginLeft: horizontalUnits(10),
    fontSize: horizontalUnits(12),
  },

  iconImage: {
    tintColor: colors.white,
    width: horizontalUnits(25),
    height: horizontalUnits(25),
  },
});
