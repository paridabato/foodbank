import 'react-native-gesture-handler';
import React , { Component } from 'react';
import { navigationRef } from './RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SplashScreen from './screens/SplashScreen';
import StepOne from './screens/OnBoarding/Step1';
import StepTwo from './screens/OnBoarding/Step2';
import StepThree from './screens/OnBoarding/Step3';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import LoginEmail from './screens/Auth/LoginEmail';
import Location from './screens/Location/Location';
import Main from './screens/Main';
import Category from './screens/Category';
import Store from './screens/Store';
import StoreDetails from './screens/StoreDetails';
import ProfileMain from './screens/Profile/Profile';
import ProfileOrders from './screens/Profile/Orders';
import OrderInfo from './screens/Profile/OrderInfo';
import RatePage from './screens/Profile/RatePage';
import UserInfo from './screens/Profile/UserInfo';
import UserPayment from './screens/Profile/UserPayment';
import Notifications from './screens/Profile/Notifications';
import Support from './screens/Profile/Support';
import Search from './screens/Search';

const Root = createStackNavigator();
const Home = createStackNavigator();
const Profile = createStackNavigator();
const OnBoarding = createMaterialTopTabNavigator();
const Seller = createStackNavigator();
const LoginStack = createStackNavigator();

function SellerScreen() {
  return(
    <Seller.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Seller.Screen name="Store" component={Store}/>
        <Seller.Screen name="StoreDetails" component={StoreDetails}/>
        <Seller.Screen name="OrderInfo" component={OrderInfo}/>
        <Seller.Screen name="RatePage" component={RatePage}/>
    </Seller.Navigator>
  )
}

function OnBoardingScreen() {
  return(
    <OnBoarding.Navigator
          tabBarOptions = {{
              showLabel: false,
              showIcon: false,
              style: { height: 0 }
          }}
    >
        <OnBoarding.Screen name="StepOne" component={StepOne}/>
        <OnBoarding.Screen name="StepTwo" component={StepTwo}/>
        <OnBoarding.Screen name="StepThree" component={StepThree}/>
    </OnBoarding.Navigator>
  )
}

function ProfileScreen() {
  return(
    <Profile.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Profile.Screen name="ProfileMain" component={ProfileMain}/>
        <Profile.Screen name="ProfileOrders" component={ProfileOrders}/>
        <Profile.Screen name="OrderInfo" component={OrderInfo}/>
        <Profile.Screen name="RatePage" component={RatePage}/>
        <Profile.Screen name="UserInfo" component={UserInfo}/>
        <Profile.Screen name="UserPayment" component={UserPayment}/>
        <Profile.Screen name="Notifications" component={Notifications}/> 
        <Profile.Screen name="Support" component={Support}/> 
    </Profile.Navigator>
  )
}

function LoginScreen() {
  return(
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
          <LoginStack.Screen name="Login" component={Login}/>
          <LoginStack.Screen name="Register" component={Register}/>
          <LoginStack.Screen name="LoginEmail" component={LoginEmail}/>
          <LoginStack.Screen name="Location" component={Location}/>
    </LoginStack.Navigator>
  )
}

function HomeScreen() {
  return(
    <Home.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
          <Home.Screen name="Main" component={Main}/>
          <Home.Screen name="Category" component={Category}/>
          <Home.Screen name="Search" component={Search} />
          <Home.Screen name="Location" component={Location}/>
    </Home.Navigator>
  )
}

export default class App extends Component {

  static navigationOptions = { header: null };

  render() {
    return (
      <NavigationContainer 
        ref={navigationRef} 
      >
        <Root.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
            <Root.Screen
              name="Onboarding"
              component={OnBoardingScreen}
              options={{
                headerShown: false
              }}
            />
            <Root.Screen
              name="Login"
              component={LoginScreen}
            />
            <Root.Screen
              name="Main"
              component={HomeScreen}
            />
            <Root.Screen
              name="Store"
              component={SellerScreen}
            />
            <Root.Screen
              name="Profile"
              component={ProfileScreen}
            />
        </Root.Navigator>
      </NavigationContainer>
    );
  }
}