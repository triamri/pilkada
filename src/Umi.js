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
    Icon,
    Tab, 
    Tabs, 
    ScrollableTab
  } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import NavFooter from './NavFooter';

export default class Umi extends Component {
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
                                <Text style={{fontSize: 24, fontWeight: 'bold'}} >Hj. UMI MASTIKAH, SH</Text>
                            </Row>
                        </Col>
                    </Grid>
                    <Tabs renderTabBar={()=> <ScrollableTab />}>
                        <Tab tabStyle={{backgroundColor: 'green'}} textStyle={{color: '#fff'}} heading="PROFIL">
                        <Grid>
                            <Col style={{ backgroundColor: 'yellow', height: 400, padding:10 }}>
                                <Text style={{fontSize: 12, color: 'black'}} >Nama Lengkap : Hj. Umi Mastika, SH</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Tempal/Tanggal Lahir : Pati, 16 November 1975</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Alamat : Jln. Hiu Putih Raya No. 54A</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Agama	: Islam</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Pendidikan Terakhir :	S1 Ilmu Hukum Universitas Diponegoro</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Suami	: H. Muhammad Sriosako, S.Sos</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >Anak	: Veresa Chintya</Text>
                            </Col>
                        </Grid>
                        </Tab>
                        <Tab tabStyle={{backgroundColor: 'green'}} textStyle={{color: '#fff'}} heading="PENGALAMAN BEKERJA">
                        <Grid>
                            <Col style={{ backgroundColor: 'yellow', height: 400, padding:10 }}>
                                <Text style={{fontSize: 12, color: 'black'}} >1998 Pengajar TPQ</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >1998 Staf Perpustakaan FH UNDIP</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >1999 Pengajar Madrasah Diniyyah</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >1999 Staf Administrasi Keuangan FH UNDIP</Text>                                
                                <Text style={{fontSize: 12, color: 'black'}} >2014 Anggota DPRD</Text>
                            </Col>
                        </Grid>
                        </Tab>
                        <Tab tabStyle={{backgroundColor: 'green'}} textStyle={{color: '#fff'}} heading="ORGANISASI">
                        <Grid>
                            <Col style={{ backgroundColor: 'yellow', height: 400, padding:10 }}>
                                <Text style={{fontSize: 12, color: 'black'}} >1995-1997 Ketua FORMATRI (Forum Remaja Mesjid Putri)</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >1997-1998 Sekretaris FATAYAT NU</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2000-2004 Wakil Sekretaris Forum Keluarga Muslim FH UNDIP</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2007-2012 Wakil Sekretaris DPD Partai Demokrat</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2012-2017 Wakil Koordinator DPD Partai Demokrat</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2012-2018 Ketua DPC Partai Demokrat</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2009-2018 Wakit Ketua Ikiawan Kota Palangka Raya</Text>
                                <Text style={{fontSize: 12, color: 'black'}} >2014-2018 Anggota Ikiawan DPRD Provinsi Kalimantan Tengah</Text>
                            </Col>
                        </Grid>
                        </Tab>
                    </Tabs>
                </Content>
                <NavFooter navigate={navigate} goBack={goBack} routeName={routeName} />                
            </Container>
        )
    }

}