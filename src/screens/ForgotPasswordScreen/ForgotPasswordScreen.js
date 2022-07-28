import react, {useState} from 'react';
import { View, Text, Image, StyleSheet,useWindowDimensions, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'

const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    const { username, setUsername } = useState('');
    
    const onSendPressed = () => {
        console.warn("sent")
    }

    const onResendCodePressed = () => {
        console.warn("code resent")
    }
    const onBackToSignIn = () => {
        console.warn("back to sign in")
        navigation.navigate('SignInScreen')
    }
    
    const onSignInPressed = () => {
        console.warn("sign up pressed")
    }

    return (
        <ScrollView>
            <View style={styles.root}>

                <Text style = {styles.title}>
                    Reset your Password
                </Text>

                <CustomInput
                    placeholder="Enter your username or email"
                    value={username}
                    setValue={setUsername} />
                
                <CustomButton
                    text = "Send"
                    onPress={onSendPressed}
                    type = "PRIMARY"
                />
                
                <CustomButton
                    text = "Back to Sign in"
                    onPress={onBackToSignIn}
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
export default ForgotPasswordScreen