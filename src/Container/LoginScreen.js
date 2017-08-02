import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import TextField from '../Components/TextField';
import Button from '../Components/Button';
import {NavigationActions} from 'react-navigation';
import firebase from 'firebase';


class LoginScreen extends React.Component {

  state = {
    email: '',
    password: '',
  }
  validUser(){
   firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
   .then(()=> this.props.navigation.navigate('Tabs'));
  }
  render() {
    var image =
      <Image
        source={require('../Images/Bitmap.png')}
        style={{ height: 350,}}
        resizeMethod='auto'
      />
    return (
      <View style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
        <View >
          {image}
        </View>
        <View>
          <TextField
            placeholder='email address'
            keyboardType='email-address'
            onChangeText={(email) => this.setState({ email })}
              />
              <TextField 
              placeholder='Password' 
              secureTextEntry
              onChangeText={(password) => this.setState({ password })}
               />
        </View>
        <View style={{ marginVertical: 20 }}>
            <Button label='Login' onPress={()=>this.validUser()}/>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text>
              Or
        </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../Images/Shape.png')} />
            <TouchableOpacity>
              <Text style={{ color: '#2196F3', fontWeight: 'bold' }}> login With Facebook</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                justifyContent: 'flex-end', marginTop: 10
              }}
              onPress={() => this.props.navigation.navigate('signUp')}>
              <Text style={{ color: '#BDBDBD', fontWeight: 'bold' }}>
                No Account? Sign Up
               </Text>
            </TouchableOpacity>
          </View>
        </View>
        );
  }
}

export default LoginScreen;