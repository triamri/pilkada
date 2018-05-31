import React, { Component } from 'react';
import { Linking, Alert } from 'react-native';
import { 
  Container, 
  Header, 
  Body,
  Content,
  Text, 
  Title,
  Thumbnail,
  H3,
  List, 
  ListItem,
  Right,
  Button,
  Icon
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

import NavFooter from './NavFooter';

export default class Kontak extends Component {

  render() {
    
    const { navigate, goBack } = this.props.navigation;
    const { routeName } = this.props.navigation.state;

    return (
      <Container>
        <Content>
        <Grid>
          <Col style={{
            paddingTop: 20,
            backgroundColor: 'yellow', 
            alignItems: 'center',
            width: '100%', 
            height: 250 
          }}>
            <Thumbnail style={{ width: 150, height: 150 }} source={{uri: 'https://scontent-lhr3-1.cdninstagram.com/vp/2233b970edd49aa38931a5e49bbd875a/5B975359/t51.2885-15/e35/27879069_354818048330795_3520991314264981504_n.jpg'}} />
            <H3 style={{ paddingTop: 30, color: 'black' }}>TIM PEMENANGAN FAIRID - UMI</H3>
          </Col>
        </Grid>
        </Content>
        <Content style={{
            alignContent: 'center'
          }}>
        <List>
          <ListItem avatar>
            <Right>
              <Text note>Alamat</Text>
            </Right>
            <Body>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
          </ListItem>
          <ListItem avatar>
            <Right>
              <Text note>Kontak</Text>
            </Right>
            <Body>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
          </ListItem>
        </List>
        <Button 
        onPress={ ()=>{ Linking.openURL('https://tawk.to/chat/5b0ec6088859f57bdc7bb0e9/default/?$_tawk_popout=true')}}
        style={{
            marginTop: 30,
            alignSelf: 'center',
            width: '60%'}}
        block>
            <Text><Icon style={{ color: 'white' }} name="ios-chatboxes-outline" /></Text>
        </Button>
        </Content>
        <NavFooter navigate={navigate} goBack={goBack} routeName={routeName} />        
      </Container>
    );
  }
}