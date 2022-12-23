import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LogoBox = () => {
  return (
    <View >
      <Image style={{width : 150 , height : 100, resizeMode : 'contain'}} source={require('../assets/logo.png')}/>
    </View>
  )
}

export default LogoBox

const styles = StyleSheet.create({})