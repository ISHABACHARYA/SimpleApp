import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

class TextField extends React.Component{
  state ={
    placeholder: this.props.placeholder,
  }
  render(){
    const {label, keyboardInputType, secureTextEntry, onChangeText} = this.props
    console.log(this.state.placeholder)
    return(
      <View>
        <Text style={{fontWeight: 'bold'}}>{label}</Text>
        <View>
            <TextInput
            placeholder= {this.state.placeholder}
            secureTextEntry= {secureTextEntry}
            keyboardInputType= {keyboardInputType}
            style= {styles.box}
            onChangeText= {onChangeText}
            onTouchStart={() => this.setState({placeholder: ''})}
            />
        </View>
      </View>
    );
}
}
const styles= {
  box: {
    borderBottomWidth:2,
    borderBottomColor: '#BDBDBD',
    height: 40,
    width: 200
  }
}

export default TextField;