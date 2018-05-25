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

import ImageSlider from 'react-native-image-slider';  
import { Col, Row, Grid } from 'react-native-easy-grid';
import NavFooter from './NavFooter';

export default class VisiMisi extends Component {
    render () {
        const { navigate } = this.props.navigation;
        const { routeName } = this.props.navigation.state;
        return (
            <Container>
                <Content>
                    <Grid style={{ alignSelf: 'center' }}>
                    <Col style={{
                        width: '100%', 
                        height: 365
                    }}>
                        <ImageSlider images={[
                            'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/31306938_446650525758328_3941140167804321792_n.jpg?_nc_cat=0&oh=19ce469888fee8c08f5363c65987576f&oe=5B7685E0',
                            'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/31253069_446650549091659_289355090647580672_n.jpg?_nc_cat=0&oh=97ae9c3b17bedcae037a4726ad883bca&oe=5B917CCA',
                            'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/31235001_446650599091654_1951058820570546176_n.jpg?_nc_cat=0&oh=1c5beb5277cdf860e0b3b541f26835db&oe=5BBE48A4'
                        ]}/>
                    </Col>
                    </Grid>
                    <Grid>
                        <Col style={{ backgroundColor: 'yellow', width: 160 ,height: 195, opacity: 0.5, padding:10 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: "bold" }} >Visi</Text>
                            <Text style={{ alignSelf: 'center', fontWeight: "bold" }}>“TERWUJUDNYA KOTA PALANGKA RAYA YANG MAJU, RUKUN, DAN  SEJAHTERA UNTUK SEMUA ”</Text>
                        </Col>
                        <Col style={{ backgroundColor: 'yellow', height: 195, opacity: 0.5, padding:10 }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: "bold" }} >Misi</Text>
                            <Text style={{ fontWeight: "bold" }} >1. Mewujudkan Kemajuan kota Palangka Raya</Text>
                            <Text style={{ fontWeight: "bold" }} >2. Mewujudkan Kerukunan Seluruh Elemen Masyarakat</Text>
                            <Text style={{ fontWeight: "bold" }} >3. Mewujudkan Kesejahteraan Masyarakat di Perkotaan dan Perdesaan</Text>
                        </Col>
                    </Grid>
                </Content>
                <NavFooter navigate={navigate} routeName={routeName} />                
            </Container>
        )
    }

}