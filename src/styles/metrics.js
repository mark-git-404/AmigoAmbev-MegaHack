import { Dimensions, Platform } from 'react-native';
import { Constants } from 'react-native-unimodules';

const { width, height } = Dimensions.get('window');

const metrics = {
    smallMargin: 5,
    baseMargin: 10,
    sideMargin: 10,
    doubleBaseMargin: 20,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    tabBarHeight: 54,
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    statusBarHeight: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight,
    baseRadius: 3,
};

export default metrics;