import {
  StyleSheet,
  Dimensions,
  Platform,
  PlatformIOSStatic,
  PixelRatio,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;
const platformIOS = Platform as PlatformIOSStatic;
const isIpad = platformIOS.isPad;
const isAndroid = Platform.OS === "android";

const IOSReduce = screenHeight < 760;
const scale = screenWidth / 375;
const scaleVertical = screenHeight / 812;

export function getNormalizedSizeWithPlatformOffset(size: number) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export function getNormalizedVerticalSizeWithPlatformOffset(size: number) {
  const newSize = size * scaleVertical;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export function isTablet() {
  if (screenWidth > 550) {
    return true;
  } else {
    return false;
  }
}

export function isScreenHeight770() {
  if (screenHeight > 740 && screenHeight < 760) {
    return true;
  } else {
    return false;
  }
}
