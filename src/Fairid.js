import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';

import { 
    Container,
    Header,
    Content,
    Thumbnail,
    Button,
    Icon
  } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import NavFooter from './NavFooter';

export default class Fairid extends Component {
    render () {
        const { navigate } = this.props.navigation;
        const { routeName } = this.props.navigation.state;
        return (
            <Container>
                <Content>
                    <ImageBackground
                        style={{
                        flex: 1,
                        height: 560  
                        }}
                        source={{ uri: 'https://4.bp.blogspot.com/-h3FhBWalHyY/WmsDbYpE_QI/AAAAAAAAbog/zd7OUG4U_vI-a9A3R9Y_ZJBv1m5xH7xoQCLcBGAs/s1600/fairid%2Bumi%2Bmenang.jpg' }}
                    >
                        <Grid>
                        <Col style={{
                            width: '100%'
                            }}
                            >
                            <Row style={{ 
                                alignSelf: 'center',
                                marginTop: 250 
                                }}
                            >
                                <Text style={{fontSize: 24}} >Profil</Text>
                            </Row>
                        </Col>
                        </Grid>
                        <Grid>
                            <Col style={{ height: 100, width:100, padding:5 }}>
                                <Text style={{fontSize: 12, color: 'white'}} >Visi</Text>
                            </Col>
                            <Col style={{ backgroundColor: 'yellow', height: 200, opacity: 0.5, padding:5 }}>
                                <Text style={{fontSize: 12, color: 'white'}} >Misi</Text>
                            </Col>
                        </Grid>
                    </ImageBackground>
                </Content>
                <NavFooter navigate={navigate} routeName={routeName} />                
            </Container>
        )
    }

}