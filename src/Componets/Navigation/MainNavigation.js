import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import Onbord from '../../Screen/Onbord/Onbord'
import { DarkTheme, LightTheme, ThemeProvider, initializeTheme } from '../ThemeContext'
import Splash from '../../Screen/Splash/Splash'
import OnBoard from '../../Screen/OnBoard/OnBoard'
import Login from '../../Screen/Login/Login'
import SignUp from '../../Screen/SignUp/SignUp'
import Phonenumber from '../../Screen/Phonenumber/Phonenumber'
import otpscreen from '../../Screen/OTP/otpscreen'
import BottomTabNavigation from '../BottomtabBar/BottomTabNavigation'
import ForgotPassword from '../../Screen/ForgotPassword/ForgotPassword'
import ItemDetailes from '../../Screen/ItemDetailes/ItemDetailes'
import ContactUs from '../../Screen/ContactUs/ContactUs'
import Profile from '../../Screen/Profile/Profile'
import Address from '../../Screen/Address/Address'
import FruitsDetails from '../../Screen/FruitsDetails/FruitsDetails'
import PakedDetails from '../../Screen/PakedDetails/PakedDetails'
import MilkDetails from '../../Screen/MilkDetails/MilkDetails'
import AddItem from '../../Screen/AddItem/AddItem'
import OrdersList from '../../Screen/OrdersList/OrdersList'
import InFormatiom from '../../Screen/InFormatiom/InFormatiom'
import PaymentMethods from '../../Screen/PaymentMethods/PaymentMethods'
import AddPaymentMethod from '../../Screen/AddPaymentMethod/AddPaymentMethod'
import Checkout from '../../Screen/Checkout/Checkout'
import demoscreen from '../../Screen/demoscreen'
import saveimge from '../../Screen/saveimge'



const stack = createStackNavigator()
global.url = 'https://www.demo603.amrithaa.com/Grocerycart/admin/public/api/'
const MainNavigation = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <NavigationContainer theme={theme === 'light' ? LightTheme : DarkTheme}>
        <stack.Navigator initialRouteName='Splash'>
          <stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Login" component={Login} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Phonenumber" component={Phonenumber} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="otpscreen" component={otpscreen} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Home" component={BottomTabNavigation} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="ItemDetailes" component={ItemDetailes} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Address" component={Address} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="FruitsDetails" component={FruitsDetails} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="PakedDetails" component={PakedDetails} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="MilkDetails" component={MilkDetails} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="AddItem" component={AddItem} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="OrdersList" component={OrdersList} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="InFormatiom" component={InFormatiom} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="AddPaymentMethod" component={AddPaymentMethod} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="demoscreen" component={demoscreen} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="saveimge" component={saveimge} options={{ headerShown: false }}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default MainNavigation

