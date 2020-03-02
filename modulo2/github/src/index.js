/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import './config/DevTools';

import AsyncStorange from '@react-native-community/async-storage';
import createSwitchNavigator from './routes';

// import React, { Component } from 'react';

// import { Container } from './styles';

export default class App extends Component {
  state = {
    checkUser: false,
    userLoggend: false,
  };

  async componentDidMount() {
    const userLoggend = await AsyncStorange.getItem('@Githuber:username');
    console.log(`Usuario logado: ${userLoggend}`);
    this.setState({
      checkUser: true,
    });
    if (userLoggend != null) {
      this.setState({
        userLoggend: true,
      });
    }

    console.log(this.state.userLoggend);

    console.log(this.state.checkUser);

    // await AsyncStorange.clear();
  }

  render() {
    const {userLoggend, checkUser} = this.state;

    if (!checkUser) {
      const Routes = createSwitchNavigator(checkUser);
      return <Routes />;
    }

    const Routes = createSwitchNavigator(userLoggend);

    return <Routes />;
  }
}
