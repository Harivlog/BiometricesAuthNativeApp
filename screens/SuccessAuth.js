import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'

import React from 'react'
import GoBack from '../assets/goBack.svg'  
import { 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  
 } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
 import {useFonts} from "expo-font"
const SuccessAuth = ({navigation}) => {
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

    <View 
    style={{paddingVertical : 20, width : '100%', height : '100%',backgroundColor : '#000000'}}
    >
      <StatusBar style={{backgroundColor : 'black', barStyle : 'dark-content'}}/>
      <TouchableOpacity 
       onPress={()=> {navigation.goBack()}}
       style={{ marginHorizontal : 20,backgroundColor : '#131313' ,width : 50, height : 50, borderRadius : 8,justifyContent : 'center', alignItems : 'center'}} 
      ><GoBack width={20} height={20} fill='#000000'/></TouchableOpacity>
      <View
      style={{
        flex : 1,
        justifyContent : 'space-between',
        alignItems : 'center'
      }}
      >
         <Image
          //  width={50} height={50}
           style={{resizeMode : 'cover', width : '100%', height : 430}}
           source={require('../assets/authenticationSucessfull.png')}
         />
         <Text style={{fontFamily : 'Poppins_600SemiBold', color: 'white', fontSize: 21, fontWeight: '660',textAlign :'center' }}>Authentication {"\n"} Sucessfull</Text>
         <View style={{ width : '100%',justifyContent : 'center',alignItems : 'center'}}>

         <TouchableOpacity
                onPress={()=> navigation.navigate('SuccessAuth')}
                style={{ width: '90%', borderRadius: 7, backgroundColor: '#4B4FED', paddingHorizontal: 40, paddingVertical: 14, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}
            ><Text style={{fontFamily : 'Poppins_600SemiBold', color: 'white', fontSize: 15 }}>Continue</Text></TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

export default SuccessAuth

const styles = StyleSheet.create({})