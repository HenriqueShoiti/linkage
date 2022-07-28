import react, {useState} from 'react'
import { View, Text, Image, StyleSheet,useWindowDimensions, ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/core'

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'

const SignUpScreen = () => {
    const { height } = useWindowDimensions();
    const { username, setUsername } = useState('');
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { passwordRepeat, setPasswordRepeat} = useState('');
    const navigation = useNavigation();


    const onRegisterPressed = () => {
        console.warn("registered")
        //jump to the page where we confirm the email from user

        navigation.navigate('ConfirmEmailScreen')

    }

    const onTermsOfUsePressed = () => {
        console.warn("terms of use")
        //probably jump to a page on web where info are stored
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("privacy policy")
        //probably jump to a page on web where info are stored
    }
    
    const onSignInPressed = () => {
        console.warn("sign up pressed")
        //looks like the user has an account so jump to sign in page
        navigation.navigate('SignInScreen')
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

                {/*buttons for social sign in */}
                <SocialSignInButtons/>
                
                <CustomButton
                    text = "Have an account? Sign in"
                    onPress={onSignInPressed}
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