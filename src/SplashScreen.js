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
                    <ImageBackground
                        style={{
                        flex: 1    
                        }}
                        source={{ uri: 'https://4.bp.blogspot.com/-h3FhBWalHyY/WmsDbYpE_QI/AAAAAAAAbog/zd7OUG4U_vI-a9A3R9Y_ZJBv1m5xH7xoQCLcBGAs/s1600/fairid%2Bumi%2Bmenang.jpg' }}
                    >
                        <Grid>
                        <Col style={{
                            width: '100%',
                            height: 616
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