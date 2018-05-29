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
    ScrollableTab,
    List, 
    ListItem
  } from 'native-base';

import ImageSlider from 'react-native-image-slider';  
import { Col, Row, Grid } from 'react-native-easy-grid';
import NavFooter from './NavFooter';

export default class VisiMisi extends Component {
    render () {
        const { navigate, goBack } = this.props.navigation;
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
                    <Tabs renderTabBar={()=> <ScrollableTab />}>
                        <Tab tabStyle={{backgroundColor: 'green'}} textStyle={{color: '#fff'}} heading="Program Lingkungan Cerdas">
                        <Grid>
                            <Col style={{ backgroundColor: 'yellow'}}>
                            <List>
                                <ListItem itemDivider>
                                <Text>Infrastruktur</Text>
                                </ListItem>                    
                                <ListItem >
                                <Text>Perbaikan kualitas jalan-jalan lingkungan, dalam kota, antar kecamatan dan luar kota</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Penuntasan pembangunan perkantoran Lingkar Dalam</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan pengelolaan sektor energi listrik</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Perbaikan drainase dan air minum</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan Fasilitas Umum</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Menyiapkan gedung pagelaran seni dan budaya untuk semua komunitas</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                <Text>Pertanian Tanaman Pangan , Lingkungan Hidup, Persampahan</Text>
                                </ListItem>  
                                <ListItem>
                                <Text>Peningkatan pemanfaatan lahan untuk budidaya</Text>
                                </ListItem>
                                <ListItem>
                                <Text>pertanian dan perkebunan, Keanekaragaman hayati di Kecamatan Sabangau dan  Rakumpit</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan pengelolaan sampah dan pengelolaan limbah</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                <Text>Tata ruang, Transportasi</Text>
                                </ListItem>  
                                <ListItem>
                                <Text>Perbaikan manajemen tata ruang kota</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Pengelolaan transportasi angkutan kota ke objek-objek wisata</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Penataan kota dan pemukiman  yang tertata di Kecamatan Pahandut dan Jekan Raya</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan Kawasan Pedesterian Yos Sudarso dan Lingkar Dalam</Text>
                                </ListItem>
                            </List>
                            </Col>
                        </Grid>
                        </Tab>
                        <Tab tabStyle={{backgroundColor: 'green'}} textStyle={{color: '#fff'}} heading="Program Masyarakat Cerdas">
                        <Grid>
                            <Col style={{ backgroundColor: 'yellow'}}>
                            <List>
                                <ListItem itemDivider>
                                <Text>Kesehatan, Pendidikan, Kepemudaan, Layanan Publik , Komunikasi</Text>
                                </ListItem> 
                                <ListItem>
                                <Text>Peningkatan kualitas kesehatan masyarakat</Text>
                                </ListItem>                    
                                <ListItem >
                                <Text>Perbaikan kualitas  di semua jenjang pendidikan</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan peran pemuda</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Perbaikan kuantitas dan kualitas  layanan publik</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan keamanan kota hingga pelosok kota</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Pemanfaatan WiFi gratis di titik-titik strategis</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                <Text>Sosial Budaya</Text>
                                </ListItem>  
                                <ListItem>
                                <Text>Meningkatkan kerukunan dan kebersamaan masyarakat</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Menjaga kelestarian budaya dan kearifan lokal</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Terwadahinya seluruh kelompok komunitas untuk berekspresi di Museum Balanga</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Meningkatkan partisipasi masyarakat dalam pembangunan</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                <Text>Reformasi Birokrasi</Text>
                                </ListItem>  
                                <ListItem>
                                <Text>Rekruitmen dan penempatan aparatur</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Pelayanan yang cepat, ramah dan mudah bagi masyarakat</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Program One Agency dan One Innovation per tahun</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Mendukung dan mendorong inovasi dan profesionalisme aparatur pemerintah daerah</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Meningkatnya kapasitas dan akuntabilitas kinerja aparatur pemerintahan</Text>
                                </ListItem>
                            </List>
                            </Col>
                        </Grid>
                        </Tab>
                        <Tab tabStyle={{backgroundColor: 'green'}} textStyle={{color: '#fff'}} heading="Program Ekonomi Cerdas">
                        <Grid>
                            <Col style={{ backgroundColor: 'yellow'}}>
                            <List>
                                <ListItem itemDivider>
                                <Text>Ekonomi Kota</Text>
                                </ListItem>                    
                                <ListItem >
                                <Text>Peningkatan  jumlah industri di kawasan Temanggung Tilung</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningktanya jumlah usaha kecil dan menengah</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Berkembangannya sarana belanja yang nyaman</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan kualitas fisik pasar</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan kunjungan pariwisata</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan aktivitas perbankan</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                <Text>Pendapatan Daerah</Text>
                                </ListItem>  
                                <ListItem>
                                <Text>Peningkatan Pendapatan Asli Daerah</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Peningkatan investasi</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Partisipasi angkatan kerja</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Meningkatnya daya beli masyarakat</Text>
                                </ListItem>  
                                <ListItem>
                                <Text>Pengembangan ekonomi lokal</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Kesejahteraan Aparatur Sipil Negara  dan tenaga kontrak</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                <Text>Sumberdaya alam</Text>
                                </ListItem> 
                                <ListItem>
                                <Text>Peningkatan Destinasi Wisata Kecamatan Sebangau dan Perikanan</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Kecamatan Bukit Batu sebagai sentra tanaman palawija dan pariwisata</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Pengelolaan, konservasi, dan rehabilitasi sumberdaya daya alam</Text>
                                </ListItem>
                                <ListItem>
                                <Text>Pengembangan hutan kota</Text>
                                </ListItem>
                            </List>
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