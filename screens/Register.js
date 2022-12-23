import { StyleSheet, TouchableOpacity, StatusBar, Image, TextInput, Text, View, ScrollView, ToastAndroid } from 'react-native'
import React,{useState} from 'react'

import Lock from '../assets/lock.svg'
import Img from '../assets/security-user.svg'
import Mail from '../assets/mail.svg'
import PaswordHide from '../assets/eye-slash.svg'

import { SocialMediaBox, LogoBox, Heading } from '../components'

import AppLoading from 'expo-app-loading';
import { 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  
 } from '@expo-google-fonts/poppins'
 import {useFonts} from "expo-font"

 const Register = ({navigation}) => {

    const [isFocused, setIsFocused] = useState(null)
  const [passwordShow, setPasswordShow] = useState(true)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [cnfmPassword, setCnfmPassword] = useState('')
      const handleRegister = ()=>{
         if((userName === '' && userEmail === '') || (userPassword === '' && cnfmPassword === '')){
          ToastAndroid.show('Please fill all the required Fields', ToastAndroid.TOP)
         }
         else{

           navigation.navigate('Login')
         }
      }
    return (
        <ScrollView style={{ paddingHorizontal: 20, width: '100%', height: '100%', backgroundColor : '#000000' }}>
            <StatusBar style={{ backgroundColor: 'black', barStyle: 'dark-content' }} />
            <LogoBox />
            <Heading heading='Register' title='Please Register Your account'/>
            <View style={{ marginTop: 20 }}>
                <Text style={{fontFamily : 'Poppins_500Medium', marginTop: 4, color: '#BDBDBD', lineHeight: 22, fontSize: 15, fontWeight: '500' }}>Name</Text>
                <View style={{ marginTop: 8, flexDirection: 'row', backgroundColor: '#151515', borderRadius: 7, paddingVertical: 12, paddingHorizontal: 8 }}>
           <Img width={25} height={25}
            fill={isFocused === 'name' ? '#ffffff' : '#747474'}

            style={{ marginRight: 7 }} />
          <TextInput
            style={{
              color: 'white', fontFamily: 'Poppins_400Regular', width: '100%'
            }}
            value={userName}
            onChangeText={setUserName}
            placeholder='Arya Stark'
            placeholderTextColor={isFocused === 'name' ? 'white' : '#BDBDBD'}
            onFocus={() => setIsFocused('name')}
            
            onBlur={() => setIsFocused(null)}
            autoComplete="off"
          />
        </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{fontFamily : 'Poppins_500Medium', marginTop: 4, color: '#BDBDBD', lineHeight: 22, fontSize: 15, fontWeight: '500' }}>Email</Text>
                <View style={{ marginTop: 8, flexDirection: 'row', backgroundColor: '#151515', borderRadius: 7, paddingVertical: 12, paddingHorizontal: 8 }}>
          <Mail width={25} height={25}
            fill={isFocused === 'email' ? '#ffffff' : '#747474'}

            style={{ marginRight: 7 }} />
          <TextInput
            style={{
              color: 'white', fontFamily: 'Poppins_400Regular', width: '100%'
            }}
            onChangeText={setUserEmail}
            value={userEmail}
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
              placeholder='Enter Password'
              onChangeText={setUserPassword}
            value={userPassword}
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

            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ marginTop: 4, color: '#BDBDBD', lineHeight: 22, fontSize: 15, fontFamily : 'Poppins_500Medium', }}>Confirm Password</Text>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#151515', borderRadius: 7, paddingVertical: 12, paddingHorizontal: 8 }}>
          <View style={{ flexDirection: 'row', }}>
            {/* <Image style={{width : 25, height : 25, marginRight : 7}} source={require('../assets/lokeing.png')}/> */}
            <Lock width={25} height={25}
              fill={isFocused === 'cnfrmpassword' ? '#ffffff' : '#747474'}

              style={{ marginRight: 7 }} />
            <TextInput
              style={{ color: 'white', fontFamily: 'Poppins_400Regular', width: '80%' }}
              placeholder='Enter Password'
              onChangeText={setCnfmPassword}
            value={cnfmPassword}
              // placeholderTextColor="#BDBDBD"
              placeholderTextColor={isFocused === 'cnfrmpassword' ? 'white' : '#BDBDBD'}
              onFocus={() => setIsFocused('cnfrmpassword')}
              onBlur={() => setIsFocused(null)}
              autoComplete='off'
              secureTextEntry={passwordShow}
            />
          </View>
          <TouchableOpacity
            onPress={()=> setPasswordShow(!passwordShow)}
          
          >
          <PaswordHide color="red" width={25} height={25} fill={isFocused === 'cnfrmpassword' ? '#ffffff' : '#747474'} />
          </TouchableOpacity>
        </View>

            </View>
            <TouchableOpacity
                onPress={()=> handleRegister()}
                style={{ width: '100%', borderRadius: 7, backgroundColor: '#4B4FED', paddingHorizontal: 40, paddingVertical: 14, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}
            ><Text style={{ color: 'white', fontSize: 15,fontFamily : 'Poppins_600SemiBold', }}>Register</Text></TouchableOpacity>
            <SocialMediaBox text="Login" />
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({})