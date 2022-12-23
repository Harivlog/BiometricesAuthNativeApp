import { StyleSheet, Text, View ,StatusBar, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Heading, LogoBox } from '../components'
import AppLoading from 'expo-app-loading';
// import * as SplashScreen from 'expo-splash-screen';
// import { 

//   Poppins_600SemiBold,
//   Poppins_700Bold,
  
//  } from '@expo-google-fonts/poppins'
//  import {useFonts} from "expo-font"

 // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();


const Splash = ({navigation}) => {
  // let [fontsLoad] = useFonts({
    
  // Poppins_600SemiBold,
  // Poppins_700Bold
  // })
  // if(!fontsLoad){
  //   return <AppLoading/> 
  // }
  return (
    <View
      style={styles.splash_container }
    >
      <StatusBar style={{backgroundColor : 'black', barStyle : 'dark-content'}}/>
      <View style={{paddingHorizontal : 20}}><LogoBox/></View>
      <View style={{width : '100%', height : 300, }}>

      <Image style={{width : '100%' ,height : 390, resizeMode : 'contain'}} source={require('../assets/splashImg.png')}/>
      <View style={{paddingHorizontal : 20 , marginTop : 20}}>
         
          <Heading
          heading="Multi Factor Authentication" title='Identifies the users by the way they type using Artificial Intelligence and Machine Learning'
          />
          <View style={{marginVertical : 35, flexDirection : 'row',  justifyContent : 'space-between' }}>
            <TouchableOpacity
              onPress={()=> navigation.navigate('Login')}
              style={{borderRadius : 7,borderWidth : 1,borderColor : '#4B4FED', paddingHorizontal : 40 , paddingVertical : 11,width : '48%',flexDirection : 'column', justifyContent : 'center', alignItems : 'center' }}
            ><Text style={{fontFamily: "Poppins_600SemiBold",color : 'white', fontSize : 15 }}>Login</Text></TouchableOpacity>
       <TouchableOpacity
             onPress={()=> navigation.navigate('Register')}
             style={{borderRadius : 7,backgroundColor : '#4B4FED', paddingHorizontal : 40 , paddingVertical : 11,width : '48%',flexDirection : 'column', justifyContent : 'center', alignItems : 'center' }}
            ><Text style={{fontFamily: "Poppins_600SemiBold", color : 'white', fontSize : 15,fontWeight : '600' }}>Register</Text></TouchableOpacity>
          </View>
      </View>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  splash_container : {
     backgroundColor : '#000000',
     width : '100%',
     height : '100%',
     position : 'relative',
  
  }
})