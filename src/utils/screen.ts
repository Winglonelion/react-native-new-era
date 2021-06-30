import { Dimensions, StatusBar } from 'react-native';
import Platform from './platform';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
const STANDARD_WINDOW = { width: 375, height: 667 };

const STATUS_BAR_HEIGHT = Platform.isIos ? 34 : StatusBar.currentHeight;
const isLargeView = shortDimension >= 600;
const isTabletMode = shortDimension / longDimension > 0.7;

// const buildAppTranslucentHeaderSpace = () => {
//   if (Platform.isAndroid) {
//     return Platform.isSupportTranslucentBar ? STATUS_BAR_HEIGHT : 0;
//   }
//   return STATUS_BAR_HEIGHT + 20;
// };

/**
 *
  Sometimes you don't want to scale everything in a linear manner, that's where moderate scale comes in.
  The cool thing about it is that you can control the resize factor (default is 0.5).
  If normal scale will increase your size by +2X, moderateScale will only increase it by +X, for example:
  ➡️ responsiveWidth(10) = 20
  ➡️ responsiveHeight(10) = 15
  ➡️ responsiveFontSize(10, 0.1) = 11
 * @param {*} size Number
 * @param {*} factor Number : default = 0.5
 */
export const responsiveWidth = (size: number) =>
  (shortDimension / STANDARD_WINDOW.width) * size;
export const responsiveHeight = (size: number) =>
  (longDimension / STANDARD_WINDOW.height) * size;
export const responsiveFontSize = (size: number, factor: number = 0.5) =>
  size + (responsiveWidth(size) - size) * factor;

// const safeArea = {
//   bottom: Platform.hasNotch ? 24 : 0,
//   bottomFull: Platform.hasNotch ? 34 : 0,
//   top: Platform.hasNotch ? 34 : 0,
//   topFull: Platform.hasNotch ? 44 : 0,
// };

// const statusBarOffsetHeight = buildAppTranslucentHeaderSpace();
const headerTrueHeight = responsiveHeight(40);
// const headerHeight = statusBarOffsetHeight + headerTrueHeight;
// const safeTopPadding = safeArea.top + statusBarOffsetHeight;
// const homeIndicatorHeight = Platform.hasNotch ? 34 : 0;

const Screen = {
  // headerHeight,
  headerTrueHeight,
  height,
  // homeIndicatorHeight,
  isLargeView,
  isTabletMode,
  keyBoardH: 216,
  rateImage: 9 / 16,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  // safeArea,
  // safeTopPadding,
  statusBarH: STATUS_BAR_HEIGHT,
  // statusBarOffsetHeight,
  width,
};

export default Screen;
