import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Heading, LogoBox } from '../components'
import Lock from '../assets/lock-circle.svg'
import Check from '../assets/check.svg'
import FingerPrint from '../assets/fingerprint.svg'
import Type from '../assets/img.svg'
import AppLoading from 'expo-app-loading';
// import sentenceGenerator from 'sentence-generator';
import { Sentence } from '../sentences/content'
import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,

} from '@expo-google-fonts/poppins'
import { useFonts } from "expo-font"
import { Content } from '../sentences/content'

const SelectAuth = ({ navigation }) => {
    const [Selected, setSelected] = useState(null)
    // const [Active, setActive] = useState(false)
    const [OtpCodes, setOtpCode] = useState(Math.floor(100000 + Math.random() * 900000))
    // let [fontsLoad] = useFonts({
    //     Poppins_400Regular,
    //     Poppins_500Medium,
    //     Poppins_600SemiBold,
    //     Poppins_700Bold
    // })
    
    // if (!fontsLoad) {
    //     return <AppLoading />
    // }
    const generteOtp = ( )=>{
        setSelected('button1')
    }
    
    const generateSnts = ()=>{
        setSelected('button3')
    }

    // continue funtion that identify which Auth is selected
    const selectAuthe = ()=>{
        if(Selected === 'button1'){
            navigation.navigate('OtpAuth',{OtpCode : OtpCodes})
            
        }
        else if(Selected === 'button2'){
            navigation.navigate('FingerPrintAuth')
        }
        else{
            const generate = Sentence[Math.floor( Math.random() * Sentence.length)]
        navigation.navigate('TypingAuth',{generate : generate})

        }
    }
    return (
        <View style={{ width: '100%', height: '100%', paddingHorizontal: 20, backgroundColor: '#000000' }}>
            <StatusBar style={{ backgroundColor: 'black', barStyle: 'dark-content' }} />
            <LogoBox />
            <View style={{ flex: 1, justifyContent: 'space-between', }}>

                <Heading heading='Select Authentication' title='Please select authentication type' />
                <View style={{}}>
                    <TouchableOpacity
                        onPress={() => generteOtp()
                        }
                        //  onfocus={}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Selected === 'button1' ? '#4B4FED' : '#151515', marginBottom: 12, borderRadius: 7, paddingVertical: 12, paddingHorizontal: 8, alignItems: 'center' }}>
                        <View
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Lock width={35} height={33} fill='#ffffff' style={{ marginRight: 7 }} />
                            <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#ffffff', flexDirection: 'row', fontWeight: '600' }}>OTP</Text>
                        </View>
                        {
                            Selected === 'button1' &&
                            <Check width={25} height={25} />
                        }
                    </TouchableOpacity

                    >
                    <TouchableOpacity
                        onPress={() => setSelected('button2')}

                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Selected==='button2' ? '#4B4FED' : '#151515' ,  marginBottom: 12, borderRadius: 7, paddingVertical: 12, paddingHorizontal: 8, alignItems: 'center' }}>
                        {/* <Image style={{width : 25, height : 25, marginRight : 7}} source={require('../assets/lokeing.png')}/> */}

                        <View
                            style={{ flexDirection: 'row', alignItems: 'center' }}

                        >
                            <FingerPrint width={35} height={33} fill='#ffffff' style={{ marginRight: 7 }} />
                            <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#ffffff', flexDirection: 'row', fontWeight: '600' }}>Fingerprint</Text>
                        </View>
                        {
                            Selected === 'button2' &&
                            <Check width={25} height={25} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => generateSnts()}

                        style={{ flexDirection: 'row',justifyContent : 'space-between',alignItems : 'center', backgroundColor: Selected==='button3' ? '#4B4FED' : '#151515', marginBottom: 12, borderRadius: 7, paddingVertical: 12, paddingHorizontal: 8, alignItems: 'center' }}>
                        {/* <Image style={{width : 25, height : 25, marginRight : 7}} source={require('../assets/lokeing.png')}/> */}
                        <View
                            style={{ flexDirection: 'row', alignItems: 'center' }}

                        >
                        <Type width={35} height={33} fill='#ffffff' style={{ marginRight: 7 }} />
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#ffffff', flexDirection: 'row', fontWeight: '600' }}>Typing Authentication</Text>
                        </View>
                        {
                            Selected === 'button3' &&
                            <Check width={25} height={25} />
                        }
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> selectAuthe()}
                        style={{ fontFamily: 'Poppins_600SemiBold', width: '100%', borderRadius: 7, backgroundColor: '#4B4FED', paddingHorizontal: 40, paddingVertical: 14, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}
                        disabled={Selected == null}
                    ><Text style={{ color: 'white', fontSize: 15 }}>Continue</Text></TouchableOpacity>
                </View>

            </View>
            {/* <View style={{flex : 2,backgroundColor :'green'}}></View> */}
        </View>
    )
}

export default SelectAuth

const styles = StyleSheet.create({})