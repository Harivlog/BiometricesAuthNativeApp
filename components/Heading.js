import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading';
import { 
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  
 } from '@expo-google-fonts/poppins'
 import {useFonts} from "expo-font"
 const Heading = ({heading , title}) => {
    let [fontsLoad] = useFonts({
      Poppins_400Regular,
     Poppins_600SemiBold,
     Poppins_700Bold
     })
  if(!fontsLoad){
    return <AppLoading/> 
  }
  return (
    <View>
    <Text style={{lineHeight : 25, fontFamily: "Poppins_600SemiBold", color: 'white', fontSize: 22, fontWeight: '600' }}>{heading}</Text>
    <Text style={{ fontFamily: "Poppins_400Regular", marginTop: 4, color: '#BDBDBD', lineHeight: 22, fontSize: 13, fontWeight: '400' }}>{title}</Text>
</View>
  )
}

export default Heading

const styles = StyleSheet.create({})