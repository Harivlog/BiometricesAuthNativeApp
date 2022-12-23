import {Keyboard, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import GoBack from '../assets/goBack.svg'
import { Heading } from '../components'
import { 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  
 } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
 import {useFonts} from "expo-font"
const TypingAuth = ({route,navigation}) => {
  const [Test, setTest] = useState('')
  const [handleTest, sethandleTest] = useState('')
//   let [fontsLoad] = useFonts({
//     Poppins_400Regular,
//     Poppins_500Medium,
//    Poppins_600SemiBold,
//    Poppins_700Bold
//    })
  
// if(!fontsLoad){
//   return <AppLoading/> 
// }
// console.log(handleTest)
let {generate } = route.params
generate = JSON.stringify(generate).replace(/"/g, '')
  const handleChangeText = (text) =>{
    if(generate.includes(text)){
      sethandleTest(text)
      console.log(text)
    }
  }
  
return (
    <View
    style={{paddingHorizontal : 20,paddingVertical : 20, width : '100%', height : '100%',backgroundColor : '#000000'}}
    >
      <TouchableOpacity 
       onPress={()=> {navigation.goBack()}}
       style={{backgroundColor : '#131313' ,width : 50, height : 50, borderRadius : 8,justifyContent : 'center', alignItems : 'center'}} 
      ><GoBack width={20} height={20} fill='#000000'/></TouchableOpacity>
      <Text>TypingAuth</Text>
      <StatusBar style={{backgroundColor : 'black', barStyle : 'dark-content'}}/>
      <View
        style={{flex : 1,justifyContent : 'space-between', }}
      >
        <Heading heading='Typing Authentication' title='Please type the text writen below in the box'/>
        
          <View
           style={{borderWidth : 1, borderColor : '#4B4FED', width : '100%' , borderRadius : 8, paddingVertical : 12,}}      
          >

          <Text style={{color : 'white', fontSize : 22,fontFamily : 'Poppins_600SemiBold',textAlign :'center'}}><Text style={{color : '#4B4FED'}}>{handleTest}</Text>{generate.slice(handleTest.length)}</Text>
          <TextInput
          autoFocus
          value={handleTest}
          onChangeText={(text)=>handleChangeText(text)}
          style={{ display: 'none' }}
/>
          </View>

        <TouchableOpacity
                onPress={()=> navigation.navigate('SuccessAuth')}
                style={{ width: '100%', borderRadius: 7, backgroundColor: '#4B4FED', paddingHorizontal: 40, paddingVertical: 14, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}
            ><Text style={{fontFamily : 'Poppins_600SemiBold', color: 'white', fontSize: 15 }}>Verify</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default TypingAuth

const styles = StyleSheet.create({})