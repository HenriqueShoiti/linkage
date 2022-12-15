import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignInScreen from '../screens/SignInScreen/';
import SignUpScreen from '../screens/SignUpScreen/';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/';
import NewPasswordScreen from '../screens/NewPasswordScreen/';
import HomeScreen from '../screens/HomeScreen'
import { Auth, Hub } from 'aws-amplify';



const Stack = createNativeStackNavigator();


const Navigation = () => {
    const[user,setUser] = useState(undefined);
    const checkUser = async () =>{
        try{
            const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
            setUser(authUser);
        }catch (err){
            setUser(null);
        }
    };

    //runs useEffect only on the first render
    useEffect(() => {
        checkUser();
    },[]);

    useEffect(() => {
        const listener = data=> {
            if (data.payload.event === 'signIn' || data.payload.event === 'signOut'){
                checkUser();
            }
        }
        checkUser();
    },[]);


    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                    
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />

                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;