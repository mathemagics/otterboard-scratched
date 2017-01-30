import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/loginForm';

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 85 }}
    hideNavBar={false}
    navigationBarStyle={{
      backgroundColor: '#1A3461',
      borderBottomColor: 'transparent',
      borderBottomWidth: 65 }}
    titleStyle={{ color: '#fff', fontWeight: '700' }}
  >
    <Scene key='auth'>
      <Scene
        key='login'
        component={LoginForm}
        title="Please Login"
        initial
        sceneStyle={{ backgroundColor: '#1A3461' }}
      />
    </Scene>
  </Router>
);


export default RouterComponent;
