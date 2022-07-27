import react, {useState} from 'react'
import { View, Text, Image, StyleSheet,useWindowDimensions, ScrollView } from 'react-native'
import logo from "../../../assets/banana.jpg"
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import SignUpScreen from '../../screens/SignUpScreen'
import SocialSignInButtons from '../../components/SocialSignInButtons'

const SigninScreen = () => {
    const { height } = useWindowDimensions()
    const { username, setUsername } = useState('')
    const { password, setPassword } = useState('')
    const onSignInPressed = () => {
        console.warn("Sign in")
    }

    const onForgotPasswordPressed = () => {
        console.warn("forgot password")
    }
    const onSignInGoogle = () => {
        console.warn("sign in with google")
    }
    const onSignInApple = () => {
        console.warn("sign in with apple")
    }
    const onSignUpPressed = () => {
        console.warn("sign up pressed")
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