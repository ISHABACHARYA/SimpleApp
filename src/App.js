import React from 'react';
import * as firebase from "firebase";
import Router from './Navigation/Router';

class App extends React.Component{
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDGNiTpRYSevVz2mleDzlQvDzXV0HfVxf0",
      authDomain: "login-d38be.firebaseapp.com",
      databaseURL: "https://login-d38be.firebaseio.com",
      projectId: "login-d38be",
      storageBucket: "login-d38be.appspot.com",
      messagingSenderId: "218999278386"
    };
    firebase.initializeApp(config);
  }
  
  render(){
    return (
        <Router />
    );
  }
}
export default App;
