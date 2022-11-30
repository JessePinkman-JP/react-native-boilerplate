import { Dimensions, Platform } from 'react-native';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';

export default { IS_ANDROID, DEVICE_WIDTH, DEVICE_HEIGHT, IS_IOS };
