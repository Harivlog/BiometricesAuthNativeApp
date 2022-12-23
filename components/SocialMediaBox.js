import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import Apple from '../assets/apple.svg'
import Google from '../assets/google.svg'
import Facebook from '../assets/facebook.svg'
import AppLoading from 'expo-app-loading';
import { 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  
 } from '@expo-google-fonts/poppins'
 import {useFonts} from "expo-font"
import { useNavigation } from '@react-navigation/native'
const SocialMediaBox = ({text}) => {
   const navigation = useNavigation()
  let [fontsLoad] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
   Poppins_600SemiBold,
   Poppins_700Bold
   })
if(!fontsLoad){
  return <AppLoading/> 
}
  return (
    <View style={{marginBottom : 20}}>
      <View>
                <Text style={{fontSize : 13, fontFamily : 'Poppins_400Regular', color : '#BDBDBD', textAlign : 'center'}}>Continue with social accounts</Text>
                <View style={{flexDirection : 'row', justifyContent : 'center',alignItems : 'center', marginVertical : 25}}>
                   <TouchableOpacity style={{backgroundColor : '#151515', padding :10, borderRadius : 40, marginRight : 20}}>
                    <Apple width={20} height={20} fill='red'/>
                   </TouchableOpacity>
                   <TouchableOpacity style={{backgroundColor : '#151515', padding :10, borderRadius : 40,marginRight : 20}}>
                    <Google width={20} height={20} fill='red'/>
                   </TouchableOpacity>
                   <TouchableOpacity style={{backgroundColor : '#151515', padding :10, borderRadius : 40}}>
                    <Facebook width={20} height={20} fill='red'/>
                   </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop : 10,flexDirection : 'row', justifyContent :'center', alignItems : 'center',}}>
                <Text style={{fontSize : 13,fontFamily : 'Poppins_400Regular', color : '#BDBDBD', textAlign : 'center'}}>Don't Have an account 
                </Text>
                <TouchableOpacity
                 onPress={()=> navigation.navigate(text)}
                style={{ marginLeft : 2,flexDirection : 'row', justifyContent :'center', alignItems : 'center', }}><Text style={{color : '#ffffff',margin : 0,padding : 0,textDecorationLine : 'underline',fontFamily : 'Poppins_500Medium',}}>{text} here</Text></TouchableOpacity>
            </View>
    </View>
  )
}

export default SocialMediaBox

const styles = StyleSheet.create({})