import React from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

class Button extends React.Component{
  render(){
    const {label, onPress, } = this.props;
    return(
      <View  >
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text   style={{ color: '#2196F3',flex: 1, fontWeight: 'bold'}}>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles={
  button:{
    borderColor: '#2196F3',
    borderWidth: 2,
    height: 30,
    width: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
}
export default Button;
