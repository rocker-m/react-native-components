import React, { Component } from 'react'
import { View, Image } from 'react-native';

const Loader = () => {

    return (
        <View style={styles.container}>
            <Image style={styles.loadingImg} source={require('./images/turtle.gif')} />
        </View>
    )

}
const styles ={
    container: {
      flex:1,
      backgroundColor:'#00b828',
      alignItems:'center',
      justifyContent:'center'
    },
    loadingImg:{
      width:200,
      height:200,
      alignItems:'center',
      justifyContent:'center'
    }
  }

  export default Loader;