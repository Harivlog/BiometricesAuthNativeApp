import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GoBack from '../assets/goBack.svg'
import { Heading } from '../components'
// import { StatusBar } from 'expo-status-bar'
import { 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  
 } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
 import {useFonts} from "expo-font"
const FingerPrintAuth = ({navigation}) => {
//   let [fontsLoad] = useFonts({
//     Poppins_400Regular,
//     Poppins_500Medium,
//    Poppins_600SemiBold,
//    Poppins_700Bold
//    })
// if(!fontsLoad){
//   return <AppLoading/> 
// }
  return (
    <View style={{paddingHorizontal : 20,paddingVertical : 20, width : '100%', height : '100%',backgroundColor : '#000000'}}>
      <StatusBar style={{backgroundColor : 'black', barStyle : 'dark-content'}}/>
      <TouchableOpacity 
       onPress={()=> {navigation.goBack()}}
       style={{backgroundColor : '#131313' ,width : 50, height : 50, borderRadius : 8,justifyContent : 'center', alignItems : 'center'}} 
      ><GoBack width={20} height={20} fill='#000000'/></TouchableOpacity>
      <View
       style={{flex : 1, justifyContent : 'space-between', paddingTop : 40 }}
      >
      <Heading heading='Fingerprint Authentication' title='Please scan your register finger'/>
      <View style={{
        justifyContent : 'center',alignItems : 'center'
      }}>
        <Image
          source={require('../assets/fingerPrint.png')}
          style={{width : 280, height : 280}}
        />
      </View>
      <TouchableOpacity
                onPress={()=> navigation.navigate('SuccessAuth')}
                style={{ width: '100%', borderRadius: 7, backgroundColor: '#4B4FED', paddingHorizontal: 40, paddingVertical: 14, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}
            ><Text style={{fontFamily : 'Poppins_600SemiBold', color: 'white', fontSize: 15 }}>Continue</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default FingerPrintAuth

const styles = StyleSheet.create({})