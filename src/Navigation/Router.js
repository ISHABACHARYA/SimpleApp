import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import LoginScreen from '../Container/LoginScreen';
import SignUpForm from '../Container/SignUpForm';
import HomeScreen from '../Container/HomeScreen';
import SetScreen from '../Container/SetScreen';
import Posts from '../Container/FriendsPosts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from '../theme/index';

const home = StackNavigator({
  Home: {screen: HomeScreen}
},
{
  navigationOptions:{
    title: 'Home',
    headerTintColor: '#4E342E',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name={Icons.home} color={tintColor} size={20} />
    )
  }
}
);

const setting = StackNavigator(
  {
    setting: {screen: SetScreen}
  },
  {
    navigationOptions:{
      title: 'Settings',
      headerTintColor: '#4E342E',
      tabBarIcon:({tintColor}) =>(
        <Ionicons name={Icons.setting} color={tintColor} size={20} />
      )
    }
  }
);

const Friend = StackNavigator(
  {
    friends:{screen: Posts}
  },
  {
    navigationOptions:{
      title: 'Posts',
      headerTintColor: '#4E342E',
      tabBarIcon :({tintColor})=>(
        <Ionicons name={Icons.post} color={tintColor} size={20} />
      )
    }
  }
);

const Tabs = TabNavigator({
  Home:{ screen: home },
  Friend: {screen: Friend},
  Settings: { screen: setting },
},
{ 
  tabBarOptions:{
  activeTintColor:'#2196F3',
  style:{height:50},
  labelStyle: {fontSize: 15}
}
});

const Router= StackNavigator({
  login:{screen: LoginScreen},
  signUp: {screen: SignUpForm},
  Tabs: {screen: Tabs}
},{
  headerMode: 'none'
}
);

export default Router;
