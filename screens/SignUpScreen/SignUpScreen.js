import react, {useState} from 'react'
import { View, Text, Image, StyleSheet,useWindowDimensions, ScrollView } from 'react-native'

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'

const SignUpScreen = () => {
    const { height } = useWindowDimensions();
    const { username, setUsername } = useState('');
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { passwordRepeat, setPasswordRepeat} = useState('');

    const onRegisterPressed = () => {
        console.warn("registered")
    }

    const onTermsOfUsePressed = () => {
        console.warn("terms of use")
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("privacy policy")
    }
    const onSignInGoogle = () => {
        console.warn("sign in with Google")
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

                <Text style = {styles.title}>
                    Create an account
                </Text>

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername} />
                
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}/>

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry />
                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry />

                
                <CustomButton
                    text = "Register"
                    onPress={onRegisterPressed}
                    type = "PRIMARY"
                />
                <Text style = {styles.text}>
                    By registering, you confirm that you accept our
                    <Text style = {styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and
                    <Text style = {styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text> 
                </Text>

                <CustomButton
                    text = "Sign in with Google"
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton
                    text = "Sign in with Apple"
                    onPress={onSignInApple}
                    bgColor="#e3e3e3"
                    fgColor="#363636"
                    
                />
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
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,


    },
    link:{
        color: '#FDB075'
    },

});
export default SignUpScreen