import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import TextField from '../Components/TextField';
import Button from '../Components/Button';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';

class SignUpForm extends React.Component {
  state={
    email: '',
    Password: '',
    confirmPassword: '',
  }
  static navigationOptions= {
    title: 'signUp Form'
  }
  confirmUser(){
    if(this.state.password == this.state.confirmPassword){
     firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
     .then(()=> this.props.navigation.navigate('Tabs'))
    }
    else{
      alert('Password did not match');
    }
  }
  render() {
    return (
      <View style={{marginHorizontal: 20,marginTop:50}}>
        <View>
          <TextField label='Username *' />
          <TextField 
          label='Email *' 
          onChangeText= {(email) => this.setState({email})}
          />
          <TextField 
          label='New Password' 
          secureTextEntry 
          onChangeText={(password) => this.setState({ password })}
          />
          <TextField 
          label='Confirm Password' 
          secureTextEntry 
          onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Button label= 'SignUp'onPress={()=> this.confirmUser()}/>
        </View>
      </View>
    );
  }
}
export default SignUpForm;