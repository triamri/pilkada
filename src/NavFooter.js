import React, { Component } from 'react';
import { 
  Footer, 
  FooterTab, 
  Button, 
  Icon, 
  Text
} from 'native-base';

export default class NavFooter extends Component {
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