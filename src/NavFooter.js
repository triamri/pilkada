import React, { Component } from 'react';
import { BackHandler, Alert } from 'react-native';
import { 
  Footer, 
  FooterTab, 
  Button, 
  Icon, 
  Text
} from 'native-base';

export default class NavFooter extends Component {

  componentDidMount() {
    console.log(this.props);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton) 
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton = () => {
    if (this.props.routeName === 'Home') {
      Alert.alert(
        'Keluar',
        'Keluar Dari Aplikasi?', [{
            text: 'Batal',
            onPress: () => console.log('Cancel Pressed'),
            style: 'Batal'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
     )
     return true;
    } else {
      this.props.goBack();
      return true;
    }
  }

  render() {
    const navigate = this.props.navigate
    return (
      <Footer>
        <FooterTab>
          <Button vertical
            onPress={() => navigate('Home')}
          >
            <Icon name="ios-home-outline" />
            <Text>Beranda</Text>
          </Button>
          <Button vertical
            onPress={() => navigate('VisiMisi')}
          >
            <Icon name="ios-list-box-outline" />
            <Text>Visi & Misi</Text>
          </Button>
          <Button vertical
            onPress={() => navigate('Profil')}
          >
            <Icon name="person" />
            <Text>Profile</Text>
          </Button>
          <Button vertical
            onPress={() => navigate('Kontak')}
          >
            <Icon name="ios-exit-outline" />
            <Text>Kontak</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}