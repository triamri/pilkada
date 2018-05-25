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

import ImageSlider from 'react-native-image-slider';

import { Col, Row, Grid } from 'react-native-easy-grid';

import NavFooter from './NavFooter';

export default class Home extends Component {
    render () {
        const { navigate } = this.props.navigation;
        const { routeName } = this.props.navigation.state;
        return (
            <Container>
                <Content>
                <Grid>
                <Col style={{
                    backgroundColor: '#635DB7', 
                    alignItems: 'center',
                    width: '100%', 
                    height: 300
                }}>
                    <ImageSlider images={[
                        'https://1.bp.blogspot.com/-4Ivyx1de8U0/WoXb4UH9GmI/AAAAAAAAClo/kuAEy6_SGJ81JRgTggR_ZtCS54ZuxDA3wCLcBGAs/s1600/PASLON%2BPILWAKOT.jpg',
                        'https://2.bp.blogspot.com/-ZM7zFsDwhYs/WpYuzHS_apI/AAAAAAAADAY/OvcHE4sD8UgtIk3a00XeCzhO2oQBZmk5ACLcBGAs/s320/photo.jpg',
                        'https://i2.wp.com/www.cakrawala.co/wp-content/uploads/2018/02/iklan-farid1.jpg?ssl=1'
                    ]}/>
                </Col>
                </Grid>
                <Grid>
                    <Col style={{ margin: 10, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 100,
                                height: 100 
                            }} 
                            source={{
                                uri: 'https://seeklogo.com/images/P/partai-golkar-logo-E1EB177BE8-seeklogo.com.png'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 10, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 100,
                                height: 100
                            }} 
                            source={{
                                uri: 'http://1.bp.blogspot.com/-hjuz6kRg3Ng/UDDrMBMLypI/AAAAAAAAAOY/78w_2zXKWcM/s1600/LOGO+PARTAI+DEMOKRAT.png'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 10, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 100,
                                height: 100
                            }} 
                            source={{
                                uri: 'http://4.bp.blogspot.com/-hN4CZLKN6wY/UHfQfVDLPEI/AAAAAAAAAkI/5ib6MvIlZvg/s1600/Partai+Amanat+Nasional+-+PAN.png'
                            }} 
                        />
                    </Col>
                </Grid>
                <Grid>
                    <Col style={{ margin: 10, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 100,
                                height: 100 
                            }} 
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/7/73/Logo_PPP.svg/1024px-Logo_PPP.svg.png'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 10, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 100,
                                height: 100
                            }} 
                            source={{
                                uri: 'http://3.bp.blogspot.com/-Ec3WnfPiSjQ/UH98hW6F8lI/AAAAAAAAAk4/egZp22rvNsE/s1600/Partai+Keadilan+Sejahtera+-+PKS.png'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 10, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 100,
                                height: 100
                            }} 
                            source={{
                                uri: 'https://3.bp.blogspot.com/-2N0QJ3kFn4Y/VuQ32cdOMvI/AAAAAAAAAW8/wl_vGwYlFLg_CrnzjCRVUTehbN7j9xirA/s1600/Download%2BLogo%2BPARTAI%2BPERINDO%2BVector%2BCDR.jpg'
                            }} 
                        />
                    </Col>
                </Grid>
                <Grid>
                    <Col style={{ margin: 10, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 100,
                                height: 100 
                            }} 
                            source={{
                                uri: 'https://mediaharapan.com/wp-content/uploads/2017/06/22/IMG_20170622_225506.jpg'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 10, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 100,
                                height: 100
                            }} 
                            source={{
                                uri: 'http://3.bp.blogspot.com/--l9B_3d6E_M/UH-RJupzXiI/AAAAAAAAApI/2HUnj19PTmM/s1600/Partai+Bulan+Bintang+-+PBB.png'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 10, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 100,
                                height: 100
                            }} 
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/59/Logo_Partai_Garuda.svg/1024px-Logo_Partai_Garuda.svg.png'
                            }} 
                        />
                    </Col>
                </Grid>
                </Content>
                <NavFooter navigate={navigate} routeName={routeName} />
            </Container>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    slider: { backgroundColor: '#000', height: 350 },
    content1: {
      width: '100%',
      height: 50,
      marginBottom: 10,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content2: {
      width: '100%',
      height: 100,
      marginTop: 10,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentText: { color: '#fff' },
    buttons: {
      zIndex: 1,
      height: 15,
      marginTop: -25,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
  }
})