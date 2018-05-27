import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Image
  } from 'react-native';

import { 
    Container, 
    Header, 
    Left,
    Right,
    Body,
    Content,
    Title,
    Text,
    List, 
    ListItem,
    Thumbnail
  } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

import NavFooter from './NavFooter';

export default class Kontak extends Component {
    render () {
        const { navigate, goBack } = this.props.navigation;
        const { routeName } = this.props.navigation.state;
        return (
            <Container>
                <Content>
                <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail 
                            style={{ 
                                width: 80,
                                height: 80 
                            }} 
                            source={{
                                uri: 'https://i2.wp.com/www.cakrawala.co/wp-content/uploads/2018/02/iklan-farid1.jpg?ssl=1'
                            }} 
                        />
                    </Left>
                    <Body>
                    <Text>Tim Sukses</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                    <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail 
                            style={{ 
                                width: 80,
                                height: 80 
                            }} 
                            source={{
                                uri: 'https://i2.wp.com/www.cakrawala.co/wp-content/uploads/2018/02/iklan-farid1.jpg?ssl=1'
                            }} 
                        />
                    </Left>
                    <Body>
                    <Text>Tim Sukses</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                    <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
                </List>
                </Content>
                <NavFooter navigate={navigate} goBack={goBack} routeName={routeName} />
            </Container>
        )
    }

}