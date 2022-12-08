import react, {useState} from 'react'
import { View, Text, Image, StyleSheet,useWindowDimensions, ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/native';

import logo from "../../../assets/banana.jpg"
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import {Auth, signInButton} from 'aws-amplify'

const SigninScreen = () => {
    const { height } = useWindowDimensions()
    const navigation = useNavigation();
    const { username, setUsername } = useState('')
    const { password, setPassword } = useState('')

    //make the function async as it will be asynchronous function
    const onSignInPressed = async (data) => {
        //validate user then go home page
        const response = await Auth.signIn(data.username, data.password);
        //to debug
        console.log(response);

        //navigation.navigate('HomeScreen');
    }

    const onForgotPasswordPressed = () => {

        navigation.navigate('ForgotPasswordScreen')
    }
    const onSignUpPressed = () => {
        //jumps to the page to create a new account
        navigation.navigate('SignUpScreen')
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image source={logo}
                    //make logo size 30% of the screen size
                    style={[styles.logo, { height: height * 0.3 }]} />

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername} />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry />
                
                <CustomButton
                    text = "Sign in"
                    onPress={onSignInPressed}
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
        height: 100,
    },

});
export default SigninScreen