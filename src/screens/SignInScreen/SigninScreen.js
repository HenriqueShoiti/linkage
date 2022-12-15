import React, {useState} from 'react'
import { View, Text, Image, StyleSheet,useWindowDimensions, ScrollView, Alert, TextInput } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form';

import logo from "../../../assets/banana.jpg"
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'

const SigninScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState:{errors}, } = useForm();


    //make the function async as it will be asynchronous function
    const onSignInPressed = async data => {
                
        if(loading){
            return;
        }

        setLoading(true);
        
        try{
            //validate user then go home page
            const response = await Auth.signIn(data.username, data.password);
            //to debug
            console.log(response);
        } catch (err) {
            Alert.alert('Oops', err.message)
        }
        setLoading(false);
        //navigation.navigate('HomeScreen');
    };

    const onForgotPasswordPressed = () => {

        navigation.navigate('ForgotPasswordScreen')
    }
    
    const onSignUpPressed = () => {
        //jumps to the page to create a new account
        navigation.navigate('SignUpScreen')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={logo}
                    //make logo size 30% of the screen size
                    style={[styles.logo, { height: height * 0.3 }]} 
                    resizeMode="contain"    
                />

                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{required: "Username is required"}}
                />

                <CustomInput
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    control={control}
                    rules={{
                        required:'password is required',
                        minLength:{
                            value: 4,
                            message:'Password should be minimum 4 characters long'
                        },
                    }} />
                
                <CustomButton
                    text = {loading ? 'Loading....' : "Sign in"}
                    onPress={handleSubmit(onSignInPressed)}
                    type = "PRIMARY"
                />

                <CustomButton
                    text = "Forgot Password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />
               
               {/* buttons for sign in with social accounts*/}
               <SocialSignInButtons/>
               
                <CustomButton
                    text = "Don't have an account? Create one!"
                    onPress={onSignUpPressed}
                    type = "TERTIARY"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width:'60%',
        maxWidth: 400,
        maxHeight: 200,
    },

});
export default SigninScreen