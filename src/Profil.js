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

export default class Profil extends Component {
    render () {
        const { navigate, goBack } = this.props.navigation;
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
                        <Grid style={{ marginTop: 400 }}>
                            <Col style={{ padding:10, margin: 20 }}>
                                <Text style={{ fontSize: 8 }}>Tekan Tombol Dibawah Ini</Text>
                                <Button warning onPress={() => navigate('Fairid')}><Text style={{ color: 'white' }}> Fairid Naparin, SE </Text></Button>
                            </Col>
                            <Col style={{ padding:10, marginTop: 20 }}>
                                <Text style={{ fontSize: 8 }}>Tekan Tombol Dibawah Ini</Text>                                
                                <Button primary onPress={() => navigate('Umi')}><Text style={{ color: 'white' }}> Hj. Umi Mastikah, SH. </Text></Button>
                            </Col>
                        </Grid>
                    </ImageBackground>
                </Content>
                <NavFooter navigate={navigate} goBack={goBack} routeName={routeName} />                
            </Container>
        )
    }

}