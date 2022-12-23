import { StyleSheet,ToastAndroid, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Heading, LogoBox, SocialMediaBox } from '../components'
import Lock from '../assets/lock.svg'
import PaswordHide from '../assets/eye-slash.svg'
import Mail from '../assets/mail.svg'

import AppLoading from 'expo-app-loading';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,

} from '@expo-google-fonts/poppins'
import { useFonts } from "expo-font"
const Login = ({ navigation }) => {

  const [isFocused, setIsFocused] = useState(null)
  const [passwordShow, setPasswordShow] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [loginDumyUser, setLoginDumyUser] = useState({
    user : 'abc@gmail.com',
    password : '123'
  }) 
  
  const handleLogin = ()=>{
    if(userEmail == loginDumyUser.user && userPassword == loginDumyUser.password){
      navigation.navigate('SelectAuth')
          
    }
    else{
      ToastAndroid.show("A user name or Password is incorrect", ToastAndroid.CENTER);
    }
    
  }
  return (

    <View style={{ paddingHorizontal: 20, width: '100%', height: '100%', backgroundColor: '#000000' }}>
      <StatusBar style={{ backgroundColor: 'black', barStyle: 'dark-content' }} />
      <LogoBox />
      <Heading heading='Login' title='Please Log in to your account' />
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'Poppins_500Medium', marginTop: 4, color: '#BDBDBD', lineHeight: 22, fontSize: 15, fontWeight: '500' }}>Email</Text>
        <View style={{ marginTop: 8, flexDirection: 'row', backgroundColor: '#151515', borderRadius: 7, paddingVertical: 12, paddingHorizontal: 8 }}>
          <Mail width={25} height={25}
            
            fill={isFocused === 'email' ? '#ffffff' : '#747474'}
            style={{ marginRight: 7 }} />
          <TextInput
            style={{
              color: 'white', fontFamily: 'Poppins_400Regular', width: '100%'
            }}
            value={userEmail}
            onChangeText={setUserEmail}
            placeholder='aryastark@mail.com'
            placeholderTextColor={isFocused === 'email' ? 'white' : '#BDBDBD'}
            onFocus={() => setIsFocused('email')}
            onBlur={() => setIsFocused(null)}
            autoComplete="off"
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'Poppins_500Medium', marginTop: 4, color: '#BDBDBD', lineHeight: 22, fontSize: 15, fontWeight: '500' }}>Password</Text>
        <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#151515', borderRadius: 7, paddingVertical: 12, paddingHorizontal: 8 }}>
          <View style={{ flexDirection: 'row', }}>
            {/* <Image style={{width : 25, height : 25, marginRight : 7}} source={require('../assets/lokeing.png')}/> */}
            <Lock width={25} height={25}
              fill={isFocused === 'password' ? '#ffffff' : '#747474'}

              style={{ marginRight: 7 }} />
            <TextInput
             
             style={{ color: 'white', fontFamily: 'Poppins_400Regular', width: '80%' }}
             value={userPassword}
             onChangeText={setUserPassword}
             placeholder='Enter Password'
              // placeholderTextColor="#BDBDBD"
              placeholderTextColor={isFocused === 'password' ? 'white' : '#BDBDBD'}
              onFocus={() => setIsFocused('password')}
              onBlur={() => setIsFocused(null)}
              autoComplete='off'
              secureTextEntry={passwordShow}
            />
          </View>
          <TouchableOpacity
            onPress={()=> setPasswordShow(!passwordShow)}
          >
          <PaswordHide color="red" width={25} height={25} fill={isFocused === 'password' ? '#ffffff' : '#747474'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 15 }}>

          <Text style={{ fontFamily: 'Poppins_500Medium', marginTop: 4, color: '#BDBDBD', lineHeight: 22, fontSize: 15, fontWeight: '400' }}>Forget Password</Text>

        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> handleLogin() }
          style={{ width: '100%', borderRadius: 7, backgroundColor: '#4B4FED', paddingHorizontal: 40, paddingVertical: 12, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}
          disabled={userEmail === '' || userPassword === ''}
          onBlur={true}
        ><Text style={{ fontFamily: 'Poppins_600SemiBold', color: 'white', fontSize: 15 }}>Login</Text></TouchableOpacity>
        <SocialMediaBox text="Register" />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})