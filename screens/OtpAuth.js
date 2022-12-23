import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import GoBack from '../assets/goBack.svg'
import { Heading } from '../components'
import CircularProgress from 'react-native-circular-progress-indicator';
import React, { useEffect, useState } from 'react'
import { 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  
 } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
 import {useFonts} from "expo-font"
const OtpAuth = ({route,navigation}) => {
  // console.log(OtpCode)
  const [otpCode, setOtpCode] = useState(Math.floor(100000 + Math.random() * 900000))
  const [countDown, setCountDown] = useState(30)

  useEffect(() => {
    const interval = setInterval(() => {
     if(countDown === 0){
       setCountDown(30)
       setOtpCode(Math.floor(100000 + Math.random() * 900000))
     } 
     else if(countDown >= 0){

        setCountDown(countDown -1)
      }
    }, 1000);
   return () => clearInterval(interval) 
  })

  const { OtpCode } = route.params;

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
    style={{paddingHorizontal : 20,paddingVertical : 20, width : '100%', height : '100%',backgroundColor : '#000000'}}
    >
      <TouchableOpacity 
       onPress={()=> {navigation.goBack()}}
       style={{backgroundColor : '#131313' ,width : 50, height : 50, borderRadius : 8,justifyContent : 'center', alignItems : 'center'}} 
      ><GoBack width={20} height={20} fill='#000000'/></TouchableOpacity>
      <StatusBar style={{backgroundColor : 'black', barStyle : 'dark-content'}}/>
      <View
        style={{paddingTop : 30,flex : 1,justifyContent : 'space-between', }}
      >
        <Heading heading='OTP Authentication' title='Please enter OTP sent to your email'/>
        
         <View style={{alignItems : 'center'}}>
         <View 
          style={{borderWidth : 19, borderColor : '#0F1030', width : 200,height : 200,justifyContent : 'center' ,alignItems : 'center',borderRadius : 200 }}
         >
         
         <CircularProgress
          value={countDown }
          title={otpCode}
          titleColor='#ffffff'
          maxValue={30}
          radius={80}
          showProgressValue={false}
          activeStrokeColor={'#4B4FED'}
          // activeStrokeSecondaryColor={'#C25AFF'}
          delay={countDown}
        />
         </View>
         <Text style={{fontFamily : 'Poppins_600SemiBold',fontSize : 18,color : '#BDBDBD',textAlign : 'center',marginTop:17,}}>Submit OTP in {countDown}</Text>
         </View>
        <TouchableOpacity
                onPress={()=> navigation.navigate('SuccessAuth')}
                style={{ width: '100%', borderRadius: 7, backgroundColor: '#4B4FED', paddingHorizontal: 40, paddingVertical: 14, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}
            ><Text style={{fontFamily : 'Poppins_600SemiBold', color: 'white', fontSize: 15 }}>Verify</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default OtpAuth

const styles = StyleSheet.create({})