import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import FriendStatus from '../Components/Friendstatus';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#4E342E'
  }
  render() {

    const image1 = <Image
      source={require('../Images/Bitmap2.png')}
      style={styles.images}
    />
    const image2 = <Image
      source={require('../Images/Bitmap4.png')}
      style={styles.images}
    />
    const friendImage1 = <Image
      source={require('../Images/Bitmap5.png')}
      style={{ height: 40, width: 40, }}
    />
    const friendImage2 = <Image
      source={require('../Images/Bitmap6.png')}
      style={{ height: 40, width: 40, }}
    />
    const image3 = <Image
      source={require('../Images/photo.png')}
      style={{ height: 40, width: 40,borderRadius: 20 }}
    />
    var status = 
    "I’m planning my weekend, and I got two choices: hiking or going to a concert. Help me to choose :)"

    return (
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              {image1}
            </View>
            <View>
              {image2}
            </View>
          </View>
          <View>
            <FriendStatus
              name='Natasha White'
              image={friendImage1}
              time='2 hrs ago'
              status={status}
              comments='34 comments'
            />
            <FriendStatus
              name='Andy Young'
              image={friendImage2}
              time='3 hrs ago'
              status={status}
              comments='10 comments'
            />
            <FriendStatus
              name='Piyush Blues'
              time='4hrs ago'
              image={image3}
              comments='30 comments'
              status='There is nothing worse than a sharp image of a fuzzy concept.'
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  images: {
    height: 300,
    width: 180,
    borderRadius: 5,
    margin: 1
  },
  iconStyle:{
    height: 35,
    width: 20,
    backgroundColor: 'transparent'
  }
}
export default HomeScreen;