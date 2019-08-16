import { Dimensions } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// разрешение iPhone 6
const BASE_WIDTH = 375;
const BASE_HEIGHT = 667;

export function horizontalUnits(units) {
  if (units < 0 || units > 375) {
    throw new Error('valid range is [0, 375]');
  }
  return (screenWidth / BASE_WIDTH) * units;
}

export function verticalUnits(units) {
  if (units < 0 || units > 667) {
    throw new Error('valid range is [0, 667]');
  }
  return (screenHeight / BASE_HEIGHT) * units;
}

const COLUMNS_COUNT = 4;
export const CONTAINER_MARGIN = horizontalUnits(27);
export const DISTANCE_BETWEEN_COLUMNS = horizontalUnits(15);
const COLUMN_WIDTH =
  (screenWidth -
    2 * CONTAINER_MARGIN -
    (COLUMNS_COUNT - 1) * DISTANCE_BETWEEN_COLUMNS) /
  COLUMNS_COUNT;

export function columnsWidth(count) {
  if (count < 1 || count > COLUMNS_COUNT) {
    throw new Error(`valid range is [1, ${COLUMNS_COUNT}]`);
  }

  return COLUMN_WIDTH * count + (count - 1) * DISTANCE_BETWEEN_COLUMNS;
}
