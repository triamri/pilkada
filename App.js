/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SplashScreen from  './src/SplashScreen';
import Home from  './src/Home';
import VisiMisi from  './src/VisiMisi';
import Profil from  './src/Profil';
import Fairid from  './src/Fairid';
import Umi from  './src/Umi';
import Kontak from  './src/Kontak';

const NavFairid = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  Home: {
    screen: Home
  },
  VisiMisi: {
    screen: VisiMisi
  },
  Profil: {
    screen: Profil
  },
  Fairid: {
    screen: Fairid
  },
  Umi: {
    screen: Umi
  },
  Kontak: {
    screen: Kontak
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Profil'
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <NavFairid />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
