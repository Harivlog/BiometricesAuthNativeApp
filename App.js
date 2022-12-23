import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './screens/Splash';
import styles from './styles/main.style'
import SvgImg from './assets/apple.svg'
import Login from './screens/Login';
import Register from './screens/Register';
import SelectAuth from './screens/SelectAuth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FingerPrintAuth, OtpAuth, SuccessAuth, TypingAuth } from './screens';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback,useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
const Stack = createNativeStackNavigator()
import {useFonts} from "expo-font"
import { 

  Poppins_500Medium,
  
  Poppins_600SemiBold,

  Poppins_700Bold,
  
 } from '@expo-google-fonts/poppins'
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
    })
    useEffect(() => {
      async function prepare() {
        await SplashScreen.preventAutoHideAsync();
      }
      prepare();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }
  return (
    
    <NavigationContainer 
    onReady={onLayoutRootView}
    >
       <Stack.Navigator 
       screenOptions={{
        headerShown: false
      }}
      // initialRouteName="Login"
       >
        <Stack.Screen 
         name="Splash" component={Splash}
         screenOptions={{
          headerShown: false
        }}
         />
          <Stack.Screen 
         name="Login" component={Login}
         screenOptions={{
          headerShown: false
        }}
         />
          <Stack.Screen 
         name="Register" component={Register}
         screenOptions={{
          headerShown: false
        }}
         />
           <Stack.Screen 
         name="SelectAuth" component={SelectAuth}
         screenOptions={{
          headerShown: false
        }}
         />
             <Stack.Screen 
         name="OtpAuth" component={OtpAuth}
         screenOptions={{
          headerShown: false
        }}
         />
               <Stack.Screen 
         name="FingerPrintAuth" component={FingerPrintAuth}
         screenOptions={{
          headerShown: false
        }}
         />
               <Stack.Screen 
         name="SuccessAuth" component={SuccessAuth}
         screenOptions={{
          headerShown: false
        }}
         />
               <Stack.Screen 
         name="TypingAuth" component={TypingAuth}
         screenOptions={{
          headerShown: false
        }}
         />
         
       </Stack.Navigator>
    </NavigationContainer>  
    );
  }
  
  {/* <Login/> */ }
  
  {/* <Splash/>*/ }
{/* <Register/> */ }
{/* <SelectAuth/> */ }

{/* <SvgImg height={200} width={200} /> */ }
    

