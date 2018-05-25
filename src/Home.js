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
                <Content style={{ backgroundColor: 'yellow' }}>
                <Grid style={{ alignSelf: 'center' }}>
                <Col style={{
                    width: '100%', 
                    height: 365
                }}>
                    <ImageSlider images={[
                        'https://scontent-lga3-1.cdninstagram.com/vp/c69bb5ba456de80ad71cc1f9584a2eb2/5B72BF94/t51.2885-15/s320x320/e35/28751043_1507431339385122_5868804095355125760_n.jpg',
                        'https://scontent-sea1-1.cdninstagram.com/vp/4549789382574de1a84bcca2e7557dd0/5B6AE354/t51.2885-15/s480x480/e35/29738969_100344517488898_3156785805620412416_n.jpg',
                        'https://i2.wp.com/www.cakrawala.co/wp-content/uploads/2018/02/iklan-farid1.jpg?ssl=1'
                    ]}/>
                </Col>
                </Grid>
                <Grid>
                    <Col style={{ margin: 5, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 70,
                                height: 70 
                            }} 
                            source={{
                                uri: 'https://seeklogo.com/images/P/partai-golkar-logo-E1EB177BE8-seeklogo.com.png'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 5, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 70,
                                height: 70
                            }} 
                            source={{
                                uri: 'http://1.bp.blogspot.com/-hjuz6kRg3Ng/UDDrMBMLypI/AAAAAAAAAOY/78w_2zXKWcM/s1600/LOGO+PARTAI+DEMOKRAT.png'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 5, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 70,
                                height: 70
                            }} 
                            source={{
                                uri: 'http://4.bp.blogspot.com/-hN4CZLKN6wY/UHfQfVDLPEI/AAAAAAAAAkI/5ib6MvIlZvg/s1600/Partai+Amanat+Nasional+-+PAN.png'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 5, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 70,
                                height: 70 
                            }} 
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/7/73/Logo_PPP.svg/1024px-Logo_PPP.svg.png'
                            }} 
                        />
                    </Col>
                </Grid>
                <Grid style={{ marginTop:-30 }} >
                    <Col style={{ margin: 5, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 70,
                                height: 70 
                            }} 
                            source={{
                                uri: 'http://3.bp.blogspot.com/-Ec3WnfPiSjQ/UH98hW6F8lI/AAAAAAAAAk4/egZp22rvNsE/s1600/Partai+Keadilan+Sejahtera+-+PKS.png'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 5, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 70,
                                height: 70 
                            }} 
                            source={{
                                uri: 'https://3.bp.blogspot.com/-2N0QJ3kFn4Y/VuQ32cdOMvI/AAAAAAAAAW8/wl_vGwYlFLg_CrnzjCRVUTehbN7j9xirA/s1600/Download%2BLogo%2BPARTAI%2BPERINDO%2BVector%2BCDR.jpg'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 5, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 70,
                                height: 70 
                            }} 
                            source={{
                                uri: 'https://mediaharapan.com/wp-content/uploads/2017/06/22/IMG_20170622_225506.jpg'
                            }} 
                        />
                    </Col>
                    <Col style={{ margin: 5, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 70,
                                height: 70 
                            }} 
                            source={{
                                uri: 'http://3.bp.blogspot.com/--l9B_3d6E_M/UH-RJupzXiI/AAAAAAAAApI/2HUnj19PTmM/s1600/Partai+Bulan+Bintang+-+PBB.png'
                            }} 
                        />
                    </Col>
                </Grid>
                <Grid style={{ marginTop:-30 }} >
                    <Col style={{ margin: 5, height: 100 }}>
                        <Thumbnail 
                            style={{ 
                                width: 70,
                                height: 70 
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