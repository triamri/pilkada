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

export default class SplashScreen extends Component {
    
    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 5000)
    }

    render () {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Col style={{
                            backgroundColor: 'white',
                            height: 215
                            }}
                            >
                            <Thumbnail 
                                style={{ 
                                    marginTop: 30,
                                    alignSelf: 'center',
                                    width: 200,
                                    height: 200 
                                }} 
                                source={{
                                    uri: 'https://scontent-lhr3-1.cdninstagram.com/vp/2233b970edd49aa38931a5e49bbd875a/5B975359/t51.2885-15/e35/27879069_354818048330795_3520991314264981504_n.jpg'
                                }} 
                            />
                        </Col>
                    </Grid>
                    <ImageBackground
                        style={{
                        flex: 1
                        }}
                        source={{ uri: 'https://4.bp.blogspot.com/-h3FhBWalHyY/WmsDbYpE_QI/AAAAAAAAbog/zd7OUG4U_vI-a9A3R9Y_ZJBv1m5xH7xoQCLcBGAs/s1600/fairid%2Bumi%2Bmenang.jpg' }}
                    >
                        <Grid>
                        <Col style={{
                            width: '100%',
                            height: 400
                            }}
                            >
                        </Col>
                        </Grid>
                    </ImageBackground>
                </Content>
            </Container>
        )
    }

}