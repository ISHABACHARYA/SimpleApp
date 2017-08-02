import React from 'react';
import {
  View,
  Text,
} from 'react-native';

class FriendStatus extends React.Component {
  render() {
    const { name, image, status, time, comments } = this.props
    return (
      <View>
        <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: 'transparent' }}>
          <View >
            {image}
          </View>
          <View style={{ flexDirection: 'column', marginLeft: 30 }}>
            <View>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                {name}
              </Text>
              <Text style={{ fontSize: 10, color: '#757575' }}>
                {time}
              </Text>
            </View>
            <View style={{ width: 300, borderColor: '#BDBDBD' }}>
              <Text style={{ fontSize: 15, marginTop: 10, color: '#424242' }}>
                {status}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 10, color: '#757575' ,marginVertical:5}}>
            {comments}
          </Text>
        </View>
      </View>
    );
  }
}
export default FriendStatus;