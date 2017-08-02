import {
  Platform
} from 'react-native';

export default Icons={
  ...Platform.select({
    ios: {
      home: 'ios-home',
      setting: 'ios-settings',
      post: 'ios-paper'
    },
    android: {
      home: 'md-home',
      setting: 'md-settings',
      post: 'md-paper'
    }
  })
}