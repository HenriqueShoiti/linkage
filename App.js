import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, image, SafeAreaView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles.js'
import SignInScreen from './src/screens/SignInScreen/';
import SignUpScreen from './src/screens/SignUpScreen/';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/';
import NewPasswordScreen from './src/screens/NewPasswordScreen/';
import Navigation from './src/navigation'
//creates home page, user's content wil go in here
function HomePage({navigation}){
  return(     
      <View>
        <Navigation/>

        
    
      </View>
  );
}


//creates a page for user profile, will let user edit their info and other settings
function ProfilePage({navigation}){
  return(
    <View style = {styles.header}>
      <Button
        title="Go to home page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>  
  );
}

  
const Stack = createStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name = "Home" component={HomePage}/>
      <Stack.Screen name = "Profile" component={ProfilePage}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (      
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>

      
    //  <StatusBar style="auto"/>
  );
}


