import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import FriendStatus from '../Components/Friendstatus';

class Friends extends React.Component {
  render() {
    const image1 = <Image
      source={require('../Images/Bitmap2.png')}
      style={styles.image}
    />
    const image2 = <Image
      source={require('../Images/Bitmap5.png')}
      style={styles.image}
    />
    const image3 = <Image
      source={require('../Images/photo.png')}
      style={styles.image}
    />
    const friendImage1 = <Image
      source={require('../Images/Bitmap5.png')}
      style={{ height: 40, width: 40, }}
    />
    const friendImage2 = <Image
      source={require('../Images/Bitmap6.png')}
      style={{ height: 40, width: 40, }}
    />

    return (
      <ScrollView>
        <View>
          <FriendStatus
            name='Piyush Blues'
            time='4hrs ago'
            image={image3}
            comments='30 comments'
            status='There is nothing worse than a sharp image of a fuzzy concept.'
          />
          <FriendStatus
            name='Natasha White'
            image={friendImage1}
            time='2 hrs ago'
            status= 'Do not cry because it is over smile because it happened.' 

            comments='34 comments'
          />
          <FriendStatus
            name='Andy Young'
            image={friendImage2}
            time='3 hrs ago'
            status='Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.'
            comments='10 comments'
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = {
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  }
}
export default Friends;