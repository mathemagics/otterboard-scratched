import React, { Component } from 'react';
import { View } from 'react-native';
import { Madoka } from 'react-native-textinput-effects';
import { Button, Spinner } from './common';

class LoginForm extends Component {
  renderLoginButton() {
    return this.props.loading ?
      <Spinner size="large" /> :
      <Button>
        Sign In
      </Button>;
  }
  render() {
    const { inputStyle } = styles;
    return (
      <View style={{ top: 120, flex: 1, flexDirection: 'column' }}>
        <View style={inputStyle}>
          <Madoka
            label={'Email'}
            // this is used as active and passive border color
            borderColor={'#aee2c9'}
            containerStyle={{ width: 200 }}
            labelStyle={{ color: '#008445' }}
            inputStyle={{ color: '#143D73' }}
            keyBoardType='email-address'
          />
        </View>
        <View style={inputStyle}>
          <Madoka
            label={'Password'}
            // this is used as active and passive border color
            borderColor={'#aee2c9'}
            containerStyle={{ width: 200 }}
            labelStyle={{ color: '#008445' }}
            inputStyle={{ color: '#143D73' }}
            secureTextEntry
          />
        </View>
        <View style={{ height: 45, top: 30 }}>
          {/* show spinner if loading, otherwise button */}
          {this.renderLoginButton()}
        </View>
      </View>
    );
  }
}
const styles = {
  inputStyle: {
    height: 52,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  textStyle: {
    color: '#143D73',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 12
  }
};

export default LoginForm;
