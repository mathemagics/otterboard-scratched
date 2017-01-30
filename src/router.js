import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/loginForm';

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ paddingTop: 85 }}
      hideNavBar={false}
    >
      navigationBarStyle={{
        backgroundColor: 'white',
        borderBottomColor: 'transparent',
        borderBottomWidth: 65 }}
      titleStyle={{ color: '#1A3461', fontWeight: '700' }}
    >
      <Scene key='auth'>
        <Scene
          key='login'
          component={LoginForm}
          title="Please Login"
          initial
          sceneStyle={{ backgroundColor: 'white' }}
        />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
