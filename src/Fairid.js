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
        const { navigate, goBack } = this.props.navigation;
        const { routeName } = this.props.navigation.state;
        return (
            <Container>
                <Content>
                    <ImageBackground
                        style={{
                        flex: 1,
                        height: 300  
                        }}
                        source={{ uri: 'https://4.bp.blogspot.com/-h3FhBWalHyY/WmsDbYpE_QI/AAAAAAAAbog/zd7OUG4U_vI-a9A3R9Y_ZJBv1m5xH7xoQCLcBGAs/s1600/fairid%2Bumi%2Bmenang.jpg' }}
                    >
                    </ImageBackground>
                        <Grid style={{ marginTop: -300 }}>
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
                            <Col style={{ backgroundColor: 'yellow', height: 400, padding:10 }}>
                                <Text style={{fontSize: 12, color: 'black'}} >Nama Lengkap : Fairid Naparin Razak, SE</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Tempal/Tanggal Lahir : Banjarmasin, 28 Agustus 1985</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Alamat : Jln. G. Obos No. 66</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Agama	: Islam</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Pendidikan Terakhir :	S1 Universitas Diponegoro Fakultas Ekonomi</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Pengalaman Bekerja :</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2012-2017 Direktur CV. Kacapiring</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2012-2016 Direktur PT. Nafama</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2012-2017 Direktur Kacapiring Putra Estate (Perkebunan)</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Pengalaman Organisasi	: </Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2004 MAPALA Fakultas Ekonomi Universitas Diponegoro</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2005 Wakil Ketua BEM Fakultas Ekonomi Universitas Diponegoro</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2012-2017 Sekretaris DPD AMPI Prov. Kalimantan Tengah</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2012-2015 Biro Pemuda dan Olahraga DPD Partai Golongan Karya Prov. Kalimantan Tengah</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2014-2017 Ketua DPD KNPI Kalimantan Tengah</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2016-2020 Bendahara DPD Partai Golongan Karya Prov. Kalimantan Tengah</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2017-2018 Plt. Ketua DPD Partai Golongan Karya Prov. Kalimantan Tengah</Text>
                            </Col>
                        </Grid>
                </Content>
                <NavFooter navigate={navigate} goBack={goBack} routeName={routeName} />                
            </Container>
        )
    }

}